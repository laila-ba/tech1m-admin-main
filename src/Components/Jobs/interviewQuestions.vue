<template>
  <div
    class="overflow-y-auto flow-root border border-gray-500 rounded-xl p-3 bg-gray-50 text-sm h-86"
  >
    <ul role="list" class="-mb-8">
      <li v-for="q in questions" :key="q.id">
        <div class="relative pb-5">
          <span
            class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-600"
            aria-hidden="true"
          />
          <div class="relative flex space-x-2">
            <span
              class="h-8 w-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 font-medium"
            >
              {{ q.id }}
            </span>

            <div class="flex w-64 flex-1 justify-between space-x-4 pt-1.5">
              <div>
                <p class="text-sm text-gray-700 font-medium">
                  {{ q.question }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      questions: [
        {
          id: 1,
          question: "Why do you want to work here ?",
        },
        {
          id: 2,
          question: "What are your career goals in the next 5 years ?",
        },
        {
          id: 3,
          question: "What are your career goals in the next 10 years ? ",
        },
        {
          id: 4,
          question: "What are your career goals in the next 10 years ? ",
        },
        {
          id: 5,
          question: "What are your career goals in the next 10 years ? ",
        },
      ],
    };
  },
};
</script>
