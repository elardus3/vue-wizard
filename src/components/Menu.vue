<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useLoginStore } from "@/stores/login.ts";

const login = useLoginStore();
</script>

<template>
  <nav>
    <RouterLink to="/">{{ login.loggedIn ? 'Logout' : 'Login' }}</RouterLink>
    <RouterLink to="/houses">Houses</RouterLink>
    <RouterLink v-if="login.loggedIn" to="/spells">Spells</RouterLink>
    <RouterLink v-if="login.admin" to="/elixirs">Elixirs</RouterLink>
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
  padding: 0 0.5rem;
}
@media (min-width: 40rem) {
  nav a { padding: 0 1rem }
}
</style>
