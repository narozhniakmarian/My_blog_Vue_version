<script setup>
import IModal from '../IModal/IModal.vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean
  }
})

const emit = defineEmits(['update:selected', 'close'])

</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">

  </IModal>
</template>
