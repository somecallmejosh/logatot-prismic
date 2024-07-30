<script setup>

  const { t } = useI18n({
    useScope: 'local'
  })
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
  <div
    class="w-full"
  >
    <div class="flex flex-col gap-y-3">
      <h2 class="font-semibold">
        {{ t('contact') }}
      </h2>
      <form class="space-y-4">
        <div>
          <label
            for="email"
          >{{ t('email') }}</label>
          <input
            required="required"
            placeholder="you@email.com"
            type="email"
            name="email"
            class="input-field"
          >
        </div>
        <div>
          <label
            for="phone"
          >{{ t('phone') }}</label>
          <input
            name="phone"
            type="tel"
            class="input-field"
          >
        </div>
        <div>
          <label
            for="description"
          >{{ t('description') }}</label>
          <textarea
            name="description"
            required="required"
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
