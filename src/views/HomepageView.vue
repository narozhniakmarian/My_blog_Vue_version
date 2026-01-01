<script setup>
import { onMounted, ref, watch } from 'vue'

import AddFooter from '../components/Footer/AddFooter.vue'
import AddHeader from '../components/Header/AddHeader.vue'
import StartPageHeroSection from '../components/HeroSection/StartPageHeroSection.vue'
import BurgerMenu from '../components/BurgerMenu/BurgerMenu.vue'

const selected = ref('world')
const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

onMounted(() => {
  const saved = localStorage.getItem('selectedCountry')
  if (saved) {
    selected.value = saved
  }
})

watch(selected, (value) => {
  localStorage.setItem('selectedCountry', value)
})

</script>

<template>
  <AddHeader :selected="selected" @update:selected="selected = $event" @click="openModal" />

  <BurgerMenu :is-open="isOpen" @close="isOpen = false" @update:selected="selected = $event" />

  <main class="flex h-screen">
    <StartPageHeroSection :selected="selected" @update:selected="selected = $event" variant="start" height="70vh"
      :hideTitle="false" bgSm="https://res.cloudinary.com/dyeijtfe2/image/upload/v1767253041/hero_sm_opt_yvsab5.webp"
      bgMd="https://res.cloudinary.com/dyeijtfe2/image/upload/v1767253040/hero_md_opt_njwnqz.webp"
      bgLg="https://res.cloudinary.com/dyeijtfe2/image/upload/v1767251991/hero_lg_opt_mgrggt.webp" />
  </main>

  <AddFooter :selected="selected" @update:selected="selected = $event" />
</template>
