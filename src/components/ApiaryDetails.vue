<script lang="ts">
import { ApiaryResponse } from "@/models/ApiaryResponse.model";

export default{
    props: {apiaryResponse: {type: ApiaryResponse}}
}
</script>

<template>
  <div class="apiary">
    <h3>Apiary {{ apiaryResponse.apiaryName }}</h3>
    <h4>At zip code {{apiaryResponse.apiaryZip}}</h4>
  </div>
</template>

