<template>
  <Layout>
    <div
      class="sm:flex pl-3 items-center justify-between sm:pb-6 pb-0 sm:border-b"
    >
      <div>
        <h1 class="text-left text-4xl font-bold py-3 sm:pl-0">
          Skill Test Center
        </h1>
        <p class="text-left text-gray-500">
          You can easily edit the changes for your talents
        </p>
      </div>
      <div class="text-left pt-6">
        <addCategoryModal></addCategoryModal>
      </div>
    </div>
    <div class="rounded-lg bg-white shadow border-gray-200 border mt-10">
      <div>
        <div class="sm:flex px-6 pt-5 items-center justify-between pb-6">
          <div>
            <h3 class="text-left text-2xl font-semibold">Categories</h3>
          </div>
          <div class="flex sm:w-1/2">
            <div
              class="text-gray-600 sm:text-right text-left mt-6 items-center w-full"
            >
              <button type="submit" class="absolute mt-2 ml-3">
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
                class="border border-gray-300 bg-white h-10 px-5 py-3 pl-10 text-base focus:outline-none rounded-md sm:w-full w-11/12"
                type="search"
                name="search"
                placeholder="Search "
              />
            </div>
            <div class="mt-6 sm:ml-4">
              <button
                type="button"
                class="inline-flex items-center rounded border border-gray-300 px-4 sm:py-1 py-1.5 text-base sm:text-lg font-medium text-gray-700 shadow-sm"
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
        </div>
      </div>
      <!--categories-->
      <ul
        role="list"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 pb-5"
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
      <div class="px-4 py-3 sm:px-6 border-t border-gray-200">
        <div
          class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap px-4"
        >
          <div class="ml-4 mt-4">
            <p>Page 1 of 10</p>
          </div>
          <div class="ml-4 mt-4 flex flex-shrink-0">
            <button
              type="button"
              class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm sm:text-base font-medium text-gray-700 shadow-sm"
            >
              <span>Previous</span>
            </button>
            <button
              type="button"
              class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm sm:text-base font-medium text-gray-700 shadow-sm"
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import addCategoryModal from "../../Components/Skill-Test/addCategoryModal.vue";
import Layout from "../../Layouts/Admin/Index.vue";

export default {
  name: "Categories",

  components: {
    Layout,
    addCategoryModal,
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
