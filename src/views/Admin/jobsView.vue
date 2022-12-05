<template>
  <Layout>
    <!-- Start of Breadcrumbs-->
    <nav class="flex" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-2">
        <li>
          <div class="flex items-center">
            <a
              href="#"
              class="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700 lg:text-base"
              >Jobs</a
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
              >Product Design</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <h1 class="text-left text-3xl font-bold py-3 pl-3 sm:pl-0">
      Product Design
    </h1>
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
          >Applied
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
          >Shortlisted</a
        >

        <a
          @click="currentTab(3)"
          :class="{
            'text-blue-500 border-blue-500 font-bold': tab == 3,
          }"
          class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
          >Interview</a
        >
        <a
          @click="currentTab(4)"
          :class="{
            'text-blue-500 border-blue-500 font-bold': tab == 4,
          }"
          class="hover:border-gray-400 border-transparent text-gray-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
          >Hired</a
        >
      </nav>
    </div>
    <!--Applied-->
    <div v-if="tab === 1"><JobsApplied></JobsApplied></div>
    <!--Shortlisted-->
    <div v-if="tab === 2"><JobsShortlisted></JobsShortlisted></div>
    <!--Interview-->
    <div v-if="tab === 3"><JobsShortlisted></JobsShortlisted></div>
    <!--Hired-->
    <div v-if="tab === 4"><JobsHired></JobsHired></div>
  </Layout>
</template>

<script>
import Layout from "../../Layouts/Admin/Index.vue";
import { ref } from "vue";
import JobsApplied from "../../Components/Jobs/jobsApplied.vue";
import JobsShortlisted from "../../Components/Jobs/jobsShortlisted.vue";
import JobsHired from "../../Components/Jobs/jobsHired.vue";

export default {
  name: "Jobs",

  components: {
    Layout,
    JobsApplied,
    JobsShortlisted,
    JobsHired,
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
