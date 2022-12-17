<script lang="ts">
import {UserStore} from "@/store";
import {storeToRefs} from "pinia";
import { ref } from 'vue';

export default {
  setup() {
    const loginStore = UserStore();
    const email = ref('');
    const password = ref('');
    const { getIsLoggedIn } = storeToRefs(loginStore);

    function handleSubmit() {
      console.log("in handle submit!!!");
      console.log("email is " + email.value);

      loginStore.createLogin(email.value, password.value);
    }
    console.log("in aboutVuiewisLoggedIn? " + getIsLoggedIn.value);
    return { email, password, getIsLoggedIn, handleSubmit}
  }
}

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  <form @submit.prevent = "handleSubmit">
    <label for="email">
      Email:
    </label>
    <input v-model="email" name="email" type="text">
    <label for="password">
      Password:
    </label>
    <input v-model="password" name="password" type="text">
    <p v-if="status === 400">
      Invalid login info.
    </p>
    <button>
      Login
    </button>
  </form>
  <span> Logged in? {{password}}</span>
  <p v-if="getIsLoggedIn"> is logged in!</p>
  <p v-else>Not logged in.</p>
  </div>
</template>



<style scoped>
</style>