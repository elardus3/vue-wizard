<script setup lang="ts">
defineProps({
  house: Object
})
</script>

<template>
  <article>
    <h2>{{ house?.name }}</h2>
    <p class="label">Founder</p>
    <p>{{ house?.founder }}</p>
    <p class="label">Heads</p>
    <p v-for="head in house?.heads" :key="head.id">
      {{ head.firstName }} {{ head.lastName }}
    </p>
    <p class="label">Common room</p>
    <p>{{ house?.commonRoom }}</p>
    <p class="label">Animal</p>
    <p>{{ house?.animal }}</p>
    <p class="label">Element</p>
    <p>{{ house?.element }}</p>
    <p class="label">Ghost</p>
    <p>{{ house?.ghost }}</p>
    <p class="label">House colors</p>
    <p>{{ house?.houseColours }}</p>
    <p class="label">Traits</p>
    <p v-for="trait in house?.traits" :key="trait.id">{{ trait.name }}</p>
  </article>
</template>
