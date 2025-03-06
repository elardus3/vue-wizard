<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Menu />
    </div>
  </header>

  <RouterView />
</template>
