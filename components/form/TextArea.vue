<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <FormLabel
    :label="label"
    :required="required"
  />
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    class="input-field"
    :class="error ? 'border-red-500' : 'border-gray-300'"
    @input="updateValue"
    @blur="$attrs.onBlur"
  />
  <FormError v-if="error">
    {{ error }}
  </FormError>
</template>
