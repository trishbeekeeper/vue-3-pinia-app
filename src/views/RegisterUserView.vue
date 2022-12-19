<script lang="ts">
import {UserStore} from "@/store";
import {storeToRefs} from "pinia";
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

export default {
  setup() {
    const userStore = UserStore();
    const email = ref('');
    const password = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const { getIsUserCreateOK } = storeToRefs(userStore);
    const { getFirstName } = storeToRefs(userStore);
    const { getLastName } = storeToRefs(userStore);

    function handleSubmit() {
      //console.log("in handle submit!!!");
      //console.log("email is " + email.value);

      userStore.createUser(firstName.value, lastName.value, email.value, password.value);
      password.value = "";
    }
    //console.log("in aboutVuiewisLoggedIn? " + getIsUserCreateOK.value);
    
    return { email, password, firstName, getIsUserCreateOK, getFirstName, getLastName, lastName, handleSubmit}
  }

}

</script>

<template>
  <div class="user">
    <h1>Welcome new user!</h1>
    <h2> Please fill in to create a new User for access.</h2>
  <form @submit.prevent = "handleSubmit">
    <label for="firstName">
      First Name:
    </label>
    <input v-model="firstName" name="firstName" type="text"><br>
    <label for="lastName">
      Last Name:
    </label>
    <input v-model="lastName" name="lastName" type="text"><br>
    <label for="email">
      Email (this will be your login):
    </label>
    <input v-model="email" name="email" type="text"><br>
    <label for="password">
      Password:
    </label>
    <input v-model="password" name="password" type="text"><br>
    <button>
      Go!
    </button>
  </form>
  
  </div>
</template>

<style scoped>
</style>