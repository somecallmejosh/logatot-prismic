<template>
  <div class="flex flex-col min-h-screen">
    <PageHeader />
    <main class="flex-1 pb-12 lg:pb-24">
      <slot />
    </main>
    <PageFooter />
    <div class="fixed inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-200/10 z-[-1] opacity-20" />
  </div>
</template>
