<script setup lang="ts">
  import { components } from '~/slices'

  const { locale } = useI18n({
    useScope: 'local'
  })

  const prismic = usePrismic()
  const { data: page } = useAsyncData('index', () =>
    prismic.client.getByUID('page', 'home', { lang: locale.value })
  )

  useSeoMeta({
    title: page.value?.data.meta_title,
    description: page.value?.data.meta_description,
  })
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
    class="w-full space-y-16"
  />
</template>
