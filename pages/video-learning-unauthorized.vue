<i18n lang="json">
{
  "en": {
    "meta_title": "Video Learning Page",
    "meta_description": "This is the video learning page.",
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
    "meta_title": "Página de Aprendizaje de Video",
    "meta_description": "Esta es la página de aprendizaje de video.",
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

<script setup>
  const { locale, t } = useI18n({
    useScope: 'local'
  })

  const prismic = usePrismic()
  const { data: page } = useAsyncData('video-learning-unauthorized', () =>
    prismic.client.getByUID('page', 'video-learning', { lang: locale.value })
  )
  useSeoMeta({
    title: () => t('meta_title'),
    description: () => t('meta_description'),
    ogTitle: () => t('meta_title'),
    ogDescription: () => t('meta_description'),
  })
</script>

<template>
  <Bounded class="py-12 space-y-12 lg:py-24">
    <div class="grid gap-6 lg:grid-cols-7">
      <div class="col-span-5 space-y-6">
        <div class="p-6 space-y-6 rounded-xl bg-blue-200/10">
          <h2 class="flex items-center gap-2 text-xl font-bold tracking-wide lg:text-3xl font-display text-blue-950 dark:text-white">
            {{ t('header') }}
          </h2>
          <div class="relative grid items-center justify-center overflow-hidden rounded-lg cursor-not-allowed aspect-w-16 aspect-h-9 group">
            <img
              src="https://res.cloudinary.com/dwjulenau/image/upload/ar_16:9,c_scale,dpr_auto,f_auto,fl_progressive,q_auto,w_1600/v1721237169/LogATot/screen-grab-2.jpg"
              class="rounded-lg"
              alt=""
              loading="lazy"
            >
            <div class="inset-0 transition-all duration-300 bg-white/10 group-hover:backdrop-blur-sm" />
            <Icon
              name="material-symbols:play-circle-outline"
              class="absolute block w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          <p>{{ t('description') }}</p>
          <form
            class="space-y-6 contents"
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
                  for="video_library_access_firstName"
                >{{ t('firstName') }}</label>
                <input
                  id="video_library_access_firstName"
                  required="required"
                  class="input-field"
                  type="text"
                  name="video_library_access[firstName]"
                >
              </div>

              <div>
                <label
                  for="video_library_access_last_name"
                >{{ t('lastName') }}</label>
                <input
                  id="video_library_access_last_name"
                  required="required"
                  class="input-field"
                  type="text"
                  name="video_library_access[last_name]"
                >
              </div>

              <div>
                <label
                  for="video_library_access_email"
                >{{ t('email') }}</label>
                <input
                  id="video_library_access_email"
                  required="required"
                  class="input-field"
                  type="email"
                  name="video_library_access[email]"
                >
              </div>
              <div>
                <label
                  for="video_library_access_company"
                >{{ t('company') }}</label>
                <input
                  id="video_library_access_company"
                  required="required"
                  class="input-field"
                  type="text"
                  name="video_library_access[company]"
                >
              </div>
              <div>
                <label
                  for="video_library_access_mobile_phone"
                >{{ t('phone') }}</label>
                <input
                  id="video_library_access_mobile_phone"
                  required="required"
                  class="input-field"
                  type="text"
                  name="video_library_access[mobile_phone]"
                >
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="btn btn-primary"
              >
                {{ t('submit') }}
              </button>
            </div>
          </form>
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
