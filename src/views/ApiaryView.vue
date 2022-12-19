<script lang="ts">
import {UserStore, ApiaryStore} from "@/store";
import {storeToRefs} from "pinia";

import ApiaryDetails from "@/components/ApiaryDetails.vue";

export default {
    //like Real-World-Vue
    name: 'ApiaryView',
   components: { ApiaryDetails },
  setup() {
    const userStore = UserStore();
    const apiaryStore = ApiaryStore();
    const { getUserId } = storeToRefs(userStore);
    const { getNumberApiaries } = storeToRefs(apiaryStore);
    const { getIsApiaryGetted } = storeToRefs(apiaryStore);
    const { getApiaries} = storeToRefs(apiaryStore);

    console.log("in ApiaryView, getUserId.value? " + getUserId.value);
    if (getUserId.value != NaN){
        apiaryStore.getAllApiaries(getUserId.value);
        console.log("apiaryView, number of apiaries? " + getNumberApiaries.value);
        console.log("apiaryView, typeof getAllApiaries? " + typeof(getApiaries));
   }

    return { getUserId, getIsApiaryGetted, getApiaries, getNumberApiaries, apiaryStore }
  }
}

</script>

<template>
  <div class="apiary">
    <h1>Welcome to your Apiary Dashboard!</h1>

<!-- type authentication course, in dashboard.vue
    <template v-if="getIsApiaryGetted">
      <ApiaryDetails v-for="apiaryResponse in getApiaries" :key="apiaryResponse.apiaryId" :apiaryResponse="apiaryResponse"/>       
    </template>
-->

<!-- type Real-World-Vue, works! 
    <div class="apiary-list">
      <ApiaryDetails v-for="apiaryResponse in getApiaries" :key="apiaryResponse.apiaryId" :apiaryResponse="apiaryResponse"/>
    </div>
-->

    <div v-if="getIsApiaryGetted">
        <ul>
            <li class="apiaries" v-for="(apiaryResponse, index) in getApiaries" :key="index">
                <h3>Apiary {{ apiaryResponse.apiaryName }}</h3>
                <h4>At zip code {{apiaryResponse.apiaryZip}}</h4>
            </li>
        </ul>
    </div>


  </div>
</template>

<style scoped>
.apiaries{

}
</style>
