<script setup>
  defineProps({
    links: {
      type: [Object, Array],
      required: true
    }
  })
</script>
<template>
  <div class="w-full max-w-full overflow-x-scroll">
    <ol
      role="list"
      class="flex items-center"
      aria-label="Breadcrumb"
    >
      <li class="">
        <NuxtLink
          to="/"
          class="flex items-center text-gray-500 hover:text-gray-6å00"
        >
          <IconHome
            class="flex-shrink-0 w-5 h-5"
            aria-hidden="true"
          />
          <span class="sr-only">Home</span>
        </NuxtLink>
      </li>
      <li
        v-for="(link, index) in links"
        :key="index"
      >
        <NuxtLink
          :to="link.to"
          class="flex items-center text-gray-400 truncate hover:text-gray-500 whitespace-nowrap"
        >
          <IconChevronRight
            class="flex-shrink-0 w-5 h-5 text-gray-500"
            aria-hidden="true"
          />
          {{ link.text }}
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>
