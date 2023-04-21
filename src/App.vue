<script setup>
import { getMovie } from './service/movie'
import AppNavbar from './components/AppNavbar.vue'
import AppHeader from './components/AppHeader.vue'
import ListMovies from './components/ListMovies.vue'

const { data, isLoading } = getMovie()
</script>

<template>
  <div
    style="background-image: url('/background.png')"
    class="min-h-screen bg-[#121829] bg-repeat bg-[length:100%_auto] font-poppins pb-9"
  >
    <AppNavbar />
    <AppHeader />
    <ListMovies :movies="data" :loading="isLoading" />
  </div>
</template>
