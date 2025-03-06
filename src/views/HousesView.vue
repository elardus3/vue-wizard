<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const { isPending, isError, data, error } = useQuery({
  queryKey: ['houses'],
  queryFn: async () => {
    const response = await fetch('https://wizard-world-api.herokuapp.com/Houses');
    const json = response.json();
    console.log('json');
    console.log(json);
    return json;
    // return response.json();  // TODO after card slots
  },
});
</script>

<template>
  <div v-if="isPending">Loading houses...</div>
  <div v-else-if="isError">Error: {{ error?.message }}</div>
  <div v-else>
    <h1>{{ data.length }} Houses</h1>
    <ul>
      <li v-for="house in data" :key="house.id">
        {{ house.name }}
      </li>
    </ul>
  </div>
</template>
