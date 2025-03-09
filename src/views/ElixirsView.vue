<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { ref } from "vue";
import Elixir from "@/components/Elixir.vue";

const { isPending, isError, data } = useQuery({
  queryKey: ['elixirs'],
  queryFn: async () => {
    const response = await fetch('https://wizard-world-api.herokuapp.com/Elixirs');
    return response.json();
  }
});

const elixirs = ref([]);

// TODO use computed() instead
const iid = setInterval(() => {
  if (data?.value) {
    clearInterval(iid);
    elixirs.value = data?.value.slice();
  }
}, 10);

function onFilter(ev: InputEvent) {
  const text = (<HTMLInputElement>ev.target).value;
  elixirs.value = data?.value.filter(elixir => elixir.name.toUpperCase().includes(text.toUpperCase()));
}
</script>

<template>
  <div v-if="isPending" class="msg">Loading elixirs...</div>
  <div v-else-if="isError" class="msg">Unable to load elixirs,<br>please try again later.</div>
  <div v-else>
    <p class="filter"><input @input="onFilter"></p>
    <div class="grid">
      <Elixir v-for="elixir in elixirs" :key="elixir.id" :elixir="elixir" />
    </div>
  </div>
</template>
