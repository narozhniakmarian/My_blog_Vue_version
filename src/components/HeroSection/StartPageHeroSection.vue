<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import FilterButton from '../FiltrButton/FiltrButton.vue'

const props = defineProps({
  selected: String,

  // start | article
  variant: { type: String, default: 'start' },

  // заголовок
  title: {
    type: String,
    default: 'Новини та цікаві статті про події в світі для українців закордоном'
  },

  // підзаголовок
  subtitle: {
    type: String,
    default: 'Останні новини світу'
  },

  // висота секції
  height: { type: String, default: '70vh' },

  // фонові зображення
  bgSm: { type: String, required: true },
  bgMd: { type: String, required: true },
  bgLg: { type: String, required: true }
})

const emit = defineEmits(['update:selected'])

/* -------------------------------
   Lazy‑loading background image
--------------------------------*/
const isBgLoaded = ref(false)

onMounted(() => {
  const img = new Image()
  img.src = props.bgSm
  img.onload = () => {
    isBgLoaded.value = true
  }
})

/* -------------------------------
   Dynamic classes
--------------------------------*/
const sectionClasses = computed(() => {
  return props.variant === 'start'
    ? 'pt-16 pb-6'
    : ' sm:pt-4'
})

const titleWrapperClass = computed(() => {
  return props.variant === 'article'
    ? 'visually-hidden'
    : 'text-center fade-up'
})

const filtersWrapperClass = computed(() => {
  return props.variant === 'start'
    ? 'min-w-[335px] flex flex-col items-center  gap-1   '
    : 'grid grid-cols-2 gap-1 w-full min-w-[320px] sm:flex justify-center sm:flex-row sm:min-w-[450px] sm:gap-2 fade-up'
})
</script>

<template>
  <section :style="{
    '--bg-sm': `url(${props.bgSm})`,
    '--bg-md': `url(${props.bgMd})`,
    '--bg-lg': `url(${props.bgLg})`,
    height: props.height
  }" class="
      relative w-full bg-cover bg-center transition-opacity duration-700 ease-out
      before:absolute before:inset-0
      before:bg-gradient-to-t before:from-hero-filter/10 before:to-hero-filter/50
      before:z-0
      bg-[image:var(--bg-sm)]
      md:bg-[image:var(--bg-md)]
      lg:bg-[image:var(--bg-lg)]
    " :class="[sectionClasses, isBgLoaded ? 'opacity-100' : 'opacity-0']">
    <div class="container relative flex flex-col justify-between items-center h-full z-5 mx-auto">

      <!-- Заголовок -->
      <div :class="titleWrapperClass">
        <h1 class="block text-4xl text-background font-serif font-extrabold
                   md:text-5xl md:px-16
                   lg:text-6xl lg:px-22 mx-auto fade-up" style="animation-delay: .15s">
          {{ props.title }}
        </h1>
      </div>

      <!-- Фільтри + Пошук -->
      <div class="flex flex-col items-center justify-center gap-2 md:gap-3 fade-in" style="animation-delay: .25s">

        <p class="pt-2 font-serif text-xl text-background text-center fade-up" style="animation-delay: .3s">
          {{ props.subtitle }}
        </p>

        <div class="w-[90%] mx-auto border-t border-border/50 fade-up" style="animation-delay: .35s"></div>

        <!-- Кнопки фільтрів -->
        <div class=" w-full backdrop-blur-sm  bg-hero-blur/45 rounded-xl py-2 overflow-x-auto no-scrollbar will-change-transform will-change-opacity
          justify-center sm:flex-row sm:min-w-[450px] sm:gap-2 fade-up" :class="filtersWrapperClass"
          style="animation-delay: .4s">
          <FilterButton variant="hero" :active="props.selected === 'world'" @click="emit('update:selected', 'world')">
            Всі новини
          </FilterButton>

          <FilterButton variant="hero" :active="props.selected === 'ua'" @click="emit('update:selected', 'ua')">
            Україна
          </FilterButton>

          <FilterButton variant="hero" :active="props.selected === 'pl'" @click="emit('update:selected', 'pl')">
            Польща
          </FilterButton>

          <FilterButton variant="hero" :active="props.selected === 'de'" @click="emit('update:selected', 'de')">
            Німеччина
          </FilterButton>
        </div>

        <!-- Пошук -->
        <div class="relative w-full shrink-0 fade-up will-change-transform will-change-opacity"
          style="animation-delay: .5s">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input type="text" class="block w-full pl-10 pr-3 py-1.5 border border-input rounded-md text-sm
                   bg-background text-foreground placeholder:text-muted-foreground will-change-transform will-change-opacity
                   focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
            placeholder="Пошук новин..." />
        </div>

      </div>
    </div>
  </section>
</template>



<!-- 🧪 Як тепер використовувати
📌 Головна сторінка
<HeroSection
  :selected="selected"
  @update:selected="selected = $event"
  variant="start"
  height="70vh"
  bgSm="/img/hero_sm.webp"
  bgMd="/img/hero_md.webp"
  bgLg="/img/hero_lg.webp"
/>



📌 Сторінка статті
<HeroSection
  :selected="selected"
  @update:selected="selected = $event"
  variant="article"
  height="25vh"
  bgSm="/img/article_sm.webp"
  bgMd="/img/article_md.webp"
  bgLg="/img/article_lg.webp"
  title="Пошук по статтях"
  subtitle="Знайдіть більше матеріалів"

/>


У цьому варіанті:
- заголовок є в DOM, але не займає місця
- фон інший
- висота менша
- фільтри та пошук залишаються

Маріан, якщо хочеш, я можу:
- додати анімацію появи
- зробити автоматичний lazy‑loading фонів
- додати пропс для зміни градієнта
- або зробити третій варіант hero (наприклад, для категорій)
Скажи, що хочеш покращити далі.
 -->