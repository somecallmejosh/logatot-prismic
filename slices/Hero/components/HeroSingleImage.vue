<script setup>
  const props = defineProps(['slice']);
</script>
<template>
  <div class="relative bg-white">
    <div class="lg:absolute lg:inset-0 lg:left-1/2">
      <img
        class="object-cover w-full bg-gray-50  lg:absolute h-[450px] md:h-[600px] lg:h-full grayscale hover:grayscale-0 transition-all duration-300"
        :alt="slice.primary.images[0].image_1.alt"
        loading="lazy"
        :src="slice.primary.images[0].image_1.url"
      >
    </div>
    <div class="pt-16 pb-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
      <div class="relative overflow-hidden isolate">
        <div class="lg:py-24">
          <div class="px-6 mx-auto prose lg:max-w-2xl lg:pr-12 xl:pl-0">
            <h2 class="text-3xl font-bold tracking-widest sm:text-4xl font-display">
              {{ slice.primary.headline[0].text }}
            </h2>

            <prismic-rich-text
              :field="slice.primary.content"
            />


            <div class="gap-x-6">
              <a
                class="border-2 rounded-md font-bold inline-flex gap-1 items-center transition-all duration-150 ease-in-out focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-150 ease-in-out border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 px-3 py-1 no-underline"
                href="#register"
              >Register for Logatot</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
