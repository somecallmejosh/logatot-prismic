<i18n lang="json">
{
  "en": {
    "title": "Video Learning Library"
  },
  "es": {
    "title": "Biblioteca de aprendizaje de video"
  }
}
</i18n>
<script setup>
  import { components } from '~/slices'
  const { locale, t } = useI18n({
    useScope: 'local'
  })
  const prismic = usePrismic()
  const route = useRoute()
  const { data: page } = useAsyncData(route.params.uid, () =>
    prismic.client.getByUID('video_library', route.params.uid, { lang: locale.value })
  )

  useSeoMeta({
    title: () => page.value?.data.meta_title,
    description: () => page.value?.data.meta_description,
    ogTitle: () => page.value?.data.meta_title,
    ogDescription: () => page.value?.data.meta_description,
  })
</script>


<template>
  <Bounded class="py-12 space-y-12 lg:py-24">
    <div class="space-y-6 lg:space-y-12">
      <breadcrumbs
        :links="[
          { text: t('title'), to: localePath('/video-learning-library') },
          { text: page?.data.title, to: localePath(`/video-learning-library/${page?.uid}`) },
        ]"
      />
      <h1 class="text-5xl font-bold font-display">
        {{ page?.data.title }}
      </h1>
    </div>
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
      class="w-full space-y-16"
    />
  </Bounded>
</template>
