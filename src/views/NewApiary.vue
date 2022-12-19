<script lang="ts">
import {ApiaryStore, UserStore} from "@/store";
import {storeToRefs} from "pinia";
import { ref } from 'vue';

export default {
  setup() {
    const apiaryStore = ApiaryStore();
    const apiaryName = ref('');
    const apiaryZip = ref('');
    const userStore = UserStore();
    const { getUserId } = storeToRefs(userStore);


    function handleSubmit() {
      //console.log("in handle submit!!!");
      //console.log("email is " + email.value);

      apiaryStore.createApiary(apiaryName.value, apiaryZip.value, getUserId.value);
    }
    //console.log("in aboutVuiewisLoggedIn? " + getIsUserCreateOK.value);
    
    return { apiaryName, apiaryZip, handleSubmit}
  }

}

</script>

<template>
  <div class="user">
    <h1>Let's make a New Apiary!</h1>
  <form @submit.prevent = "handleSubmit">
    <label for="apiaryName">
      Apiary Name:
    </label>
    <input v-model="apiaryName" name="apiaryName" type="text"><br>
    <label for="apiaryZip">
      apiaryZip:
    </label>
    <input v-model="apiaryZip" name="apiaryZip" type="text"><br>
    <button>
      Go!
    </button>
  </form>
  
  </div>
</template>

<style scoped>
</style>