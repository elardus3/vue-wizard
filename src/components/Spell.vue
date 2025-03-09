<script setup lang="ts">
defineProps({
  spell: Object
})
</script>

<template>
  <article>
    <h3>{{ spell?.name }}</h3>
    <div v-if="spell?.effect" class="group">
      <span class="label">Effect</span>&nbsp;
      <span>{{ spell?.effect }}</span>
    </div>
    <div v-if="spell?.incantation" class="group">
      <span class="label">Incantation</span>&nbsp;
      <span>{{ spell?.incantation }}</span>
    </div>
    <div v-if="spell?.type" class="group">
      <span class="label">Type</span>&nbsp;
      <span>{{ spell?.type }}</span>
    </div>
    <div v-if="spell?.light" class="group">
      <span class="label">Light</span>&nbsp;
      <span>{{ spell?.light }}</span>
    </div>
    <div v-if="spell?.creator" class="group">
      <span class="label">Creator</span>&nbsp;
      <span>{{ spell?.creator }}</span>
    </div>
  </article>
</template>
