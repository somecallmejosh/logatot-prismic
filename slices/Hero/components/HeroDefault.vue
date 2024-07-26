<script setup>
const props = defineProps(['slice']);
</script>
<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <template v-if="slice.variation === 'default'">
      <div class="relative isolate">
        <div class="overflow-hidden">
          <div class="px-6 pt-12 pb-16 mx-auto max-w-7xl lg:px-0 md:pt-24 lg:pt-32">
            <div class="max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div class="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl prose prose-headings:font-display prose-h1:text-4xl md:prose-h1:text-6xl prose-em:text-blue-600 prose-em:not-italic prose-em:block">
                <prismic-rich-text
                  :field="slice.primary.headline"
                  class="font-bold"
                />
                <prismic-rich-text
                  :field="slice.primary.content"
                  class="max-w-md lg:max-w-none"
                />
                <div class="flex items-center mt-10 gap-x-6 not-prose">
                  <PrismicLink
                    :field="slice.primary.call_to_action_1"
                    class="border-2 rounded-md font-bold inline-flex gap-1 items-center transition-all duration-150 ease-in-out focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 px-3 py-1"
                  >
                    {{ slice.primary.call_to_action_1_text }}
                  </PrismicLink>
                  <PrismicLink
                    :field="slice.primary.call_to_action_2"
                    class="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {{ slice.primary.call_to_action_2_text }} <span aria-hidden="true">→</span>
                  </PrismicLink>
                </div>
              </div>
              <div class="flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div class="flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div class="relative">
                    <PrismicImage
                      :field="slice.primary.images[0].image_1"
                      loading="lazy"
                      :imgix-params="{ fit: 'crop', ar: '2:3', w: 176, h: 264, dpr: 2, format: 'webp' }"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="flex-none mr-auto space-y-8 w-44 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div class="relative">
                    <PrismicImage
                      :field="slice.primary.images[0].image_2"
                      :imgix-params="{ fit: 'crop', ar: '2:3', w: 176, h: 264, dpr: 2, format: 'webp' }"
                      height="264"
                      width="176"
                      loading="lazy"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <PrismicImage
                      :field="slice.primary.images[0].image_3"
                      :imgix-params="{ fit: 'crop', ar: '2:3', w: 176, h: 264, dpr: 2, format: 'webp' }"
                      height="264"
                      width="176"
                      loading="lazy"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div class="flex-none pt-32 space-y-8 w-44 sm:pt-0">
                  <div class="relative">
                    <PrismicImage
                      :field="slice.primary.images[0].image_4"
                      :imgix-params="{ fit: 'crop', ar: '2:3', w: 176, h: 264, dpr: 2, format: 'webp' }"
                      height="264"
                      width="176"
                      loading="lazy"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div class="relative">
                    <PrismicImage
                      :field="slice.primary.images[0].image_5"
                      :imgix-params="{ fit: 'crop', ar: '2:3', w: 176, h: 264, dpr: 2, format: 'webp' }"
                      height="264"
                      width="176"
                      loading="lazy"
                      class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div class="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>
<style scoped>
  h1 em {
    @apply text-blue-500 !important;
    font-style: normal;
  }
</style>
