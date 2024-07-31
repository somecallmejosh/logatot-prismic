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
  <div class="flex gap-2 p-4 font-semibold text-blue-800 bg-white border-2 border-blue-800 rounded-lg">
    <Icon
      :name="icon"
      class="text-blue-800 h-7 w-7 shrink-0"
    />
    <p>{{ text }}</p>
  </div>
</template>
