<script setup>
  const settings = useSettings()
</script>
<template>
  <footer class="border-t border-blue-50/50 bg-blue-50/20 text-blue-950">
    <Bounded class="py-12 space-y-10 lg:py-24">
      <div class="grid gap-10 pb-12 lg:gap-12 lg:grid-cols-4">
        <div>
          <Logo class="h-12 text-blue-600" />
        </div>
        <nav
          class="space-y-4 text-sm slide-in"
        >
          <ul class="divide-y divide-blue-50 divide">
            <li
              v-for="(item, index) in settings?.data.footer_nav_website"
              :key="index"
            >
              <NuxtLink
                :to="localePath(item.link_url.url)"
                class="block py-3 no-underline transition-all duration-150 ease-in-out text-blue-950 hover:text-blue-800 hover:underline focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {{ item.link_text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <nav
          aria-label="App de Logatot"
          class="space-y-4 text-sm slide-in"
        >
          <ul class="divide-y divide-blue-50 divide">
            <li
              v-for="(link, index ) in settings?.data.footer_nav_web_app"
              :key="index"
              target="_blank"
            >
              <NuxtLink
                :to="localePath(link.link_url.url)"
                class="block py-3 no-underline transition-all duration-150 ease-in-out text-blue-950 hover:text-blue-800 hover:underline focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {{ link.link_text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="space-y-2">
          <FormContact />
        </div>
      </div>
      <div class="flex flex-col justify-between gap-6 pt-6 border-t border-blue-50 lg:flex-row">
        <nav
          aria-label="Social Media Links"
          class="flex"
        >
          <ul class="inline-flex items-center justify-start gap-4">
            <li class="ml-auto lg:ml-0">
              <prismic-link
                :field="settings?.data.facebook_link"
                class="text-blue-600 hover:text-blue-400"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-6 h-6 text-blue-600 transition hover:scale-105 hover:text-blue-400"
                  role="img"
                ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                <div class="sr-only">
                  Facebook
                </div>
              </prismic-link>
            </li>
            <li>
              <prismic-link
                :field="settings?.data.twitter_link"
                class="text-blue-600 hover:text-blue-400"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-6 h-6 text-blue-600 transition hover:scale-105 hover:text-blue-400"
                  role="img"
                ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>

                <div class="sr-only">
                  Twitter
                </div>
              </prismic-link>
            </li>
            <li>
              <prismic-link
                :field="settings?.data.instagram_link"
                class="text-blue-600 hover:text-blue-400"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="w-6 h-6 text-blue-600 transition hover:scale-105 hover:text-blue-400"
                  role="img"
                ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>

                <div class="sr-only">
                  Instagram
                </div>
              </prismic-link>
            </li>
            <li>
              <prismic-link
                :field="settings?.data.youtube_link"
                class="text-blue-600 hover:text-blue-400"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  class="w-8 h-8 text-blue-600 transition hover:scale-105 hover:text-blue-400"
                  role="img"
                ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>

                <div class="sr-only">
                  Youtube
                </div>
              </prismic-link>
            </li>
          </ul>
        </nav>
        <div class="space-y-2 text-xs text-gray-600 lg:text-right">
          <p class="">
            <span class="opacity-80">©</span>
            <span>{{ new Date().getFullYear() }} {{ settings?.data.companyname }}. All Rights Reserved</span>
          </p>
          <p>
            {{ settings?.data.companyname }} is Patent Pending
          </p>
        </div>
      </div>
    </bounded>
  </footer>
</template>
<style scoped>
.router-link-exact-active {
  @apply font-semibold;
}
</style>
