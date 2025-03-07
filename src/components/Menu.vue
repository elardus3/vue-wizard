<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Houses</RouterLink>
    <RouterLink to="/elixirs">Elixirs</RouterLink>
    <RouterLink to="/spells">Spells</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  margin-top: 1rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>
