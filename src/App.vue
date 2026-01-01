<script setup>
import { ref } from 'vue'
import HomepageView from './views/HomepageView.vue'
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'


const isOpen = ref(false)
const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}

</script>

<template>
  <div class="min-h-screen bg-background text-foreground">



    <HomepageView @click="openModal" />
    <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" />
  </div>
</template>
