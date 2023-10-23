<template>
  <VCard class="login-card text-color-black bg-color-white" rounde="lg">
    <VCardTitle>Connexion</VCardTitle>
    <VCardText>
      <VForm ref="form">
        <VTextField
          v-for="field in fields"
          :key="field.label"
          v-model="field.model"
          :placeholder="field.placeholder"
          :label="field.placeholder"
          variant="solo-inverted"
          :prepend-inner-icon="field.prependIcon"
          :append-inner-icon="field.appendIcon"
          @click:append-inner="visible = !visible"
          :type="field.type"
          :rules="rules"
          r
        >
          <template v-slot:details v-if="field.label == 'Mot de passe'">
            <RouterLink
              :to="sources.home"
              class="text-caption text-decoration-none text-color-blue"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mot de passe oublié?</RouterLink
            >
          </template>
        </VTextField>
      </VForm>
      <v-card-text
        class="text-medium-emphasis text-color-black text-caption my-5 rounded"
        :style="`background-color: rgba(var(--v-theme-color-orange), 0.7)`"
      >
        "Attention": Après 3 tentatives de connection échouées votre compte sera
        temporairement vérouillé pendant 3 heures. Si vous devez vous connecter
        maintenant vous pouvez également cliquez sur "Mot de passe oublié?"
        ci-dessus pour réinitialiser votre mot de passse.
      </v-card-text>
    </VCardText>
    <VCardActions>
      <VBtn
        v-for="button in buttons"
        :key="button.label"
        class="text-none"
        :color="button.color"
        block
        variant="tonal"
        @click="button.onClick"
        >{{ button.label }}</VBtn
      >
    </VCardActions>
  </VCard>
</template>

<script lang="ts" setup>
import * as sources from "@/utils/sources";
import { ref, watch } from "vue";
import type { VForm } from "vuetify/components";

const form = ref<HTMLElement | null>(null);

const visible = ref<boolean>(false);

//#region interfaces

interface Fields {
  label: string;
  placeholder: string;
  prependIcon: string;
  appendIcon: string;
  model: string;
  type: string;
}
interface Buttons {
  label: string;
  color: string;
  onClick?: () => void;
}
//#endregion

//#region arrays
const fields = ref<Array<Fields>>([
  {
    label: "E-mail",
    placeholder: "E-mail",
    prependIcon: "mdi-email",
    appendIcon: "",
    model: "",
    type: "text",
  },
  {
    label: "Mot de passe",
    placeholder: "Mot de passe",
    prependIcon: "mdi-lock",
    appendIcon: "mdi-eye-off",
    model: "",
    type: "password",
  },
]);
const buttons: Array<Buttons> = [
  {
    label: "Se connecter",
    color: "color-blue",
    onClick: () => {
      (form.value as VForm).reset();
      (form.value as VForm).resetValidation();
    },
  },
];
const rules = [required];
//#endregion

//#region rules
function required(input: string): string | boolean {
  return input?.length > 0 ? true : "field is required";
}
//#endregion

//#region watchers
watch(visible, (visible) => {
  fields.value[1].appendIcon = visible ? "mdi-eye" : "mdi-eye-off";
  fields.value[1].type = visible ? "text" : "password";
});
//#endregion
</script>
