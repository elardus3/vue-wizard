<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { computed, ref } from "vue";
import Elixir from "@/components/Elixir.vue";

const { isPending, isError, data } = useQuery({
  queryKey: ['elixirs'],
  queryFn: async () => {
    const response = await fetch('https://wizard-world-api.herokuapp.com/Elixirs');
    return response.json();
  }
});

const text = ref('');

const elixirs = computed(() => {
  let result = [];
  if (data?.value) {
    if (text.value.length >= 1) {
      result = data?.value.filter((elixir: ElixirT) => elixir.name.toUpperCase().includes(text.value.toUpperCase()));
    } else {
      result = data?.value.slice();
    }
  }
  return result;
});

function onFilter(ev: Event) {
  text.value = (<HTMLInputElement>ev.target).value;
}

export interface ElixirT {
  id: string;
  name: string;
  effect: string;
  difficulty: string;
  manufacturer: string;
  characteristics: string;
  time: string;
  sideEffects: string;
  ingredients: [];
  inventors: [];
}
</script>

<template>
  <div v-if="isPending" class="msg">Loading elixirs...</div>
  <div v-else-if="isError" class="msg">Unable to load elixirs,<br>please try again later.</div>
  <div v-else>
    <p class="filter"><input @input="onFilter($event)" placeholder="Search..."></p>
    <div class="grid">
      <Elixir v-for="elixir in elixirs" :key="elixir.id" :elixir="elixir" />
    </div>
  </div>
</template>
