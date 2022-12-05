<template>
    <Layout>
    <div>
        <Head title="Dashboard" />
        <h1 class="mb-8 text-3xl font-bold text-blue-600">Dashboard</h1>
        <p class="mb-8 leading-normal">Welcome</p>


    </div>
</Layout>
</template>

<script>

import Layout from '../../Layouts/Admin/Index.vue'
// import {ref} from "vue";

export default {
    name: 'Dashboard',
    props: ["contacts", "errors"],

    components: {
        Layout,
    },



    setup() {


        return {

        }
    },
}
</script>
