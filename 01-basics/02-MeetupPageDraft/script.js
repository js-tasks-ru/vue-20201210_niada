import Vue from './vue.esm.browser.js';

/** ENV */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Словарь заголовков по умолчанию для всех типов элементов программы
 */
const agendaItemTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов элементов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

/**
 *
 * @param date -
 * @return {string} -
 */
function getDateOnlyString(date) {
  const YYYY = date.getUTCFullYear();
  const MM = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const DD = date.getUTCDate().toString().padStart(2, '0');
  return `${YYYY}-${MM}-${DD}`;
}

/**
 * Возвращает ссылку на митап
 * @param meetupId -
 * @return {object} -
 */
function getMeetupInfoLink(meetupId) {
  return `${API_URL}/meetups/${meetupId}`;
}

/**
 * Возвращает ссылку на изображение митапа для митапа
 * @param meetup - объект с описанием митапа (и параметром meetupId)
 * @return {string} - ссылка на изображение митапа
 */
function getMeetupCoverLink(meetup) {
  if (!meetup.imageId) {
    return;
  }

  return `url(${API_URL}/images/${meetup.imageId})`;
}

export const app = new Vue({
  el: '#app',

  data() {
    return {
      meetup: {},
    };
  },

  async mounted() {
    this.meetup = await this.getMeetupInfo(MEETUP_ID);
  },

  computed: {
    meetupImageLink: function () {
      return getMeetupCoverLink(this.meetup);
    },
    meetupDate: function () {
      return new Date(this.meetup.date);
    },
    meetupLocalDate: function () {
      return new Date(this.meetupDate).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    agendaEventsCounter: function () {
      return this.meetup.agenda.length;
    },
    agendaIcons: function () {
      return agendaItemIcons;
    },
    agendaDefaultTitles: function () {
      return agendaItemTitles;
    },
    dateOnlyString: function () {
      return getDateOnlyString(new Date(this.meetupDate));
    },
  },

  methods: {
    async getMeetupInfo(id) {
      return fetch(getMeetupInfoLink(id))
        .then((res) => res.json())
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
