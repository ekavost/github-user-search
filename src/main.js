import '../style.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

const i18n = createI18n({
  legacy: false,
  locale: 'English',
  fallbackLocale: 'English',
  messages: {
    English: {
      formTitle: 'Find GitHub Users',
      formSubtitle: 'Discover profiles, repositories, and more with a simple search',
      inputPlaceholder: 'Introduce the username',
      btnSearch: 'Search',
      btnRepos: 'Show Repos',
      hireable: 'Available for hire',
      reposTableRepos: 'Repository',
      reposTableUpdate: 'Last Update',
      reposTableLang: 'Prime Language',
    },
    Español: {
      formTitle: 'Encuentra Usuarios de GitHub',
      formSubtitle: 'Discubre cuentas, repositorios y más con una simple búsqueda',
      inputPlaceholder: 'Introduce el nombre de usuario',
      btnSearch: 'Buscar',
      btnRepos: 'Ver repositorios',
      hireable: 'Disponible para contratar',
      reposTableRepos: 'Repositorio',
      reposTableUpdate: 'Última actualización',
      reposTableLang: 'Lenguaje principal',
    },
    Русский: {
      formTitle: 'Искать пользователей GitHub',
      formSubtitle: 'Находи профили, репозитории и другую информацию в один клик',
      inputPlaceholder: 'Введите имя пользователя',
      btnSearch: 'Искать',
      btnRepos: 'Показать репозитории',
      hireable: 'Доступен для найма',
      reposTableRepos: 'Репозиторий',
      reposTableUpdate: 'Последнее обновление',
      reposTableLang: 'Основной язык',
    },
  },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
