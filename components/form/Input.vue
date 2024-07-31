<script setup>
  const props = defineProps({
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
    modelValue: {
      type: [String, Number],
      default: ''
    }
  })

  const { label, modelValue } = toRefs(props)

  const emit = defineEmits(['update:modelValue'])

  const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
  }
</script>

<template>
  <label v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    class="input-field"
    @input="updateValue"
  >
  <p
    v-if="error"
    class="text-red-500"
  >
    {{ error }}
  </p>
</template>
