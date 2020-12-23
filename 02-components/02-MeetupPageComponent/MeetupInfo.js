export const MeetupInfo = {
  template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="datetime">{{ date }}</time>
      </li>
    </ul>`,

  props: {
    organizer: {
      type: String,
      default: '',
    },
    place: {
      type: String,
      default: '',
    },
    datetime: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
  },

  // computed
};
