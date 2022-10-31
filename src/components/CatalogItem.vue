<script setup lang="ts">
import type { Сourse } from "@/@types";

defineProps<{
  item: Сourse;
}>();
</script>

<template>
  <div
    :style="{
      backgroundImage: 'url(' + `/src/assets/${item.preview_img_path}` + ')',
    }"
    class="card"
  >
    <div>
      <span class="caption">{{ item.series }}</span>
      <h5>
        {{ item.title }}
      </h5>
      <h5>
        {{ item.cost.toLocaleString("ru-RU") }} {{ item.cost_currency }}
      </h5>
      <div class="more-detailed">
        <p>{{ $t('moreDetailed') }}</p>
        <i class="icon-arrow-more-detailed"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>

h5 {
  text-transform: uppercase;
  margin-top: theme("margin.3");
}
.caption {
  background-color: theme("colors.blue");
  color: theme("colors.white");
  padding: theme("padding.[0.5]") theme("padding.[2.5]");
  border-radius: theme("borderRadius.sm");
  margin-top: theme("margin.auto");
}
.more-detailed {
  display: none;
  align-items: center;
  gap: theme("gap.10px");
}
.more-detailed p {
  font-size: theme("fontSize.lg");
  font-weight: theme("fontWeight.bold");
}
.card {
  display: flex;
  border-radius: theme("borderRadius.DEFAULT");
  width: theme("width.full");
  height: theme("height.300px");
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: theme("backgroundPosition.center");
  background-size: theme("backgroundSize.cover");
  /* sm:h-400px */
}
.card > div {
  --tw-gradient-stops: theme("colors.dark"), theme("colors.dark/0");
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  width: theme("width.full");
  color: theme("colors.white");
  margin-top: theme("margin.auto");
  padding: theme("padding.14") theme("padding.30px") theme("padding.25px");
  background-image: theme("backgroundImage.[gradient-to-t]");
}
.card:hover > div {
  --tw-gradient-stops: theme("colors.dark"), theme("colors.dark/0.749");
  height: 100%;
  background-image: theme("backgroundImage.[gradient-to-t]");
}
.card:hover .more-detailed {
  display: flex;
}
.card:active {
  box-shadow: theme("boxShadow.[card-active]");
}
.card:hover > div > p {
  display: block;
}
@screen md {
  .card {
    height: theme("height.400px");
  }
}
</style>
