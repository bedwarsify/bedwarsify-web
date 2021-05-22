<template>
  <div class="bg-gray-900 text-white min-h-screen flex flex-col">
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
