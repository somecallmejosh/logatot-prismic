<script setup>
  const { t } = useI18n({
    useScope: 'local'
  })

  const onSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    console.log(data)
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
    "spam": "Absolutely no spam guaranteed."
  },
  "es": {
    "header": "Seleccionar un Idioma",
    "email": "Correo Electrónico",
    "phone": "Número de Teléfono",
    "description": "Descripción",
    "contact": "Contáctenos",
    "spam": "Absolutamente sin spam garantizado."
  }
}
</i18n>
<template>
  <form
    class="w-full"
    action="/waitlist_signup?locale=es"
    method="post"
    @submit="onSubmit"
  >
    <div class="flex flex-col gap-y-3">
      <h2 class="font-semibold">
        {{ t('contact') }}
      </h2>
      <div>
        <label
          for="email"
        >{{ t('email') }}</label>
        <input
          id="email"
          required="required"
          placeholder="you@email.com"
          type="email"
          name="email"
        >
      </div>
      <div>
        <label
          for="phone"
        >{{ t('phone') }}</label>
        <input
          id="phone"
          type="tel"
          name="phone"
        >
      </div>
      <div>
        <label
          for="description"
        >{{ t('description') }}</label>
        <textarea
          id="description"
          required="required"
          name="description"
        />
      </div>
      <button
        id="recaptcha-button"
        type="submit"
      >
        {{ t('contact') }}
      </button>
    </div>
    <p class="mt-2 text-sm leading-6">
      {{ t('spam') }}
    </p>
  </form>
</template>
<style scoped>
button {
  @apply border-2 rounded-md font-bold inline-flex gap-1 items-center focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-150 ease-in-out border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 px-3 py-1 shrink-0 justify-center;
}

div > div{
  @apply space-y-1;

}
label {
  @apply font-semibold text-gray-900;
}
input {
  @apply h-10;
}

input, textarea {
  @apply border-gray-300 text-gray-900 focus:outline-none focus-visible:ring-blue-600 focus:border-blue-600 placeholder:italic placeholder:text-slate-400 sm:text-sm block w-full px-3 bg-white border rounded shadow-sm
}

textarea {
  @apply min-h-32 p-4;
}
</style>
