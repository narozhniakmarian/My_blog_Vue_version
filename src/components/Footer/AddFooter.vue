<script setup lang="ts">
import LogoButton from '../LogoButton/LogoButton.vue';
import SupportButton from '../SupportButton/SupportButton.vue';
import FilterButton from '../FiltrButton/FiltrButton.vue'


const props = defineProps({
  selected: String
})

const emit = defineEmits(['update:selected'])


</script>

<template>
  <footer class="border-t border-border bg-muted/30 py-6">
    <div class="container grid gap-4 ">

      <div class="
    grid gap-4 w-full 
    md:grid-cols-2 md:auto-rows-auto md:place-items-start md:justify-items-center
    lg:grid-cols-3 lg:gap-6
    xl:gap-10
  ">
        <div class="space-y-4 md:max-w-[384px] w-full lg:max-w-[320px] xl:max-w-[380px]">
          <LogoButton @click="emit('update:selected', 'world')" />

          <p class="text-sm text-muted-foreground leading-relaxed py-2">
            Ваше надійне джерело інформації про події в Україні та світі.
            Об'єктивно, швидко, актуально.
          </p>

          <div class="flex items-center gap-4">
            <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
              <span class="sr-only">Facebook</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
              <span class="sr-only">Twitter</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            <a href="#" class="text-muted-foreground hover:text-primary transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.48c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="px-4 md:text-center
        md:max-w-[384px] w-full lg:max-w-[320px] xl:max-w-[380px]">
          <h3 class="font-semibold text-foreground mb-4">Країни</h3>
          <ul
            class="space-y-2 text-sm text-muted-foreground md:flex flex-row gap-4 md:justify-center md:gap-2 lg:flex-col xl:flex-row ">
            <li>
              <FilterButton variant="footer" :active="props.selected === 'world'"
                @click="emit('update:selected', 'world')">Всі новини
              </FilterButton>
            </li>
            <li>
              <FilterButton variant="footer" :active="props.selected === 'ua'" @click="emit('update:selected', 'ua')">
                Україна
              </FilterButton>
            </li>
            <li>
              <FilterButton variant="footer" :active="props.selected === 'pl'" @click="emit('update:selected', 'pl')">
                Польща</FilterButton>
            </li>
            <li>
              <FilterButton variant="footer" :active="props.selected === 'de'" @click="emit('update:selected', 'de')">
                Німеччина
              </FilterButton>
            </li>

          </ul>
        </div>

        <!-- Підтримка -->
        <div class=" 
    bg-accent/50 rounded-lg p-4 border border-accent/50 flex flex-col gap-0.5 mx-auto
    w-full 
    md:col-span-2 md:justify-self-center md:max-w-[584px]
    lg:col-span-1 lg:max-w-[320px] xl:max-w-[380px]
  ">
          <h3 class="font-semibold text-foreground mb-2">Підтримайте нас</h3>
          <p class="text-xs text-muted-foreground ">
            Ми працюємо завдяки вашій підтримці. Навіть невеликий внесок допомагає нам розвиватись.
          </p>
          <div class="flex flex-col gap-2">
            <SupportButton href="#" variant="footer">
              ❤️ Patreon
            </SupportButton>
            <SupportButton href="#" variant="footer">
              ☕ Купити каву
            </SupportButton>
          </div>
        </div>

      </div>

      <!-- Нижня частина -->
      <div
        class="border-t border-border pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>&copy; {{ new Date().getFullYear() }} ВуйкоHub. Всі права захищено.</p>
        <div class="flex gap-4">
          <a href="/privacy-policy.html" class="hover:text-foreground transition-colors">Політика конфіденційності</a>
          <a href="/terms.html" class="hover:text-foreground transition-colors">Умови використання</a>
          <a href="mailto:narozhniakmarian@newshub.com" class="hover:text-foreground transition-colors">Контакти</a>
        </div>
      </div>

    </div>
  </footer>
</template>