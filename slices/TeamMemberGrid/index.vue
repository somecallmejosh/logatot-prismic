<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TeamMemberGridSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <Bounded>
    <section
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
    >
      <ul class="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <template
          v-for="(item, index) in slice.primary.team_members"
          :key="index"
        >
          <li class="space-y-4">
            <PrismicImage
              :field="item.image"
              :imgix-params="{ fit: 'crop', w: 405, h: 376, dpr: 2, format: 'webp', q: 10 }"
              height="376"
              width="405"
              loading="lazy"
              class="aspect-[14/13] w-full rounded-2xl object-cover"
            />
            <h3 class="lg:text-xl tracking-wider font-display text-blue-950 dark:text-white flex items-center gap-2 font-bold mb-0">
              {{ item.name }}
            </h3>
            <p><em>{{ item.title }}</em></p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-1.5 w-20 rounded bg-blue-600"
              aria-hidden="true"
              role="img"
            >
              <rect fill="currentColor" />
            </svg>

            <PrismicRichText
              :field="item.description"
              class="opacity-80"
            />
          </li>
        </template>
      </ul>
    </section>
  </Bounded>
</template>
