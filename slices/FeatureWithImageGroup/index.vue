<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FeatureContentSlice>([
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
    aria-label="Description and Benefits"
    class="max-w-7xl w-full mx-auto px-4 xl:px-0 space-y-10 relative z-10 pb-16 lg:pb-28"
  >
    <ul class="space-y-16 lg:space-y-24">
      <template
        v-for="(item, index) in slice.primary.feature_group"
        :key="index"
      >
        <li class="flex flex-col gap-8 -mx-4 rounded-xl lg:p-24 lg:flex-row lg:gap-24 lg:items-center bg-blue-50/40 lg:mx-0 ">
          <div class="basis-3/5 lg:order-1 ">
            <PrismicImage
              :field="item.image"
              class="w-full border border-gray-100 shadow lg:rounded-lg lg:shadow-lg shadow-blue-800/10"
            />
          </div>
          <div class="basis-2/5 space-y-6 p-4 pb-12 lg:p-0 lg:order-0 ">
            <PrismicRichText
              :field="item.header"
              class="text-lg font-bold tracking-wider lg:text-2xl font-display slide-in"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-1.5 w-20 slide-in rounded bg-blue-600"
              aria-hidden="true"
              role="img"
            >
              <rect fill="currentColor" />
            </svg>

            <PrismicRichText
              :field="item.content"
              class="max-w-[70ch] leading-relaxed prose"
            />
          </div>
        </li>
      </template>
    </ul>
  </section>
</template>
