<script setup>

const email = 'your-email@example.com'

</script>


<template>
  <main class="container py-10 text-foreground">
    <section class="space-y-2 mb-8">
      <h1 class="text-2xl md:text-3xl font-semibold tracking-tight">
        Умови використання
      </h1>
      <p class="text-xs text-muted-foreground">
        Останнє оновлення: {{ new Date().getFullYear() }}
      </p>
    </section>

    <section class="space-y-4 text-sm leading-relaxed">
      <div class="space-y-2">
        <h2 class="text-base font-semibold">1. Призначення сайту</h2>
        <p>
          Сайт надає інформаційні та аналітичні матеріали, новини та огляди.
          Увесь контент публікується з метою інформування і не є професійною порадою.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">2. Використання матеріалів</h2>
        <p>
          Ви можете читати матеріали, ділитися посиланнями та цитувати невеликі фрагменти
          з обов’язковим посиланням на джерело.
          Заборонено копіювати повні статті або використовувати контент у комерційних цілях без дозволу.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">3. Джерела інформації</h2>
        <p>
          Деякі матеріали можуть містити інтерпретації новин інших медіа або посилання на зовнішні ресурси.
          Ми не несемо відповідальності за точність або зміст сторонніх сайтів.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">4. Відмова від відповідальності</h2>
        <p>
          Ми не гарантуємо повну точність або актуальність усіх матеріалів,
          а також безперебійну роботу сайту. Контент може містити суб’єктивні оцінки.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">5. Партнерські програми</h2>
        <p>
          На сайті можуть бути партнерські посилання або рекламні банери.
          Ми можемо отримувати комісію за переходи або покупки за такими посиланнями.
          Це не впливає на зміст матеріалів.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">6. Зміни до умов</h2>
        <p>
          Ми можемо оновлювати ці Умови використання. Дата останнього оновлення вказана вище.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-base font-semibold">7. Контакти</h2>
        <p>
          Якщо у вас є питання щодо цих Умов, напишіть нам:
          <a
            :href="`mailto:${email}`"
            class="text-primary hover:underline"
          >
            {{ email }}
          </a>
        </p>
      </div>
    </section>
  </main>
</template>

