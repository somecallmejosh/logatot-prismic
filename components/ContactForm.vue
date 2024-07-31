<script setup>
  const { t } = useI18n({
    useScope: 'local'
  })

  const { value: email, errorMessage: emailError } = useField('email', function(value) {
    if (!value) {
      return 'Email is required'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Invalid email address'
    }
    return true
  })

  const {value: phone, errorMessage: phoneError} = useField('phone', function(value) {
    if (!value) {
      return 'Phone number is required'
    }
    if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) {
      return 'Invalid phone number. Use the format 555-456-7890'
    }
    return true
  })

  const {value: description, errorMessage: descriptionError} = useField('description', function(value) {
    if (!value) {
      return 'Description is required'
    }
    return true
  })

  const displaySuccess = ref(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('https://lat-prod-328bdc03c593.herokuapp.com/waitlist_signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email.value,
          phone: phone.value,
          description: description.value
        })
      })

      if (response.ok) {
        // If the response is OK (status 200-299), show the success message
        displaySuccess.value = true
        // clear the form
        email.value = '',
        description.value = '',
        phone.value = ''
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
            v-model="email"
            :label="t('email')"
            placeholder="you@email.com"
            type="email"
            :error="emailError"
          />
        </div>
        <div>
          <FormInput
            v-model="phone"
            :label="t('phone')"
            placeholder="555-456-7890"
            type="tel"
            :error="phoneError"
          />
        </div>
        <div>
          <FormTextArea
            v-model="description"
            :label="t('description')"
            :error="descriptionError"
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
