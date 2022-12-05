<template>
  <div
    class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
  >
    <div
      class="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
    >
      <button
        v-on:click="open = !open"
        type="button"
        class="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>

        <span>View Resume</span>
      </button>
    </div>
  </div>
  <!--Modal-->
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="open = false"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block align-bottom bg-white rounded-lg pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full p-6"
          >
            <div>
              <div class="mt-3 text-center sm:mt-5 pb-5">
                <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    class="rounded-md bg-white text-gray-400 hover:text-gray-500"
                    @click="open = false"
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div class="flex border-b border-gray-300">
                  <span class="relative inline-block">
                    <img
                      class="h-20 w-20 rounded-full ring-4 ring-white shadow-xl"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span
                      class="absolute right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"
                    ></span>
                  </span>
                  <div class="text-left place-self-end pl-3 space-y-2">
                    <div class="flex items-center">
                      <h4 class="text-3xl font-bold text-black">Accelo</h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill=" #1570EF
"
                        class="w-6 h-6 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <dd class="mt-1 flex items-baseline lg:flex space-x-2">
                      <div
                        class="flex items-baseline text-2xl font-semibold text-indigo-600"
                      >
                        <span
                          class="sm:text-base text-sm font-medium text-gray-500"
                          >RK0946</span
                        >
                      </div>

                      <div
                        class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-700 md:mt-2 lg:mt-0"
                      >
                        <svg
                          class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-700"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Tested
                      </div>
                    </dd>
                    <div
                      class="mt-1 flex items-baseline md:block lg:flex space-x-2 pb-3"
                    >
                      <div
                        class="inline-flex items-baseline py-0.5 rounded-full sm:text-sm text-xs font-medium text-gray-600 md:mt-2 lg:mt-0"
                      >
                        <svg
                          class="-ml-1 mr-0.5 sm:w-5 w-4 flex-shrink-0 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>

                        Location
                      </div>

                      <div
                        class="inline-flex items-baseline px-2.5 py-0.5 rounded-full sm:text-sm text-xs font-bold text-black md:mt-2 lg:mt-0"
                      >
                        United Kingdom
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-gray-300 shadow-md rounded-lg p-3">
              <h2 class="font-semibold">Headline</h2>
              <p class="text-sm text-gray-500">Product Designer</p>
              <h2 class="font-semibold mt-4">Bio</h2>
              <p class="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="mt-6">
              <h2 class="font-semibold mb-4">Work Experience</h2>
              <div class="border border-gray-300 shadow-md rounded-lg p-3">
                <h2 class="font-semibold">Lead Ux designer</h2>
                <p class="text-sm text-gray-500">May 2020 - Present</p>
                <h2 class="font-semibold mt-4">Project description</h2>
                <p class="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import { ref } from "vue";

import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default {
  name: "viewResume",
  components: {
    Dialog,
    DialogOverlay,

    TransitionChild,
    TransitionRoot,
  },
  data() {
    return {
      Show: true,
    };
  },
  setup() {
    const open = ref(false);
    return {
      open,
    };
  },
};
</script>
