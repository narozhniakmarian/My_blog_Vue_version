<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: String,
  variant: {
    type: String,
    default: 'header' 
  }

})

const baseStyles =
  'inline-flex items-center justify-center font-medium transition-all duration-[var(--transition-duration)]'

const variants = {
  header:
    'rounded-md border border-input bg-secondary px-4 py-1.5 text-sm text-secondary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground',

  footer:
    'rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground shadow border border-input hover:bg-muted hover:text-accent-foreground',

  modal:
    'block w-full px-4 py-3 rounded-lg flex items-center gap-3 hover:bg-accent hover:text-accent-foreground transition-colors'
}



const classes = computed(() => {
  return [
    baseStyles,
    variants[props.variant],
  ].join(' ')
})

const componentName = computed(() => {
  return props.href ? 'a' : 'button'
})
</script>

<template>
  <component
    :is="componentName"
    :href="href"
    :class="classes"
  >
    <slot />
  </component>
</template>