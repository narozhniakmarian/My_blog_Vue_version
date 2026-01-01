<script setup>
import LogoButton from '../LogoButton/LogoButton.vue';
import SupportButton from '../SupportButton/SupportButton.vue';
import FilterButton from '../FiltrButton/FiltrButton.vue'



const emit = defineEmits(['update:selected', 'click'])

</script>

<template>
  <header class="mt-4 z-50 w-full border-b border-border/50 py-5">
    <div class="container flex items-center justify-between">
      <LogoButton @click="emit('update:selected', 'world')" />
      <nav class="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <FilterButton variant="header" href="/" @click="emit('update:selected', 'world')">
          Головна
        </FilterButton>
        <FilterButton variant="footer" @click="emit('update:selected', 'world')">
          Всі новини
        </FilterButton>

      </nav>

      <div class="flex items-center gap-3">
        <div class="hidden lg:flex items-center gap-2 mr-4">
          <SupportButton href="#" variant="header">
            <span class="mr-1">☕</span> На каву
          </SupportButton>
          <SupportButton href="#" variant="header">
            <span class="mr-1">🏦</span> На банку
          </SupportButton>
          <SupportButton href="#" variant="header">
            <span class="mr-1">❤️</span> Patreon
          </SupportButton>
        </div>
      </div>

      <button id="menu-btn" @click="$emit('click')" class="relative z-50 h-10 w-10 rounded-md hover:bg-accent flex flex-col items-center justify-center gap-1.5
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 lg:hidden" aria-label="Меню">
        <span class="hamburger-line line-top block h-0.5 w-6 bg-foreground"></span>
        <span class="hamburger-line line-middle block h-0.5 w-6 bg-foreground"></span>
        <span class="hamburger-line line-bottom block h-0.5 w-6 bg-foreground"></span>
      </button>
    </div>
  </header>

</template>