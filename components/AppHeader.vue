<template>
  <header class="flex p-4 bg-gray-800 justify-between items-center">
    <nuxt-link class="font-semibold flex items-center space-x-2" to="/">
      <img alt="" class="w-6 h-6" src="@/assets/icon.svg" />

      <span>Bedwarsify</span>
    </nuxt-link>

    <div class="flex items-center">
      <button class="lg:hidden" @click="nav = true">
        <svg
          class="w-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            fill-rule="evenodd"
          />
        </svg>
      </button>

      <nav
        :class="[nav ? 'flex' : 'hidden']"
        class="
          fixed
          left-0
          top-0
          w-screen
          h-screen
          bg-gray-700
          p-6
          lg:p-0
          flex-col
          lg:flex
          lg:relative
          lg:w-auto
          lg:h-auto
          lg:bg-transparent
        "
      >
        <div class="flex justify-end mb-8 lg:hidden">
          <button @click="nav = false">
            <svg
              class="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <ul
          class="
            flex-grow flex flex-col
            lg:flex-row
            justify-center
            items-center
            text-2xl
            lg:text-base
            space-y-6
            lg:space-y-0 lg:space-x-3
          "
        >
          <li>
            <nuxt-link
              class="hover:text-gray-300"
              exact-active-class="text-gray-300"
              to="/"
            >
              Overlay
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      nav: false,
    }
  },
})
</script>
