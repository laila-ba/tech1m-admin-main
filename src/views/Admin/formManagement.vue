<template>
  <Layout>
    <div class="pl-3 items-center pb-6 sm:border-b">
      <div>
        <h1 class="text-left text-4xl font-bold py-3 sm:pl-0">
          Form Management
        </h1>
      </div>
    </div>
    <div class="text-right">
      <div v-if="tab === 1"><addCompanyRole></addCompanyRole></div>
      <div v-if="tab === 2"><addCompanySize></addCompanySize></div>
      <div v-if="tab === 3"><addValue></addValue></div>
      <div v-if="tab === 4"><addTechnologies></addTechnologies></div>
      <div v-if="tab === 5"><addTechnologies></addTechnologies></div>
      <div v-if="tab === 6"><addTechnologies></addTechnologies></div>
      <div v-if="tab === 7"><addTechnologies></addTechnologies></div>
      <div v-if="tab === 8"><addTechnologies></addTechnologies></div>
      <div v-if="tab === 9"><addTechnologies></addTechnologies></div>
      <div v-if="tab === 10"><addTechnologies></addTechnologies></div>
    </div>
    <div class="relative z-0 flex flex-1 overflow-hidden">
      <main
        class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last"
      >
        <!-- Start main area-->
        <div class="inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div class="h-screen rounded shadow bg-white">
            <div v-if="tab === 1">
              <userRole></userRole>
            </div>
            <div v-if="tab === 2">
              <companySize></companySize>
            </div>
            <div v-if="tab === 3">
              <Value></Value>
            </div>
            <div v-if="tab === 4">
              <Technologies></Technologies>
            </div>
            <div v-if="tab === 5">
              <Technologies></Technologies>
            </div>
            <div v-if="tab === 6">
              <Technologies></Technologies>
            </div>
            <div v-if="tab === 7">
              <Technologies></Technologies>
            </div>
            <div v-if="tab === 8">
              <Technologies></Technologies>
            </div>
            <div v-if="tab === 9">
              <Technologies></Technologies>
            </div>
            <div v-if="tab === 10">
              <Technologies></Technologies>
            </div>
          </div>
        </div>
        <!-- End main area -->
      </main>
      <aside
        class="relative hidden w-96 flex-shrink-0 overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col"
      >
        <!-- Start secondary column (hidden on smaller screens) -->
        <div class="inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div class="h-screen rounded shadow bg-white">
            <ul role="list" class="px-3 py-6 space-y-3 text-left">
              <li
                v-for="category in categories"
                :key="category.key"
                @click="currentTab(category.tab)"
                :class="{
                  'text-blue-500 bg-blue-100 font-bold rounded':
                    tab == category.tab,
                }"
                class="text-gray-500 whitespace-nowrap p-2 font-medium text-sm lg:text-base cursor-pointer hover:bg-gray-100 rounded"
              >
                <h3>{{ category.name }}</h3>
              </li>
            </ul>
          </div>
        </div>
        <!-- End secondary column -->
      </aside>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../Layouts/Admin/Index.vue";
import userRole from "../../Components/formManagement/Tables/userRole.vue";
import companySize from "../../Components/formManagement/Tables/companySize.vue";
import Value from "../../Components/formManagement/Tables/Value.vue";
import Technologies from "../../Components/formManagement/Tables/Technologies.vue";
import addCompanyRole from "../../Components/formManagement/Modals/addCompanyRole";
import addCompanySize from "../../Components/formManagement/Modals/addCompanySize";
import addTechnologies from "../../Components/formManagement/Modals/addTechnologies";
import addValue from "../../Components/formManagement/Modals/addValue";
import { ref } from "vue";

export default {
  name: "formManagement",

  components: {
    Layout,
    userRole,
    addCompanyRole,
    addCompanySize,
    companySize,
    Value,
    addValue,
    Technologies,
    addTechnologies,
  },
  data() {
    return {
      categories: [
        {
          name: "Company User Role",
          tab: 1,
        },
        {
          name: "Company Size",
          tab: 2,
        },
        {
          name: "Value",
          tab: 3,
        },
        {
          name: "Technologies",
          tab: 4,
        },
        {
          name: "Industries",
          tab: 5,
        },
        {
          name: "Role Levels",
          tab: 6,
        },
        {
          name: "Job Roles",
          tab: 7,
        },
        {
          name: "Languages",
          tab: 8,
        },
        {
          name: "Payment Currency",
          tab: 9,
        },
        {
          name: "Time Zone",
          tab: 10,
        },
      ],
    };
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
