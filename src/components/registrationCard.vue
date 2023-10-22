<template>
  <VCard
    class="ma-auto pa-12 pb-3"
    max-width="450"
    elevation="5"
    rounded="lg"
    color="grey-lighten-4"
  >
    <VCardTitle>Création de compte</VCardTitle>
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
        ></VTextField>
        <VCheckbox
          color="success"
          label="Je suis d'accord avec les termes et conditions du site"
        ></VCheckbox>
      </VForm>
    </VCardText>
    <VCardActions>
      <VSpacer />
      <VBtn
        v-for="button in buttons"
        :key="button.label"
        class="text-none"
        :color="button.color"
        @click="button.onClick"
        >{{ button.label }}</VBtn
      >
    </VCardActions>
  </VCard>
</template>

<script lang="ts" setup>
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
    label: "Nom",
    placeholder: "Nom",
    prependIcon: "",
    appendIcon: "",
    model: "",
    type: "text",
  },
  {
    label: "Prenom",
    placeholder: "Prénom",
    prependIcon: "",
    appendIcon: "",
    model: "",
    type: "text",
  },
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
    label: "Annuler",
    color: "error",
    onClick: () => {
      (form.value as VForm).reset();
      (form.value as VForm).resetValidation();
    },
  },
  { label: "Valider", color: "success", onClick: undefined },
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
  fields.value[3].appendIcon = visible ? "mdi-eye" : "mdi-eye-off";
  fields.value[3].type = visible ? "text" : "password";
});
//#endregion
</script>
