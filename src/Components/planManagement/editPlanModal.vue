<template>
  <div v-on:click="open = !open">
    <div class="flex px-4 py-2 text-sm text-gray-700 cursor-pointer">
      <span>Edit</span>
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
            class="inline-block align-bottom bg-white text-left height overflow-auto shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-xl w-screen md:max-w-2xl rounded"
          >
            <div
              class="py-8 max-w-3xl mx-auto grid grid-cols-1 gap-1 px-6 lg:max-w-full"
            >
              <!--modal contents-->

              <h3 class="font-semibold text-xl">Edit Plan</h3>
              <p class="text-gray-600">Make Changes to the plan</p>
              <div class="pt-4">
                <label
                  for="plan"
                  class="block text-base font-medium text-gray-700"
                  >Plan Name</label
                >
                <div class="mt-1">
                  <input
                    name="plan"
                    id="plan"
                    class="block w-full rounded border border-gray-400 text-sm px-3 py-2 focus:outline-none"
                    placeholder="Basic Plan"
                  />
                </div>
              </div>
              <div class="pt-4">
                <label
                  for="priceM"
                  class="block text-base font-medium text-gray-700"
                  >Price (Monthly)</label
                >
                <div class="mt-1">
                  <input
                    name="priceM"
                    id="priceM"
                    class="block w-full rounded border border-gray-400 text-sm px-3 py-2 focus:outline-none"
                    placeholder="$50"
                  />
                </div>
              </div>
              <div class="pt-4">
                <label
                  for="priceY"
                  class="block text-base font-medium text-gray-700"
                  >Price (Yearly)</label
                >
                <div class="mt-1">
                  <input
                    name="priceY"
                    id="priceY"
                    class="block w-full rounded border border-gray-400 text-sm px-3 py-2 focus:outline-none"
                    placeholder="$500"
                  />
                </div>
              </div>
              <div class="pt-6 pb-4">
                <label
                  for="editor"
                  class="block text-base font-medium text-gray-700"
                  >Plan Details</label
                >
                <QuillEditor
                  theme="snow"
                  class="pb-12 border border-gray-300 rounded"
                />
              </div>
              <div class="mt-14">
                <label
                  for="members"
                  class="block text-base font-medium text-gray-700"
                  >Max amount of team members</label
                >
                <div class="mt-1">
                  <input
                    name="members"
                    id="members"
                    class="block w-full rounded border border-gray-400 text-sm px-3 py-2 focus:outline-none"
                    placeholder="100"
                  />
                </div>
              </div>
              <div class="pt-4">
                <label
                  for="jobs"
                  class="block text-base font-medium text-gray-700"
                  >Max amount of active jobs</label
                >
                <div class="mt-1">
                  <input
                    name="jobs"
                    id="jobs"
                    class="block w-full rounded border border-gray-400 text-sm px-3 py-2 focus:outline-none"
                    placeholder="100"
                  />
                </div>
              </div>
              <div class="pt-4">
                <label
                  for="interviews"
                  class="block text-base font-medium text-gray-700"
                  >Max amount of live interviews</label
                >
                <div class="mt-1">
                  <input
                    name="interviews"
                    id="interviews"
                    class="block w-full rounded border border-gray-400 text-sm px-3 py-2 focus:outline-none"
                    placeholder="100"
                  />
                </div>
              </div>
              <div class="pt-4">
                <label
                  for="renewal"
                  class="block text-base font-medium text-gray-700"
                  >Renewal grace period (Days)</label
                >
                <div class="mt-1">
                  <input
                    name="renewal"
                    id="renewal"
                    class="block w-full rounded border border-gray-400 text-sm px-3 py-2 focus:outline-none"
                    placeholder="3"
                  />
                </div>
              </div>
              <div class="mt-6 grid grid-flow-row-dense grid-cols-2 gap-3">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm col-start-2"
                >
                  Save
                </button>
                <button
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
<style>
.height {
  height: 42rem;
}
</style>
<script>
import { ref } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default {
  name: "createPlanModal",
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    QuillEditor,
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
