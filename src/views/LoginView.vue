<script lang="ts">
import {UserStore} from "@/store";
import {storeToRefs} from "pinia";
import { ref } from 'vue';

export default {
  setup() {
    const userStore = UserStore();
    const email = ref('');
    const password = ref('');
    const { getIsLoggedIn } = storeToRefs(userStore);
    const { getFirstName } = storeToRefs(userStore);
    const { getLastName } = storeToRefs(userStore);

    function handleSubmit() {
      //console.log("in handle submit!!!");
      //console.log("email is " + email.value);

      userStore.createLogin(email.value, password.value);
    }
    //console.log("in aboutVuiewisLoggedIn? " + getIsLoggedIn.value);
    return { email, password, getIsLoggedIn, getFirstName, getLastName, handleSubmit}
  }
}

</script>

<template>
  <div class="login">
    <h1>Welcome! Please log in.</h1>
  <form @submit.prevent = "handleSubmit">
    <label for="email">
      Email:
    </label>
    <input v-model="email" name="email" type="text"><br>
    <label for="password">
      Password:
    </label>
    <input v-model="password" name="password" type="text">
    <button>
      Login
    </button>
  </form>

  </div>
</template>



<style scoped>
</style>