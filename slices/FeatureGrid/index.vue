<script setup>
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    aria-label="Benefits"
    class="max-w-7xl w-full mx-auto px-4 xl:px-0 space-y-10 relative z-10 lg:space-y-24"
  >
    <PrismicRichText
      :field="slice.primary.heading"
      class="text-3xl lg:text-5xl font-display text-blue-950 dark:text-white flex items-center gap-2 font-bold justify-center pb-6 lg:pb-0"
    />
    <div class="grid gap-16 lg:grid-cols-2 xl:grid-cols-4 text-brand-black xl:gap-6">
      <template
        v-for="(item, index) in slice.primary.feature_items"
        :key="index"
      >
        <div class="relative z-10 p-6 pt-12 pb-8 bg-white rounded-lg shadow lg:px-6 lg:py-12 slide-in">
          <div
            aria-hidden="true"
            class="left-6 absolute top-0 flex items-center justify-center w-16 h-16 text-white -translate-y-1/2 rounded-full lg:left-5"
            :class="item.highlight_color.toLowerCase()"
          >
            <Icon
              :name="item.icon"
              class="text-white h-10 w-10"
            />
          </div>
          <div class="space-y-4">
            <h2 class="text-lg font-bold tracking-wider lg:text-2xl font-display">
              {{ item.title }}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-1.5 w-20 rounded"
              :class="item.highlight_color.toLowerCase()"
              aria-hidden="true"
              role="img"
            >
              <rect fill="currentColor" />
            </svg>

            <PrismicRichText
              :field="item.description"
              class="leading-relaxed"
            />
          </div>
        </div>
      </template>
    </div>
    <div class="w-full lg:max-w-2xl lg:mx-auto lg:text-center prose prose-em:text-blue-600 prose-em:not-italic prose-em:font-display">
      <PrismicRichText
        :field="slice.primary.content"
        class="lg:px-10 lg:text-2xl text-blue-950"
      />
    </div>
  </section>
</template>

<style scoped>
.red {
  @apply bg-red-600;
}
.blue {
  @apply bg-blue-600;
}
.orange {
  @apply bg-orange-500;
}
.pink {
  @apply bg-pink-500;
}
.purple {
  @apply bg-purple-500;
}

.prose em strong {
  @apply text-blue-600 !important;
}
</style>
