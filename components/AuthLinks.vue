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
          class="btn btn-primary"
          :href="settings.data.footer_nav_web_app[2].link_url.url"
          target="_blank"
        >{{ settings.data.footer_nav_web_app[2].link_text }}</a>
      </li>
      <li class="relative">
        <button
          type="button"
          class="btn btn-outline"
          :aria-expanded="displayMenu"
          aria-haspopup="true"
          @click="toggleMenu"
        >
          <span>{{ t('login') }}</span>
        </button>
        <div
          v-if="displayMenu"
          class="absolute top-0 right-0 z-50 w-64 p-2 transform translate-y-1/2 bg-white rounded-lg shadow-xl"
        >
          <ul class="font-normal divide-y divide-blue-100">
            <li>
              <a
                :href="settings.data.footer_nav_web_app[0].link_url.url"
                target="_blank"
                class="flex items-center gap-3 p-2 hover:bg-blue-50"
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
                class="flex items-center gap-3 p-2 hover:bg-blue-50"
              >
                <IconFamily
                  class="w-6 h-6"
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
