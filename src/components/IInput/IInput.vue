<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    default: 'text',
    type: String
  }
})

defineOptions({
  inheritAttrs: false
})

const emit = defineEmits(['update:modelValue'])
const baseStyles =
  'w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary'
const isText = computed(() => {
  return props.type === 'text'
})
const inputStyles = computed(() => {
  return isText.value ? baseStyles + ' h-10' : baseStyles + ' resize-none'
})
const componentName = computed(() => {
  return isText.value  ? 'input' : 'text'
})
</script>

<template>
  <div class="w-full text-[#2C2C2C]">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>
      <component
        :is="componentName"
        rows="3"
        :class="inputStyles"
        v-bind="{ ...$props, ...$attrs }"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>
