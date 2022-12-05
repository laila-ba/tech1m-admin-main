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
        class="border border-gray-300 bg-white h-10 px-5 py-6 pl-10 text-sm sm:text-base focus:outline-none rounded-lg w-3/4 sm:w-1/3"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
    <div class="mt-6 sm:ml-4">
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-gray-300 px-4 py-3 text-base sm:text-lg font-medium text-gray-700 shadow-sm"
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
        All Jobs
      </h3>
    </div>
    <div class="mt-4 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500 sm:pl-9"
                  >
                    Job Title
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Date Posted
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Posted By
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    No of applicants
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    No of shortlists
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Job Expires in
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Status
                  </th>

                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <router-link to="/companies">
                    <td
                      class="whitespace-nowrap pr-3 py-4 text-base text-gray-500 text-left"
                    >
                      <div class="font-bold text-black">Product Designer</div>
                      <div class="text-gray-500">90011</div>
                    </td>
                  </router-link>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    22/11/2021
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    <div>Carol Susan</div>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    <div>150</div>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    <div>15</div>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
                    <div>15 Days</div>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-base text-gray-500 text-left"
                  >
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
                      Ongoing
                    </span>
                  </td>
                  <td
                    class="relative whitespace-nowrap py-4 pl-4 text-right text-sm font-medium"
                  >
                    <a href="#" class=""
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </a>
                  </td>
                  <td
                    class="relative whitespace-nowrap py-4 pr-4 text-left text-sm font-medium sm:pr-6"
                  >
                    <a href="#" class=""
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
