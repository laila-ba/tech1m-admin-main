<template>
  <Layout>
    <div>
      <img
        class="h-52 w-full object-cover"
        src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt=""
      />
    </div>
    <div class="mx-auto">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <span class="relative inline-block pl-4 sm:pl-0">
            <img
              class="h-24 rounded-full ring-4 ring-white sm:h-36 shadow-xl"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span
              class="absolute bottom-2 right-1 block h-4 w-4 rounded-full bg-green-500 ring-2 ring-white"
            ></span>
          </span>
          <div class="text-left place-self-end pl-3 space-y-2 sm:pt-0 pt-12">
            <div class="flex items-center">
              <h4 class="text-3xl font-bold text-black">Accelo</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill=" #1570EF
"
                class="w-6 h-6 ml-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <dd
              class="mt-1 flex items-baseline justify-between lg:flex space-x-2"
            >
              <div
                class="flex items-baseline text-2xl font-semibold text-indigo-600"
              >
                <span class="text-base font-medium text-gray-500">RK0946</span>
              </div>

              <div
                class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-700 md:mt-2 lg:mt-0"
              >
                <svg
                  class="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Tested
              </div>
            </dd>
          </div>
        </div>
        <!--switch-->
        <div
          class="pr-4 sm:pr-0 flex sm:min-w-0 sm:flex-1 sm:items-center justify-end sm:space-x-6 sm:pb-1"
        >
          <div class="justify-stretch mt-6 space-y-1 sm:flex-row">
            <div class="font-medium">
              <h2 v-if="enabled">Available</h2>
              <h2 v-else>Unavailable</h2>
            </div>

            <Switch
              v-model="enabled"
              :class="[
                enabled ? 'bg-green-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  enabled ? 'translate-x-10' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                ]"
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    <!--Tabs-->
    <div>
      <div class="sm:hidden mt-3 px-4">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select
          id="tabs"
          name="tabs"
          class="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base sm:text-sm"
        >
          <option @click="currentTab(1)">Personal Information</option>

          <option @click="currentTab(2)">Home Address</option>

          <option @click="currentTab(3)">Emergency Contact</option>

          <option @click="currentTab(4)">Work Experience</option>
          <option @click="currentTab(5)">Education</option>
          <option @click="currentTab(6)">Referees</option>
          <option @click="currentTab(7)">Job Applied</option>
          <option @click="currentTab(8)">Portfolio</option>
        </select>
      </div>
      <div class="hidden sm:block">
        <div class="border-b border-gray-200">
          <nav
            class="-mb-px flex space-x-4 lg:space-x-8 mt-4"
            aria-label="Tabs"
          >
            <a
              @click="currentTab(1)"
              :class="{
                'text-blue-500 border-blue-500 font-bold': tab == 1,
              }"
              class="border-transparent text-gray-500 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
              >Personal Information</a
            >

            <a
              @click="currentTab(2)"
              :class="{
                'text-blue-500 border-blue-500 font-bold': tab == 2,
              }"
              class="border-transparent text-gray-500 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
              >Home Address</a
            >
            <a
              @click="currentTab(3)"
              :class="{
                'text-blue-500 border-blue-500 font-bold': tab == 3,
              }"
              class="border-transparent text-gray-500 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
              >Emergency Contact</a
            >
            <a
              @click="currentTab(4)"
              :class="{
                'text-blue-500 border-blue-500 font-bold': tab == 4,
              }"
              class="border-transparent text-gray-500 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
              >Work Experience</a
            >
            <a
              @click="currentTab(5)"
              :class="{
                'text-blue-500 border-blue-500 font-bold': tab == 5,
              }"
              class="border-transparent text-gray-500 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
              >Education</a
            >
            <a
              @click="currentTab(6)"
              :class="{
                'text-blue-500 border-blue-500 font-bold': tab == 6,
              }"
              class="border-transparent text-gray-500 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
              >Referees</a
            >
            <a
              @click="currentTab(7)"
              :class="{
                'text-blue-500 border-blue-500 font-bold': tab == 7,
              }"
              class="border-transparent text-gray-500 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
              >Jobs Applied</a
            >
            <a
              @click="currentTab(8)"
              :class="{
                'text-blue-500 border-blue-500 font-bold': tab == 8,
              }"
              class="border-transparent text-gray-500 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm lg:text-base cursor-pointer"
              >Portfolio</a
            >
          </nav>
        </div>
      </div>
    </div>
    <!--talent details-->
    <div v-if="tab === 1">
      <PersonalInfo></PersonalInfo>
    </div>
    <div v-if="tab === 2">
      <HomeAddress></HomeAddress>
    </div>
    <div v-if="tab === 3">
      <EmergContact></EmergContact>
    </div>

    <div v-if="tab === 4">
      <WorkExp></WorkExp>
    </div>
    <div v-if="tab === 5">
      <Education></Education>
    </div>
    <div v-if="tab === 6">
      <Referees></Referees>
    </div>
    <div v-if="tab === 7">
      <JobsApplied></JobsApplied>
    </div>
    <div v-if="tab === 8">
      <ul
        role="list"
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 mt-5 px-4 sm:px-0"
      >
        <li
          @click="currentTab(9)"
          v-for="project in projects"
          :key="project.name"
        >
          <div class="space-y-4">
            <div>
              <img
                class="rounded-lg object-cover shadow-lg sm:h-72 h-48 w-full"
                :src="project.imageUrl"
                alt=""
              />
            </div>

            <li class="space-y-2">
              <div class="space-y-1 text-lg font-medium leading-6 text-left">
                <h3>{{ project.name }}</h3>
              </div>
            </li>
          </div>
        </li>
      </ul>
      <!-- <Portfolio></Portfolio> -->
    </div>
    <div class="mt-5" v-if="tab === 9">
      <div class="text-gray-500">
        <a class="flex cursor-pointer" @click="currentTab(8)"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
          Back
        </a>
      </div>
      <div class="overflow-y-auto">
        <h2 class="text-left mt-4 text-2xl font-semibold">
          Paystact Mobile App Design
        </h2>
        <div class="py-5">
          <div
            class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap"
          >
            <div class="ml-4 mt-2">
              <h3 class="text-base font-medium leading-6 text-gray-900">
                Role: UX Designer
              </h3>
            </div>
            <div class="ml-4 mt-2 flex-shrink-0">
              <button
                type="button"
                class="relative inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-2 text-base font-medium text-white shadow-sm"
              >
                View full project
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            class="h-52 w-full object-cover"
            src="https://images.unsplash.com/photo-1601034913836-a1f43e143611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </div>
        <div class="text-left mt-10 pb-5 text-lg border-b-2 border-gray-300">
          <h3 class="font-bold mb-4">Task</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="text-left mt-10 pb-5 text-lg">
          <h3 class="font-bold mb-4">Solution</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../Layouts/Admin/Index.vue";
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
import PersonalInfo from "../../Components/Talents/personalInfo.vue";
import HomeAddress from "../../Components/Talents/homeAddress.vue";
import EmergContact from "../../Components/Talents/emergContact.vue";
import WorkExp from "../../Components/Talents/workExp.vue";
import Education from "../../Components/Talents/Education.vue";
import Referees from "../../Components/Talents/Referees.vue";
import JobsApplied from "../../Components/Talents/jobsApplied.vue";
// import Portfolio from "../../Components/Talents/Portfolio.vue";

export default {
  name: "talentView",

  components: {
    Layout,
    PersonalInfo,
    HomeAddress,
    EmergContact,
    WorkExp,
    Education,
    Referees,
    JobsApplied,
    Switch,
    // Portfolio,
  },
  setup() {
    const projects = [
      {
        name: "Mobile app design",
        imageUrl:
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      },
      {
        name: "Mobile app design",
        imageUrl:
          "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "Mobile app design",
        imageUrl:
          "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        name: "Mobile app design",
        imageUrl:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      },
      {
        name: "Mobile app design",
        imageUrl:
          "https://images.unsplash.com/photo-1559650656-5d1d361ad10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=648&q=80",
      },
      {
        name: "Mobile app design",
        imageUrl:
          "https://images.unsplash.com/photo-1601034913836-a1f43e143611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
    ];
    const enabled = ref(true);

    const tab = ref(1);
    const currentTab = (tabNumber) => (tab.value = tabNumber);

    return {
      tab,
      currentTab,
      enabled,
      projects,
    };
  },
};
</script>
