<template>
    <Layout>
        <!-- Start of Breadcrumbs-->
        <nav class="flex" aria-label="Breadcrumb">
  <ol role="list" class="flex items-center space-x-4">
  

    <li>
      <div class="flex items-center">
     
        <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Company</a>
      </div>
    </li>

    <li>
      <div class="flex items-center">
        <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
        </svg>
        <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">Company Profile</a>
      </div>
    </li>
  </ol>
</nav>
<!--Company image and name-->
<div class="flex mt-4">
  <div class="mr-4 flex-shrink-0">
    <img class="inline-block  w-16 rounded-full border border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
  </div>
  <div class="text-left">
    <h4 class="text-3xl font-bold text-black ">Accelo</h4>
    <p class="mt-1 text-gray-500 uppercase">REK001</p>
  </div>
</div>
<!--Tabs-->
<div class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
        <a href="#" class="border-blue-500 text-blue-500  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Company Profile</a>

        <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Team Members</a>


        <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">Jobs</a>
      </nav>
    </div>
    <!--Company details-->
    <div class="mt-10 divide-y divide-gray-200 bg-white rounded-md shadow ">
                
                  <div class="mt-6 px-3">
                    <dl class="divide-y divide-gray-200">
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Company Name </dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow">Accelo</span>
                        
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Email</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow">Accelo@email.com</span>
                          
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Website</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow ">https://www.Accelo.com</span>
                          
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Industry</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow "><span class="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">Fintech</span></span>
                          
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Location</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow ">London</span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Address Details</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow ">107 Victoria lane, London</span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Postal Code</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow ">N1070976</span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Mission</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow border border-gray-300 rounded-md p-3">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Benefits</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow flex space-x-3 "><span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">1</span>
                            <span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">2</span>
                            <span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">3</span>
                        </span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Values</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow flex space-x-3 "><span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">1</span>
                            <span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">2</span>
                            <span class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">3</span>
                        </span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5 text-left">
                        <dt class="text-sm font-medium text-gray-500">Size</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow ">11-50</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
</Layout>
</template>

<script>

import Layout from '../../Layouts/Admin/Index.vue'
// import {ref} from "vue";

export default {
    name: 'Companies',
  

    components: {
        Layout,
    },




}
</script>
