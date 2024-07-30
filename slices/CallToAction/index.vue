<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CallToActionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="bg-blue-50">
      <div class="px-6 py-12 mx-auto max-w-7xl sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-0">
        <div class="prose prose-headings:font-display prose-h2:text-3xl">
          <h2 class="">
            {{ slice.primary.headline }}
          </h2>
          <PrismicRichText
            :field="slice.primary.content"
            class="opacity-80"
          />
        </div>
        <div class="flex items-center mt-10 gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <PrismicLink
            :field="slice.primary.call_to_action_link"
            class="cta-link"
          >
            {{ slice.primary.call_to_action_link_text }}
          </PrismicLink>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.cta-link {
  @apply border-2 rounded-md font-bold inline-flex gap-1 items-center transition-all duration-150 ease-in-out focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 px-3 py-1
}
</style>
