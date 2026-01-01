1. Якщо сторінки — Vue (Terms.vue, PrivacyPolicy.vue)
   Тут важливо, щоб:

- у тебе був Vue Router
- маршрути були оголошені
- футер використовував <router-link>
- URL‑и були “чистими” (без #)
  📌 Маршрути (router/index.js)
  import { createRouter, createWebHistory } from 'vue-router'

import Terms from '@/pages/Terms.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'

const routes = [
{ path: '/terms', component: Terms },
{ path: '/privacy-policy', component: PrivacyPolicy },
]

export default createRouter({
history: createWebHistory(),
routes,
})

📌 Футер (SEO‑friendly)
<router-link
to="/privacy-policy"
class="hover:text-foreground transition-colors"

> Політика конфіденційності
> </router-link>

<router-link
to="/terms"
class="hover:text-foreground transition-colors"

> Умови використання
> </router-link>

📌 Чому це SEO‑акуратно?

- Google індексує SPA‑маршрути, якщо вони доступні напряму
- createWebHistory() дає чисті URL
- /privacy-policy і /terms відкриваються напряму без 404
- SSR не потрібен для статичних текстових сторінок
  ❗ Важливо
  На продакшені сервер має віддавати index.html для всіх маршрутів.
  У Nginx це:
  try_files $uri $uri/ /index.html;
