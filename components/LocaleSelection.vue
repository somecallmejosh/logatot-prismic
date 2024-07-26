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
        <a
          :href="switchLocalePath('en-us')"
          class="flex items-center p-1 rounded-full border  hover:bg-blue-50"
          :class="locale == 'en-us' ? 'border-blue-500/100' : 'border-blue-500/20'"
        >
          <Icon
            name="emojione:flag-for-united-states"
            class="h-6 w-6"
          />
        </a>
      </li>
      <li>
        <a
          :href="switchLocalePath('es-es')"
          class="flex items-center p-1 rounded-full border  hover:bg-blue-50"
          :class="locale == 'es-es' ? 'border-blue-500/100' : 'border-blue-500/20'"
        >
          <Icon
            name="emojione:flag-for-spain"
            class="text-blue-500 h-6 w-6"
          />
        </a>
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
