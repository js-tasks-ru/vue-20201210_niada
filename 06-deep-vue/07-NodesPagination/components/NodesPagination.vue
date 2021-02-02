<script>
export default {
  name: 'NodesPagination',

  render(h) {
    return h('div', this.dataContainer);
  },

  props: {
    page: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },

  computed: {
    startAt() {
      return this.page === 1 ? 0 : (this.page - 1) * this.perPage;
    },
    finishAt() {
      return this.startAt + this.perPage;
    },
    dataContainer() {
      if (this.$slots.default && this.$slots.default.length > 0) {
        return this.$slots.default.slice(this.startAt, this.finishAt);
      } else {
        return [];
      }
    },
  },
};
</script>
