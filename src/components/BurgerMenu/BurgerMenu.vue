<script setup>
import SupportButton from '../SupportButton/SupportButton.vue';
import FilterButton from '../FiltrButton/FiltrButton.vue';

const emit = defineEmits(['update:selected', 'close'])
</script>

<template>
    <div id="mobile-menu-overlay" :class="[
        'fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    ]" @click="emit('close')">
    </div>

    <div id="mobile-menu" :class="[
        'fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-card border-l border-border shadow-2xl transition-transform duration-300 ease-in-out flex flex-col',
        isOpen ? 'translate-x-0' : 'translate-x-full'
    ]">

        <div class="p-4 border-b border-border flex items-center justify-between bg-muted/30">
            <span class="font-serif font-bold text-lg">Меню</span>
            <button id="close-menu-btn"
                class="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                @click="emit('close')">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>


        <nav class="flex-1 overflow-y-auto py-4 px-4 space-y-1">
            <FilterButton href="/" variant="modal" @click="emit('update:selected', 'world'); emit('close')">
                Головна</FilterButton>
            <FilterButton variant="modal" @click="emit('update:selected', 'world'); emit('close')"> Всі новини
            </FilterButton>

            <div class="pt-4 pb-2">
                <p class="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Підтримати проект
                </p>
            </div>
            <SupportButton href="#" variant="modal">
                <span class="text-lg">☕</span> Купити мені каву
            </SupportButton>
            <SupportButton href="#" variant="modal">
                <span class="text-lg">🏦</span> Банківський переказ
            </SupportButton>
            <SupportButton href="#" variant="modal">
                <span class="text-lg">❤️</span> Patreon
            </SupportButton>
        </nav>


        <div class="p-4 border-t border-border bg-muted/20">
            <p class="text-xs text-center text-muted-foreground">
                © 2023 NewsHub. Всі права захищено.
            </p>
        </div>
    </div>
</template>