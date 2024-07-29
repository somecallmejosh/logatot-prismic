<script setup>
  const { locale, t } = useI18n({
    useScope: 'local'
  })
  const prismic = usePrismic()
  const { data: page } = useAsyncData('video-learning-unauthorized', () =>
    prismic.client.getByUID('page', 'video-learning', { lang: locale.value })
  )
</script>
<i18n lang="json">
{
  "en": {
    "header": "Get Access To Our Learning Library",
    "description": "Please provide the following information to receive your personalized learning library link via email.",
    "firstName": "First Name",
    "lastName": "Last Name",
    "email": "Email",
    "company": "Business Name",
    "phone": "Mobile Phone Number",
    "submit": "Get Access to the Learning Library"
  },
  "es": {
    "header": "Obtenga acceso a nuestra biblioteca de aprendizaje",
    "description": "Proporcione la siguiente información para recibir su enlace personalizado a la biblioteca de aprendizaje por correo electrónico.",
    "firstName": "Nombre de pila",
    "lastName": "Apellido",
    "email": "Correo Electrónico",
    "company": "Nombre de la empresa",
    "phone": "Número de teléfono móvil",
    "submit": "Obtener acceso a la biblioteca de aprendizaje"
  }
}
</i18n>
<template>
  <Bounded class="space-y-12 py-12 lg:py-24">
    <div class="grid lg:grid-cols-7 gap-6">
      <div class="col-span-5 space-y-6">
        <div class="p-6 space-y-2 rounded-lg bg-blue-500/10">
          <h2 class="text-xl lg:text-3xl tracking-wide font-display text-blue-950 dark:text-white flex items-center gap-2 font-bold">
            {{ t('header') }}
          </h2>
          <p>{{ t('description') }}</p>
          <form
            class="contents space-y-6"
            action="/video_library_accesses?locale=en"
            accept-charset="UTF-8"
            method="post"
          >
            <input
              type="hidden"
              name="authenticity_token"
              value="tf06yPZsTVjwXbqPBxSmoVk1y-QnWf-StfMrEoYHZH1IZqYEQKfVt8oIwxUOKQuHTjbd6t2dLULTkQ4Rq-aqlg"
              autocomplete="off"
            >

            <div class="grid gap-6 lg:grid-cols-3">
              <div>
                <label
                  class="block font-semibold text-gray-700 dark:text-white mb-2"
                  for="video_library_access_first_name"
                >{{ t('firstName') }}</label>
                <input
                  id="video_library_access_first_name"
                  required="required"
                  class="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 print:bg-gray-200 print:text-black dark:print:text-black focus:outline-none focus-visible:ring-blue-600 focus:border-blue-600 placeholder:italic placeholder:text-slate-400 sm:text-sm block w-full h-10 px-3 bg-white border rounded shadow-sm"
                  type="text"
                  name="video_library_access[first_name]"
                >
              </div>

              <div>
                <label
                  class="block font-semibold text-gray-700 dark:text-white mb-2"
                  for="video_library_access_last_name"
                >{{ t('lasttName') }}</label>
                <input
                  id="video_library_access_last_name"
                  required="required"
                  class="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 print:bg-gray-200 print:text-black dark:print:text-black focus:outline-none focus-visible:ring-blue-600 focus:border-blue-600 placeholder:italic placeholder:text-slate-400 sm:text-sm block w-full h-10 px-3 bg-white border rounded shadow-sm"
                  type="text"
                  name="video_library_access[last_name]"
                >
              </div>

              <div>
                <label
                  class="block font-semibold text-gray-700 dark:text-white mb-2"
                  for="video_library_access_email"
                >{{ t('email') }}</label>
                <input
                  id="video_library_access_email"
                  required="required"
                  class="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 print:bg-gray-200 print:text-black dark:print:text-black focus:outline-none focus-visible:ring-blue-600 focus:border-blue-600 placeholder:italic placeholder:text-slate-400 sm:text-sm block w-full h-10 px-3 bg-white border rounded shadow-sm"
                  type="email"
                  name="video_library_access[email]"
                >
              </div>
              <div>
                <label
                  class="block font-semibold text-gray-700 dark:text-white mb-2"
                  for="video_library_access_company"
                >{{ t('company') }}</label>
                <input
                  id="video_library_access_company"
                  required="required"
                  class="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 print:bg-gray-200 print:text-black dark:print:text-black focus:outline-none focus-visible:ring-blue-600 focus:border-blue-600 placeholder:italic placeholder:text-slate-400 sm:text-sm block w-full h-10 px-3 bg-white border rounded shadow-sm"
                  type="text"
                  name="video_library_access[company]"
                >
              </div>
              <div>
                <label
                  class="block font-semibold text-gray-700 dark:text-white mb-2"
                  for="video_library_access_mobile_phone"
                >{{ t('phone') }}</label>
                <input
                  id="video_library_access_mobile_phone"
                  required="required"
                  class="border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 print:bg-gray-200 print:text-black dark:print:text-black focus:outline-none focus-visible:ring-blue-600 focus:border-blue-600 placeholder:italic placeholder:text-slate-400 sm:text-sm block w-full h-10 px-3 bg-white border rounded shadow-sm"
                  type="text"
                  name="video_library_access[mobile_phone]"
                >
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="border-2 rounded-md font-bold inline-flex gap-1 items-center transition-all duration-150 ease-in-out focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-150 ease-in-out border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 px-3 py-1"
              >
                {{ t('submit') }}
              </button>
            </div>
          </form>
        </div>
        <div class="w-full relative overflow-hidden rounded-lg shadow aspect-w-16 aspect-h-9">
          <img
            src="https://res.cloudinary.com/dwjulenau/image/upload/ar_16:9,c_scale,dpr_auto,f_auto,fl_progressive,q_auto,w_1600/v1721237169/LogATot/screen-grab-2.jpg"
            class="object-fit"
            alt=""
            loading="lazy"
          >
        </div>
      </div>
      <div class="col-span-2">
        <ul class="divide-y divide-blue-100 cursor-not-allowed">
          <li
            v-for="(video, index) in page?.data.slices[1].primary.video"
            :key="index"
            class="p-2"
          >
            {{ video.title }}
          </li>
        </ul>
      </div>
    </div>
  </Bounded>
</template>
