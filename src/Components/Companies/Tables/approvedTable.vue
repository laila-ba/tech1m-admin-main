<template>
  <!--Search bar-->
  <div class="flex items-center justify-between px-4 sm:px-0">
    <div class="text-gray-600 text-left mt-6 items-center w-full">
      <button type="submit" class="absolute mt-3 ml-3">
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
        class="border border-gray-300 bg-white h-10 px-5 py-6 pl-10 sm:text-base text-xs focus:outline-none rounded-lg sm:w-1/3 w-3/4"
        type="search"
        name="search"
        placeholder="Search "
      />
    </div>
    <div class="mt-6 sm:ml-4">
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-gray-300 px-4 py-3.5 text-sm sm:text-lg font-medium text-gray-700 shadow-sm"
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
  <div class="relative flex items-start py-5 pl-4 sm:pl-0">
    <div class="flex h-5 items-center">
      <input
        id="show-available"
        aria-describedby="show-available"
        name="show-available"
        type="checkbox"
        class="h-5 w-5 rounded"
      />
    </div>
    <div class="ml-3 text-sm">
      <label
        for="show-available"
        class="font-medium text-gray-500 text-sm sm:text-base flex items-center"
        >Show only Archived Companies
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </label>
    </div>
  </div>

  <div
    class="overflow-hidden bg-white border border-gray-200 shadow-xl rounded-lg mt-5"
  >
    <div
      class="px-4 pt-5 sm:px-6 text-left space-x-4 items-center col-span-1 flex"
    >
      <h3 class="text-xl lg:text-2xl font-medium leading-6 text-gray-900">
        All Companies
      </h3>
    </div>

    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 pl-6 whitespace-nowrap"
                  >
                    Company Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                  >
                    Industry
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                  >
                    No of Jobs Posted
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap"
                  >
                    Hired Talents
                  </th>

                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">View</span>
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="company in companies" :key="company.email">
                  <router-link to="/companiesView">
                    <td
                      class="whitespace-nowrap py-4 pr-3 font-medium text-gray-900 pl-6 text-left flex"
                    >
                      <div class="flex">
                        <div class="sm:mr-4 flex-shrink-0">
                          <span class="relative sm:inline-block hidden">
                            <img
                              class="h-10 sm:h-12 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </span>
                        </div>
                        <div>
                          <h4
                            class="text-sm sm:text-base font-semibold text-black"
                          >
                            {{ company.name }}
                          </h4>
                          <p
                            class="text-sm sm:text-base text-gray-500 font-normal"
                          >
                            {{ company.number }}
                          </p>
                        </div>
                      </div>
                    </td>
                  </router-link>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    {{ company.location }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    <span
                      class="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-sm font-medium text-purple-800"
                    >
                      {{ company.industry }}
                    </span>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    {{ company.jobs }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    {{ company.hired }}
                  </td>

                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.833 8.167H3.167m11.666 0c.92 0 1.667.746 1.667 1.666v5c0 .92-.746 1.667-1.667 1.667H3.167c-.92 0-1.667-.746-1.667-1.667v-5c0-.92.746-1.666 1.667-1.666m11.666 0V6.5c0-.92-.746-1.667-1.666-1.667m-10 3.334V6.5c0-.92.746-1.667 1.666-1.667m0 0V3.167c0-.92.747-1.667 1.667-1.667h5c.92 0 1.667.746 1.667 1.667v1.666m-8.334 0h8.334"
                        stroke="#475467"
                        stroke-width="1.67"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </td>

                  <td
                    class="relative whitespace-nowrap py-4 text-right text-base font-medium pl-8 sm:pl-0 pr-12 sm:pr-6"
                  >
                    <svg
                      width="18"
                      height="20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 5h1.667m0 0H16.5M3.167 5v11.666a1.667 1.667 0 0 0 1.666 1.667h8.334a1.667 1.667 0 0 0 1.666-1.667V4.999H3.167Zm2.5 0V3.332a1.667 1.667 0 0 1 1.666-1.667h3.334a1.667 1.667 0 0 1 1.666 1.667v1.666m-5 4.167v5m3.334-5v5"
                        stroke="#475467"
                        stroke-width="1.67"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="px-4 py-5 sm:px-6 border-t border-gray-200">
              <div
                class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap px-4"
              >
                <div class="ml-4 mt-4">
                  <p>Page 1 of 10</p>
                </div>
                <div class="ml-4 mt-4 flex flex-shrink-0">
                  <button
                    type="button"
                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm sm:text-base font-medium text-gray-700 shadow-sm"
                  >
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm sm:text-base font-medium text-gray-700 shadow-sm"
                  >
                    <span>Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "approvedTable",
  components: {},
  data() {
    return {
      companies: [
        {
          id: "1",
          name: "Google",
          number: "A14536",
          location: "London, Uk",
          industry: "Tedbree",
          jobs: "20",
          hired: "15",
        },
        {
          id: "2",
          name: "Google",
          number: "A14536",
          location: "London, Uk",
          industry: "Tedbree",
          jobs: "20",
          hired: "15",
        },
        {
          id: "3",
          name: "Google",
          number: "A14536",
          location: "London, Uk",
          industry: "Tedbree",
          jobs: "20",
          hired: "15",
        },
        {
          id: "4",
          name: "Google",
          number: "A14536",
          location: "London, Uk",
          industry: "Tedbree",
          jobs: "20",
          hired: "15",
        },
      ],
    };
  },
};
</script>
