<script setup lang="ts">
  import { components } from '~/slices'
  const { locale } = useI18n({
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
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
    class="w-full space-y-16"
  />
</template>
