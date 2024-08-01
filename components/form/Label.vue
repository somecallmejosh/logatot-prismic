
<script setup>
  const { t } = useI18n({
    useScope: 'local'
  })
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  })
</script>
<template>
  <label
    v-if="label"
    class="flex justify-between"
  >{{ label }}<span
    v-if="required"
    class="text-xs font-normal translate-y-1"
  >{{ t('required') }}</span></label>
</template>

<i18n lang="json">
{
  "en": {
    "required": "Required"
  },
  "es": {
    "required": "Requerido"
  }
}
</i18n>
