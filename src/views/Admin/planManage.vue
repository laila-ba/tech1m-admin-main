<template>
  <Layout>
    <div class="sm:flex pl-3 items-center justify-between pb-6 sm:border-b">
      <div>
        <h1 class="text-left text-3xl sm:text-4xl font-bold py-3 sm:pl-0">
          Manage Subscription
        </h1>
        <p class="text-left text-gray-500">
          You can easily edit the changes for your talents
        </p>
      </div>
      <createPlanModal> </createPlanModal>
    </div>
    <div class="text-left my-8 pl-2 sm:pl-0">
      <Switch
        v-model="enabled"
        :class="[
          enabled ? 'bg-blue-600' : 'bg-white',
          'relative inline-flex h-12 w-72 flex-shrink-0 cursor-pointer rounded-full border-2 border-blue-600 p-1 transition-colors duration-200 ease-in-out ',
        ]"
      >
        <span class="sr-only">Use setting</span>
        <span
          :class="[
            enabled ? 'translate-x-32 bg-white' : 'translate-x-0 bg-blue-600',
            'pointer-events-none relative inline-block h-9 w-36  transform rounded-full  shadow ring-0 transition duration-200 ease-in-out',
          ]"
        >
          <span
            :class="[
              enabled
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity ',
            ]"
            aria-hidden="true"
          >
            <p class="text-sm text-white font-medium">Billed Monthly</p>
          </span>

          <span
            :class="[
              enabled
                ? 'opacity-100 ease-in duration-200'
                : 'opacity-0 ease-out duration-100',
              'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
            ]"
            aria-hidden="true"
          >
            <p class="text-sm text-blue-600 font-medium">Billed Anually</p>
          </span>
        </span>
      </Switch>
    </div>
    <!--Basic <plan-->
    <div class="space-y-12">
      <BasicPlan></BasicPlan>
      <ProfessionalPlan></ProfessionalPlan>
      <premiumPlan></premiumPlan>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../Layouts/Admin/Index.vue";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
import BasicPlan from "../../Components/planManagement/basicPlan.vue";
import ProfessionalPlan from "../../Components/planManagement/professionalPlan.vue";
import premiumPlan from "../../Components/planManagement/premiumPlan.vue";
import createPlanModal from "../../Components/planManagement/createPlanModal.vue";
export default {
  name: "planManage",

  components: {
    Layout,
    Switch,
    BasicPlan,
    ProfessionalPlan,
    premiumPlan,
    createPlanModal,
  },
  setup() {
    const enabled = ref(false);

    return {
      enabled,
    };
  },
};
</script>
