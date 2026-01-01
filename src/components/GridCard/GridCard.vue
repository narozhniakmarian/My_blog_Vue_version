<template>
    <article
        class="group flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div class="aspect-video bg-muted relative overflow-hidden">
            <img src="https://picsum.photos/seed/news1/600/400" alt="News Image"
                class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute top-2 left-2">
                <span
                    class="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded shadow-sm">Політика</span>
            </div>
        </div>
        <div class="p-4 flex-1 flex flex-col">
            <div class="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-mono">
                <time>2 години тому</time>
                <span>•</span>
                <span>Україна</span>
            </div>
            <h2 class="text-lg font-bold font-serif leading-tight mb-2 group-hover:text-primary transition-colors">
                Нові міжнародні угоди підписано в Брюсселі: що це означає для
                економіки
            </h2>
            <p class="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                Лідери країн ЄС зібралися для обговорення стратегічного
                партнерства. Результатом стала низка документів...
            </p>
            <a href="#" class="inline-flex items-center text-sm font-medium text-primary hover:underline">
                Читати далі
                <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>
    </article>
</template>