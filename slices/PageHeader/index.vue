<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PageHeaderSlice>([
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
    <div class="max-w-7xl w-full mx-auto px-6 xl:px-0 pt-24">
      <div class="max-w-2xl mx-auto prose lg:mx-0 prose-headings:font-display prose-em:not-italic prose-em:text-blue-600">
        <prismic-rich-text
          :field="slice.primary.headline"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-1.5 w-20 bg-blue-600 rounded"
          aria-hidden="true"
          role="img"
        >
          <rect fill="currentColor" />
        </svg>

        <prismic-rich-text
          :field="slice.primary.content"
        />
      </div>
    </div>
  </section>
</template>
