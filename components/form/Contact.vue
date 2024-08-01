<script setup>
import { object, string } from 'yup'

const { t } = useI18n({
  useScope: 'local'
})

// Validation schema using Yup
const validationSchema = object({
  email: string().required('Email is required').email('Invalid email address'),
  phone: string().required('Phone number is required').matches(/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number. Use the format 555-456-7890'),
  description: string().required('Description is required'),
  turnstile: string().required('Please verify you are human'),
})

// Setting up form and fields
const { handleSubmit, submitCount } = useForm({
  validationSchema
})

const { value: email, errorMessage: emailError, handleChange: handleEmailChange } = useField('email')
const { value: phone, errorMessage: phoneError, handleChange: handlePhoneChange } = useField('phone')
const { value: description, errorMessage: descriptionError, handleChange: handleDescriptionChange } = useField('description')
const { value: turnstileValue } = useField('turnstile')


const displaySuccess = ref(false)
const displayTooManyAttempts = ref(false)
const onSubmit = handleSubmit(async (values) => {
  if (submitCount.value >= 3) {
    displayTooManyAttempts.value = true
    return
  }
  try {
    const response = await fetch('https://lat-prod-328bdc03c593.herokuapp.com/waitlist_signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(values)
    })

    if (response.ok) {
      displaySuccess.value = true
      // clear the form
      email.value = ''
      phone.value = ''
      description.value = ''
    } else {
      console.error('Failed to submit the form:', response.statusText)
    }
  } catch (error) {
    console.error('Error occurred during form submission:', error)
  }
})
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col gap-y-3">
      <h2 class="font-semibold">
        {{ t('contact') }}
      </h2>
      <NotificationError
        v-if="displayTooManyAttempts"
        icon="mdi:email-check-outline"
        :text="t('too_many_attempts')"
      />
      <NotificationSuccess
        v-if="displaySuccess"
        icon="mdi:email-check-outline"
        :text="t('success_message')"
      />
      <form
        v-if="!displaySuccess"
        novalidate
        class="space-y-4"
        @submit="onSubmit"
      >
        <div>
          <FormInput
            :model-value="email"
            :label="t('email')"
            placeholder="you@email.com"
            type="email"
            :error="emailError"
            required
            @change="handleEmailChange"
          />
        </div>
        <div>
          <FormInput
            :model-value="phone"
            :label="t('phone')"
            placeholder="555-456-7890"
            type="tel"
            :error="phoneError"
            required
            @change="handlePhoneChange"
          />
        </div>
        <div>
          <FormTextArea
            :model-value="description"
            :label="t('description')"
            :error="descriptionError"
            required
            @change="handleDescriptionChange"
          />
        </div>
        <div>
          <NuxtTurnstile v-model="turnstileValue" />
          <button
            type="submit"
            class="btn btn-primary"
          >
            {{ t('contact') }}
          </button>
        </div>
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
    "success_message": "Thank you. We have received the information you provided and will be in touch soon.",
    "too_many_attempts": "You have exceeded the maximum number of attempts. Please try again later."

  },
  "es": {
    "header": "Seleccionar un Idioma",
    "email": "Correo Electrónico",
    "phone": "Número de Teléfono",
    "description": "Descripción",
    "contact": "Contáctenos",
    "spam": "Absolutamente sin spam garantizado.",
    "success_message": "Gracias. Hemos recibido la información que proporcionó y nos pondremos en contacto pronto.",
    "too_many_attempts": "Ha excedido el número máximo de intentos. Por favor, inténtelo de nuevo más tarde."
  }
}
</i18n>
