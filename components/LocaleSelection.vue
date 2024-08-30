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
          class="flex items-center p-0.5 border rounded-full hover:bg-blue-50"
          :class="locale == 'en-us' ? 'border-blue-500/100' : 'border-blue-500/20'"
        >
          <IconUs class="w-8 h-8 shrink-0" />
          <div class="sr-only">
            English
          </div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="switchLocalePath('es-es')"
          class="flex items-center p-0.5 border rounded-full hover:bg-blue-50"
          :class="locale == 'es-es' ? 'border-blue-500/100' : 'border-blue-500/20'"
        >
          <IconSpain class="w-8 h-8" />
          <div class="sr-only">
            Español
          </div>
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
  @apply text-blue-600;
}
</style>
