import Vue from './vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';
const ICON_URL = '/assets/icons/';
const BACKGROUND_IMAGE_DEFAULTL = 'linear-gradient(40deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url)';

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
    return BACKGROUND_IMAGE_DEFAULTL;
  }

  return `url(${API_URL}/images/${meetup.imageId}),${BACKGROUND_IMAGE_DEFAULTL}`;
}

/**
 *
 * @param iconType -
 * @return {string} -
 */
function getIconLink(iconType) {
  return `${ICON_URL}icon-${agendaItemIcons[iconType]}.svg`;
}

/**
 *
 * @param date -
 * @return {string} -
 */
function getLocalDate(date) {
  return new Date(date).toDateString().slice(3).trim();
}

/**
 *
 * @param obj -
 * @return {string} -
 */
function normalizeAgendaTitle(obj) {
  if (!obj.title) {
    obj.title = agendaItemTitles[obj.type];
  }
}

export const app = new Vue({
  el: '#app',

  data: {
    meetups: [],
    styles: {
      backgroundImage: [],
      backgroundImageDefault: BACKGROUND_IMAGE_DEFAULTL,
    },
  },

  mounted() {
    this.setMeetupInfo();
  },

  computed: {
    //
  },

  methods: {
    setMeetupInfo() {
      fetch(getMeetupInfoLink(MEETUP_ID))
        .then((stream) => stream.json())
        .then((meetup) => {
          meetup.imageLink = getMeetupCoverLink(meetup);
          meetup.date = getLocalDate(meetup.date);
          meetup.agenda.forEach((agenda) => {
            agenda.iconLink = getIconLink(agenda.type);
            normalizeAgendaTitle(agenda);
          });

          return meetup;
        })
        .then((fullMeetupInfo) => {
          this.meetups.push(fullMeetupInfo);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
