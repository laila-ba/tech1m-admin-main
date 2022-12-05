<template>
  <Layout>
    <div class="sm:flex pl-3 items-center justify-between">
      <div>
        <h1 class="text-left text-3xl font-bold py-3 sm:pl-0">Talents</h1>
        <p class="text-left text-gray-500">
          View all Talents and streamline all talents
        </p>
      </div>
      <div class="flex space-x-3 mt-5 sm:mt-0">
        <div v-if="tab === 2">
          <button
            type="button"
            class="inline-flex items-center rounded-md px-4 py-2 text-base font-medium text-white bg-gray-400 shadow-sm"
          >
            Send Reminder
          </button>
        </div>
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 shadow-sm"
        >
          Delete
        </button>
      </div>
    </div>
    <!--Tabs-->
    <div class="border-b border-gray-200">
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
          >Approved
          <span
            class="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-sm font-bold text-blue-500"
            >150</span
          ></a
        >

        <a
          @click="currentTab(2)"
          :class="{
            'text-blue-500 border-blue-500 font-bold': tab == 2,
          }"
          class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
          >Pending
          <span
            class="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-sm font-bold text-blue-500"
            >50</span
          ></a
        >
      </nav>
    </div>

    <div v-if="tab === 1">
      <talentsApprovedTable></talentsApprovedTable>
    </div>
    <div v-if="tab === 2">
      <talentsPendingTable></talentsPendingTable>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../Layouts/Admin/Index.vue";
import { ref } from "vue";

import talentsApprovedTable from "../../Components/Talents/Tables/talentsApprovedTable.vue";
import talentsPendingTable from "../../Components/Talents/Tables/talentsPendingTable.vue";
export default {
  name: "Talents",

  components: {
    Layout,
    talentsApprovedTable,
    talentsPendingTable,
  },
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
