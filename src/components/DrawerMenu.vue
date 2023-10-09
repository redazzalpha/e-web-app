<template>
  <v-list :items="props.items"></v-list>
</template>

<script lang="ts" setup>
// props
interface Props {
  items: Array<{ title: string; value: string }>;
}
const props = defineProps<Props>();
</script>
