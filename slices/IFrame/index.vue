<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.IFrameSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <Bounded>
      <iframe
        :title="slice.primary.title"
        :src="slice.primary.url.url"
        class="w-full min-h-[600px] shadow-lg"
        frameborder="0"
      />
    </Bounded>
  </section>
</template>
