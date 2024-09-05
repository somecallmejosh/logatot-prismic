<script setup>
  import { useBlog } from '~/composables/useBlog'
  import { useFormatDate } from '~/composables/useFormatDate'

  const blog = useBlog()
</script>
<template>
  <Bounded class="py-12 space-y-12 lg:py-24">
    <h1 class="text-5xl font-bold font-display">
      Logatot Video Learning Library
    </h1>
    <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(entry, index ) in blog"
        :key="index"
        class="relative p-8 space-y-4 transition-all duration-150 rounded-lg hover:bg-blue-50 bg-blue-50/40 hover:shadow"
      >
        <h2 class="text-lg font-bold font-display">
          {{ entry.data.tite }}
        </h2>
        <p class="text-xs">
          {{ useFormatDate(entry.data.publish_date) }}
        </p>
        <p>{{ entry.data.meta_title }}</p>
        <NuxtLink
          :to="localePath(`/blog/${entry.uid}`)"
          class="absolute inset-0"
        />
      </li>
    </ul>
  </Bounded>
</template>
