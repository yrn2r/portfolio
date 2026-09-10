export type Lang = 'en' | 'ru' | 'kz'

export const languages: { code: Lang; label: string }[] = [
  { code: 'kz', label: 'KZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

export const translations = {
  en: {
    nav: {
      work: 'Work',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },

    hero: {
      words: ['Design', 'Develop', 'Create'],
      ctaPrimary: 'View my work',
      ctaSecondary: "Let's talk",
    },

    work: {
      heading: 'Selected work',
      intro:
        'A collection of concept projects exploring how different brands can take shape and come to life on the web.',
      note: 'Concept project — not a real client engagement.',
      openCaseStudy: 'Open case study',
      viewProject: 'View project',

      items: [
        {
          index: '01',
          name: 'AURA',
          category: 'Niche fragrance house',
          tags: ['Web Design', 'Frontend', 'Animation'],
          description:
            'A complete digital experience for a niche fragrance house — a seven-scent collection, individual carousels, a fragrance-matching quiz, and a working cart and checkout flow.',
        },
        {
          index: '02',
          name: 'NOIR COFFEE',
          category: 'Specialty coffee brand',
          tags: ['Branding', 'Web', 'Animation'],
          description:
            'A roastery website built around the story of the coffee — its origin, craft, and process — with a slower visual rhythm inspired by the pace of a pour-over.',
        },
        {
          index: '03',
          name: 'VERTEX',
          category: 'AI startup',
          tags: ['Product Landing', 'UX', 'Development'],
          description:
            'A product landing page for an AI startup, designed to make a complex workflow tool easy to understand through clear messaging and an interactive demo.',
        },
      ],
    },

    about: {
      kicker: 'About',
      heading: 'Where design meets development.',
      paragraphs: [
        'I enjoy building digital products where design, technology, and business come together — from the first idea and structure to a working interface.',
        'I design and build directly in the browser, use modern AI tools as part of my workflow, and care just as much about how well a product works as how it looks.',
        "For me, web design is not only about making things look good. It's about turning ideas into useful digital products, testing different approaches, and finding better ways to solve a problem.",
      ],
    },

    services: {
      kicker: 'Services',
      heading: 'What I work on',

      items: [
        {
          title: 'Web Design',
          description:
            'Thoughtful interfaces built around a clear visual system — typography, layout, and color shaped by the idea rather than a ready-made template.',
        },
        {
          title: 'Web Development',
          description:
            'Fast, responsive front-ends built with modern tools and structured to stay flexible, maintainable, and easy to expand.',
        },
        {
          title: 'Interactive & Motion',
          description:
            'Purposeful animation and interaction — from subtle reveals to hover states and transitions that make the experience feel more natural.',
        },
        {
          title: 'AI-assisted Development',
          description:
            'Using AI tools as part of the creative and development process to work faster while keeping control over quality, structure, and detail.',
        },
      ],
    },

    contact: {
      heading: "Have an idea? Let's build it.",
      sub:
        'I’m open to freelance projects and collaborations. Reach out through whichever channel is most convenient for you.',
      email: 'Email',
      telegram: 'Telegram',
      github: 'GitHub',
    },

    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },

  ru: {
    nav: {
      work: 'Работы',
      services: 'Услуги',
      about: 'Обо мне',
      contact: 'Контакты',
    },

    hero: {
      words: ['Проектирую', 'Разрабатываю', 'Создаю'],
      ctaPrimary: 'Смотреть работы',
      ctaSecondary: 'Обсудить проект',
    },

    work: {
      heading: 'Избранные проекты',
      intro:
        'Концептуальные проекты о том, как разные бренды могут выглядеть, ощущаться и работать в цифровой среде.',
      note: 'Концептуальный проект — не реальный заказ клиента.',
      openCaseStudy: 'Открыть кейс',
      viewProject: 'Смотреть проект',

      items: [
        {
          index: '01',
          name: 'AURA',
          category: 'Нишевый парфюмерный дом',
          tags: ['Веб-дизайн', 'Frontend', 'Анимация'],
          description:
            'Полноценный цифровой опыт для нишевого парфюмерного дома — коллекция из семи ароматов, отдельные карусели для каждого парфюма, квиз по подбору аромата и рабочие корзина и оформление заказа.',
        },
        {
          index: '02',
          name: 'NOIR COFFEE',
          category: 'Спешелти-кофейный бренд',
          tags: ['Брендинг', 'Веб', 'Анимация'],
          description:
            'Сайт кофейной обжарки, построенный вокруг истории кофе — его происхождения, вкуса и самого процесса. Визуальный ритм намеренно сделан спокойным и размеренным, как процесс приготовления пуровера.',
        },
        {
          index: '03',
          name: 'VERTEX',
          category: 'AI-стартап',
          tags: ['Лендинг продукта', 'UX', 'Разработка'],
          description:
            'Лендинг AI-стартапа, который простым и понятным языком объясняет сложный рабочий инструмент и позволяет познакомиться с ним через интерактивное демо.',
        },
      ],
    },

    about: {
      kicker: 'Обо мне',
      heading: 'На стыке дизайна и разработки.',
      paragraphs: [
        'Мне нравится создавать цифровые продукты на стыке дизайна, технологий и бизнеса — от первой идеи и структуры до готового интерфейса.',
        'Я проектирую и собираю сайты прямо в браузере, использую современные AI-инструменты в работе и уделяю внимание не только внешнему виду, но и тому, насколько хорошо продукт решает свою задачу.',
        'Для меня веб-дизайн — это не просто красивые интерфейсы. Это способ превращать идеи в работающие цифровые продукты, проверять разные подходы и находить более эффективные решения.',
      ],
    },

    services: {
      kicker: 'Услуги',
      heading: 'С чем я работаю',

      items: [
        {
          title: 'Веб-дизайн',
          description:
            'Продуманные интерфейсы с цельной визуальной системой — типографикой, сеткой и цветом, которые работают на идею проекта, а не выглядят как готовый шаблон.',
        },
        {
          title: 'Веб-разработка',
          description:
            'Быстрые и адаптивные сайты на современном стеке, которые легко поддерживать, развивать и дополнять новыми функциями.',
        },
        {
          title: 'Интерактив и моушн',
          description:
            'Осмысленная анимация и взаимодействие — плавные появления, hover-состояния и переходы, которые делают интерфейс живым, не перегружая его.',
        },
        {
          title: 'AI-assisted разработка',
          description:
            'Использую AI-инструменты в процессе дизайна и разработки, чтобы работать быстрее, сохраняя контроль над качеством, структурой и деталями.',
        },
      ],
    },

    contact: {
      heading: 'Есть идея? Давайте реализуем её.',
      sub:
        'Открыт для фриланс-проектов и сотрудничества. Напишите мне в любом удобном для вас канале.',
      email: 'Email',
      telegram: 'Telegram',
      github: 'GitHub',
    },

    footer: {
      rights: 'Все права защищены.',
      backToTop: 'Наверх',
    },
  },

  kz: {
    nav: {
      work: 'Жобалар',
      services: 'Қызметтер',
      about: 'Мен туралы',
      contact: 'Байланыс',
    },

    hero: {
      words: ['Жобалаймын', 'Әзірлеймін', 'Жасаймын'],
      ctaPrimary: 'Жобаларымды көру',
      ctaSecondary: 'Байланысу',
    },

    work: {
      heading: 'Таңдаулы жобалар',
      intro:
        'Әртүрлі брендтердің цифрлық ортада қалай көрініп, қалай жұмыс істей алатынын зерттейтін концептуалды жобалар жинағы.',
      note: 'Концептуалды жоба — нақты клиенттің тапсырысы емес.',
      openCaseStudy: 'Кейсті ашу',
      viewProject: 'Жобаны көру',

      items: [
        {
          index: '01',
          name: 'AURA',
          category: 'Нишалық парфюмерия үйі',
          tags: ['Веб-дизайн', 'Frontend', 'Анимация'],
          description:
            'Нишалық парфюмерия бренді үшін жасалған әзірленген жоба — жеті хош иістен тұратын коллекция, әр парфюмге арналған жеке карусельдер, хош иіс таңдауға көмектесетін квиз және тапсырыстар себеті мен тапсырыс рәсімдеу жүйесі.',
        },
        {
          index: '02',
          name: 'NOIR COFFEE',
          category: 'Арнайы кофе бренді',
          tags: ['Брендинг', 'Веб', 'Анимация'],
          description:
            'Кофе қуыру брендіне арналған сайт. Мұнда негізгі назар кофенің шығу тегіне, дайындау процесіне және бренд тарихына аударылған. Сайттың баяу ырғағы пуровер дайындау процесінің атмосферасын жеткізеді.',
        },
        {
          index: '03',
          name: 'VERTEX',
          category: 'AI стартап',
          tags: ['Өнім лендингі', 'UX', 'Әзірлеу'],
          description:
            'AI стартапына арналған лендинг. Күрделі жұмыс құралын қарапайым әрі түсінікті тілмен таныстырып, интерактивті демо арқылы өнімнің қалай жұмыс істейтінін көрсетуге бағытталған.',
        },
      ],
    },

    about: {
      kicker: 'Мен туралы',
      heading: 'Дизайн мен әзірлеудің тоғысында.',
      paragraphs: [
        'Маған дизайн, технология және бизнестің тоғысында цифрлық өнімдер жасау ұнайды — алғашқы идея мен құрылымнан бастап, дайын интерфейске дейін.',
        'Сайттарды тікелей браузерде жобалап, әзірлеймін, жұмыс барысында заманауи AI құралдарын қолданамын. Өнімнің сыртқы көрінісімен қатар, оның нақты міндетін қаншалықты жақсы орындайтынына да мән беремін.',
        'Мен үшін веб-дизайн — тек әдемі интерфейс жасау емес. Бұл идеяны жұмыс істейтін цифрлық өнімге айналдыру, әртүрлі тәсілдерді сынау және мәселені шешудің тиімді жолдарын табу мүмкіндігі.',
      ],
    },

    services: {
      kicker: 'Қызметтер',
      heading: 'Немен айналысамын',

      items: [
        {
          title: 'Веб-дизайн',
          description:
            'Жоба идеясына сай құрылған, ойластырылған интерфейстер — типография, құрылым және түстер дайын шаблонға емес, жобаның мазмұнына қарай таңдалады.',
        },
        {
          title: 'Веб-әзірлеу',
          description:
            'Заманауи технологиялармен жасалған жылдам әрі бейімделгіш сайттар. Құрылымы кейін қолдауға, дамытуға және жаңа функциялар қосуға ыңғайлы.',
        },
        {
          title: 'Интерактив және моушн',
          description:
            'Интерфейсті жандандыратын, бірақ артық назар аудартпайтын анимациялар мен интерактивтер — жұмсақ пайда болулар, hover-күйлер және табиғи ауысулар.',
        },
        {
          title: 'AI көмегімен әзірлеу',
          description:
            'Дизайн мен әзірлеу барысында AI құралдарын саналы түрде пайдаланып, жылдамырақ жұмыс істеуге және сонымен бірге сапа мен детальді бақылауда ұстауға мүмкіндік беремін.',
        },
      ],
    },

    contact: {
      heading: 'Идеяңыз бар ма? Бірге жүзеге асырайық.',
      sub:
        'Фриланс-жобалар мен бірлескен жұмыстарға ашықпын. Өзіңізге ыңғайлы арна арқылы хабарласа аласыз.',
      email: 'Email',
      telegram: 'Telegram',
      github: 'GitHub',
    },

    footer: {
      rights: 'Барлық құқықтар қорғалған.',
      backToTop: 'Жоғарыға',
    },
  },
} as const

export type Translations = typeof translations.en

export type ProjectItem = Translations['work']['items'][number]