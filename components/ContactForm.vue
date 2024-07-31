<script setup>
  const { t } = useI18n({
    useScope: 'local'
  })
  const form = ref({
    email: '',
    phone: '',
    description: ''
  })

  const displaySuccess = ref(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('https://logatot.com/waitlist_signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({...form.value})
      })

      if (response.ok) {
        // If the response is OK (status 200-299), show the success message
        displaySuccess.value = true
        // clear the form
        form.value = {
          email: '',
          description: '',
          phone: ''
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
<i18n lang="json">
{
  "en": {
    "header": "Select a Language" ,
    "email": "Email",
    "phone": "Phone Number",
    "description": "Description",
    "contact": "Contact Us",
    "spam": "Absolutely no spam guaranteed.",
    "success_message": "Thank you. We have received the information you provided and will be in touch soon."

  },
  "es": {
    "header": "Seleccionar un Idioma",
    "email": "Correo Electrónico",
    "phone": "Número de Teléfono",
    "description": "Descripción",
    "contact": "Contáctenos",
    "spam": "Absolutamente sin spam garantizado.",
    "success_message": "Gracias. Hemos recibido la información que proporcionó y nos pondremos en contacto pronto."
  }
}
</i18n>
<template>
  <div
    class="w-full"
  >
    <div class="flex flex-col gap-y-3">
      <h2 class="font-semibold">
        {{ t('contact') }}
      </h2>
      <NotificationSuccess
        v-if="displaySuccess"
        icon="mdi:email-check-outline"
        :text="t('success_message')"
      />
      <form
        v-if="!displaySuccess"
        class="space-y-4"
        @submit="handleSubmit"
      >
        <div>
          <FormInput
            v-model="form.email"
            :label="t('email')"
            placeholder="you@email.com"
            type="email"
          />
        </div>
        <div>
          <FormInput
            v-model="form.phone"
            :label="t('phone')"
            placeholder="123-456-7890"
            type="tel"
          />
        </div>
        <div>
          <FormTextArea
            v-model="form.description"
            :label="t('description')"
          />
        </div>
        <button
          id="recaptcha-button"
          type="submit"
          class="btn btn-primary"
        >
          {{ t('contact') }}
        </button>
      </form>
    </div>
    <p class="mt-2 text-sm leading-6">
      {{ t('spam') }}
    </p>
  </div>
</template>
