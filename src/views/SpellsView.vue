<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { ref } from "vue";
import Spell from "@/components/Spell.vue";

const { isPending, isError, data } = useQuery({
  queryKey: ['spells'],
  queryFn: async () => {
    const response = await fetch('https://wizard-world-api.herokuapp.com/Spells');
    return response.json();
  }
});

const spells = ref([]);

const iid = setInterval(() => {
  if (data?.value) {
    clearInterval(iid);
    spells.value = data?.value.slice();
  }
}, 100);

function onFilter(ev: InputEvent) {
  const text = (<HTMLInputElement>ev.target).value;
  spells.value = data?.value.filter(spell => spell.name.toUpperCase().includes(text.toUpperCase()));
}
</script>

<template>
  <div v-if="isPending" class="msg">Loading spells...</div>
  <div v-else-if="isError" class="msg">Unable to load spells,<br>please try again later.</div>
  <div v-else>
    <p class="filter"><input @input="onFilter"></p>
    <div class="grid">
      <Spell v-for="spell in spells" :key="spell.id" :spell="spell" />
    </div>
  </div>
</template>
