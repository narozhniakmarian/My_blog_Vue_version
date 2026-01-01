<script setup>

const year = new Date().getFullYear()
const email = 'your-email@example.com'

</script>

<template>
  <main class="container py-10 text-foreground">
    <section class="space-y-2 mb-8">
      <h1 class="text-2xl md:text-3xl font-semibold tracking-tight">
        Політика конфіденційності
      </h1>
      <p class="text-xs text-muted-foreground">
        Останнє оновлення: {{ year }}
      </p>
    </section>

    <section class="space-y-4 text-sm leading-relaxed">
      <div class="space-y-2">
        <h2 class="text-base font-semibold">1. Які дані ми збираємо</h2>
        <p>
          Ми не збираємо персональні дані користувачів напряму.
          Однак сторонні сервіси, такі як Google Analytics, можуть збирати технічні дані:
          IP-адресу (анонімізовану), тип пристрою та браузера, приблизне місцезнаходження,
          час перебування на сторінці, переходи між сторінками та джерела трафіку.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">2. Cookies</h2>
        <p>
          Сайт може використовувати cookies для роботи аналітики та відображення партнерських банерів.
          Партнерські сервіси можуть використовувати власні cookies для відстеження переходів.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">3. Навіщо збираються дані</h2>
        <p>
          Дані використовуються для аналізу відвідуваності, визначення популярних матеріалів,
          покращення якості контенту та підтримки роботи партнерських програм.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">4. Хто має доступ до даних</h2>
        <p>
          Доступ до технічних даних мають лише сторонні сервіси:
          Google Analytics та партнерські рекламні мережі.
          Ми не передаємо дані іншим компаніям або приватним особам.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">5. Як зв’язатися з нами</h2>
        <p>
          Якщо у вас є питання щодо конфіденційності, напишіть нам:
          <a
            :href="`mailto:${email}`"
            class="text-primary hover:underline"
          >
            {{ email }}
          </a>
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">6. Видалення даних</h2>
        <p>
          Ви можете звернутися до нас із запитом на видалення інформації, яка може бути пов’язана з вами.
          Ми допоможемо в межах наших технічних можливостей та можливостей сторонніх сервісів.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">7. Зміни до цієї політики</h2>
        <p>
          Ми можемо оновлювати цю Політику конфіденційності.
          Дата останнього оновлення вказана вище.
        </p>
      </div>
    </section>
  </main>
</template>

