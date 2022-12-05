<template>
  <div class="text-gray-600 text-left mt-6 items-center">
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
      class="border border-gray-300 bg-white h-10 px-5 py-6 pl-10 text-base focus:outline-none rounded-lg w-3/4 sm:w-1/3"
      type="search"
      name="search"
      placeholder="Search"
    />
  </div>
  <div
    class="overflow-hidden bg-white border border-gray-200 shadow-xl rounded-lg mt-5"
  >
    <div class="px-4 py-5 sm:px-6 text-left flex space-x-4 items-center">
      <h3 class="text-xl lg:text-2xl font-medium leading-6 text-gray-900">
        Team Members
      </h3>
      <span
        class="inline-flex items-center rounded-full bg-blue-50 px-3 py-0.5 text-sm font-medium text-blue-600"
        >4 users</span
      >
    </div>
    <div class="mt-4 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pr-3 text-left text-sm font-semibold text-gray-500 pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Email Address
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-500"
                  >
                    Role
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
                  <td
                    class="whitespace-nowrap py-4 pl-6 pr-12 text-sm sm:text-base font-medium text-gray-900 sm:pl-6 flex items-center"
                  >
                    <img
                      class="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <p class="ml-3">Lindsay Walton</p>
                  </td>
                  <td
                    class="whitespace-nowrap pl-3 pr-3 py-4 text-sm text-gray-500 text-left"
                  >
                    lindsay.walton@example.com
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-left"
                  >
                    <span
                      class="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-xs sm:text-sm font-medium text-blue-600"
                      >Super Admin</span
                    >
                  </td>
                  <td
                    class="relative whitespace-nowrap py-4 px-4 text-right text-sm font-medium"
                  >
                    <a href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="sm:w-6 w-5"
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
                    <a href="#"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="sm:w-6 w-5"
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

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
