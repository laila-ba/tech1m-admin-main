<template>
  <Layout>
    <div class="text-left pb-5 pl-3 sm:pl-0">
      <h1 class="text-3xl font-bold py-3">Jobs</h1>
      <p class="text-gray-500 font-medium text-base sm:text-lg">
        Create and manage existing Jobs
      </p>
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
          >Permanent
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
          >Contract
          <span
            class="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-sm font-bold text-blue-500"
            >40</span
          ></a
        >
      </nav>
    </div>

    <div v-if="tab === 1"><JobsPermanent></JobsPermanent></div>

    <div v-if="tab === 2"><JobsPermanent></JobsPermanent></div>
  </Layout>
</template>

<script>
import Layout from "../../Layouts/Admin/Index.vue";
import { ref } from "vue";
import JobsPermanent from "../../Components/Jobs/jobsPermanent.vue";

export default {
  name: "Jobs",

  components: {
    Layout,
    JobsPermanent,
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
