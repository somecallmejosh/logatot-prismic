<script setup lang="ts">
    const { t } = useI18n({
    useScope: 'local'
  })
  const settings = useSettings()
  const offscreenVisible = ref(false)
  const toggleOffscreen = () => {
    offscreenVisible.value = !offscreenVisible.value
    if (offscreenVisible.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
</script>
<i18n lang="json">
{
  "en": {
    "language": "Select a Language"
  },
  "es": {
    "language": "Seleccionar un Idioma"
  }
}
</i18n>
<template>
  <div class="relative z-100">
    <div
      :class="offscreenVisible ? 'translate-x-0' : 'translate-x-full'"
      class="fixed inset-0 bg-black/10"
      @click="toggleOffscreen"
    />
    <div
      :class="offscreenVisible ? 'translate-x-0' : 'translate-x-full'"
      class="fixed top-0 right-0 z-50 flex flex-col w-full h-screen max-h-screen p-4 pb-0 transition-transform duration-300 ease-in-out transform bg-white shadow-xl"
    >
      <div class="flex items-center justify-between gap-2 mb-2">
        <Logo class="h-10 text-blue-600" />
        <button>
          <Icon
            name="mdi:close-circle-outline"
            class="text-blue-500 h-7 w-7"
            @click="toggleOffscreen"
          />
          <span class="sr-only">Toggle Mobile Menu Visibility</span>
        </button>
      </div>
      <div class="flex flex-col flex-1 gap-4 overflow-y-scroll">
        <nav>
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
                <Icon
                  name="material-symbols:location-home"
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
                <Icon
                  name="material-symbols:family-restroom-sharp"
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
                <Icon
                  name="mdi:key-variant"
                  class="w-6 h-6"
                />{{ settings.data.footer_nav_web_app[2].link_text }}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center justify-between py-2 pl-6 pr-4 -mx-4 bg-blue-50/50">
        <p class="font-semibold">
          {{ t('language') }}
        </p>
        <LocaleSelection />
      </div>
    </div>
  </div>
  <header class="bg-white shadow">
    <Bounded class="flex justify-between py-6 space-x-4">
      <NuxtLink
        :to="localePath('index')"
        class="flex items-center flex-1"
      >
        <Logo class="h-12 text-blue-600" />
        <span class="sr-only">Home Page</span>
      </NuxtLink>

      <ul
        class="items-center hidden gap-4 lg:flex"
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
        <button class="lg:hidden">
          <Icon
            name="material-symbols:menu"
            class="w-5 h-5 text-blue-500"
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
