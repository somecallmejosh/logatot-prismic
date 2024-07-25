<script setup>
import { getSliceComponentProps } from '@prismicio/vue';
import HeroDefault from "./components/HeroDefault"
import HeroSingleImage from "./components/HeroSingleImage"
import HeroLandingPage from "./components/HeroLandingPage"

defineProps(
  getSliceComponentProps([
    'slice',
    'index',
    'slices',
    'context',
  ]),
);

const variationComponents = {
  default: HeroDefault,
  singleImage: HeroSingleImage,
  landingPage: HeroLandingPage,
}
</script>

<template>
  <component
    :is="variationComponents[slice.variation]"
    :slice="slice"
  />
</template>
