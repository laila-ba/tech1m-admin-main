<template>
  <Layout>
    <div class="pl-3 items-center pb-6 sm:border-b">
      <div class="text-left">
        <h1 class="sm:text-4xl text-3xl font-bold py-3 sm:pl-0">Dashboard</h1>
        <p class="font-medium text-gray-500">
          You can easily edit the changes for your talents.
        </p>
      </div>
    </div>
    <div class="bg-white rounded-lg border border-gray-200 sm:mt-8">
      <dl
        class="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2 sm:mx-12 mx-4 py-8"
      >
        <div
          v-for="item in stats"
          :key="item.name"
          class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-7 border border-gray-200 sm:px-6 sm:pt-6"
        >
          <dt class="text-lg text-left font-medium text-gray-900">
            {{ item.name }}
          </dt>
          <dd class="mt-2 flex items-baseline justify-between">
            <div class="flex items-baseline text-2xl font-bold text-blue-600">
              {{ item.stat }}

              <span
                v-if="item.previousStat"
                class="ml-2 text-sm font-medium text-gray-500"
                >from {{ item.previousStat }}</span
              >
            </div>

            <div
              v-if="item.changeType"
              :class="[
                item.changeType === 'increase'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800',
                'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0',
              ]"
            >
              <vue-feather
                type="arrow-up"
                v-if="item.changeType === 'increase'"
                class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                aria-hidden="true"
              />
              <vue-feather
                type="arrow-down"
                v-if="item.changeType === 'decrease'"
                class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                aria-hidden="true"
              />
              <span class="sr-only">
                {{ item.changeType === "increase" ? "Increased" : "Decreased" }}
                by
              </span>
              {{ item.change }}
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../Layouts/Admin/Index.vue";
import VueFeather from "vue-feather";

export default {
  name: "planDashboard",

  components: {
    Layout,
    VueFeather,
  },
  data() {
    return {
      stats: [
        {
          name: "Total paid subscribers",
          stat: "71,897",
          previousStat: "70,946",
          change: "12%",
          changeType: "increase",
        },
        {
          name: "Total users on free plan",
          stat: "58.16%",
          previousStat: "56.14%",
          change: "2.02%",
          changeType: "increase",
        },
        {
          name: "Monthly recurring earnings",
          stat: "24.57%",
          previousStat: "28.62%",
          change: "4.05%",
          changeType: "decrease",
        },
        {
          name: "Yearly recurring earning",
          stat: "24.57%",
          previousStat: "28.62%",
          change: "8.05%",
          changeType: "increase",
        },
        {
          name: "Number of plans",
          stat: "3",
        },
        {
          name: "Upgrade percentage over the month",
          stat: "24.57%",
          previousStat: "28.62%",
          change: "4.05%",
          changeType: "increase",
        },
        {
          name: "Downgrade percentageover the month",
          stat: "24.57%",
          previousStat: "28.62%",
          change: "4.05%",
          changeType: "decrease",
        },
        {
          name: "Cancelations over the month",
          stat: "24.57%",
          previousStat: "28.62%",
          change: "4.05%",
          changeType: "increase",
        },
      ],
    };
  },
};
</script>
