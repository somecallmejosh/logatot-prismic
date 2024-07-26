<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.RichTextSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <div class="py-12 lg:py-24">
    <Bounded>
      <PrismicRichText
        :field="slice.primary.content"
        class="richtext prose prose-headings:font-display mx-auto"
      />
    </Bounded>
  </div>
</template>

<style scoped>
section:deep(.richtext) {
  max-width: 600px;
  margin: 6em auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

section:deep(.richtext .codespan) {
  font-family: monospace;
}
</style>
