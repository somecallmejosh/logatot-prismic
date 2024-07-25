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
            class="text-3xl lg:text-5xl font-display dark:text-white flex items-center gap-2 font-bold slide-in text-white"
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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 shrink-0 translate-y-0.5"
                  role="img"
                >
                  <path
                    d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <PrismicRichText :field="item.feature_item" />
              </li>
            </template>
          </ul>
        </div>
        <div class="relative p-10 overflow-hidden md:p-6 lg:p-10 bg-gray-50 rounded-xl lg:col-span-1">
          <div class="relative z-10 space-y-4 text-center text-white">
            <PrismicRichText
              :field="slice.primary.cta_header"
              class="text-2xl lg:text-4xl tracking-wide font-display dark:text-white flex items-center gap-2 font-bold text-center justify-center slide-in text-white"
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 shrink-0 translate-y-0.5.5"
                    role="img"
                  >
                    <path
                      d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <PrismicRichText
                    :field="item.cta_item"
                    class="text-left"
                  />
                </li>
              </template>
            </ul>
            <PrismicLink
              :field="slice.primary.cta_link_url"
              class="border-2 rounded-md font-bold inline-flex gap-1 items-center focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-150 ease-in-out border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 text-2xl px-4 py-2 w-full text-center justify-center slide-in"
            >
              {{ slice.primary.cta_link_text }}
            </PrismicLink>
          </div>
          <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 z-10 backdrop-blur-lg bg-black/80" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1284.91 723.87"
              class="h-full w-full z-0"
              role="img"
            >
              <rect
                width="223.04"
                height="588.16"
                style="fill:#60f42f; stroke-width:0px;"
              />
              <rect
                x="255.77"
                y="109.01"
                width="256.76"
                height="588.16"
                transform="translate(-134.38 200.15) rotate(-25)"
                style="fill:#f42fc3; stroke-width:0px;"
              />
              <rect
                x="898.89"
                y="74.61"
                width="351.53"
                height="438.95"
                rx="131.84"
                ry="131.84"
                transform="translate(-18.39 509.98) rotate(-26.48)"
                style="fill:#2f60f4; stroke-width:0px;"
              />
              <rect
                x="476.79"
                y="23.38"
                width="267.74"
                height="354.15"
                style="fill:#240046; stroke-width:0px;"
              />
              <ellipse
                cx="823.11"
                cy="477.64"
                rx="170.32"
                ry="178.94"
                style="fill:#fb5607; stroke-width:0px;"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
