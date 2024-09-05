<i18n lang="json">
{
  "en": {
    "posted": "Posted",
    "by": "by"
  },
  "es": {
    "posted": "Publicado",
    "by": "por"
  }
}
</i18n>
<script setup>
  import { useBlog } from '~/composables/useBlog'
  import { useFormatDate } from '~/composables/useFormatDate'
  const { t } = useI18n({
    useScope: 'local'
  })
  const blog = useBlog()
</script>
<template>
  <Bounded class="py-12 space-y-12 lg:py-24">
    <h1 class="text-5xl font-bold font-display">
      Logatot Blog
    </h1>
    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(entry, index ) in blog"
        :key="index"
        class="relative p-8 space-y-4 transition-all duration-150 rounded-lg lg:p-12 hover:bg-blue-50 bg-blue-50/40 hover:shadow group"
      >
        <div class="space-y-2">
          <h2 class="text-xl font-bold font-display group-hover:underline">
            {{ entry.data.tite }}
          </h2>
          <p class="text-xs opacity-80">
            {{ t('posted') }} {{ useFormatDate(entry.data.publish_date) }}<br>{{ t('by') }} {{ entry.data.author }}
          </p>
        </div>
        <p class="opacity-80">
          {{ entry.data.meta_title }}
        </p>
        <NuxtLink
          :to="localePath(`/blog/${entry.uid}`)"
          class="absolute inset-0"
        />
      </li>
    </ul>
  </Bounded>
</template>
