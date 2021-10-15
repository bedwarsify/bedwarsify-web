<template>
  <div class="bg-gray-900 text-white min-h-screen flex flex-col">
    <div
      class="flex justify-center items-center p-5 text-lg"
      style="background-color: #00c853"
    >
      <p class="pr-10">Cubelify Overlay is now available.</p>

      <a
        href="https://cubelify.com/overlay"
        class="bg-white text-gray-900 px-6 py-3 rounded-xl hover:text-gray-500"
      >
        Get
      </a>
    </div>

    <app-header />
    <nuxt class="flex-grow" />
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: { AppHeader },
}
</script>
