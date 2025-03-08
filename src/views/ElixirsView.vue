<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { ref } from "vue";
import Elixir from "@/components/Elixir.vue";

const { isPending, isError, data, error } = useQuery({
  queryKey: ['elixirs'],
  queryFn: async () => {
    const response = await fetch('https://wizard-world-api.herokuapp.com/Elixirs');
    const promise = response.json();
    setTimeout(() => elixirs.value = data?.value.slice(), 1000);
    return promise;
  }
});

const elixirs = ref([]);

function onFilter(ev: InputEvent) {
  const text = (<HTMLInputElement>ev.target).value;
  elixirs.value = data?.value.filter(elixir => elixir.name.toUpperCase().includes(text.toUpperCase()));
}
</script>

<template>
  <div v-if="isPending" class="msg">Loading elixirs...</div>
  <div v-else-if="isError" class="msg">Error: {{ error?.message }}</div>
  <div v-else>
    <p class="filter"><input @input="onFilter"></p>
    <div class="grid">
      <Elixir v-for="elixir in elixirs" :key="elixir.id" :elixir="elixir" />
    </div>
  </div>
</template>

<style scoped>
.filter {
  margin-right: 1rem;
  text-align: right;

  input {
    background: #aaa;
    border-width: 0;
  }
}
</style>
