<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PricingFeatureSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="py-16 bg-blue-600 lg:pb-40 lg:py-32">
    <section
      aria-label="Pricing"
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      class="max-w-2xl px-6 mx-auto space-y-6 lg:max-w-7xl"
    >
      <div class="grid gap-12 lg:items-center lg:grid-cols-3 lg:gap-20">
        <div class="space-y-6 text-white lg:col-span-2">
          <PrismicRichText
            :field="slice.primary.headline"
            class="flex items-center gap-2 text-3xl font-bold text-white lg:text-5xl font-display dark:text-white slide-in"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-1.5 w-20 bg-green-400 slide-in rounded"
            aria-hidden="true"
            role="img"
          >
            <rect fill="currentColor" />
          </svg>


          <PrismicRichText
            :field="slice.primary.content"
            class="prose prose-p:text-white"
          />

          <ul class="grid gap-3 lg:grid-cols-2 slide-in">
            <template
              v-for="(item, index) in slice.primary.features"
              :key="index"
            >
              <li class="flex gap-2">
                <IconCircleCheck class="w-5 h-5 translate-y-0.5 shrink-0" />
                <PrismicRichText :field="item.feature_item" />
              </li>
            </template>
          </ul>
        </div>
        <div class="relative p-10 overflow-hidden md:p-6 lg:p-10 bg-blue-950 rounded-xl lg:col-span-1">
          <div class="relative z-10 space-y-4 text-center text-white">
            <PrismicRichText
              :field="slice.primary.cta_header"
              class="flex items-center justify-center gap-2 text-2xl font-bold tracking-wide text-center text-white lg:text-4xl font-display dark:text-white slide-in"
            />
            <PrismicRichText
              :field="slice.primary.cta_content"
              class="text-sm"
            />
            <ul class="space-y-2">
              <template
                v-for="(item, index) in slice.primary.cta_bullet_items"
                :key="index"
              >
                <li class="flex gap-2">
                  <IconCircleCheck class="w-5 h-5 translate-y-0.5 shrink-0" />
                  <PrismicRichText
                    :field="item.cta_item"
                    class="text-left"
                  />
                </li>
              </template>
            </ul>
            <PrismicLink
              :field="slice.primary.cta_link_url"
              class="inline-flex items-center justify-center w-full gap-1 px-4 py-2 text-2xl font-bold text-center text-white transition-all duration-150 ease-in-out bg-blue-600 border-2 border-blue-600 rounded-md focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 hover:bg-blue-500 hover:border-blue-500 slide-in"
            >
              {{ slice.primary.cta_link_text }}
            </PrismicLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
