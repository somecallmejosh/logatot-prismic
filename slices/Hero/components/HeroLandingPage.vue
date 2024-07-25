<script setup>
  const props = defineProps(['slice']);
</script>
<template>
  <div class="px-6 pt-10 pb-24 mx-auto max-w-7xl sm:pb-32 lg:flex lg:px-8 lg:py-40">
    <div class="flex-shrink-0 max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:pt-8">
      <h1
        id="hero"
        class="mt-10 font-bold tracking-tight text-white font-display"
      >
        <span class="block mb-6 text-2xl text-blue-500">CSEA Members:</span> <span class="text-4xl sm:text-5xl">Welcome to the Future of Childcare Management</span>
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        As a valued member of CSEA, you're entitled to more than just support – you're invited to experience innovation. With Logatot, discover the exclusive advantage of voice-controlled data entry tailored for you. Liberate yourself from the clutches of time-consuming record-keeping and invest more in what truly matters – the children in your care and your family.
      </p>
      <div class="flex items-center mt-10 gap-x-6">
        <a
          href="#register"
          class="border-2 rounded-md font-bold inline-flex gap-1 items-center transition-all duration-150 ease-in-out focus:outline-none focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-150 ease-in-out border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500 px-3 py-1"
        >Subscribe</a>
        <a
          href="#features"
          class="text-sm font-semibold leading-6 text-white"
        >Learn more <span aria-hidden="true">→</span></a>
      </div>
    </div>
    <div class="flex max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
      <div class="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
        <img
          class="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
          alt="Screen grab from application voiceboard"
          src=""
        >
      </div>
    </div>
  </div>
</template>
