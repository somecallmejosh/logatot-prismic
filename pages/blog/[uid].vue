<i18n lang="json">
{
  "en": {
    "salutation": "With Gratitude,",
    "posted": "Posted",
    "by": "by"
  },
  "es": {
    "salutation": "Con gratitud,",
    "posted": "Publicado",
    "by": "por"
  }
}
</i18n>
<script setup lang="ts">
  import { components } from '~/slices'
  import { useFormatDate } from '~/composables/useFormatDate'
  const { locale, t } = useI18n({
    useScope: 'local'
  })
  const prismic = usePrismic()
  const route = useRoute()
  const { data: page } = useAsyncData(route.params.uid as string, () =>
    prismic.client.getByUID('blog', route.params.uid as string, { lang: locale.value })
  )

  useSeoMeta({
    title: () => page.value?.data.meta_title,
    description: () => page.value?.data.meta_description,
    ogTitle: () => page.value?.data.meta_title,
    ogDescription: () => page.value?.data.meta_description,
  })

  // Apply middleware only to specific pages
  if (route.params.uid === 'video-learning') {
    definePageMeta({
      middleware: 'auth',
    });
  }
</script>

<template>
  <div>
    <div class="w-full max-w-[65ch] mx-auto mt-16 lg:mt-24 px-6 sm:px-0 md:px-0 space-y-4 -mb-16">
      <h1 class="text-4xl font-bold font-display">
        {{ page?.data.tite }}
      </h1>
      <p class="text-sm opacity-70">
        {{ t('posted') }} {{ useFormatDate(page?.data.publish_date) }}<br>{{ t('by') }} {{ page?.data.author }}
      </p>
    </div>
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
      class="w-full space-y-16"
    />
    <div class="mx-auto -mt-16 prose">
      <p>{{ t('salutation') }}<br>{{ page?.data.author }}</p>
    </div>
  </div>
</template>
