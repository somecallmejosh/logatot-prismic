<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TestimonialSlice>([
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
    class="w-full max-w-3xl px-6 pt-24 mx-auto xl:px-0"
  >
    <figure>
      <p class="sr-only">
        5 out of 5 stars
      </p>
      <div class="flex mb-6 text-blue-600 gap-x-1 animate-pulse">
        <IconStar
          class="w-6 h-6"
        />
        <IconStar
          class="w-6 h-6"
        />
        <IconStar
          class="w-6 h-6"
        />
        <IconStar
          class="w-6 h-6"
        />
        <IconStar
          class="w-6 h-6"
        />
      </div>
      <template v-if="slice.primary.heading">
        <h2 class="flex items-center gap-2 text-xl font-bold tracking-wide lg:text-3xl font-display text-blue-950 dark:text-white">
          {{ slice.primary.heading }}
        </h2>
      </template>
      <blockquote class="mt-10 space-y-4 leading-8 tracking-tight prose text-gray-900 sm:leading-9">
        <prismic-rich-text
          :field="slice.primary.quote"
          class="max-w-md lg:max-w-none"
        />
      </blockquote>
      <figcaption class="flex items-center mt-10 gap-x-6">
        <PrismicImage
          :field="slice.primary.image"
          :imgix-params="{fit: 'crop', w: 64, h: 64, dpr: 2, format: 'webp', q: 50
          }"
          loading="lazy"
          class="w-16 h-16 border-2 border-blue-200 rounded-full bg-gray-50"
        />
        <div class="text-sm leading-6">
          <div class="font-semibold text-gray-900">
            {{ slice.primary.name }}
          </div>
          <div class="mt-0.5 text-sm">
            {{ slice.primary.job_title }}, {{ slice.primary.business_name }}
          </div>
        </div>
      </figcaption>
    </figure>
  </section>
</template>
