<script setup>
  const { t } = useI18n({
    useScope: 'local'
  })
  const settings = useSettings()
  const offscreenVisible = ref(false)

  const toggleOffscreen = (event) => {
    event.stopPropagation()
    offscreenVisible.value = !offscreenVisible.value
    if (offscreenVisible.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMenu = (event) => {
    const offscreenVisibleElement = document.querySelector('#slide-over-menu')
    if (offscreenVisibleElement && !offscreenVisibleElement.contains(event.target)) {
      offscreenVisible.value = false
      document.body.style.overflow = ''
    }
  }

  onMounted(() => {
    document.addEventListener('click', closeMenu)
  })

  onUnmounted(() => {
    document.removeEventListener('click', closeMenu)
  })
</script>

<i18n lang="json">
{
  "en": {
    "language": "Select a Language",
    "tagline": "Use Your Voice!"
  },
  "es": {
    "language": "Seleccionar un Idioma",
    "tagline": "¡Usa tu Voz!"
  }
}
</i18n>

<template>
  <div
    class="relative"
    :class="offscreenVisible ? 'z-10' : 'z-[-10]'"
    aria-labelledby="slide-over-title"
    role="dialog"
    aria-modal="true"
  >
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div
      v-if="offscreenVisible"
      class="fixed inset-0 bg-black/10"
    />

    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div
          id="slide-over-menu"
          class="fixed inset-y-0 right-0 flex max-w-full pl-10 transition-transform duration-200 pointer-events-none"
          :class="offscreenVisible ? 'translate-x-0' : 'translate-x-full'"
        >
          <div class="w-screen max-w-md pointer-events-auto">
            <div class="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl">
              <div class="flex flex-col flex-1 min-h-0 py-6 overflow-y-scroll">
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <Logo class="h-10 text-blue-600" />
                    <div class="flex items-center ml-3 h-7">
                      <button @click="toggleOffscreen">
                        <IconClose
                          class="text-blue-500 h-7 w-7"
                        />
                        <span class="sr-only">Toggle Mobile Menu Visibility</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex-1 px-4 mt-6 sm:px-6">
                  <nav class="mb-6">
                    <ul
                      class="px-4 divide-y divide-blue-50"
                      @click="toggleOffscreen"
                    >
                      <li
                        v-for="item in settings.data.footer_nav_website"
                        :key="item.link_url.id"
                      >
                        <NuxtLink
                          :to="localePath(item.link_url.url)"
                          class="block py-4 font-semibold text-blue-900"
                        >
                          {{ item.link_text }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <ul
                      class="px-4 divide-y rounded-lg divide-blue-50 bg-blue-50/50"
                      @click="toggleOffscreen"
                    >
                      <li>
                        <a
                          :href="settings.data.footer_nav_web_app[0].link_url.url"
                          target="_blank"
                          class="flex items-center gap-3 py-4 font-semibold text-blue-900"
                        >
                          <IconHome
                            class="w-6 h-6"
                          />
                          {{ settings.data.footer_nav_web_app[0].link_text }}
                        </a>
                      </li>
                      <li>
                        <a
                          :href="settings.data.footer_nav_web_app[1].link_url.url"
                          target="_blank"
                          class="flex items-center gap-3 py-4 font-semibold text-blue-900"
                        >
                          <IconFamily
                            class="w-6 h-6"
                          />
                          {{ settings.data.footer_nav_web_app[1].link_text }}
                        </a>
                      </li>
                      <li>
                        <a
                          :href="settings.data.footer_nav_web_app[2].link_url.url"
                          target="_blank"
                          class="flex items-center gap-3 py-4 font-semibold text-blue-900"
                        >
                          <IconKey
                            class="w-6 h-6"
                          />{{ settings.data.footer_nav_web_app[2].link_text }}</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="flex items-center flex-shrink-0 gap-2 px-4 py-4">
                <LocaleSelection />
                <p>{{ t('language') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header class="bg-white shadow">
    <Bounded class="flex justify-between py-6 space-x-4">
      <div class="flex items-center gap-4">
        <NuxtLink
          :to="localePath('index')"
          class="flex items-center flex-1 -translate-y-[10px]"
        >
          <Logo class="h-12 text-blue-600" />
          <span class="sr-only">Home Page</span>
        </NuxtLink>
        <p class="text-xs font-bold tracking-widest uppercase">
          {{ t('tagline') }}
        </p>
      </div>

      <ul
        class="items-center hidden gap-4 xl:flex"
      >
        <li
          v-for="item in settings.data.main_nav"
          :key="item.link_url.id"
        >
          <NuxtLink
            :to="localePath(item.link_url.url)"
            class="font-semibold text-blue-900"
          >
            {{ item.link_text }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex items-center gap-6">
        <AuthLinks class="hidden lg:flex" />
        <LocaleSelection class="hidden lg:flex" />
        <button class="xl:hidden">
          <IconMenu
            class="w-6 h-6 text-blue-500"
            @click="toggleOffscreen"
          />
          <span class="sr-only">Toggle Mobile Menu Visibility</span>
        </button>
      </div>
    </Bounded>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-blue-600
}
</style>
