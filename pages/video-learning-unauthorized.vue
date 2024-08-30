<i18n lang="json">
{
  "en": {
    "meta_title": "Video Learning Page",
    "meta_description": "This is the video learning page.",
    "header": "Get Access To Our Learning Library",
  },
  "es": {
    "meta_title": "Página de Aprendizaje de Video",
    "meta_description": "Esta es la página de aprendizaje de video.",
    "header": "Obtenga acceso a nuestra biblioteca de aprendizaje",
  }
}
</i18n>

<script setup>
  const { locale, t } = useI18n({
    useScope: 'local'
  })

  const prismic = usePrismic()
  const { data: page } = useAsyncData('video-learning-unauthorized', () =>
    prismic.client.getByUID('page', 'video-learning', { lang: locale.value })
  )
  useSeoMeta({
    title: () => t('meta_title'),
    description: () => t('meta_description'),
    ogTitle: () => t('meta_title'),
    ogDescription: () => t('meta_description'),
  })
</script>

<template>
  <Bounded class="py-12 space-y-12 lg:py-24">
    <div class="grid gap-6 lg:grid-cols-7">
      <div class="space-y-6 lg:col-span-5">
        <div class="p-6 space-y-6 rounded-xl bg-blue-200/10">
          <h2 class="flex items-center gap-2 text-xl font-bold tracking-wide lg:text-3xl font-display text-blue-950 dark:text-white">
            {{ t('videoLearningHeader') }}
          </h2>
          <div class="relative grid items-center justify-center overflow-hidden rounded-lg cursor-not-allowed aspect-w-16 aspect-h-9 group">
            <img
              src="https://res.cloudinary.com/dwjulenau/image/upload/ar_16:9,c_scale,dpr_auto,f_auto,fl_progressive,q_auto,w_1600/v1721237169/LogATot/screen-grab-2.jpg"
              class="rounded-lg"
              alt=""
              loading="lazy"
            >
            <div class="inset-0 transition-all duration-300 bg-blue-950/10 group-hover:backdrop-blur-sm" />
            <IconPlay class="absolute z-50 w-20 h-20 text-black transform -translate-x-1/2 -translate-y-1/2 lg:w-32 lg:h-32 top-1/2 left-1/2" />
          </div>
          <FormVideo />
        </div>
      </div>
      <div class="lg:col-span-2">
        <ul class="divide-y divide-blue-100 cursor-not-allowed">
          <li
            v-for="(video, index) in page?.data.slices[1].primary.video"
            :key="index"
            class="p-2"
          >
            {{ video.title }}
          </li>
        </ul>
      </div>
    </div>
  </Bounded>
</template>
