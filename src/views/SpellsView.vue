<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { computed, ref } from "vue";
import Spell from "@/components/Spell.vue";

const { isPending, isError, data } = useQuery({
  queryKey: ['spells'],
  queryFn: async () => {
    const response = await fetch('https://wizard-world-api.herokuapp.com/Spells');
    return response.json();
  }
});

const text = ref('');

const spells = computed(() => {
  let result = [];
  if (data?.value) {
    if (text.value.length >= 1) {
      result = data?.value.filter((spell: SpellT) => spell.name.toUpperCase().includes(text.value.toUpperCase()));
    } else {
      result = data?.value.slice();
    }
  }
  return result;
});

function onFilter(ev: Event) {
  text.value = (<HTMLInputElement>ev.target).value;
}

export interface SpellT {
  id: string;
  name: string;
  effect: string;
  incantation: string;
  type: string;
  light: string;
  creator: string;
}
</script>

<template>
  <div v-if="isPending" class="msg">Loading spells...</div>
  <div v-else-if="isError" class="msg">Unable to load spells,<br>please try again later.</div>
  <div v-else>
    <p class="filter"><input @input="onFilter($event)" placeholder="Search..."></p>
    <div class="grid">
      <Spell v-for="spell in spells" :key="spell.id" :spell="spell" />
    </div>
  </div>
</template>
