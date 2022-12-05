<template>
  <div class="h-screen flex overflow-hidden bg-gray-50 relative">
    <flash-message />
    <Sidebar />

    <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
      <main
        class="flex-1 relative bg-white min-h-screen py-8 z-0 overflow-y-auto px-8 pr-16"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import FlashMessage from '@/Shared/FlashMessage.vue'

export default {
  name: 'AdminLayout',

  components: { FlashMessage, Sidebar },

  setup() {},
}
</script>
