<template>
  <div v-on:click="open = !open">
    <div class="flex cursor-pointer">
      <div class="mr-4 flex-shrink-0">
        <span class="relative inline-block">
          <img
            class="h-10 sm:h-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span
            class="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-600 ring-2 ring-white"
          ></span>
        </span>
      </div>
      <div>
        <h4 class="text-sm sm:text-base font-semibold text-black">Adeniji K</h4>
        <p class="mt-1 text-sm sm:text-base font-medium">A121786</p>
      </div>
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
            class="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-7xl w-screen md:max-w-2xl rounded-lg"
          >
            <div
              class="pt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-full lg:grid-flow-col-dense"
            >
              <!--modal contents-->

              <div
                class="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between px-4"
              >
                <div class="flex cursor-pointer">
                  <div class="mr-4 flex-shrink-0">
                    <span class="relative inline-block">
                      <img
                        class="h-10 sm:h-24 rounded-full border-4 border-white shadow"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span
                        class="absolute bottom-1 right-3 block h-4 w-4 rounded-full bg-green-600 ring-2 ring-white"
                      ></span>
                    </span>
                  </div>
                  <div class="text-left space-y-2">
                    <div class="flex items-center">
                      <h4 class="text-3xl font-bold text-black">Accelo</h4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill=" #1570EF
"
                        class="w-5 h-5 ml-1"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <dd class="mt-1 flex items-center lg:flex space-x-2">
                      <div
                        class="flex items-baseline text-2xl font-semibold text-indigo-600"
                      >
                        <span class="text-base font-medium text-gray-500"
                          >RK0946</span
                        >
                      </div>

                      <div
                        class="flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-700 md:mt-2 lg:mt-0"
                      >
                        <svg
                          width="19"
                          height="18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="mr-1"
                        >
                          <path
                            d="M17.874.164H1.236a.517.517 0 0 0-.518.518v10.355c0 .286.232.518.518.518h8.353l1.036 2.175v3.59a.517.517 0 0 0 .806.43l1.266-.844 1.266.844a.516.516 0 0 0 .531.026.517.517 0 0 0 .274-.457v-3.59l1.036-2.174h2.071a.517.517 0 0 0 .518-.518V.682a.517.517 0 0 0-.518-.518Z"
                            fill="#039855"
                          />
                          <path
                            d="M7.518 3.27h4.143a.517.517 0 1 0 0-1.036H7.518a.517.517 0 1 0 0 1.036ZM4.343 5.341h10.425a.517.517 0 1 0 0-1.035H4.343a.517.517 0 1 0 0 1.035Zm4.21 1.036h-4.21a.517.517 0 1 0 0 1.035h4.21a.517.517 0 1 0 0-1.035ZM7.519 8.448H4.343a.517.517 0 1 0 0 1.036h3.175a.517.517 0 1 0 0-1.036Zm5.178-1.036a3.63 3.63 0 0 0-3.624 3.625 3.64 3.64 0 0 0 1.815 3.143c.555.315 1.18.482 1.81.482a3.67 3.67 0 0 0 1.811-.484 3.638 3.638 0 0 0 1.812-3.141 3.63 3.63 0 0 0-3.624-3.625Zm0 5.178a1.555 1.555 0 0 1-1.553-1.553c0-.857.697-1.553 1.553-1.553.857 0 1.554.696 1.554 1.553s-.697 1.553-1.554 1.553Z"
                            fill="#ECFDF3"
                          />
                        </svg>
                        Tested
                      </div>
                    </dd>
                    <div class="sm:flex mt-2 sm:space-x-8">
                      <div class="flex text-gray-600 font-medium text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-5 mr-1"
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
                        class="flex text-gray-600 whitespace-nowrap font-medium text-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-5 text-gray-600 mr-2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>
                        Date Applied
                        <p class="font-bold text-black ml-3 whitespace-nowrap">
                          22/02/2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                end
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
