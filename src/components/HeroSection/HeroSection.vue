<script setup>
import FilterButton from '../FiltrButton/FiltrButton.vue'

const props = defineProps({
    selected: String
})

const emit = defineEmits(['update:selected'])

</script>

<template>
    <section class="
    relative
    w-full h-[70vh] 
    bg-cover bg-center pt-16 pb-6
    bg-[url('https://res.cloudinary.com/dyeijtfe2/image/upload/v1767253041/hero_sm_opt_yvsab5.webp')]
    md:bg-[url('https://res.cloudinary.com/dyeijtfe2/image/upload/v1767253040/hero_md_opt_njwnqz.webp')] md:pt-22 md:pb-12
    lg:bg-[url('https://res.cloudinary.com/dyeijtfe2/image/upload/v1767251991/hero_lg_opt_mgrggt.webp')]
    before:absolute before:inset-0
    before:bg-gradient-to-t before:from-foreground/30 before:to-foreground/50
    before:z-0
  ">
        <div class="container relative flex flex-col justify-between items-center h-full
    z-5 mx-auto ">
            <div class="text-center">
                <h1 class="block text-4xl text-background font-serif font-extrabold  md:text-5xl
           md:px-16 md:text-center 
           lg:text-6xl lg:px-22 mx-auto">
                    Новини та цікаві статті про події в світі для українців закордоном
                </h1>
            </div>



            <!--  Рядок: Країни + Пошук -->
            <div class="  flex flex-col items-center justify-center gap-2 md:gap-3">

                <p class="pt-2 font-serif text-xl text-background text-center ">Останні новини світу</p>

                <!-- 🔥 Окремий бордер‑розділювач -->
                <div class="w-[90%] mx-auto border-t border-border/50 "></div>
                <!-- Навігація по країнах -->
                <div class=" min-w-[335px] sm:w-auto  sm:flex-row overflow-x-auto no-scrollbar flex flex-col items-center gap-1
        backdrop-blur-sm bg-background/8 rounded-xl py-2">

                    <FilterButton variant="hero" :active="props.selected === 'world'"
                        @click="emit('update:selected', 'world')">
                        Всі новини
                    </FilterButton>

                    <FilterButton variant="hero" :active="props.selected === 'ua'"
                        @click="emit('update:selected', 'ua')">
                        Україна
                    </FilterButton>

                    <FilterButton variant="hero" :active="props.selected === 'pl'"
                        @click="emit('update:selected', 'pl')">
                        Польща
                    </FilterButton>

                    <FilterButton variant="hero" :active="props.selected === 'de'"
                        @click="emit('update:selected', 'de')">
                        Німеччина
                    </FilterButton>
                </div>

                <!-- Пошук -->
                <div class="relative w-full  shrink-0">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text"
                        class="block w-full pl-10 pr-3 py-1.5 border border-input rounded-md text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        placeholder="Пошук новин..." />
                </div>
            </div>
        </div>
    </section>

</template>