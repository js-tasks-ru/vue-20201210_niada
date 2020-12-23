import { MeetupAgendaItem } from './MeetupAgendaItem.js';

export const MeetupAgenda = {
  name: 'MeetupAgenda',

  template: `
    <div class="meetup-agenda">
    <p
      v-if="agenda.length === 0"
      class="meetup-agenda__empty"
    >Программа пока пуста, но когда-нибудь в ней обязательно что-нибудь появится!</p
    >
      <meetup-agenda-item
        v-for="agendaEvent in agenda"
        :key="agendaEvent.id"
        :agendaEvent="agendaEvent"
      ></meetup-agenda-item>
    </div>`,

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      type: Array,
      default: [],
    },
  },
};
