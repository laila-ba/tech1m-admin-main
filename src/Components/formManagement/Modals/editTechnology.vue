<template>
  <div v-on:click="open = !open">
    <a href="#" class="text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="sm:w-6 w-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
    </a>
  </div>
  <!--Modal-->
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="open = false"
    >
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
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
            class="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-xl w-screen md:max-w-2xl rounded"
          >
            <div
              class="py-8 max-w-3xl mx-auto grid grid-cols-1 gap-1 px-6 lg:max-w-full"
            >
              <!--modal contents-->

              <h3 class="font-bold text-2xl">Edit Technology</h3>
              <div class="pt-4">
                <div class="mt-1">
                  <input
                    name="category"
                    id="category"
                    class="block w-full rounded border border-gray-400 text-sm px-3 py-2 focus:outline-none"
                    placeholder="Technology"
                  />
                </div>
              </div>
              <div class="mt-6 grid grid-flow-row-dense grid-cols-2 gap-3">
                <button
                  @click="open = false"
                  type="button"
                  class="inline-flex w-full justify-center rounded border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm col-start-2"
                >
                  Add
                </button>
                <button
                  @click="open = false"
                  type="button"
                  class="inline-flex w-full justify-center rounded border border-gray-400 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm col-start-1 mt-0"
                >
                  Cancel
                </button>
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

export default {
  name: "editTechnology",
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
