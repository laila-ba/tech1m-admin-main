<template>
  <div class="bg-white rounded-lg border-2 border-gray-200 sm:mt-8">
    <dl class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-4 sm:mx-12 mx-4 py-8">
      <div
        v-for="item in stats"
        :key="item.name"
        class="flex overflow-hidden rounded bg-white px-4 border border-gray-200 sm:px-6"
      >
        <div class="flex items-center py-4">
          <div class="flex min-w-0 flex-1 items-center">
            <div class="flex-shrink-0 rounded-full inline-flex p-4 bg-blue-100">
              <vue-feather :type="item.icon" class="w-6 text-blue-600" />
            </div>
            <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p class="text-sm font-medium text-gray-600 whitespace-nowrap">
                  {{ item.name }}
                </p>
                <p class="flex items-baseline text-3xl font-bold text-black">
                  {{ item.stat }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dl>
    <div class="px-12 flex border-b-2 border-gray-200">
      <div class="flex-1 mb-6">
        <h2 class="font-medium text-xl text-left mb-3">Premium plan</h2>
        <p class="font-bold text-left text-4xl text-black">$30/mth</p>
      </div>
      <div class="flex flex-shrink-0 self-center">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="-m-2 flex items-center rounded-full p-2 text-gray-600"
            >
              <span class="sr-only">Open options</span>
              <vue-feather type="more-vertical" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem>
                  <a href="#" class="flex px-4 py-2 text-sm text-gray-700">
                    <span>View</span>
                  </a>
                </MenuItem>
                <MenuItem>
                  <EditPlanModal></EditPlanModal>
                </MenuItem>
                <MenuItem>
                  <a href="#" class="px-4 py-2 text-sm text-red-500">
                    <span>Delete</span>
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
    <!--features-->
    <ul
      role="list"
      class="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0 mx-12 mb-5"
    >
      <li
        v-for="feature in includedFeatures"
        :key="feature"
        class="flex items-start lg:col-span-1"
      >
        <div class="flex bg-green-100 rounded-full p-1">
          <vue-feather type="check" class="w-5 text-green-600" />
        </div>
        <p class="ml-3 text-base text-gray-700">{{ feature }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import VueFeather from "vue-feather";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import EditPlanModal from "./editPlanModal.vue";

export default {
  name: "premiumPlan",

  components: {
    VueFeather,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    EditPlanModal,
  },
  data() {
    return {
      stats: [
        {
          name: "Paid Subscribers",
          stat: "2,300",

          icon: "credit-card",
        },
        {
          name: "Downgraded Subscribers",
          stat: "20",

          icon: "download",
        },
        {
          name: "Upgraded Subscribers",
          stat: "20",

          icon: "share",
        },
        {
          name: "Overdue Subscribers",
          stat: "20",

          icon: "clock",
        },
      ],
      includedFeatures: [
        "Plus $45 per contractor per month",

        "One hire for free",

        "Invoice management",

        "Full support in managing talent contracts",

        "Invoice management",

        "Employment record maintenance",
      ],
    };
  },
};
</script>
