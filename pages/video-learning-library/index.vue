<script setup>
  import { useVideoLibrary } from '~/composables/useVideoLibrary'
  const videoLibrary = useVideoLibrary()
</script>
<template>
  <Bounded class="py-12 space-y-12 lg:py-24">
    <h1 class="text-5xl font-bold font-display">
      Logatot Video Learning Library
    </h1>
    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(video, index ) in videoLibrary"
        :key="index"
        class="relative p-8 space-y-4 transition-all duration-150 rounded-lg hover:bg-blue-50 bg-blue-50/60 hover:shadow"
      >
        <h2 class="text-3xl font-display">
          {{ video.data.title }}
        </h2>
        <template v-if=" video.data.slices[0].primary.duration">
          <p class="inline-flex px-1 py-px text-xs font-bold text-blue-900 bg-blue-200 rounded-full">
            {{ video.data.slices[0].primary.duration }}
          </p>
        </template>
        <ul class="ml-4 space-y-2 list-disc">
          <li
            v-for="(item, innerIndex) in video.data.slices[0].primary.video"
            :key="innerIndex"
          >
            {{ item.title }}
          </li>
        </ul>
        <NuxtLink
          :to="`/video-learning-library/${video.uid}`"
          class="absolute inset-0"
        />
      </li>
    </ul>
  </Bounded>
</template>
