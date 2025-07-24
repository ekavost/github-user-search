import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  globalInjection: true,

  messages: {
    en: {
      form: {
        title: 'Find GitHub Users',
        subtitle: 'Discover profiles, repositories, and more with a simple search',
        inputPlaceholder: 'Introduce the username',
        btnSearch: 'Search',
      },
      userCard: {
        btnRepos: 'Show Repos',
        hireable: 'Available for hire',
        since: 'Since ',
      },
      reposTable: {
        reposName: 'Repository',
        lastUpdate: 'Last Update',
        primeLang: 'Primary Language',
      },
    },
    es: {
      form: {
        title: 'Encuentra Usuarios de GitHub',
        subtitle: 'Discubre cuentas, repositorios y más con una simple búsqueda',
        inputPlaceholder: 'Introduce el nombre de usuario',
        btnSearch: 'Buscar',
      },
      userCard: {
        btnRepos: 'Ver repositorios',
        hireable: 'Disponible para contratar',
        since: 'Desde ',
      },
      reposTable: {
        reposName: 'Repositorio',
        lastUpdate: 'Última actualización',
        primeLang: 'Lenguaje principal',
      },
    },
    ru: {
      form: {
        title: 'Искать пользователей GitHub',
        subtitle: 'Находи профили, репозитории и другую информацию в один клик',
        inputPlaceholder: 'Введите имя пользователя',
        btnSearch: 'Искать',
      },
      userCard: {
        btnRepos: 'Показать репозитории',
        hireable: 'Доступен для найма',
        since: 'Начиная с ',
      },
      reposTable: {
        reposName: 'Репозиторий',
        lastUpdate: 'Последнее обновление',
        primeLang: 'Основной язык',
      },
    },
  },
});

export default i18n;
