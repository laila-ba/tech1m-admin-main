<template>
  <div v-on:click="open = !open" class="cursor-pointer">
    <a class="text-blue-600">View</a>
  </div>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <div class="items-end absolute right-5">
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          class="rounded-md bg-white text-gray-600 hover:bg-gray-100 px-2 py-1.5"
                          @click="open = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <vue-feather type="x" class="h-5 w-5"></vue-feather>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-8 flex-1 px-4 sm:px-6">
                    <div class="absolute inset-0 px-4 sm:px-8">
                      <div>
                        <div>
                          <img
                            class="w-full object-cover lg:h-28 rounded-md"
                            src="https://media.istockphoto.com/id/1384809466/vector/unicorn-rainbow-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=VpGyPcSOH1yp_Yk_l2jp903Pt-LtYpdjUWrmsL2HLdY="
                            alt=""
                          />
                        </div>
                        <div class="mx-auto max-w-5xl px-4 sm:px-6">
                          <div
                            class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5"
                          >
                            <div class="flex">
                              <img
                                class="h-24 w-24 rounded-full ring-4 ring-white shadow-xl"
                                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                alt=""
                              />
                            </div>
                          </div>
                          <div class="font-medium mt-1 pl-6">
                            <h1 class="text-lg">Accelo</h1>
                            <p class="text-gray-500 text-sm">REK001</p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-6">
                        <h3
                          class="text-green-700 bg-green-100 rounded-full p-1 w-1/4 text-center font-medium text-sm"
                        >
                          Upgraded
                        </h3>
                        <div class="mt-4">
                          <input
                            type="status"
                            name="status"
                            id="status"
                            class="block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm p-3 focus:outline-none focus:ring focus:ring-purple-200 bg-white"
                            placeholder="Professional plan"
                          />
                        </div>
                      </div>
                      <h2 class="mt-6 text-lg font-medium">Timeline</h2>
                      <div
                        class="bg-gray-100 p-4 border border-gray-200 rounded-md mt-3"
                      >
                        <div class="flow-root">
                          <ul role="list" class="-mb-8">
                            <li
                              v-for="(event, eventIdx) in timeline"
                              :key="event.id"
                            >
                              <div class="relative pb-8">
                                <span
                                  v-if="eventIdx !== timeline.length - 1"
                                  class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-600"
                                  aria-hidden="true"
                                />
                                <div class="relative flex space-x-3">
                                  <div v-if="event.stat === 'Upgraded'">
                                    <span
                                      class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-100 bg-green-500"
                                    >
                                      <vue-feather
                                        type="share"
                                        class="text-white h-5 w-5"
                                      ></vue-feather>
                                    </span>
                                  </div>
                                  <div v-if="event.stat === 'Cancelled'">
                                    <span
                                      class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-100 bg-red-600"
                                    >
                                      <vue-feather
                                        type="x"
                                        class="text-white h-5 w-5"
                                      ></vue-feather>
                                    </span>
                                  </div>
                                  <div
                                    v-if="event.stat === 'Wise - Mastercard'"
                                  >
                                    <span
                                      class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-100 bg-gray-600"
                                    >
                                      <vue-feather
                                        type="repeat"
                                        class="text-white h-5 w-5"
                                      ></vue-feather>
                                    </span>
                                  </div>
                                  <div v-if="event.stat === 'Subscribed'">
                                    <span
                                      class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-100 bg-blue-600"
                                    >
                                      <vue-feather
                                        type="check"
                                        class="text-white h-5 w-5"
                                      ></vue-feather>
                                    </span>
                                  </div>
                                  <div v-if="event.stat === 'Downgraded'">
                                    <span
                                      class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-gray-100 bg-yellow-600"
                                    >
                                      <vue-feather
                                        type="download"
                                        class="text-white h-5 w-5"
                                      ></vue-feather>
                                    </span>
                                  </div>
                                  <div
                                    class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5"
                                  >
                                    <div>
                                      <p
                                        class="text-sm text-gray-700 font-medium"
                                      >
                                        {{ event.stat }}
                                      </p>
                                    </div>
                                    <div
                                      class="inline-flex items-center space-x-1"
                                    >
                                      <div
                                        class="whitespace-nowrap text-right text-xs text-gray-500"
                                      >
                                        {{ event.date }}
                                      </div>
                                      <svg
                                        class="-ml-1 mr-1.5 h-2 w-2 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 8 8"
                                      >
                                        <circle cx="4" cy="4" r="3" />
                                      </svg>
                                      <div
                                        class="whitespace-nowrap text-right text-xs text-gray-500"
                                      >
                                        {{ event.time }}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import VueFeather from "vue-feather";

import { Dialog, TransitionChild, TransitionRoot } from "@headlessui/vue";

export default {
  components: {
    Dialog,

    TransitionChild,
    TransitionRoot,
    VueFeather,
  },
  data() {
    return {
      Show: true,

      timeline: [
        {
          id: 1,
          stat: "Upgraded",
          date: "22/02/2022",
          time: "11:37",
        },
        {
          id: 2,
          stat: "Cancelled",
          date: "22/02/2022",
          time: "11:37",
        },
        {
          id: 3,
          stat: "Wise - Mastercard",
          date: "22/02/2022",
          time: "11:37",
        },
        {
          id: 4,
          stat: "Subscribed",
          date: "22/02/2022",
          time: "11:37",
        },
        {
          id: 5,
          stat: "Downgraded",
          date: "22/02/2022",
          time: "11:37",
        },
        {
          id: 6,
          stat: "Subscribed",
          date: "22/02/2022",
          time: "11:37",
        },
        {
          id: 7,
          stat: "Subscribed",
          date: "22/02/2022",
          time: "11:37",
        },
      ],
    };
  },
  setup() {
    const open = ref(false);

    return { open };
  },
};
</script>
<style></style>
