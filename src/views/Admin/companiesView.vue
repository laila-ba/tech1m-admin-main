<template>
  <Layout>
    <!-- Start of Breadcrumbs-->
    <nav class="flex" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li>
          <div class="flex items-center">
            <a
              href="#"
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 lg:text-base"
              >Company</a
            >
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <svg
              class="h-5 w-5 flex-shrink-0 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clip-rule="evenodd"
              />
            </svg>
            <a
              href="#"
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 lg:text-base"
              aria-current="page"
              >Company Profile</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <!--Company image and name-->
    <div class="flex mt-6 mb-3 items-center">
      <div class="mr-4 flex-shrink-0">
        <img
          class="inline-block lg:w-24 w-20 rounded-full border-4 border-white shadow-xl"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div class="text-left">
        <h4 class="text-3xl font-bold text-black">Accelo</h4>
        <p class="mt-1 text-gray-500 uppercase">REK001</p>
      </div>
    </div>
    <!--Tabs-->
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <a
          @click="currentTab(1)"
          :class="{
            'text-blue-500 border-blue-500 font-bold': tab == 1,
          }"
          class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
          >Company Profile</a
        >

        <a
          @click="currentTab(2)"
          :class="{
            'text-blue-500 border-blue-500 font-bold': tab == 2,
          }"
          class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
          >Team Members</a
        >

        <a
          @click="currentTab(3)"
          :class="{
            'text-blue-500 border-blue-500 font-bold': tab == 3,
          }"
          class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
          >Jobs</a
        >
      </nav>
    </div>
    <!--Company details-->
    <div v-if="tab === 1">
      <companyProfile></companyProfile>
    </div>
    <!--Team Members-->
    <div v-if="tab === 2">
      <teamsTable></teamsTable>
    </div>
    <!--Jobs-->
    <div v-if="tab === 3">
      <Jobs></Jobs>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../Layouts/Admin/Index.vue";
import { ref } from "vue";
import teamsTable from "../../Components/Companies/Tables/teamsTable";
import companyProfile from "../../Components/Companies/companyProfile";
import Jobs from "../../Components/Companies/Tables/Jobs";

export default {
  name: "companiesView",

  components: {
    Layout,
    teamsTable,
    companyProfile,
    Jobs,
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
