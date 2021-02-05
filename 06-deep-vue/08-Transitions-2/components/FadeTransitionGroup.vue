<script>
export default {
  name: 'FadeTransitionGroup',

  inheritAttrs: false,

  render(h) {
    let dataContent = this.$slots.default.map((el) => {
      el.data.class = {
        ...el.data.class,
        'fade-list-item': true,
      };
      return el;
    });

    return h('transition-group', this.dataContainer, dataContent);
  },

  computed: {
    dataContainer() {
      return {
        class: { 'fade-list': true },
        attrs: {
          ...this.$attrs,
          name: 'fade-list',
        },
      };
    },
  },
};
</script>

<style scoped>
.fade-list {
  position: relative;
}

.fade-list >>> .fade-list-item {
  opacity: 1;
  transition: opacity 0.3s ease-out;
}

.fade-list >>> .fade-list-leave-active {
  position: absolute !important;
  left: 0;
  right: 0;
}

.fade-list >>> .fade-list-enter,
.fade-list >>> .fade-list-leave-to {
  opacity: 0;
}

.fade-list >>> .fade-list-move {
  transition: transform 0.3s;
}
</style>
