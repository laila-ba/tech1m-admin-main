<template>
  <ul
    role="list"
    class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 mt-5"
  >
    <li v-for="project in projects" :key="project.name">
      <div class="space-y-4">
        <div>
          <img
            class="rounded-lg object-cover shadow-lg h-72 w-full"
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
</template>
<script>
export default {
  name: "Portfolio",

  components: {},
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
    return {
      projects,
    };
  },
};
</script>
