<script setup lang="ts">
defineProps({
  elixir: Object
})
</script>

<template>
  <article>
    <h3>{{ elixir?.name }}</h3>
    <div v-if="elixir?.effect" class="group">
      <span class="label">Effect</span>&nbsp;
      <span>{{ elixir?.effect }}</span>
    </div>
    <div v-if="elixir?.difficulty" class="group">
      <span class="label">Difficulty</span>&nbsp;
      <span>{{ elixir?.difficulty }}</span>
    </div>
    <div v-if="elixir?.manufacturer" class="group">
      <span class="label">Manufacturer</span>&nbsp;
      <span>{{ elixir?.manufacturer }}</span>
    </div>
    <div v-if="elixir?.characteristics" class="group">
      <span class="label">Characteristics</span>&nbsp;
      <span>{{ elixir?.characteristics }}</span>
    </div>
    <div v-if="elixir?.time" class="group">
      <span class="label">Time</span>&nbsp;
      <span>{{ elixir?.time }}</span>
    </div>
    <div v-if="elixir?.sideEffects" class="group">
      <span class="label">Side effects</span>&nbsp;
      <span>{{ elixir?.sideEffects }}</span>
    </div>
    <div v-if="elixir?.ingredients.length > 0">
      <div class="group label">Ingredients</div>
      <div v-for="ingredient in elixir?.ingredients" :key="ingredient.id">
        {{ ingredient.name }}
      </div>
    </div>
    <div v-if="elixir?.inventors.length > 0">
      <div class="group label">Inventors</div>
      <div v-for="inventor in elixir?.inventors" :key="inventor.id">
        {{ inventor.firstName }} {{ inventor.lastName }}
      </div>
    </div>
  </article>
</template>
