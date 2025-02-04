<script lang="ts">
  import {
    Button,
    Modal,
    Label,
    Input,
    AccordionItem,
    Accordion,
  } from "flowbite-svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Carousel,
    Thumbnails
  } from "flowbite-svelte";

  let index = 0;
  let forward = true; // sync animation direction between Thumbnails and Carousel

  let formModal = false;
  let isDarkTheme = false; // Theme state

  async function get_info() {
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let tel = (<HTMLInputElement>document.getElementById("tel")).value;

    const params = new URLSearchParams({ name, tel });
    const res = await fetch(
      `https://ti-units.ru/zayavka/?${params.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (res.ok) {
      alert("Спасибо за интерес к нашей компании! Мы свяжемся с Вами в ближайшее время.");
      formModal = false; // Close the modal after successful submission
    }
  }

  const toggleTheme = () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark', isDarkTheme);
  };

  export const images = [
    {
      alt: 'TI Units',
      src: 'https://ti-units.ru/images/carousel/1.jpg',
      title: 'TI Units'
    },
    {
      alt: 'TI Units',
      src: 'https://ti-units.ru/images/carousel/2.jpg',
      title: 'TI Units'
    },
    {
      alt: 'TI Units',
      src: 'https://ti-units.ru/images/carousel/3.jpg',
      title: 'TI Units'
    },
  ];
</script>

<body class="dark:bg-gray-900 dark:text-white">
  <header class="fixed w-full z-50">
    <nav class="bg-blue-600 border-gray-200 py-2.5 dark:bg-gray-900">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white border-2 border-white p-2">
            TI Units
          </span>
        </a>
        <div class="flex items-center lg:order-2">
          <button on:click={toggleTheme} class="text-white bg-blue-500 p-2 rounded-lg">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM10 0a10 10 0 110 20A10 10 0 0110 0z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>

  <!-- Герой-секция -->
  <section class="hero bg-white dark:bg-gray-900" id="main">
    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Преобразуем бизнес через силу искусственного интеллекта
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Внедряем AI-first подход в разработке решений для автоматизации и цифровой трансформации
      </p>
      <Button on:click={() => (formModal = true)}>Запустить AI-трансформацию</Button>
    </div>
  </section>

  <!-- О компании -->
  <section class="about bg-gray-50 dark:bg-gray-800" id="about">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        О компании
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="about-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Миссия и ценности
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Создаем инновационные решения для цифровой трансформации бизнеса. Наши ключевые ценности: качество, прозрачность, клиентоориентированность.
          </p>
        </div>
        <div class="about-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Опыт и экспертиза
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Более 10 лет на рынке, сотни завершенных проектов, работаем с клиентами по всему миру.
          </p>
        </div>
        <div class="about-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Команда
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Наши сотрудники имеют сертификаты, богатый опыт и участвуют в профильных мероприятиях.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Направления разработки -->
  <section class="development bg-white dark:bg-gray-900" id="development">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Направления разработки
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="development-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Типы ПО
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Веб- и мобильные приложения, корпоративные системы, SaaS-платформы, IoT-решения, AI/ML-проекты.
          </p>
        </div>
        <div class="development-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Отраслевая специализация
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Финтех, здравоохранение, ритейл, логистика.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Ключевые продукты/услуги -->
  <section class="services bg-gray-50 dark:bg-gray-800" id="services">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        AI-драйверы вашего роста
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="service-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <i class="fas fa-brain service-icon text-blue-500 text-4xl mb-4"></i>
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            AI-разработка ПО
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Создаем интеллектуальные системы с машинным обучением и нейросетевыми алгоритмами
          </p>
          <ul class="ai-features space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Генеративный AI для контента</li>
            <li>Predictive Analytics</li>
            <li>Компьютерное зрение</li>
          </ul>
        </div>
        <div class="service-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <i class="fas fa-robot service-icon text-blue-500 text-4xl mb-4"></i>
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ti-robot
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Прокачанный ассистент трейдера
          </p>
          <ul class="ai-features space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>NLP-обработка документов</li>
            <li>Интеллектуальные RPA-боты</li>
            <li>AI-оптимизация цепочек</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Технологии и методологии -->
  <section class="technologies bg-white dark:bg-gray-900" id="technologies">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Технологии и методологии
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="technology-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Стек технологий
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Python, React, AWS, и другие современные технологии.
          </p>
        </div>
        <div class="technology-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Подходы к разработке
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Agile, Scrum, DevOps, CI/CD.
          </p>
        </div>
        <div class="technology-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Инструменты
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Jira, Git, Docker и другие.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Преимущества -->
  <section class="benefits bg-gray-50 dark:bg-gray-800" id="benefits">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Почему AI-решения от TI Units?
      </h2>
      <ul class="ai-benefits-list space-y-8 text-gray-500 dark:text-gray-400">
        <li class="flex items-center space-x-4">
          <i class="fas fa-arrow-up text-blue-500 text-2xl"></i>
          <div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Уникальные компетенции
            </h3>
            <p>Специализация на нишевых технологиях, собственные патентованные решения.</p>
          </div>
        </li>
        <li class="flex items-center space-x-4">
          <i class="fas fa-robot text-blue-500 text-2xl"></i>
          <div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Гибкость
            </h3>
            <p>Адаптация под изменения требований, масштабируемость проектов.</p>
          </div>
        </li>
        <li class="flex items-center space-x-4">
          <i class="fas fa-chart-line text-blue-500 text-2xl"></i>
          <div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Скорость и качество
            </h3>
            <p>Использование автоматизированного тестирования, строгое соблюдение сроков.</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- Портфолио и кейсы -->
  <section class="portfolio bg-white dark:bg-gray-900" id="portfolio">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Портфолио и кейсы
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="portfolio-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Успешные проекты
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Повысили эффективность логистики на 40% для компании X.
          </p>
        </div>
        <div class="portfolio-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Видеопрезентации/скриншоты
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Визуальная демонстрация продуктов.
          </p>
        </div>
        <div class="portfolio-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Отзывы клиентов
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Реальные цитаты или логотипы партнеров.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Процесс работы -->
  <section class="process bg-gray-50 dark:bg-gray-800" id="process">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Процесс работы
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="process-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Анализ требований и проектирование
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Понимание потребностей клиента и разработка архитектуры решения.
          </p>
        </div>
        <div class="process-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Прототипирование и согласование
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Создание прототипа и его согласование с клиентом.
          </p>
        </div>
        <div class="process-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Разработка и тестирование
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Реализация решения и проведение тестирования.
          </p>
        </div>
        <div class="process-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Внедрение и обучение
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Внедрение решения в рабочую среду и обучение пользователей.
          </p>
        </div>
        <div class="process-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Пост-релизная поддержка
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Поддержка и сопровождение после запуска проекта.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Безопасность и стандарты -->
  <section class="security bg-white dark:bg-gray-900" id="security">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Безопасность и стандарты
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="security-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Сертификаты
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            ISO, GDPR, HIPAA (в зависимости от специфики).
          </p>
        </div>
        <div class="security-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Политики безопасности
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Шифрование данных, регулярные аудиты, резервное копирование.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Для кого мы работаем -->
  <section class="audience bg-gray-50 dark:bg-gray-800" id="audience">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Для кого мы работаем
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="audience-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Целевые аудитории
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Стартапы, малый бизнес, корпорации, госструктуры.
          </p>
        </div>
        <div class="audience-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Преимущества для каждого сегмента
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            MVP за 3 месяца для стартапов, интеграция с ERP-системами для предприятий.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Партнерства -->
  <section class="partnerships bg-white dark:bg-gray-900" id="partnerships">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Партнерства
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="partnership-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Технологические альянсы
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Партнерство с Microsoft, Google Cloud и др.
          </p>
        </div>
        <div class="partnership-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Клиентские кейсы
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Сотрудничество с известными брендами.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Блог и ресурсы -->
  <section class="blog bg-gray-50 dark:bg-gray-800" id="blog">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-8 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Блог и ресурсы
      </h2>
      <div class="grid gap-8 lg:grid-cols-2">
        <div class="blog-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Экспертные статьи
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Тренды в AI, советы по оптимизации IT-бюджета.
          </p>
        </div>
        <div class="blog-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Вебинары/гайды
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Бесплатные материалы для клиентов.
          </p>
        </div>
        <div class="blog-card p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Новости компании
          </h3>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">
            Участие в конференциях, запуск новых продуктов.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Контакты -->
  <section class="contacts bg-white dark:bg-gray-900" id="contacts">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Контакты
      </h2>
      <p class="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        эл. почта: <a class="font-bold" href="mailto:info@ti-units.ru">info@ti-units.ru</a>
      </p>
      <div class="cta-section">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Закажите бесплатную консультацию или скачайте презентацию
        </h3>
        <form class="ai-form mx-auto max-w-md space-y-4">
          <Input type="text" placeholder="Ваша отрасль" />
          <Input type="tel" placeholder="Контакт для AI-демо" />
          <Button type="submit" on:click={get_info}>Оптимизировать AI</Button>
        </form>
      </div>
    </div>
  </section>

  <footer class="bg-white dark:bg-gray-800">
    <div class="max-w-screen-xl p-2 py-2 mx-auto">
      <hr class="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="text-center">
        <a href="/" class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
          TI Units
        </a>
        <span class="block text-sm text-center text-gray-700 dark:text-gray-400">
          © 2024 TI Units™. Все права защищены.
        </span>
      </div>
    </div>
  </footer>

  <!-- Modal -->
  <Modal bind:open={formModal} size="xs" autoclose={true} class="w-full">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
        Оставьте e-mail или телефон - перезвоним в течении 1 мин!
      </h3>
      <Label class="space-y-2">
        <span>Имя</span>
        <Input type="text" name="name" id="name" placeholder="(необязательно)" required />
      </Label>
      <Label class="space-y-2">
        <span>Телефон или Email</span>
        <Input type="text" name="tel" id="tel" placeholder="8(XXX)XXX-XX-XX или email@example.com" required />
      </Label>
      <Button type="submit" on:click={get_info} class="w-full">
        Отправить
      </Button>
    </form>
  </Modal>
</body>
