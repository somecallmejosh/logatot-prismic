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
    "submit": "Get Access to the Learning Library",
    "success_message": "Thank you. We have received the information you provided. Please check your email for directions to access our video library."
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
    "submit": "Obtener acceso a la biblioteca de aprendizaje",
    "success_message": "Por favor revise su correo electrónico para obtener instrucciones para acceder a nuestra biblioteca de videos."
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

  const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    mobile_phone: ''
  })

  const displaySuccess = ref(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('https://lat-prod-328bdc03c593.herokuapp.com/video_library_accesses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "video_library_access": {...form.value}
        })
      })

      if (response.ok) {
        // If the response is OK (status 200-299), show the success message
        displaySuccess.value = true
        // clear the form
        form.value = {
          first_name: '',
          last_name: '',
          email: '',
          company: '',
          mobile_phone: ''
        }
      } else {
        // Handle errors here if needed
        console.error('Failed to submit the form:', response.statusText)
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error)
    }
  }
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
          <p>
            {{ t('description') }}
          </p>
          <NotificationSuccess
            v-if="displaySuccess"
            icon="mdi:email-check-outline"
            :text="t('success_message')"
          />
          <form
            v-if="!displaySuccess"
            class="block space-y-6"
            @submit="handleSubmit"
          >
            <div class="grid gap-6 lg:grid-cols-3">
              <div>
                <FormInput
                  v-model="form.first_name"
                  :label="t('firstName')"
                  placeholder="John"
                  type="text"
                />
              </div>

              <div>
                <FormInput
                  v-model="form.last_name"
                  :label="t('lastName')"
                  placeholder="Doe"
                  type="text"
                />
              </div>

              <div>
                <FormInput
                  v-model="form.email"
                  :label="t('email')"
                  placeholder="john@doe.com"
                  type="email"
                />
              </div>
              <div>
                <FormInput
                  v-model="form.company"
                  :label="t('company')"
                  type="text"
                />
              </div>
              <div>
                <FormInput
                  v-model="form.mobile_phone"
                  :label="t('phone')"
                  placeholder="123-456-7890"
                  type="tel"
                />
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
