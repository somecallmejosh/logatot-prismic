<script setup lang="ts">
import { components } from '~/slices'
const { locale } = useI18n({
  useScope: 'local'
})
const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(route.params.uid as string, () =>
  prismic.client.getByUID('page', route.params.uid as string, { lang: locale.value })
)

useHead({
  title: prismic.asText(page.value?.data.title),
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
