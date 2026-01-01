<template>
    <div id="mobile-menu-overlay"
        class="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300">
    </div>

    <div id="mobile-menu"
        class="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-card border-l border-border shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col">
        <!-- Заголовок модалки -->
        <div class="p-4 border-b border-border flex items-center justify-between bg-muted/30">
            <span class="font-serif font-bold text-lg">Меню</span>
            <button id="close-menu-btn"
                class="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Список посилань -->
        <nav class="flex-1 overflow-y-auto py-4 px-4 space-y-1">
            <a href="#"
                class="block px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground font-medium transition-colors">Головна</a>
            <a href="#"
                class="block px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground font-medium transition-colors">Всі
                новини</a>

            <div class="pt-4 pb-2">
                <p class="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Підтримати проект
                </p>
            </div>
            <a href="#"
                class="block px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-3">
                <span class="text-lg">☕</span> Купити мені каву
            </a>
            <a href="#"
                class="block px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-3">
                <span class="text-lg">🏦</span> Банківський переказ
            </a>
            <a href="#"
                class="block px-4 py-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 font-medium transition-colors flex items-center gap-3 border border-primary/20">
                <span class="text-lg">❤️</span> Patreon
            </a>
        </nav>

        <!-- Футер модалки -->
        <div class="p-4 border-t border-border bg-muted/20">
            <p class="text-xs text-center text-muted-foreground">
                © 2023 NewsHub. Всі права захищено.
            </p>
        </div>
    </div>
</template>