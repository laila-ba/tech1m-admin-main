<template>
  <!--Search bar-->
  <div class="flex items-center justify-between">
    <div class="text-gray-600 text-left mt-6 items-center w-full sm:pl-0 pl-3">
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
  </div>
  <!--table-->
  <div
    class="overflow-hidden bg-white border border-gray-200 shadow-xl rounded-lg mt-5"
  >
    <div class="px-4 pt-5 sm:px-6 text-left space-x-4 items-center">
      <h3 class="text-xl lg:text-2xl font-medium leading-6 text-gray-900">
        All Talents
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
                    class="whitespace-nowrap py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 flex"
                  >
                    <div class="flex h-5 items-center">
                      <input
                        v-model="allSelected"
                        @change="selectAll"
                        id="checkbox"
                        aria-describedby="checkbox"
                        name="checkbox"
                        type="checkbox"
                        class="h-5 w-5 border-gray-300 mr-3"
                      />
                    </div>
                    Name
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap pl-12 sm:pr-24 pr-0 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-12 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email Address
                  </th>

                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Send Reminder</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="talent in talents" :key="talent.email">
                  <td
                    class="whitespace-nowrap flex py-8 pl-6 text-left pr-12 text-base font-medium text-gray-900 sm:pl-6"
                  >
                    <div class="flex h-5 items-center">
                      <input
                        v-model="selected"
                        :value="talent.id"
                        number
                        id="checkbox"
                        aria-describedby="checkbox"
                        name="checkbox"
                        type="checkbox"
                        class="h-5 w-5 border-gray-300 mr-3"
                      />
                    </div>
                    <router-link to="/talentView">
                      {{ talent.name }}</router-link
                    >
                  </td>

                  <td
                    class="whitespace-nowrap px-3 pl-12 text-left py-4 text-base text-gray-500"
                  >
                    {{ talent.lastName }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 pl-12 pr-12 sm:pr-0 text-left py-4 text-base text-gray-500"
                  >
                    {{ talent.email }}
                  </td>

                  <td
                    class="relative whitespace-nowrap py-4 pl-3 text-center text-base font-medium pr-6"
                  >
                    <a href="#" class="text-blue-600">Send Reminder</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="py-5 px-6 border-t border-gray-200">
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
<script>
export default {
  name: "talentsPendingTable",

  components: {},
  data() {
    return {
      talents: [
        {
          id: "1",
          name: "Jane",
          lastName: "Smith",
          email: "jane.smith@yahoo.com",
        },
        {
          id: "2",
          name: "Jane",
          lastName: "Smith",
          email: "jon.smith@yahoo.com",
        },
        {
          id: "3",
          name: "Jane",
          lastName: "Smith",
          email: "jane.smith@yahoo.com",
        },
        {
          id: "4",
          name: "Jane",
          lastName: "Smith",
          email: "jane.smith@yahoo.com",
        },
      ],
      selected: [],
      allSelected: false,
    };
  },
  methods: {
    async selectAll() {
      if (this.allSelected) {
        const selected = this.talents.map((u) => u.id);
        this.selected = selected;
      } else {
        this.selected = [];
      }
    },
  },
};
</script>
