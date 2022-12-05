<template>
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
                    class="whitespace-nowrap px-12 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    class="whitespace-nowrap px-12 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Experience Level
                  </th>

                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="talent in talents" :key="talent.email">
                  <td
                    class="whitespace-nowrap px-5 py-4 text-base text-gray-500 text-left pl-6 relative flex items-start"
                  >
                    <div class="flex items-center py-4">
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
                            {{ talent.name }}
                          </h4>
                          <p class="mt-1 text-sm sm:text-base">
                            {{ talent.number }}
                          </p>
                        </div>
                      </div>
                    </router-link>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 pl-12 text-left py-4 text-sm text-gray-500 font-semibold"
                  >
                    {{ talent.location }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 pl-12 text-left py-4 text-sm text-gray-500 font-semibold"
                  >
                    {{ talent.experience }}
                  </td>

                  <td
                    class="relative whitespace-nowrap py-4 pl-3 text-center text-sm sm:text-base font-medium pr-6"
                  >
                    <a href="#" class="text-blue-600">View</a>
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
  name: "allTalentsTable",

  components: {},
  data() {
    return {
      talents: [
        {
          id: "1",
          name: "Sam Smith",
          number: "A14536",
          location: "London, Uk",
          experience: "Enrty Level",
        },
        {
          id: "2",
          name: "Sam Smith",
          number: "A14536",
          location: "London, Uk",
          experience: "Internship",
        },
        {
          id: "3",
          name: "Sam Smith",
          number: "A14536",
          location: "London, Uk",
          experience: "Internship",
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
