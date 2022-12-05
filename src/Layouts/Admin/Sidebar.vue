<template>
  <!-- Static sidebar for desktop -->
  <div
    class="hidden absolute sm:relative lg:flex lg:flex-shrink-0 h-full top-0 bottom-0"
  >
    <div class="flex flex-col border-grey-300 border-r w-80 h-full relative">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex flex-col flex-grow bg-white pt-5 pb-4 overflow-y-auto h-full relative"
      >
        <div class="flex items-center flex-shrink-0 px-4">
          <!-- <Logo class="object-cover w-28 h-auto" /> -->
        </div>
        <nav
          class="mt-16 flex-1 flex flex-col divide-y divide-red-800 overflow-y-auto"
          aria-label="Sidebar"
        >
          <div class="px-4 space-y-2">
            <Link
              href="/dashboard"
              :class="
                isDashboard
                  ? 'text-blue-600 group flex items-center px-2 py-2 text-medium leading-6 font-medium rounded-md'
                  : 'text-gray-500 group flex items-center px-2 py-2 text-medium leading-6 font-medium rounded-md hover:bg-gray-100 cursor-pointer'
              "
              aria-current="page"
            >
              <vue-feather type="home" class="mr-4 w-6 h-6" />
              <span class="font-bold">Dashboard</span>
            </Link>
            <p class="text-gray-600 ml-2 mt-3 mb-3 text-left">Manage ATS</p>

            <Link
              v-for="(nav, key) in navigationATS"
              :key="key"
              :href="nav.href"
              :class="
                nav.current
                  ? 'text-blue-600 bg-blue-100 group flex items-center px-2 py-2 text-medium leading-6 font-medium rounded-md cursor-pointer'
                  : 'text-gray-500 group flex items-center px-2 py-2 text-medium leading-6 font-medium rounded-md hover:bg-gray-100 cursor-pointer'
              "
              aria-current="page"
            >
              <vue-feather :type="nav.icon" class="mr-4 w-6 h-6" />
              <!-- <span class="mr-4 h-6 w-6" v-html="svgIcon.candidates"></span> -->
              <span class="font-bold">{{ nav.name }}</span>
            </Link>
            <p class="text-gray-600 ml-2 mt-3 mb-3 text-left">
              Manage Workspace
            </p>
            <Link
              v-for="(nav, key) in navWorkspace"
              :key="key"
              :href="nav.href"
              :class="
                nav.current
                  ? 'text-blue-600 bg-blue-100 group flex items-center px-2 py-2 text-medium leading-6 font-medium rounded-md cursor-pointer'
                  : 'text-gray-500 group flex items-center px-2 py-2 text-medium leading-6 font-medium rounded-md hover:bg-gray-100 cursor-pointer'
              "
              aria-current="page"
            >
              <vue-feather :type="nav.icon" class="mr-4 w-6 h-6" />
              <!-- <span class="mr-4 h-6 w-6" v-html="svgIcon.candidates"></span> -->
              <span class="font-bold">{{ nav.name }}</span>
            </Link>
          </div>
        </nav>
        <div
          class="mt-6 py-4 pb-6 absolute bottom-0 left-0 w-full border-t z-10"
        >
          <div class="px-4 flex justify-between items-center">
            <div class="flex items-center">
              <img
                :src="avatar"
                alt="User Avatar"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div class="pl-2">
                <h2 class="text-sm text-gray-700 font-medium">
                  {{ user.name || "N/A" }}
                </h2>
                <p class="text-xs text-gray-500">{{ user.email || "N/A" }}</p>
              </div>
            </div>
            <div>
              <Link href="#" method="get" class="text-gray-600" title="Logout">
                <vue-feather
                  type="log-out"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from "@/Shared/Logo.vue";
import VueFeather from "vue-feather";
import { computed, ref, onMounted } from "vue";
// import { usePage } from "@inertiajs/inertia-vue3"
// import { svg } from "@/Shared/AppSvg"
// import useRoute from "@/Composables/useRoute";

export default {
  name: "Sidebar",

  components: {
    //Logo,
    VueFeather,
  },

  setup() {
    // const { route } = useRoute();
    // const svgIcon = ref(svg)
    const avatar = ref(
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    );
    // const user = computed(() => usePage().props.value.auth?.user || {})
    const user = ref({});

    const navigationATS = ref([
      {
        name: "Jobs",
        href: "/jobs",
        current: false,
        icon: "briefcase",
        route_name: "jobs",
      },
      {
        name: "Companies",
        href: "/companies",
        // href: route('view.step1',{talent_id : props.user.code}),
        current: false,
        icon: "clipboard",
        route_name: "companies",
      },
      {
        name: "Talents",
        href: "/talents",
        current: false,
        icon: "globe",
        route_name: "talents",
      },
    ]);
    const navWorkspace = ref([
      {
        name: "Contracts",
        href: "",
        current: false,
        icon: "folder",
        route_name: "contracts",
      },
      {
        name: "Onboarding",
        href: "",
        // href: route('view.step1',{talent_id : props.user.code}),
        current: false,
        icon: "clipboard",
        route_name: "onboarding",
      },
      {
        name: "Talents",
        href: "/talents",
        current: false,
        icon: "globe",
        route_name: "talents",
      },
      {
        name: "Companies",
        href: "/companies",
        // href: route('view.step1',{talent_id : props.user.code}),
        current: false,
        icon: "clipboard",
        route_name: "companies",
      },
      {
        name: "Time Off",
        href: "",
        // href: route('view.step1',{talent_id : props.user.code}),
        current: false,
        icon: "clock",
        route_name: "timeoff",
      },
      {
        name: "Invoices",
        href: "",
        // href: route('view.step1',{talent_id : props.user.code}),
        current: false,
        icon: "dollar-sign",
        route_name: "invoices",
      },
      {
        name: "Skill Test",
        href: "",
        // href: route('view.step1',{talent_id : props.user.code}),
        current: false,
        icon: "monitor",
        route_name: "skill-test",
      },
      {
        name: "Form Management",
        href: "",
        // href: route('view.step1',{talent_id : props.user.code}),
        current: false,
        icon: "clipboard",
        route_name: "formManagement",
      },
    ]);
    const isDashboard = computed(() => window.location.href == "#");
    onMounted(() => {
      console.log("Component is mounted!");
      setSelected();
    });

    function setSelected() {
      let currentUrl = window.location.href;
      // console.log(currentUrl)
      for (const key in navigationATS.value) {
        // let x = Number(key) + 1
        if (
          currentUrl === navigationATS.value[key].href ||
          window.location.href.indexOf(navigationATS.value[key].route_name) > -1
        ) {
          navigationATS.value[key].current = true;
          // navigationATS.value[x].next = true
        }
      }
      for (const key in navWorkspace.value) {
        // let x = Number(key) + 1
        if (
          currentUrl === navWorkspace.value[key].href ||
          window.location.href.indexOf(navWorkspace.value[key].route_name) > -1
        ) {
          navWorkspace.value[key].current = true;
          // navWorkspace.value[x].next = true
        }
      }
    }

    return {
      navigationATS,
      navWorkspace,
      avatar,
      user,
      //svgIcon,
      isDashboard,
    };
  },
};
</script>
