<template>
  <v-scale-transition>
    <VCard
      v-show="show"
      class="text-color-black ma-auto mt-16"
      max-width="450"
      flat
      rounded="lg"
      color="color-white"
    >
      <VTabs v-model="model" color="color-blue">
        <VTab class="text-none" value="Connexion">Connexion</VTab>
        <VTab class="text-none" value="Enregistrement">Inscription</VTab>
      </VTabs>

      <VCardText>
        <VWindow v-model="model">
          <VWindowItem value="Connexion">
            <CardLogin />
          </VWindowItem>
          <VWindowItem value="Enregistrement">
            <CardRegister />
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </v-scale-transition>
</template>

<script lang="ts" setup>
import CardLogin from "@/components/CardLogin.vue";
import CardRegister from "@/components/CardRegister.vue";
import { onMounted, ref } from "vue";

const model = ref<string>("");
const show = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 100);
});
</script>
