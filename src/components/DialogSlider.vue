<template>
  <v-dialog :model-value="props.modelValueDialog" :width="props.width">
    <v-card :title="props.title">
      <VCardText class="mb-5">{{ props.text }}</VCardText>
      <VSlider
        class="mx-5"
        :min="props.min"
        :max="props.max"
        thumb-label="always"
        :step="props.step"
        :model-value="props.modelValue"
        @update:model-value="emit('update:modelValue', $event)"
      >
        <template v-slot:append>
          <v-text-field
            hide-details
            single-line
            density="compact"
            type="number"
            style="width: 70px"
            :model-value="props.modelValue"
            @update:model-value="emit('update:modelValue', Number($event))"
          ></v-text-field>
        </template>
      </VSlider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <VBtn color="error" @click="cancel">Annuler</VBtn>
        <VBtn color="success">Valider</VBtn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
//#region props
interface Props {
  modelValue: number;
  modelValueDialog: boolean;
  title?: string;
  text?: string;
  width?: number;
  min?: number;
  max?: number;
  step?: number;
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
  text: "",
  width: 500,
  min: 1,
  max: 100,
  step: 1,
});
//#endregion

//#region emits
interface Emits {
  (event: "update:modelValue", value: number): void;
}
const emit = defineEmits<Emits>();
//#endregion

//#region event handlers
function updateModelSlider(value: number | string) {}
function cancel() {}
//#endregion
</script>
