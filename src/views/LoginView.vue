<script setup lang="ts">
import { useLoginStore } from "@/stores/login.ts";

const login = useLoginStore();

function onLoginAdmin() {
  login.login('a', 'a');
}

function onLoginExplorer() {
  login.login('e', 'e');
}

function onLogout() {
  login.logout();
}
</script>

<template>
  <div v-if="!login.loggedIn">
    <p><button @click="onLoginExplorer">Explorer Login</button></p>
    <p><button @click="onLoginAdmin">Admin Login</button></p>
  </div>
  <div v-if="login.loggedIn">
    <p>Logged in as {{ login.admin ? 'Admin' : 'Explorer' }}</p>
    <p><button @click="onLogout">Logout</button></p>
  </div>
</template>

<style scoped>
div {
  margin-top: 2rem;
  text-align: center;
}
p { margin-bottom: 0.5rem }
</style>
