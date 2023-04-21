<script setup>
import AppLayout from './AppLayout.vue'

const handleCTA = () => {
  window.open('https://wa.me/6285702330305')
}
</script>
<template>
  <nav class="fixed top-0 w-full z-10 bg-[#121829]/50 backdrop-blur-lg">
    <AppLayout class="flex justify-between items-center py-4">
      <a href="/">
        <img src="/logo.png" class="w-7 h-7" alt="list image logo" />
      </a>
      <button
        @click="handleCTA"
        class="text-[#A8AEBF] font-semibold text-base flex items-center gap-2"
      >
        <span>Contact</span>
        <svg
          class="animate-cta"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.61987 3.95331L13.6665 7.99997L9.61987 12.0466"
            stroke="#A8AEBF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.33325 8H13.5533"
            stroke="#A8AEBF"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </AppLayout>
  </nav>
</template>
