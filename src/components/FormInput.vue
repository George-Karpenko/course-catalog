<script setup lang="ts">
interface Props {
  id?: string;
  labelValue?: string;
  modelValue: string | number;
  type?: string;
  inputClass: string;
}
const props = withDefaults(defineProps<Props>(), {
  id: "",
  labelValue: "",
  type: "text",
  inputClass: "",
});

const emit = defineEmits(["update:modelValue"]);

function updateInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      :class="inputClass"
      class="transition ease-in-out"
      :="$attrs"
    />
    <slot></slot>
    <label v-if="labelValue" :for="id" class="font-bold block">
      {{ labelValue }}
    </label>
  </div>
</template>

<style scoped>
div {
  position: relative;
}
input {
  padding: theme("padding.15px") theme("padding.20px");
  transition-property: theme("transitionProperty.DEFAULT");
  transition-timing-function: theme("transitionTimingFunction.[in-out]");
  transition-duration: theme("transitionDuration.300");
  background-color: theme("colors.[super-light]");
  width: theme("width.full");
  border-radius: theme("borderRadius.DEFAULT");
  outline: none;
}
input:hover {
  background-color: theme("colors.light");
}
input:focus {
  padding-top: theme("padding.6");
  padding-bottom: theme("padding.[1.5]");
  box-shadow: theme("boxShadow.[input-focus]");
  background-color: theme("colors.[super-light]");
}
input:focus ~ label {
  opacity: 1;
}
input:focus::placeholder {
  color: theme("colors.[transparent]");
}
input:active {
  box-shadow: theme("boxShadow.[input-active]");
  padding: theme("padding.15px") theme("padding.20px");
}
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
input::placeholder,
input:active::placeholder {
  color: theme("colors.dark");
}
label,
input:active ~ label {
  display: block;
  transition-property: theme("transitionProperty.DEFAULT");
  transition-timing-function: theme("transitionTimingFunction.[in-out]");
  transition-duration: theme("transitionDuration.300");
  position: absolute;
  top: theme("inset.0");
  margin-left: theme("margin.17px");
  background-color: theme("colors.light");
  padding: theme("padding.3px") theme("padding.1");
  font-size: theme("fontSize.DEFAULT.[caption-small]");
  line-height: theme("fontSize.DEFAULT.[caption-small].1");
  opacity: 0;
}
</style>
