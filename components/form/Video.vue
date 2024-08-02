
<script setup>
  import { object, string } from 'yup'
  const { t } = useI18n({
    useScope: 'local'
  })

  // Validation schema using Yup
  const validationSchema = object({
    first_name: string().required(t('firstNameError')),
    last_name: string().required(t('lastNameError')),
    email: string().required(t('emailError')).email(t('emailInvalid')),
    mobile_phone: string().required(t('phoneError')).matches(/^\d{3}-\d{3}-\d{4}$/, t('phoneInvalid')),
    company: string().required(t('companyError')),
    turnstile: string().required('Please verify you are human'),
  })

  // Setting up form and fields
  const { handleSubmit, submitCount } = useForm({
    validationSchema
  })

  const { value: first_name, errorMessage: firstNameError, handleChange: handleFirstNameChange } = useField('first_name')
  const { value: last_name, errorMessage: lastNameError, handleChange: handleLastNameChange } = useField('last_name')
  const { value: email, errorMessage: emailError, handleChange: handleEmailChange } = useField('email')
  const { value: company, errorMessage: companyError, handleChange: handleCompanyChange } = useField('company')
  const { value: mobile_phone, errorMessage: mobilePhoneError, handleChange: handleMobilePhoneChange } = useField('mobile_phone')
  const { value: turnstileValue } = useField('turnstile')


  const displaySuccess = ref(false)
  const onSubmit = handleSubmit(async (values) => {
  if (submitCount.value >= 3) {
    displayTooManyAttempts.value = true
    return
  }
  try {
    const response = await fetch('https://lat-prod-328bdc03c593.herokuapp.com/video_library_accesses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "video_library_access": values
      })
    })

    if (response.ok) {
      displaySuccess.value = true
      first_name.value = ''
      last_name.value = ''
      email.value = ''
      mobile_phone.value = ''
      company.value = ''
    } else {
      console.error('Failed to submit the form:', response.statusText)
    }
  } catch (error) {
    console.error('Error occurred during form submission:', error)
  }
})
</script>
<template>
  <NotificationSuccess
    v-if="displaySuccess"
    :text="t('success_message')"
  />
  <form
    v-if="!displaySuccess"
    novalidate
    class="block space-y-6"
    @submit="onSubmit"
  >
    <p>
      {{ t('description') }}
    </p>
    <div class="grid gap-6 lg:grid-cols-3">
      <div>
        <FormInput
          :model-value="first_name"
          :label="t('firstName')"
          placeholder="John"
          type="text"
          :error="firstNameError"
          required
          @change="handleFirstNameChange"
        />
      </div>

      <div>
        <FormInput
          :model-value="last_name"
          :label="t('lastName')"
          placeholder="Doe"
          type="text"
          :error="lastNameError"
          required
          @change="handleLastNameChange"
        />
      </div>

      <div>
        <FormInput
          :model-value="email"
          :label="t('email')"
          placeholder="john@doe.com"
          type="email"
          :error="emailError"
          required
          @change="handleEmailChange"
        />
      </div>
      <div>
        <FormInput
          :model-value="company"
          :label="t('company')"
          type="text"
          :error="companyError"
          required
          @change="handleCompanyChange"
        />
      </div>
      <div>
        <FormInput
          :model-value="mobile_phone"
          :label="t('phone')"
          placeholder="123-456-7890"
          type="text"
          :error="mobilePhoneError"
          required
          @change="handleMobilePhoneChange"
        />
      </div>
    </div>
    <div class="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
      <div>
        <NuxtTurnstile v-model="turnstileValue" />
      </div>
      <div>
        <button
          type="submit"
          class="btn btn-primary"
        >
          {{ t('submit') }}
        </button>
      </div>
    </div>
  </form>
</template>
<i18n lang="json">
{
  "en": {
    "description": "Please provide the following information to receive your personalized learning library link via email.",
    "firstName": "First Name",
    "firstNameError": "First Name is required",
    "lastName": "Last Name",
    "lastNameError": "Last Name is required",
    "email": "Email",
    "emailError": "Email is required",
    "emailInvalid": "Invalid email address",
    "company": "Business Name",
    "companyError": "Business Name is required",
    "phone": "Mobile Phone Number",
    "phoneError": "Mobile Phone Number is required",
    "phoneInvalid": "Invalid phone number. Use the format 555-456-7890",
    "submit": "Get Access to the Learning Library",
    "success_message": "Thank you. We have received the information you provided. Please check your email for directions to access our video library."
  },
  "es": {
    "description": "Proporcione la siguiente información para recibir su enlace personalizado a la biblioteca de aprendizaje por correo electrónico.",
    "firstName": "Nombre de pila",
    "firstNameError": "Nombre de pila es requerido",
    "lastName": "Apellido",
    "lastNameError": "Apellido es requerido",
    "email": "Correo Electrónico",
    "emailError": "Correo Electrónico es requerido",
    "emailInvalid": "Dirección de correo electrónico no válida",
    "company": "Nombre de la empresa",
    "companyError": "Nombre de la empresa es requerido",
    "phone": "Número de teléfono móvil",
    "phoneError": "Número de teléfono móvil es requerido",
    "phoneInvalid": "Número de teléfono no válido. Utilice el formato 555-456-7890",
    "submit": "Obtener acceso a la biblioteca de aprendizaje",
    "success_message": "Por favor revise su correo electrónico para obtener instrucciones para acceder a nuestra biblioteca de videos."
  }
}
</i18n>
