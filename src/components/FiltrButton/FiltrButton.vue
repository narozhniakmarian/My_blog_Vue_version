<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'hero' },
  active: { type: Boolean, default: false },
  href: { type: String, default: null }
})

const baseStyles =
  'transition-all text-sm cursor-pointer select-none p-1'

const variants = {
  hero:
    'flex-shrink-0 px-3 py-1 rounded-full border border-transparent text-hero-filter font-medium hover:border-hero-filter hover:bg-accen/50 hover:text-hero-filter',

  heroActive:
    'flex-shrink-0 px-3 py-1 rounded-full border border-primary/65 bg-primary/40 text-primary font-semibold',

  footer:
    'text-muted-foreground hover:text-primary hover:underline transition-colors',

  footerActive:
    'text-primary underline',

  header:
    'text-muted-foreground hover:text-primary transition-colors',

  headerActive:
    'text-primary font-medium'
}

const classes = computed(() => {
  const key = props.active ? `${props.variant}Active` : props.variant
  return `${baseStyles} ${variants[key]}`
})

const componentName = computed(() => (props.href ? 'a' : 'button'))
</script>

<template>
  <component :is="componentName" :href="href" :class="classes">
    <slot />
  </component>
</template>