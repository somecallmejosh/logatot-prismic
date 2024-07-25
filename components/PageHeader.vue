<script setup lang="ts">
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
<template>
  <div class="relative z-100">
    <div
      :class="offscreenVisible ? 'translate-x-0' : 'translate-x-full'"
      class="fixed inset-0 bg-black/10"
      @click="toggleOffscreen"
    />
    <div
      :class="offscreenVisible ? 'translate-x-0' : 'translate-x-full'"
      class="fixed top-0 right-0 max-w-96 w-full bg-white h-screen shadow-xl p-4 transition-transform duration-300 ease-in-out transform z-50"
    >
      <div class="flex justify-between items-center gap-2">
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
      <nav>
        <ul class="py-6 divide-y divide-blue-50">
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
        <LocaleSelection />
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

      <ul class="items-center gap-4 hidden lg:flex">
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
      <LocaleSelection class="hidden lg:flex" />
      <button class="lg:hidden">
        <Icon
          name="material-symbols:menu"
          class="text-blue-500 h-5 w-5"
          @click="toggleOffscreen"
        />
        <span class="sr-only">Toggle Mobile Menu Visibility</span>
      </button>
    </Bounded>
  </header>
</template>
<style scoped>
.router-link-exact-active {
  @apply text-blue-600
}
</style>
