<script setup>

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps([
    'slice',
    'index',
    'slices',
    'context',
  ])
);

const convertVimeoUrl = (url) => {
  const regex = /https:\/\/vimeo.com\/(\d+)\/([a-z0-9]+)/i;
  const match = url.match(regex);

  if (match) {
    const videoId = match[1];
    const hash = match[2];
    return `https://player.vimeo.com/video/${videoId}?h=${hash}&badge=0&autopause=0&player_id=0&app_id=58479`;
  }

  throw new Error("Invalid Vimeo URL");
};

const firstVideoUrl = props.slice.primary.video.length > 0 ? convertVimeoUrl(props.slice.primary.video[0].video.url) : null;
const firstVideoDescription = props.slice.primary.video.length > 0 ? props.slice.primary.video[0].title : null;
const activeVideo = ref(firstVideoUrl);
const activeVideoDescription = ref(firstVideoDescription);
const setActiveVideo = (url, description) => {
  activeVideo.value = url;
  activeVideoDescription.value = description;
};

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <Bounded>
      <div class="grid gap-6 lg:grid-cols-7">
        <div class="lg:col-span-5">
          <div class="sticky bg-white shadow rounded-xl not-prose top-24">
            <div style="padding:48.8% 0 0 0;position:relative; width: 100%;">
              <iframe
                :src="activeVideo"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"
              />
            </div>
            <template v-if="activeVideoDescription">
              <p class="px-4 py-2 mt-6 bg-blue-100 rounded-b-lg">
                {{ activeVideoDescription }}
              </p>
            </template>
          </div>
        </div>
        <div class=" lg:col-span-2">
          <ul class="sticky divide-y divide-blue-100 top-6">
            <li
              v-for="(video, index) in slice.primary.video"
              :key="index"
            >
              <button
                v-if="video.video && video.video.url"
                class="block w-full p-2 text-left hover:bg-blue-50"
                :class="{ 'font-bold bg-blue-50': activeVideo === convertVimeoUrl(video.video.url) }"
                @click="setActiveVideo(convertVimeoUrl(video.video.url), video.description)"
              >
                {{ video.title }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Bounded>
  </section>
</template>
