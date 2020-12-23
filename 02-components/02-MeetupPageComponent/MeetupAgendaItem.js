import { agendaItemTitles, agendaItemIcons } from './data.js';
export const MeetupAgendaItem = {
  name: 'MeetupAgendaItem',

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaIcon" />
      </div>
      <div class="meetup-agenda__item-col">{{ agendaEvent.startsAt }} - {{ agendaEvent.endsAt }}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{agendaEvent.title || agendaDefaultTitles[agendaEvent.type]}}</h5>

        <p v-if="agendaEvent.speaker">
          <span>{{ agendaEvent.speaker }}</span>
          <span class="meetup-agenda__dot"></span>
          <span class="meetup-agenda__lang">{{ agendaEvent.language }}</span>
        </p>

        <p v-if="agendaEvent.description">{{ agendaEvent.description }}</p>
      </div>
    </div>`,

  props: {
    agendaEvent: {
      type: Object,
      default: null,
    },
  },

  computed: {
    agendaDefaultTitles: function () {
      if (!this.agendaEvent) {
        return;
      }
      return agendaItemTitles;
    },
    agendaIcon() {
      if (!this.agendaEvent) {
        return;
      }
      return `/assets/icons/icon-${agendaItemIcons[this.agendaEvent.type]}.svg`;
    },
  },
};
