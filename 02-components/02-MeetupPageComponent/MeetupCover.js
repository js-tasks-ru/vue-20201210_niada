export const MeetupCover = {
  template: `
    <div
      class="meetup-cover"
      :style="bgImage"
    >
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,

  props: {
    link: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'DefaultMeetupName',
    },
  },

  computed: {
    bgImage() {
      return this.link ? `--bg-url: url(${this.link})` : '';
    },
  },
};
