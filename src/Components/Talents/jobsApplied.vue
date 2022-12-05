<template>
  <!--Search bar-->
  <div class="flex items-center justify-between">
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
        class="border border-gray-300 bg-white h-10 px-5 py-6 pl-10 text-base focus:outline-none rounded-lg w-1/3"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
    <div class="mt-3 sm:ml-4">
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-lg font-medium text-gray-700 shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        Filters
      </button>
    </div>
  </div>

  <div
    class="overflow-hidden bg-white border border-gray-200 shadow-xl rounded-lg mt-5"
  >
    <div class="px-4 py-5 sm:px-6 text-left space-x-4 items-center">
      <h3 class="text-xl lg:text-2xl font-medium leading-6 text-gray-900">
        All jobs applied to
      </h3>
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
                    class="py-3.5 text-left text-sm font-semibold text-gray-500 sm:pl-6"
                  >
                    Job Title
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Application Date
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Tag
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
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
                    <div class="font-bold text-black">Product Designer</div>
                    <div class="text-gray-500">90011</div>
                  </td>
                  <td
                    class="whitespace-nowrap py-4 text-base text-gray-500 text-left"
                  >
                    Tedbree
                  </td>
                  <td
                    class="whitespace-nowrap py-4 text-base text-gray-500 text-left"
                  >
                    <div>22/10/22</div>
                  </td>
                  <td
                    class="whitespace-nowrap py-4 text-base text-gray-500 text-left"
                  >
                    <div>
                      <span
                        class="inline-flex items-center rounded-full bg-yellow-100 py-0.5 text-sm font-medium text-yellow-800 px-2"
                        >Keep in view</span
                      >
                      <!-- <span
                        class="inline-flex items-center rounded-full bg-green-100 py-0.5 text-sm font-medium text-green-800 px-2"
                        >Selected</span
                      > -->
                      <!-- <span
                        class="inline-flex items-center rounded-full bg-red-100 py-0.5 text-sm font-medium text-red-800 px-2"
                        >Not Qualified</span
                      > -->
                      <!-- <span
                        class="inline-flex items-center rounded-full bg-blue-100 py-0.5 text-sm font-medium text-blue-800 px-2"
                        >Considering</span
                      > -->
                    </div>
                  </td>
                  <td
                    class="whitespace-nowrap py-4 text-base text-gray-500 text-left"
                  >
                    <div>
                      <span
                        class="inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800"
                      >
                        <svg
                          class="-ml-1 mr-1.5 h-2 w-2 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Apllied
                      </span>
                      <!-- <span
                        class="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800"
                      >
                        <svg
                          class="-ml-1 mr-1.5 h-2 w-2 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Hired
                      </span> -->
                      <!-- <span
                        class="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800"
                      >
                        <svg
                          class="-ml-1 mr-1.5 h-2 w-2 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Shortlisted
                      </span> -->
                      <!-- <span
                        class="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800"
                      >
                        <svg
                          class="-ml-1 mr-1.5 h-2 w-2 text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Interviewed
                      </span> -->
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
                    class="relative whitespace-nowrap py-4 text-right text-base font-medium sm:pr-6"
                  >
                    <a class="text-blue-600" href="#">View</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="px-4 py-5 sm:px-6 border-t border-gray-200">
              <div
                class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap"
              >
                <div class="ml-4 mt-4">
                  <p>Page 1 of 10</p>
                </div>
                <div class="ml-4 mt-4 flex flex-shrink-0">
                  <button
                    type="button"
                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm"
                  >
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm"
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
