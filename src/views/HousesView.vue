<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import House from "@/components/House.vue";

const { isPending, isError, data } = useQuery({
  queryKey: ['houses'],
  queryFn: async () => {
    const response = await fetch('https://wizard-world-api.herokuapp.com/Houses');
    return response.json();
  }
});
</script>

<template>
  <div v-if="isPending" class="msg">Loading houses...</div>
  <div v-else-if="isError" class="msg">Unable to load houses,<br>please try again later.</div>
  <div v-else class="grid">
    <House v-for="house in data" :key="house.id" :house="house" />
  </div>
</template>
