<script setup lang="ts">
interface Props {
  active?: boolean;
  value?: number;
  text?: string;
  disabled?: boolean;
}
withDefaults(defineProps<Props>(), {
  active: false,
});
</script>

<template>
  <li
    v-if="typeof value === 'number' && !disabled"
    :class="active ? 'active' : 'normal'"
    class="flex"
  >
    <p>
      <slot>{{ text || value }}</slot>
    </p>
  </li>
  <li v-else :class="disabled && 'disabled'" class="flex">
    <p>
      <slot>{{ text }}</slot>
    </p>
  </li>
</template>

<style scoped>
li {
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  color: theme("colors.[middle-dark]");
  border-radius: theme("borderRadius.3px");
  transition-property: theme("transitionProperty.all");
  transition-timing-function: theme("transitionTimingFunction.[in-out]");
  transition-duration: theme("transitionDuration.300");
}

li.normal:hover {
  background-color: theme("backgroundColor.light");
  cursor: pointer;
}
li.normal:active {
  box-shadow: theme("boxShadow.[pagination-pressed]");
}
li.active {
  color: theme("colors.white");
  background-color: theme("backgroundColor.dark");
}
li.normal {
  color: theme("colors.blue");
  background-color: theme("backgroundColor.[super-light]");
}

li.disabled {
  color: theme("colors.[middle-dark]");
  background-color: theme("backgroundColor.light");
}

@screen md {
  li {
    height: 50px;
    width: 50px;
  }
}
</style>
