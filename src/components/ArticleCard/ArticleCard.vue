<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: String,
    description: String,
    image: String,
    country: String,
    createdAt: String,
    slug: String
})

const timeAgo = computed(() => {
    const now = new Date()
    const created = new Date(props.createdAt)
    const diffMs = now - created
    const diffHours = Math.floor(diffMs / 1000 / 60 / 60)

    if (diffHours < 24) return `${diffHours} год тому`

    const diffDays = Math.floor(diffHours / 24)
    if (diffDays < 365) return `${diffDays} дн тому`

    const diffYears = Math.floor(diffDays / 365)
    return `${diffYears} р тому`
})

const shortTitle = computed(() =>
    props.title.length > 90 ? props.title.slice(0, 90) + '…' : props.title
)

const shortDescription = computed(() =>
    props.description.length > 180 ? props.description.slice(0, 180) + '…' : props.description
)
</script>

<template>
    <article class="group flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm 
        hover:shadow-md transition-all duration-300 cursor-pointer" @click="$emit('open', props.slug)">
        <div class="aspect-video bg-muted relative overflow-hidden">
            <img :src="image" :alt="title"
                class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />

            <div class="absolute top-2 left-2">
                <span class="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded shadow-sm">
                    {{ country }}
                </span>
            </div>
        </div>

        <div class="p-4 flex-1 flex flex-col">
            <div class="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-mono">
                <span>•</span>
                <time>{{ timeAgo }}</time>
                <span>•</span>
            </div>

            <h2
                class="text-lg font-bold font-serif leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {{ shortTitle }}
            </h2>

            <p class="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                {{ shortDescription }}
            </p>

            <span class="inline-flex items-center text-sm font-medium text-primary hover:underline">
                Читати далі
                <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
        </div>
    </article>
</template>