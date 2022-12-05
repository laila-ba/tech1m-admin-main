<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-100 border-b">
      <tr>
        <th
          scope="col"
          class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-600 sm:pl-6"
        >
          Last Updated
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600"
        >
          User Role
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600"
        >
          Order
        </th>
        <th
          scope="col"
          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-600"
        >
          <span class="sr-only">Edit/Delete</span>
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-100">
      <!--Empty State-->
      <!-- <div class="absolute inset-0 pt-48">
        <div class="items-center">
          <svg
            class="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="201"
            height="200"
            fill="none"
          >
            <circle cx="100.5" cy="100" r="100" fill="#EFF8FF" />
            <path
              fill="#DEE9FF"
              d="M122.469 63.794s-7.491 19.116 21.607 36.726c25.843 15.639-.54 41.84-15.491 46.199-19.366 5.648-40.952-11.365-50.763 2.63-9.81 13.994-39.63-11.04-26.134-32.896 16.789-27.188-3.219-27.608-6.569-39.45-2.404-8.5 13.78-31.923 32.825-24.584 16.026 6.177 18.884-.472 22.727-4.388 5.542-5.648 26.023-1.751 21.798 15.763Z"
            />
            <path
              fill="#A2BDFF"
              d="M89.771 126.929c-4.839-.219-10.337-6.011-7.918-7.551 2.42-1.54 2.126-4.765 1.247-5.205-5.426-2.126-6.745-6.891-7.918-12.977-1.174-6.085-.514-25.44-.514-25.44l6.819-3.445 18.841-1.1 5.352 8.871s-1.961 5.296-2.126 10.595c1.285-1.026 3.528-2.44 5.205-1.43 1.085.65 1.739 1.668 2.018 2.806.36 1.475.088 3.158-.698 4.525-.546.95-1.185 1.897-2.071 2.625-1.252 1.029-3 1.613-5.695 1.138.109 1.445 2.927 1.507 2.927 2.982 0 1.393-.052 3.519 0 4.326.44 6.598 4.032 8.871 5.865 11.07 1.833 2.2-16.495 8.43-21.334 8.21Z"
            />
            <path
              fill="#0E84E5"
              d="M75.77 99.657c2.955 0 5.35-2.605 5.35-5.819 0-3.213-2.395-5.819-5.35-5.819-2.956 0-5.352 2.606-5.352 5.82 0 3.213 2.396 5.818 5.351 5.818Z"
            />
            <path
              fill="#D4E5FF"
              d="M75.77 98.503c2.388 0 4.324-2.09 4.324-4.666 0-2.576-1.936-4.665-4.325-4.665-2.388 0-4.325 2.089-4.325 4.665 0 2.577 1.937 4.666 4.325 4.666Z"
            />
            <path
              fill="#0E84E5"
              d="M89.882 100.097c2.854 0 5.168-2.43 5.168-5.426s-2.314-5.425-5.168-5.425c-2.855 0-5.17 2.43-5.17 5.425 0 2.997 2.315 5.426 5.17 5.426Z"
            />
            <path
              fill="#D4E5FF"
              d="M89.881 99.25c2.273 0 4.115-2.051 4.115-4.582 0-2.53-1.842-4.582-4.115-4.582-2.272 0-4.114 2.052-4.114 4.582s1.842 4.582 4.114 4.582Z"
            />
            <path
              fill="#0E84E5"
              d="M80.862 92.053s2.658-1.01 4.409.895c0 .33-.266.89-.266.89s-2.347-1.843-4.143-.45c-.292-.576-.468-1.201 0-1.335ZM94.615 93.252l8.858-3.166-.084.784-8.49 3.547-.284-1.165ZM58.633 132.289a3.872 3.872 0 0 1 .274-3.263l2.272-4.002s.293-1.564 6.94-2.493c6.647-.929 13.042-2.599 13.734-3.152 0 0 11.746 10.089 29.04-.906 0 0 14.118 7.968 17.344 8.262 1.895.172 3.368 3.903 4.261 6.952a3.847 3.847 0 0 1-.381 3.042 3.85 3.85 0 0 1-2.482 1.8c-14.273 3.175-63.904 12.722-71.002-6.24Z"
            />
            <path
              fill="#418DF9"
              d="M108.009 99.2c-1.674 3.985-2.818 5.662-4.161 5.512-1.402-.155-1.845-2.422-1.751-4.416 2.818.548 4.628-.041 5.912-1.097ZM110.813 91.957l-.035.094c-.279-1.138-.933-2.156-2.018-2.806-1.721-1.035-4.041.48-5.308 1.516.241-4.616-.164-9.84-2.683-10.974-4.399-1.98-4.578-1.54-7.311-1.393-2.566.138-8.856.534-9.924-.085.704.66 4.027 3.493 9.326 3.75.598.44.21.807-.375.734-.586-.074-8.578-.22-14.59-7.772 0 0-3.487 6.522-3.41 12.39 0 0-2.236-4.398-.842-10.704.841-4.692 3.006-4.252 3.006-4.252s-1.467-10.484 8.577-9.53c2.932.366 7.918 4.692 11.29 4.618 3.373-.073 6.452.147 6.452.147s4.766-.733 5.572 5.719c.035 1.298.973 1.884 3.519 2.199 2.625.325 2.2 7.111-1.246 16.35Z"
            />
            <path
              fill="#418DF9"
              stroke="#fff"
              stroke-miterlimit="10"
              stroke-width="15"
              d="M134.792 147.711c6.742 0 12.207-5.465 12.207-12.207 0-6.742-5.465-12.207-12.207-12.207-6.742 0-12.207 5.465-12.207 12.207 0 6.742 5.465 12.207 12.207 12.207Z"
            />
            <path
              fill="#fff"
              d="M139.494 134.479h-3.476a.208.208 0 0 1-.078-.015.215.215 0 0 1-.111-.111.208.208 0 0 1-.015-.078v-3.476a1.02 1.02 0 0 0-2.045 0v3.476a.2.2 0 0 1-.06.144.2.2 0 0 1-.144.06h-3.476a1.023 1.023 0 0 0 0 2.045h3.476c.027 0 .053.005.078.015a.215.215 0 0 1 .111.111c.01.025.015.052.015.078v3.477a1.02 1.02 0 0 0 1.023 1.013 1.02 1.02 0 0 0 1.022-1.013v-3.477c0-.026.005-.053.015-.078a.215.215 0 0 1 .111-.111.208.208 0 0 1 .078-.015h3.476a1.023 1.023 0 0 0 0-2.045Z"
            />
          </svg>
          <h2 class="font-bold text-ase">No company user role</h2>
          <addCompanySize></addCompanySize>
        </div>
      </div> -->
      <tr class="text-left" v-for="company in companies" :key="company.key">
        <td
          class="whitespace-nowrap py-7 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
        >
          {{ company.date }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {{ company.size }}
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <div class="flex">
            <svg
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
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              /></svg
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
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </div>
        </td>

        <td class="whitespace-nowrap py-4 px-3 text-center text-sm font-medium">
          <div class="space-x-5 inline-flex">
            <editCompanySize></editCompanySize>
            <a href="#" class="text-red-600">
              <svg
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
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
// import addCompanySize from "../Modals/addCompanySize.vue";
import editCompanySize from "../Modals/editCompanySize.vue";

export default {
  name: "companySize",

  components: {
    // addCompanySize,
    editCompanySize,
  },
  data() {
    return {
      companies: [
        {
          date: "22/02/2022",
          size: "Monthly",
        },
        {
          date: "21/02/2022",
          size: "Monthly",
        },
        {
          date: "19/02/2022",
          size: "Yearly",
        },
        {
          date: "16/02/2022",
          size: "Monthly",
        },
        {
          date: "12/02/2022",
          size: "Yearly",
        },
        {
          date: "10/02/2022",
          size: "Yearly",
        },
        {
          date: "09/02/2022",
          size: "Monthly",
        },
      ],
    };
  },
};
</script>
