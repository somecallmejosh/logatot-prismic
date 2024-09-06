<i18n lang="json">
{
  "en": {
    "title": "Logatot Video Learning Library",
    "description": "A library of videos for learning the Logatot CCMS"
  },
  "es": {
    "title": "Biblioteca de aprendizaje de video de Logatot",
    "description": "Una biblioteca de videos para aprender el Logatot CCMS"
  }
}
</i18n>
<script setup>
  import { useVideoLibrary } from '~/composables/useVideoLibrary'
  const videoLibrary = useVideoLibrary()

  const { t } = useI18n({
    useScope: 'local'
  })

  useSeoMeta({
    title: () => t('title'),
    description: () => t('description'),
    ogTitle: () => t('title'),
    ogDescription: () => t('description'),
  })
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
        class="relative p-8 space-y-8 transition-all duration-150 rounded-lg lg:p-12 hover:bg-blue-50 bg-blue-50/30 hover:shadow group"
      >
        <div class="space-y-4">
          <h2 class="text-xl font-bold font-display group-hover:underline">
            {{ video.data.title }}
          </h2>
          <template v-if=" video.data.slices[0].primary.duration">
            <p class="inline-flex px-1 py-px text-xs font-bold text-blue-900 bg-blue-200 rounded-full">
              {{ video.data.slices[0].primary.duration }}
            </p>
          </template>
        </div>
        <ul class="space-y-2 divide-y divide-blue-50">
          <li
            v-for="(item, innerIndex) in video.data.slices[0].primary.video"
            :key="innerIndex"
            class="py-1"
          >
            {{ item.title }}
          </li>
        </ul>
        <NuxtLink
          :to="localePath(`/video-learning-library/${video.uid}`)"
          class="absolute inset-0"
        />
      </li>
    </ul>
  </Bounded>
</template>
