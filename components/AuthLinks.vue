<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useSettings } from '~/composables/useSettings'

  const { t } = useI18n({
    useScope: 'local'
  })

  const settings = useSettings()
  const displayMenu = ref(false)

  const toggleMenu = (event: MouseEvent) => {
    event.stopPropagation()
    displayMenu.value = !displayMenu.value
    if (displayMenu.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMenu = (event: MouseEvent) => {
    const displayMenuElement = document.querySelector('#locale-nav .relative > div')
    if (displayMenuElement && !displayMenuElement.contains(event.target as Node)) {
      displayMenu.value = false
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
    "login": "Login"
  },
  "es": {
    "login": "Iniciar sesión"
  }
}
</i18n>

<template>
  <nav
    id="locale-nav"
    aria-label="Locale Selection"
  >
    <ul class="flex items-center gap-2">
      <li>
        <a
          class="border-2 rounded-md font-bold inline-flex gap-1 items-center transition-all duration-150 ease-in-out focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-150 ease-in-out border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 px-3 py-1"
          :href="settings.data.footer_nav_web_app[2].link_url.url"
          target="_blank"
        >{{ settings.data.footer_nav_web_app[2].link_text }}</a>
      </li>
      <li class="relative">
        <button
          type="button"
          class="border-2 rounded-md font-bold inline-flex gap-1 items-center transition-all duration-150 ease-in-out focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-150 ease-in-out border-blue-600 bg-transparent hover:bg-blue-500 hover:border-blue-500 text-blue-600 dark:text-white/90 hover:text-white dark:hover:text-white px-3 py-1"
          :aria-expanded="displayMenu"
          aria-haspopup="true"
          @click="toggleMenu"
        >
          <span>{{ t('login') }}</span>
        </button>
        <div
          v-if="displayMenu"
          class="absolute top-0 right-0 z-50 bg-white shadow-xl p-2 transform translate-y-1/2 rounded-lg w-64"
        >
          <ul class="divide-y divide-blue-100 font-normal">
            <li>
              <a
                :href="settings.data.footer_nav_web_app[0].link_url.url"
                target="_blank"
                class="p-2 flex items-center gap-3 hover:bg-blue-50"
              >
                <Icon
                  name="material-symbols:location-home"
                  class="h-6 w-6"
                />
                {{ settings.data.footer_nav_web_app[0].link_text }}
              </a>
            </li>
            <li>
              <a
                :href="settings.data.footer_nav_web_app[1].link_url.url"
                target="_blank"
                class="p-2 flex items-center gap-3 hover:bg-blue-50"
              >
                <Icon
                  name="material-symbols:family-restroom-sharp"
                  class="h-6 w-6"
                />
                {{ settings.data.footer_nav_web_app[1].link_text }}
              </a>
            </li>
          </ul>
        </div>
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
