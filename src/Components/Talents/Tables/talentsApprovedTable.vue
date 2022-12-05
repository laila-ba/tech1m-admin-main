<template>
  <!--Search bar-->
  <div class="flex items-center justify-between px-3 sm:px-0">
    <div class="text-gray-600 text-left mt-6 items-center w-full">
      <button type="submit" class="absolute mt-3 ml-3">
        <svg
          class="text-gray-600 h-4 w-4 fill-current inline-flex"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
      <input
        class="border border-gray-300 bg-white h-10 px-5 py-6 pl-10 text-base focus:outline-none rounded-lg w-3/4 sm:w-1/3"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
    <div class="mt-6 sm:ml-4">
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-gray-300 px-4 py-3 text-base font-medium text-gray-700 shadow-sm"
      >
        <svg
          width="18"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2"
        >
          <path
            d="M4 6h10M1.5 1h15m-10 10h5"
            stroke="#344054"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Filters
      </button>
    </div>
  </div>
  <!--Tabs-->
  <div>
    <nav
      class="-mb-px flex sm:space-x-8 space-x-4 px-3 sm:px-0 pt-5 sm:pt-0"
      aria-label="Tabs"
    >
      <a
        @click="currentTab(1)"
        :class="{
          'text-blue-500 border-blue-500 font-bold': tab == 1,
        }"
        class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
        >All
      </a>

      <a
        @click="currentTab(2)"
        :class="{
          'text-blue-500 border-blue-500 font-bold': tab == 2,
        }"
        class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
        >Verified
      </a>
      <a
        @click="currentTab(3)"
        :class="{
          'text-blue-500 border-blue-500 font-bold': tab == 3,
        }"
        class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
        >Not Verified
      </a>
      <a
        @click="currentTab(4)"
        :class="{
          'text-blue-500 border-blue-500 font-bold': tab == 4,
        }"
        class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
        >Tested
      </a>
      <a
        @click="currentTab(5)"
        :class="{
          'text-blue-500 border-blue-500 font-bold': tab == 5,
        }"
        class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
        >Not Tested
      </a>
    </nav>
  </div>
  <div v-if="tab === 1">
    <AllTalentsTable></AllTalentsTable>
  </div>
  <div v-if="tab === 2">
    <VerifiedTable></VerifiedTable>
  </div>
  <div v-if="tab === 3">
    <VerifiedTable></VerifiedTable>
  </div>
  <div v-if="tab === 4">
    <VerifiedTable></VerifiedTable>
  </div>
  <div v-if="tab === 5">
    <VerifiedTable></VerifiedTable>
  </div>
</template>
<script>
import { ref } from "vue";
import AllTalentsTable from "./allTalentsTable.vue";
import VerifiedTable from "./verifiedTable.vue";

export default {
  name: "talentsApprovedTable",

  components: { AllTalentsTable, VerifiedTable },
  setup() {
    const tab = ref(1);
    const currentTab = (tabNumber) => (tab.value = tabNumber);

    return {
      tab,
      currentTab,
    };
  },
};
</script>
