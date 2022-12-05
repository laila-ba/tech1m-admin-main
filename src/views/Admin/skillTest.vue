<template>
  <Layout>
    <div class="sm:flex pl-3 items-center justify-between pb-6 sm:border-b">
      <div>
        <h1 class="text-left text-4xl font-bold py-3 sm:pl-0">
          Skill Test Center
        </h1>
        <p class="text-left text-gray-500">
          You can easily edit the changes for your talents
        </p>
      </div>
      <div class="text-left pt-6">
        <router-link to="/add-test">
          <button
            type="button"
            class="inline-flex items-center rounded-md px-12 py-2 text-base font-medium text-white bg-blue-600 shadow-sm tracking-wider"
          >
            Add Test
          </button>
        </router-link>
      </div>
    </div>
    <div
      class="rounded-lg bg-white border-t shadow border-gray-100 sm:mt-10 mt-5"
    >
      <div>
        <div class="flex px-6 pt-5 items-center justify-between pb-6 border-b">
          <div>
            <h3 class="text-left text-2xl font-semibold">Categories</h3>
          </div>
          <router-link to="/categories">
            <p
              type="button"
              class="inline-flex items-center text-sm font-medium text-blue-600"
            >
              View all
            </p>
          </router-link>
        </div>
      </div>
      <!--categories-->
      <ul
        role="list"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 py-5"
      >
        <li
          v-for="category in categories"
          :key="category.email"
          class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white border border-gray-200"
        >
          <div
            class="relative flex items-center space-x-3 rounded-lg bg-white px-6 py-5 shadow-sm"
          >
            <div class="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                fill="none"
              >
                <rect width="54" height="54" fill="#0B6CF4" rx="6.875" />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M27 37c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
                  clip-rule="evenodd"
                />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M27 33a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                  clip-rule="evenodd"
                />
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M27 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="min-w-0 flex-1 text-left">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true"></span>
                <p class="text-base font-medium text-gray-900">
                  {{ category.name }}
                </p>
                <p class="truncate text-sm text-gray-500">
                  {{ category.tests }}
                </p>
              </a>
            </div>
          </div>
          <div class="text-right text-blue-600 text-base px-4 py-1 font-medium">
            View
          </div>
        </li>
      </ul>
      <!--Test section-->
      <Tests></Tests>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../Layouts/Admin/Index.vue";
import Tests from "../../Components/Skill-Test/Tests";

export default {
  name: "skillTest",

  components: {
    Layout,
    Tests,
  },
  data() {
    return {
      categories: [
        {
          name: "Product Design",
          tests: "7 Tests",
        },
        {
          name: "Front-end Development",
          tests: "14 Tests",
        },
        {
          name: "Graphics Design",
          tests: "2 Tests",
        },
      ],
    };
  },
};
</script>
