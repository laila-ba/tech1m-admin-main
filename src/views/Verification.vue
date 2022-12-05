<template>
  <main class="lg:relative h-screen">
    <div
      class="mx-auto max-w-8xl w-full pt-8  pb-20 text-center lg:text-left relative h-64 sm:h-72 md:h-96 lg:absolute inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
    >
    
     <div class="col-span-1 flex flex-col text-center pt-16  mx-auto">
    <div class="flex-1 flex flex-col p-8">
      <img class=" flex-shrink-0 mx-auto rounded-full" src="../assets/mail.png" alt="">
      <h3 class="mt-6 text-gray-900 text-3xl font-semibold">Email Verification</h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        
        <dd class="text-gray-500 text-sm mt-3 w-96 mx-auto">We have sent a code to your mail address. Please enter the code below in order to verify your mail address</dd>
        
      </dl>
    </div>
  <div class="mt-1 space-x-4 flex mx-auto">
    <input type="code1" name="code1" id="code1" class="h-24 w-24 border border-gray-300 rounded-lg">
    <input type="code1" name="code1" id="code1" class="h-24 w-24 border border-gray-300 rounded-lg">
    <input type="code1" name="code1" id="code1" class="h-24 w-24 border border-gray-300 rounded-lg">
    <input type="code1" name="code1" id="code1" class="h-24 w-24 border border-gray-300 rounded-lg">
  </div>
    <router-link to="/Details">
                      <button
                        type="submit"
                        class="w-10/12 mx-auto flex justify-center py-2 mt-12 px-4 border border-transparent rounded-md text-base text-white tracking-wide blue-btn"
                      >
                        Verify Email
                      </button>
                    </router-link>
                  
  </div>
   
   
    </div>
    <div
      class="relative w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 hidden lg:block box"
    >
      <div class="absolute inset-0">
        <div class="h-screen object-cover background-overlay">

        </div>
      </div>
      <div class="relative px-24 pt-28">
        <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_b_5921_339577)">
<rect x="0.818359" y="0.102539" width="80" height="80" rx="40" fill="url(#paint0_linear_5921_339577)" fill-opacity="0.5"/>
</g>
<rect x="20.374" y="19.6582" width="40.8889" height="40.8889" rx="2" fill="url(#pattern0)"/>
<defs>
<filter id="filter0_b_5921_339577" x="-49.1816" y="-49.8975" width="180" height="180" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="25"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5921_339577"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5921_339577" result="shape"/>
</filter>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_5921_339577" transform="scale(0.002)"/>
</pattern>
<linearGradient id="paint0_linear_5921_339577" x1="1.51807" y1="2.73993" x2="84.4268" y2="8.09211" gradientUnits="userSpaceOnUse">
<stop stop-color="#EDEDF2"/>
<stop offset="1" stop-color="#EDEDF2" stop-opacity="0.69"/>
</linearGradient>
<image id="image0_5921_339577" width="500" height="500" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
      <div class="relative pt-8 sm:px-6  ">
       
        <h1
          class=" text-left text-5xl  tracking-tight whitespace-nowrap "
        >
          <span class="block text-white">Matching Talents</span>
          <span class="block text-white mt-5">to the right jobs</span>
        </h1>
        <p
          class="mt-12 max-w-lg mx-auto text-left text-xl text-gray-300 sm:max-w-3xl"
        >
         
         Create an account to get started with your job search and get matched to the best companies in the world
        </p>
        <div class="flex items-center space-x-2 mt-6">
          <div class="flex flex-shrink-0 -space-x-1">
            <img
              class="max-w-none h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Dries Vincent"
            />

            <img
              class="max-w-none h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Lindsay Walton"
            />

            <img
              class="max-w-none h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Courtney Henry"
            />

            <img
              class="max-w-none h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Tom Cook"
            />
          </div>
<div class="ml-4">
              <div class="text-base font-medium text-white inline-flex "><img class="pr-2" src="../assets/Stars.png"/>5.0</div>
              <div class="text-base font-medium text-indigo-200">Join 500+ talents</div>
            </div>
         
        </div>
      </div>
      </div>
    </div>
  </main>
  
    
</template>

<script>
export default {
  name: "Verification",
  components: {},
};
</script>