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
      class="fixed top-0 right-0 max-w-96 w-full bg-white h-screen max-h-screen shadow-xl p-4 pb-0 transition-transform duration-300 ease-in-out transform z-50 flex flex-col overflow-y-scroll"
    >
      <div class="flex justify-between items-center gap-2 mb-8">
        <Logo class="text-blue-600 h-12" />
        <button>
          <Icon
            name="mdi:close-circle-outline"
            class="text-blue-500 h-7 w-7"
            @click="toggleOffscreen"
          />
          <span class="sr-only">Toggle Mobile Menu Visibility</span>
        </button>
      </div>
      <div class="mb-4 flex items-center justify-between bg-blue-50/50 py-2 px-4 -mx-4">
        <p class="font-semibold">
          {{ t('language') }}
        </p>
        <LocaleSelection />
      </div>
      <nav>
        <ul
          class="divide-y divide-blue-50"
          @click="toggleOffscreen"
        >
          <li
            v-for="item in settings.data.footer_nav_website"
            :key="item.link_url.id"
          >
            <NuxtLink
              :to="localePath(item.link_url.url)"
              class="text-blue-900 font-semibold py-4 block"
            >
              {{ item.link_text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="mt-auto">
        <ul
          class="divide-y divide-blue-50 mt-8 bg-blue-50/50 -mx-4 p-4"
          @click="toggleOffscreen"
        >
          <li>
            <a
              :href="settings.data.footer_nav_web_app[0].link_url.url"
              target="_blank"
              class="text-blue-900 font-semibold py-4 flex items-center gap-3"
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
              class="text-blue-900 font-semibold py-4 flex items-center gap-3"
            >
              <Icon
                name="material-symbols:family-restroom-sharp"
                class="h-6 w-6"
              />
              {{ settings.data.footer_nav_web_app[1].link_text }}
            </a>
          </li>
          <li>
            <a
              :href="settings.data.footer_nav_web_app[2].link_url.url"
              target="_blank"
              class="text-blue-900 font-semibold py-4 flex items-center gap-3"
            >
              <Icon
                name="mdi:key-variant"
                class="h-6 w-6"
              />{{ settings.data.footer_nav_web_app[2].link_text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <header class="bg-white shadow">
    <Bounded class="py-6 flex justify-between">
      <NuxtLink
        :to="localePath('index')"
        class="flex items-center"
      >
        <Logo class="h-12 text-blue-600" />
        <span class="sr-only">Home Page</span>
      </NuxtLink>

      <ul
        class="items-center gap-4 hidden lg:flex"
      >
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
      <div class="flex items-center gap-6">
        <AuthLinks class="hidden lg:flex" />
        <LocaleSelection class="hidden lg:flex" />
        <button class="lg:hidden">
          <Icon
            name="material-symbols:menu"
            class="text-blue-500 h-5 w-5"
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
