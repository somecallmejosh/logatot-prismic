<script setup>
  const { locale} = useI18n({
    useScope: 'local'
  })
  const switchLocalePath = useSwitchLocalePath()
</script>
<template>
  <nav
    id="locale-nav"
    aria-label="Locale Selection"
  >
    <ul class="flex items-center gap-2">
      <li>
        <NuxtLink
          :to="switchLocalePath('en-us')"
          class="flex items-center gap-1 p-2 rounded bg-blue-50/50 hover:bg-blue-50"
        >
          <template v-if="locale == 'en-us'">
            <Icon
              name="ic:sharp-check"
              class="text-blue-500 h-5 w-5"
            />
          </template>
          English
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="switchLocalePath('es-es')"
          class="flex items-center gap-1 p-2 rounded bg-blue-50/50 hover:bg-blue-50"
        >
          <template v-if="locale == 'es-es'">
            <Icon
              name="ic:sharp-check"
              class="text-blue-500 h-5 w-5"
            />
          </template>
          Espanol
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
#locale-nav a {
  @apply transition-colors duration-150 font-semibold;
}
#locale-nav .router-link-active {
  @apply text-blue-600 pr-4;
}
</style>
