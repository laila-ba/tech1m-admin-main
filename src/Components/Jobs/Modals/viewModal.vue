<template>
  <div v-on:click="open = !open">
    <span class="text-blue-600 cursor-pointer sm:text-base text-sm">View</span>
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
            class="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-5xl w-screen md:max-w-2xl rounded-lg"
          >
            <div
              class="py-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-full lg:grid-flow-col-dense"
            >
              <!--modal contents-->

              <div
                class="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between px-4"
              >
                <div class="flex">
                  <div class="mr-4 flex-shrink-0 self-center">
                    <img
                      class="sm:h-32 sm:w-32 h-24 rounded-full border-2 border-blue-400"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4
                      class="text-2xl sm:text-3xl font-bold whitespace-nowrap mt-3"
                    >
                      Product designer
                    </h4>
                    <div class="flex space-x-4 mt-2">
                      <p class="text-base sm:text-lg text-gray-600">
                        150 Applicants
                      </p>
                      <span
                        class="inline-flex items-center rounded-full bg-gray-200 px-2 sm:text-sm text-xs font-medium text-gray-800"
                      >
                        <svg
                          class="-ml-1 mr-1 sm:h-2 sm:w-2 w-1.5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Ongoing
                      </span>
                    </div>
                    <div class="sm:flex mt-2 sm:space-x-8">
                      <div
                        class="flex text-gray-600 font-medium text-sm sm:text-base"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="sm:w-6 sm:h-6 h-5 mr-1"
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
                        <p class="font-bold text-black ml-3 whitespace-nowrap">
                          United Kingdom
                        </p>
                      </div>
                      <div
                        class="flex text-gray-600 whitespace-nowrap font-medium sm:text-base text-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="sm:w-6 sm:h-6 h-5 text-gray-600 mr-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>
                        Date Posted
                        <p class="font-bold text-black ml-3 whitespace-nowrap">
                          22/02/2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--tabs-->

            <div class="sm:px-14">
              <div>
                <nav
                  class="-mb-px flex sm:space-x-8 space-x-4 px-3 sm:px-0"
                  aria-label="Tabs"
                >
                  <a
                    @click="currentTab(1)"
                    :class="{
                      'text-blue-500 border-blue-500 font-bold': tab == 1,
                    }"
                    class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
                    >Job Details
                  </a>

                  <a
                    @click="currentTab(2)"
                    :class="{
                      'text-blue-500 border-blue-500 font-bold': tab == 2,
                    }"
                    class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
                    >Questions
                  </a>
                  <a
                    @click="currentTab(3)"
                    :class="{
                      'text-blue-500 border-blue-500 font-bold': tab == 3,
                    }"
                    class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
                    >Compliance
                  </a>
                </nav>
              </div>
              <div class="overflow-y-auto h-96">
                <div v-if="tab === 1"><jobDetails></jobDetails></div>

                <div v-if="tab === 2"><Questions></Questions></div>
                <div v-if="tab === 3"><Compliance></Compliance></div>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="text-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-white absolute top-6 right-6"
                @click="open = false"
              >
                <span class="sr-only">Close panel</span>
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
import JobDetails from "./jobDetails.vue";
import Questions from "./Questions.vue";
import Compliance from "./Compliance.vue";

export default {
  name: "viewModal",
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    JobDetails,
    Questions,
    Compliance,
  },
  data() {
    return {
      Show: true,
    };
  },
  setup() {
    const open = ref(false);
    const tab = ref(1);
    const currentTab = (tabNumber) => (tab.value = tabNumber);

    return {
      open,
      tab,
      currentTab,
    };
  },
};
</script>
