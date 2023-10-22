<template>
  <VCard class="ma-auto" width="450" elevation="5" rounded="lg">
    <VTabs v-model="model" color="blue">
      <VTab class="text-none" value="Connection">Connection</VTab>
      <VTab class="text-none" value="registration">Registration</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="model">
        <VWindowItem value="Connection">
          <Login />
        </VWindowItem>
        <VWindowItem value="registration">
          <Registration />
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Login from "./login.vue";
import Registration from "./registration.vue";

const model = ref<string>("");
</script>
