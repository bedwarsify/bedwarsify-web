<template>
  <div>
    <div
      class="
        flex flex-col
        justify-center
        items-center
        space-y-12
        px-8
        py-32
        text-center
      "
    >
      <div class="flex flex-col justify-center items-center space-y-6">
        <h1 class="text-3xl">Bedwarsify Overlay</h1>

        <p class="text-lg">
          A simple but feature-rich Hypixel Bed Wars anti-sniping overlay.
        </p>

        <div class="flex space-x-4 items-center">
          <!--
            <a
              class="px-6 py-3 text-lg bg-primary rounded-xl hover:text-gray-300"
              href="https://github.com/bedwarsify/bedwarsify-overlay/releases/latest"
            >
              Download
            </a>
          -->

          <span class="px-6 py-3 text-lg bg-primary rounded-xl">
            Coming May 26th
          </span>

          <a
            class="
              px-6
              py-3
              text-lg
              bg-gray-100
              text-blurple
              border border-blurple
              rounded-xl
              hover:text-gray-700
              hover:border-gray-700
            "
            href="https://discord.gg/EMgB7nrNJm"
          >
            Discord
          </a>
        </div>
      </div>

      <img
        alt=""
        class="border border-gray-600 rounded-xl"
        src="@/assets/overlay-screenshot.png"
      />
    </div>

    <div
      class="
        bg-gray-800
        flex flex-col
        justify-center
        items-center
        px-8
        py-32
        text-center
        space-y-8
      "
    >
      <h2 class="text-2xl">Compare</h2>

      <div
        class="
          border border-gray-500
          rounded-xl
          max-w-full
          overflow-y-auto
          lg:text-lg
        "
      >
        <table class="table-auto">
          <thead>
            <tr>
              <th class="p-3 lg:px-6">Feature</th>

              <th
                v-for="alternative in comparison.alternatives"
                :key="alternative"
                class="p-3 lg:px-6"
              >
                {{ alternative }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="feature in comparison.features" :key="feature.name">
              <td class="p-3 lg:px-6">{{ feature.name }}</td>

              <td
                v-for="alternative in feature.alternatives"
                :key="feature.alternatives.indexOf(alternative)"
                class="p-3 lg:px-6"
              >
                <div class="flex justify-center items-center group">
                  <svg
                    v-if="alternative.available === 'YES'"
                    class="text-green-400 h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>

                  <svg
                    v-else-if="alternative.available === 'NO'"
                    class="text-red-400 h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>

                  <svg
                    v-else-if="alternative.available === 'PARTIAL'"
                    class="text-yellow-400 h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>

                  <svg
                    v-else-if="alternative.available === 'PAYWALL'"
                    class="text-purple-400 h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    v-else-if="alternative.available === 'UNKNOWN'"
                    class="text-gray-400 h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>

                  <div
                    v-if="alternative.comment !== undefined"
                    class="
                      absolute
                      hidden
                      group-hover:block
                      bg-gray-700
                      rounded-xl
                      p-3
                    "
                  >
                    {{ alternative.comment }}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      comparison: {
        alternatives: [
          'Bedwarsify Overlay',
          'BWStats Overlay',
          'Statsify Overlay',
          'Abyss Overlay',
        ],
        features: [
          {
            name: 'Completely free',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
              {
                available: 'YES',
              },
              {
                available: 'YES',
              },
            ],
          },
          {
            name: 'Open-source',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
              {
                available: 'PARTIAL',
                comment: 'It used to be open-source until Nov 2020.',
              },
              {
                available: 'NO',
              },
            ],
          },
          {
            name: 'Displays stats',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'YES',
              },
              {
                available: 'YES',
              },
              {
                available: 'YES',
              },
            ],
          },
          {
            name: 'Report-based anti-sniping',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'PAYWALL',
              },
              {
                available: 'NO',
              },
              {
                available: 'NO',
              },
            ],
          },
          {
            name: 'Simple UI',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
              {
                available: 'YES',
              },
              {
                available: 'YES',
              },
            ],
          },
          {
            name: 'Auto report sniping',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
              {
                available: 'NO',
              },
              {
                available: 'NO',
              },
            ],
          },
          {
            name: 'Custom log path support',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'PAYWALL',
              },
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
            ],
          },
          {
            name: 'Unnicking',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
              {
                available: 'NO',
              },
              {
                available: 'YES',
              },
            ],
          },
          {
            name: 'Auto add chat mentions',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
              {
                available: 'NO',
              },
              {
                available: 'YES',
              },
            ],
          },
          {
            name: 'Custom sort',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'PAYWALL',
              },
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
            ],
          },
          {
            name: 'Fullscreen support',
            alternatives: [
              {
                available: 'PARTIAL',
                comment: 'Available with free 3rd party app.',
              },
              {
                available: 'PAYWALL',
              },
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
            ],
          },
          {
            name: 'Dream modes support',
            alternatives: [
              {
                available: 'YES',
              },
              {
                available: 'NO',
              },
              {
                available: 'NO',
              },
              {
                available: 'NO',
              },
            ],
          },
        ],
      },
    }
  },
  head: {
    title: 'Bedwarsify Overlay',
  },
})
</script>
