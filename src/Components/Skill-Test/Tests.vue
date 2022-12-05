<template>
  <div class="flex px-6 pt-10 items-center justify-between">
    <div>
      <h3 class="text-left text-2xl font-semibold">Test</h3>
    </div>
    <router-link to="/tests">
      <p type="button" class="inline-flex items-center text-sm font-medium">
        View all
      </p>
    </router-link>
  </div>
  <ul
    role="list"
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 py-5"
  >
    <li
      v-for="test in tests"
      :key="test.email"
      class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white border border-gray-200 cursor-pointer hover:shadow-lg"
    >
      <div
        class="flex w-full items-center justify-between space-x-6 p-6 border-b-1"
      >
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-500">
              {{ test.category }}
            </h3>
          </div>
          <p class="mt-1 text-lg text-left font-semibold">
            {{ test.name }}
          </p>
        </div>

        <svg
          class="flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="none"
        >
          <circle cx="28" cy="28" r="28" fill="#EBF3FE" />
          <path
            fill="#00D8FF"
            d="M28 30.32a2.344 2.344 0 1 0 0-4.687 2.344 2.344 0 0 0 0 4.687Z"
          />
          <path
            fill="#00D8FF"
            d="M28 33.351a26.612 26.612 0 0 1-8.325-1.125 10.593 10.593 0 0 1-3.428-1.835 3.322 3.322 0 0 1-1.372-2.414c0-1.55 1.703-3.068 4.554-4.062A26.958 26.958 0 0 1 28 22.651a26.88 26.88 0 0 1 8.458 1.242c1.2.382 2.323.975 3.317 1.75a3.179 3.179 0 0 1 1.35 2.334c0 1.611-1.903 3.243-4.969 4.258A27 27 0 0 1 28 33.35Zm0-9.578c-2.78-.038-5.55.368-8.202 1.202-2.625.915-3.802 2.168-3.802 3 0 .87 1.265 2.237 4.042 3.187A25.511 25.511 0 0 0 28 32.23c2.64.047 5.272-.31 7.805-1.06C38.688 30.216 40 28.846 40 27.977a2.183 2.183 0 0 0-.947-1.474 9.556 9.556 0 0 0-2.963-1.55 25.746 25.746 0 0 0-8.09-1.18Z"
          />
          <path
            fill="#00D8FF"
            d="M22.675 39.665c-.437.01-.87-.096-1.252-.307-1.343-.774-1.808-3.008-1.244-5.975a26.957 26.957 0 0 1 3.187-8.056 26.883 26.883 0 0 1 5.3-6.707 10.664 10.664 0 0 1 3.172-2 3.18 3.18 0 0 1 2.698 0c1.396.805 1.858 3.269 1.207 6.431a27.006 27.006 0 0 1-3.109 7.625 26.609 26.609 0 0 1-5.134 6.65 10.593 10.593 0 0 1-3.302 2.052 4.617 4.617 0 0 1-1.523.287Zm1.662-13.78a26.202 26.202 0 0 0-3.056 7.704c-.518 2.733-.02 4.377.703 4.795.75.434 2.57.022 4.781-1.909a25.506 25.506 0 0 0 4.9-6.366 25.874 25.874 0 0 0 2.983-7.29c.613-2.976.083-4.799-.669-5.232a2.18 2.18 0 0 0-1.75.084 9.554 9.554 0 0 0-2.823 1.798 25.746 25.746 0 0 0-5.062 6.42l-.007-.005Z"
          />
          <path
            fill="#00D8FF"
            d="M33.322 39.676c-1.27 0-2.884-.768-4.564-2.213a26.96 26.96 0 0 1-5.387-6.785 26.886 26.886 0 0 1-3.163-7.941 10.666 10.666 0 0 1-.148-3.75 3.179 3.179 0 0 1 1.344-2.332c1.394-.807 3.76.023 6.173 2.166a26.998 26.998 0 0 1 5.053 6.5 26.609 26.609 0 0 1 3.197 7.77c.283 1.276.326 2.594.129 3.886a3.32 3.32 0 0 1-1.4 2.396 2.428 2.428 0 0 1-1.234.303Zm-8.981-9.562a26.202 26.202 0 0 0 5.149 6.496c2.108 1.814 3.78 2.204 4.5 1.781.75-.436 1.303-2.215.733-5.094a25.514 25.514 0 0 0-3.067-7.417 25.878 25.878 0 0 0-4.823-6.225c-2.273-2.017-4.116-2.468-4.867-2.033a2.18 2.18 0 0 0-.801 1.558 9.557 9.557 0 0 0 .143 3.342 25.75 25.75 0 0 0 3.034 7.594l-.001-.002Z"
          />
        </svg>
      </div>
      <div class="border-y pt-4 pb-6 flex">
        <div class="progress pl-6">
          <div class="barOverflow">
            <div class="bar"></div>
          </div>
          <div class="-mt-8">
            <span class="font-bold text-xl">240</span>
            <p class="text-gray-500 text-sm font-medium">Test Takers</p>
          </div>
        </div>
        <ul class="w-36 text-center mt-3">
          <li class="inline-flex items-center px-3 py-0.5 text-sm font-medium">
            <svg
              class="-ml-1 mr-1.5 h-3 w-3 text-blue-600"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            200 Passed
          </li>
          <li class="inline-flex items-center pr-3 py-0.5 text-sm font-medium">
            <svg
              class="-ml-1 mr-1.5 h-3 w-3 text-blue-200"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx="4" cy="4" r="3" />
            </svg>
            40 Failed
          </li>
        </ul>
      </div>
      <div class="text-right text-blue-600 text-base px-4 py-1 font-medium">
        View
      </div>
    </li>
  </ul>
</template>
<style>
.progress {
  position: relative;
  margin-left: 20px;
  float: left;
  text-align: center;
}
.barOverflow {
  /* Wraps the rotating .bar */
  position: relative;
  width: 120px;
  height: 60px; /* Half circle (overflow) */
  margin-bottom: -14px; /* bring the numbers up */
  overflow: hidden;
}
.bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px; /* full circle! */
  border-radius: 50%;
  box-sizing: border-box;
  border: 10px solid rgba(37, 99, 235); /* half gray, */
  border-bottom-color: #ccc; /* half azure */
  border-right-color: #ccc;
}
</style>
<script>
export default {
  name: "Tests",

  components: {},
  data() {
    return {
      tests: [
        {
          category: "Product Design",
          name: "Figma Design Test",
        },
        {
          category: "Front-end development",
          name: "React Test",
        },
        {
          category: "Product Design",
          name: "Adobe Xd test",
        },
        {
          category: "Product Design",
          name: "Figma Design Test",
        },
        {
          category: "Front-end development",
          name: "React Test",
        },
        {
          category: "Product Design",
          name: "Adobe Xd test",
        },
      ],
    };
  },
};
</script>
