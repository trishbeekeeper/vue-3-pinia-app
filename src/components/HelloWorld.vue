<script setup lang="ts">
defineProps({
  msg: {
    type: String,
  }
})
</script>

<template>
  <div class="greetings">
    <br>
    <h1 class="green">{{ msg }}</h1>
    <br>
    <h6>OK, deep breath....and now be a grown-up....</h6>
    <h3>
      This was made with 
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> as the framework.

      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a> 
      was used for management of the state of my variables, and, last but 
      not least, it was written with
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">Typescript</a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
