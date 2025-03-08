<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const { isPending, isError, data, error } = useQuery({
  queryKey: ['spells'],
  queryFn: async () => {
    const response = await fetch('https://wizard-world-api.herokuapp.com/Spells');
    const json = response.json();
    console.log('json');
    console.log(json);
    return json;
    // return response.json();  // TODO after card slots
  }
});
</script>

<template>
  <div v-if="isPending" class="msg">Loading spells...</div>
  <div v-else-if="isError" class="msg">Error: {{ error?.message }}</div>
  <div v-else>
    <h1>{{ data.length }} Spells</h1>
    <ul>
      <li v-for="spell in data" :key="spell.id">
        {{ spell.name }}
      </li>
    </ul>
  </div>
</template>
