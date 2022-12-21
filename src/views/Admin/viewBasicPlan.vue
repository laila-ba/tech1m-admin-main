<template @click="fromShow = !fromShow">
  <Layout>
    <div class="border-b border-gray-100 pb-4">
      <nav class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <router-link to="/planManage">
                <a
                  class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >Manage</a
                >
              </router-link>
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <!-- Heroicon name: mini/chevron-right -->
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
                class="ml-4 text-sm font-medium text-gray-400 hover:text-gray-500"
                >Free Plan</a
              >
            </div>
          </li>
        </ol>
      </nav>
      <h2 class="text-left ml-4 pt-5 text-4xl font-bold text-black">
        Basic Plan
      </h2>
    </div>
    <dl class="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2 py-8 px-4 sm:px-0">
      <div
        v-for="item in stats"
        :key="item.name"
        class="flex overflow-hidden bg-white px-4 border border-gray-200 sm:px-6"
      >
        <div class="flex items-center py-4">
          <div class="flex min-w-0 flex-1 items-center">
            <div class="flex-shrink-0 rounded-full inline-flex p-4 bg-blue-100">
              <vue-feather :type="item.icon" class="w-7 text-blue-600" />
            </div>
            <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div class="ml-4">
                <p class="truncate text-sm font-medium text-gray-600">
                  {{ item.name }}
                </p>
                <p class="flex items-baseline text-3xl font-bold text-black">
                  {{ item.stat }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dl>
    <div class="pb-5">
      <div
        class="px-3 flex flex-wrap items-center justify-between sm:flex-nowrap"
      >
        <div class="mt-2">
          <p class="text-left font-semibold text-lg pb-1">Range</p>
          <div class="flex space-x-3">
            <div class="relative mt-1 rounded-md shadow-sm">
              <button
                @click="fromShow = !fromShow"
                class="block sm:w-56 w-44 rounded-md border border-gray-300 pr-10 sm:text-sm p-2 text-left text-gray-500 bg-white"
              >
                From
              </button>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <vue-feather
                  type="calendar"
                  class="h-5 w-5 text-gray-500"
                ></vue-feather>
              </div>
            </div>
            <div v-show="fromShow" class="absolute z-10 mx-auto">
              <flatpickr :config="config"> </flatpickr>
            </div>

            <div class="relative mt-1 rounded-md shadow-sm">
              <button
                @click="toShow = !toShow"
                class="block sm:w-56 w-44 rounded-md border border-gray-300 pr-10 sm:text-sm p-2 text-left text-gray-500 bg-white"
              >
                To
              </button>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <vue-feather
                  type="calendar"
                  class="h-5 w-5 text-gray-500"
                ></vue-feather>
              </div>
            </div>
            <div v-show="toShow" class="absolute z-10 mx-auto">
              <flatpickr :config="config"> </flatpickr>
              <button
                @click="toShow = !toShow"
                class="rounded-md w-full bg-blue-600 font-bold text-base p-4 text-white font tracking-wider"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        <div class="sm:ml-4 mt-12 flex-shrink-0">
          <div class="mx-auto text-gray-600">
            <button type="submit" class="absolute ml-3 mt-3">
              <svg
                class="text-gray-600 h-5 w-5 fill-current"
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
              class="border border-gray-300 bg-white h-10 w-72 sm:w-96 rounded-lg py-5 pl-10 text-base focus:outline-none"
              type="search"
              name="search"
              placeholder="Search Candidates, Tags"
            />
          </div>
        </div>
      </div>
    </div>
    <!--Table-->
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow-md ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6"
                  >
                    Company Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600"
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600"
                  >
                    End Date
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600"
                  >
                    Active Month
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600"
                  >
                    Status
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="c in companies" :key="c.name">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <svg
                          class="h-10 w-10 rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="40"
                          height="40"
                          fill="none"
                        >
                          <rect width="40" height="40" fill="url(#a)" rx="20" />
                          <defs>
                            <pattern
                              id="a"
                              width="1"
                              height="1"
                              patternContentUnits="objectBoundingBox"
                            >
                              <use xlink:href="#b" transform="scale(.00313)" />
                            </pattern>
                            <image
                              xlink:href="data:image/jpeg;base64,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UXnGL/8ASpfovmz+5/o9/R7v9R4949wP/PvF8O8O4unvtOhm2bUJr/DUwGAqR193E4mP8Kk/23r0D+6QoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/Ej9gX9gX/AJAvxz+Oei/8++q/D74farb/AO7NZeKvFVlMv+5caHodwn/PPUtSj/49ravPw2G2qVF5xi//AEqX6L5s/hb6Pf0e7/UePePcD/z7xfDvDuLp77ToZtm1Ca/w1MBgKkdfdxOJj/CpP9t69A/ukKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAP/Z"
                              id="b"
                              width="320"
                              height="320"
                            />
                          </defs>
                        </svg>
                      </div>
                      <div class="ml-4">
                        <div class="font-bold text-gray-900">
                          {{ c.name }}
                        </div>
                        <div class="text-gray-500 text-left">
                          {{ c.number }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900 text-left">{{ c.startDate }}</div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div class="text-gray-900 text-left">{{ c.endDate }}</div>
                  </td>

                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left"
                  >
                    {{ c.active }}
                  </td>
                  <div v-if="c.status === 'Upgraded'">
                    <td class="whitespace-nowrap py-5 px-3 text-sm">
                      <div
                        class="py-1 px-3 text-green-700 font-medium bg-green-100 rounded-full"
                      >
                        {{ c.status }}
                      </div>
                    </td>
                  </div>
                  <div v-else>
                    <td class="whitespace-nowrap py-5 px-3 text-sm">
                      <div
                        class="py-1 px-3 text-gray-700 font-medium bg-gray-100 rounded-full"
                      >
                        {{ c.status }}
                      </div>
                    </td>
                  </div>
                  <td
                    class="whitespace-nowrap py-4 pr-12 text-right font-medium"
                  >
                    <basicPlanSlideover></basicPlanSlideover>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav
              class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
              aria-label="Pagination"
            >
              <div class="block px-4">
                <p class="text-base text-gray-700">Page 1 of 15</p>
              </div>
              <div class="flex flex-1 justify-end">
                <a
                  href="#"
                  class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >Previous</a
                >
                <a
                  href="#"
                  class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >Next</a
                >
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import VueFeather from "vue-feather";
import Layout from "../../Layouts/Admin/Index.vue";
import flatpickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import basicPlanSlideover from "../../Components/planManagement/basicPlanSlideover.vue";

export default {
  name: "viewBasicPlan",

  components: {
    VueFeather,
    Layout,
    flatpickr,
    basicPlanSlideover,
  },
  data() {
    return {
      stats: [
        {
          name: "Total basic users",
          stat: "2,300",

          icon: "user",
        },
        {
          name: "Total upgrades",
          stat: "20",

          icon: "share",
        },
      ],
      companies: [
        {
          name: "Accelo",
          startDate: "22/02/2022",
          endDate: "22/02/2022",
          number: "REK001",
          active: "3",
          status: "Upgraded",
        },
        {
          name: "Reliance HMO",
          startDate: "22/02/2022",
          endDate: "22/02/2022",
          number: "REK001",
          active: "12",
          status: "Free",
        },
        {
          name: "Blucard",
          startDate: "22/02/2022",
          endDate: "22/02/2022",
          number: "REK001",
          active: "4",
          status: "Free",
        },
        {
          name: "Coinbase",
          startDate: "22/02/2022",
          endDate: "22/02/2022",
          number: "REK001",
          active: "24",
          status: "Upgraded",
        },
        {
          name: "Lexer",
          startDate: "22/02/2022",
          endDate: "22/02/2022",
          number: "REK001",
          active: "15",
          status: "Upgraded",
        },
      ],
      date: null,
      config: {
        dateFormat: "Y-m-d",
        inline: true,
        minDate: "today",
        altInput: false,
      },
      fromShow: false,
      toShow: false,
    };
  },
};
</script>
