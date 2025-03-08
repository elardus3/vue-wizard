<script setup lang="ts">
defineProps({
  house: Object
})
</script>

<template>
  <article>
    <h2>{{ house?.name }}</h2>
    <div class="group label">Founder</div>
    <div>{{ house?.founder }}</div>
    <div class="group label">Heads</div>
    <div v-for="head in house?.heads" :key="head.id">
      {{ head.firstName }} {{ head.lastName }}
    </div>
    <div class="group label">Common room</div>
    <div>{{ house?.commonRoom }}</div>
    <div class="group">
      <span class="label">Animal</span>&nbsp;
      <span>{{ house?.animal }}</span>
    </div>
    <div class="group">
      <span class="label">Element</span>&nbsp;
      <span>{{ house?.element }}</span>
    </div>
    <div class="group label">Ghost</div>
    <div>{{ house?.ghost }}</div>
    <div class="group label">House colors</div>
    <div>{{ house?.houseColours }}</div>
    <div class="group">
      <span class="label">Traits</span>&nbsp;
      <span v-for="trait in house?.traits" :key="trait.id">{{ trait.name }}&ensp;</span>
    </div>
  </article>
</template>
