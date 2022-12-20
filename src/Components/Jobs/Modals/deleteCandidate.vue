<template>
  <div v-on:click="open = !open">
    <div
      class="cursor-pointer border border-gray-300 py-2 px-3 rounded items-center"
    >
      <vue-feather type="trash-2" class="w-5 text-gray-600" />
    </div>
  </div>
  <!--Modal-->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div @click="open = false" class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
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
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    fill="none"
                  >
                    <rect
                      width="48"
                      height="48"
                      x="4"
                      y="4"
                      fill="#FEE4E2"
                      rx="24"
                    />
                    <path
                      stroke="#D92D20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M28 24v4m0 4h.01M38 28c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
                    />
                    <rect
                      width="48"
                      height="48"
                      x="4"
                      y="4"
                      stroke="#FEF3F2"
                      stroke-width="8"
                      rx="24"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900"
                    >Candidate deleted</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      This candidate woould be removed from the list
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
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
  name: "deleteCandidate",
  components: {
    Dialog,
    TransitionChild,
    TransitionRoot,
    VueFeather,
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
