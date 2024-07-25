<script setup lang="ts">
  const settings = useSettings()
</script>
<template>
  <header class="bg-white shadow">
    <Bounded class="py-6 flex justify-between">
      <NuxtLink
        :to="localePath('index')"
        class="flex items-center"
      >
        <Logo class="h-12 text-blue-600" />
        <span class="sr-only">Home Page</span>
      </NuxtLink>

      <ul class="flex items-center gap-4">
        <li
          v-for="item in settings.data.main_nav"
          :key="item.link_url.id"
        >
          <NuxtLink
            :to="localePath(item.link_url.url)"
            class="text-blue-900 font-semibold"
          >
            {{ item.link_text }}
          </NuxtLink>
        </li>
      </ul>
      <LocaleSelection />
    </Bounded>
  </header>
</template>
<style scoped>
.router-link-exact-active {
  @apply text-blue-600
}
</style>
