<template>
  <label v-if="label">{{ label }}</label>
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    class="text-area"
    @input="updateValue"
  />
</template>

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
