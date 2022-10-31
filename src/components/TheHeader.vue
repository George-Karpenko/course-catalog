<script setup lang="ts">
import { ref } from "vue";
import FormInput from "./FormInput.vue";
const props = defineProps<{
  title: string;
  filter: string;
}>();

const emit = defineEmits(["update:filter"]);

const filter = ref(props.filter);

function updateFilter() {
  emit("update:filter", filter.value);
}
</script>

<template>
  <div class="container">
    <img src="../assets/logo.svg" />
    <h1 class="my-30px">{{ title }}</h1>
    <FormInput
      v-model="filter"
      type="search"
      labelValue="Поиск"
      placeholder="Поиск по каталогу"
      inputClass="pr-14"
    >
      <button class="icon-search" type="submit" @click="updateFilter"></button>
    </FormInput>
  </div>
</template>

<style>
.container {
  margin: theme("margin.30px") theme("margin.auto");
}
button {
  position: absolute;
  top: 0;
  right: 0;
  width: 57px;
  height: 59px;
  background-color: theme("backgroundColor.transparent");
  border: theme("borderWidth.0");
  cursor: pointer;
}
button::before {
  color: theme("colors.blue");
  font-size: 17px;
}
</style>
