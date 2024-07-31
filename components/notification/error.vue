<script setup>
  defineProps({
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'mdi:checkbox-blank-outline'
    },
  })
</script>
<template>
  <div class="flex gap-2 p-4 font-semibold text-red-900 border-2 border-red-500 rounded-lg bg-red-50">
    <Icon
      :name="icon"
      class="text-red-900 h-7 w-7 shrink-0"
    />
    <p>{{ text }}</p>
  </div>
</template>
