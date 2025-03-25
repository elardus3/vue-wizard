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

const sort = ref(false);
const text = ref('');

const elixirs = computed(() => {
  console.log(`computed() sort: ${sort.value}`);
  let result = [];
  if (data?.value) {
    if (sort?.value) {
      result = data.value.slice();
      result.sort((a: ElixirT, b: ElixirT) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
    } else {
      result = text.value.length >= 1
        ? data.value.filter((elixir: ElixirT) => elixir.name.toUpperCase().includes(text.value.toUpperCase()))
        : data.value.slice();
    }
  }
  return result;
});

function onFilter(ev: Event) {
  text.value = (<HTMLInputElement>ev.target).value;
}

function onSort() {
  sort.value = true;
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
    <p class="filter">
      <button @click="onSort">Sort</button>&nbsp;
      <input @input="onFilter($event)" placeholder="Search...">
    </p>
    <div class="grid">
      <Elixir v-for="elixir in elixirs" :key="elixir.id" :elixir="elixir" />
    </div>
  </div>
</template>

<style scoped>
input:focus { width: 88% }
</style>
