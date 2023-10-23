<template>
  <v-dialog
    :model-value="props.dialog"
    @update:model-value="emit('update:dialog', $event)"
    @click:outside="cancel"
    :width="props.width"
    @keydown.enter="emit('onValidate', props.id, props.slider, totalPrice)"
  >
    <VCard>
      <VCardTitle class="bg-color-white-dark px-5">
        {{ props.title }}
      </VCardTitle>

      <VCardText class="mb-8"
        >{{ props.text }} &times; {{ props.slider }} <br />

        <VDivider />
        <div class="d-flex">
          <span><strong> Total: </strong> </span>
          <VSpacer />
          <span>
            <strong class="text-color-error-const"> {{ totalPrice }}€ </strong>
          </span>
        </div>
      </VCardText>

      <VSlider
        class="mx-auto"
        :model-value="props.slider"
        @update:model-value="emit('update:slider', $event)"
        :min="props.min"
        :max="props.max"
        thumb-label="always"
        :step="props.step"
        color="color-orange"
        style="width: 320px"
        hide-details
      >
        <template v-slot:append>
          <v-text-field
            :model-value="props.slider"
            @update:model-value="emitAjustedValue(Number($event))"
            hide-details
            single-line
            density="compact"
            type="number"
            variant="solo"
            width="10px"
            class="elevation-0"
            :max="props.max"
            :min="props.min"
            style="width: 70px"
          ></v-text-field>
        </template>
      </VSlider>

      <v-card-actions>
        <VSpacer />
        <VBtn color="color-error" @click="cancel">Annuler</VBtn>
        <VBtn
          color="color-success-const"
          @click="emit('onValidate', props.id, props.slider, totalPrice)"
          >Valider</VBtn
        >
      </v-card-actions>
    </VCard>
  </v-dialog>
</template>

<script lang="ts" setup>
import { formatNumber } from "@/utils/functions";
import { computed } from "vue";

//#region computed
const totalPrice = computed<string>(() => {
  return formatNumber(props.price * props.slider);
});
//#endregion

//#region props
interface Props {
  id?: number;
  dialog: boolean;
  slider: number;
  price: number;
  title?: string;
  text?: string;
  min?: number;
  max?: number;
  step?: number;
  width?: number;
}
const props = withDefaults(defineProps<Props>(), {
  id: 0,
  title: "",
  text: "",
  min: 1,
  max: 100,
  step: 1,
  width: 500,
});
//#endregion

//#region emits
interface Emits {
  (event: "update:dialog", isOpen: boolean): boolean;
  (event: "update:slider", value: number): boolean;
  (event: "onValidate", id: number, quantity: number, totalPrice: string): {
    id: number;
    quantity: number;
    totalPrice: string;
  };
}
const emit = defineEmits<Emits>();
//#endregion

//#region function
function adjustValue(value: number): number {
  value = Number(value.toFixed(0));
  if (value > props.max) value = props.max;
  else if (value < props.min) value = props.min;
  return value;
}
//#endregion

//#region event handlers
function cancel(): void {
  emit("update:dialog", false);
  emit("update:slider", 1);
}
function emitAjustedValue(value: number): void {
  emit("update:slider", adjustValue(value));
}
//#endregion
</script>
