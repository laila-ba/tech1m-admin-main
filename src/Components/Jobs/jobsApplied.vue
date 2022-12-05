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
        placeholder="Search Candidates, tags"
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
  <div class="relative flex items-start py-5">
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
        >Show only available Talents
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
      class="px-4 py-5 sm:px-6 text-left space-x-4 items-center col-span-1 flex"
    >
      <div class="flex-1">
        <h3 class="text-xl lg:text-2xl font-medium leading-6 text-gray-900">
          Product Design Candidates
        </h3>
      </div>
      <div class="flex-shrink-0 pr-2">
        <button
          type="button"
          class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Open options</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="mt-4 flex flex-col">
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
                    class="py-3.5 text-left text-sm font-semibold text-gray-500 pl-6 pr-3 whitespace-nowrap"
                  >
                    Talent Name
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500 pr-3 whitespace-nowrap"
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500 pr-3 whitespace-nowrap"
                  >
                    Application Date
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500 pr-3 whitespace-nowrap"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500 pr-3 whitespace-nowrap"
                  >
                    Tag
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500 whitespace-nowrap pr-3"
                  >
                    Match %
                  </th>

                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td
                    class="whitespace-nowrap py-4 text-base text-gray-500 text-left pl-6"
                  >
                    <candidateJobModal></candidateJobModal>
                  </td>
                  <td
                    class="whitespace-nowrap py-4 text-sm sm:text-base text-gray-500 sm:text-left pl-6 sm:pl-0"
                  >
                    UK
                  </td>
                  <td
                    class="whitespace-nowrap py-4 sm:text-base text-gray-500 sm:text-left text-sm"
                  >
                    <div>22/10/22</div>
                  </td>
                  <td
                    class="whitespace-nowrap py-4 text-base text-gray-500 text-left"
                  >
                    <div>
                      <span
                        class="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 sm:text-sm text-xs font-medium text-blue-800"
                      >
                        <svg
                          class="-ml-1 mr-1.5 h-2 w-2 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        New
                      </span>
                      <!-- <span
                        class="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800"
                      >
                        <svg
                          class="-ml-1 mr-1.5 h-2 w-2 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Reviewed
                      </span> -->
                      <!-- <span
                        class="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800"
                      >
                        <svg
                          class="-ml-1 mr-1.5 h-2 w-2 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Shortlisted
                      </span> -->
                      <!-- <span
                        class="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800"
                      >
                        <svg
                          class="-ml-1 mr-1.5 h-2 w-2 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Rejected
                      </span> -->
                    </div>
                  </td>
                  <td
                    class="whitespace-nowrap py-4 text-base text-gray-500 text-left px-4 sm:px-0"
                  >
                    <div>
                      <span
                        class="inline-flex items-center rounded-full bg-green-100 py-0.5 sm:text-sm text-xs font-medium text-green-800 px-2"
                        >Keep in view</span
                      >
                    </div>
                  </td>
                  <td
                    class="whitespace-nowrap py-4 text-base text-gray-500 text-left"
                  >
                    <div class="flex items-center">
                      <div
                        class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                      >
                        <div
                          class="bg-green-600 h-2.5 rounded-full"
                          style="width: 45%"
                        ></div>
                      </div>
                      <span class="ml-2">45%</span>
                    </div>
                  </td>

                  <td
                    class="relative whitespace-nowrap py-4 text-right sm:text-base text-sm font-medium pr-6"
                  >
                    <a class="text-blue-600" href="#">View</a>
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
import candidateJobModal from "./Modals/candidateJobModal.vue";

export default {
  name: "jobsApplied",
  components: {
    candidateJobModal,
  },
};
</script>
