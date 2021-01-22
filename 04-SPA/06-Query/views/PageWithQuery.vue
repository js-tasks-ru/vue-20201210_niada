<template>
  <div class="container">
    <meetups-view
      :view.sync="view"
      :date.sync="date"
      :participation.sync="participation"
      :search.sync="search"
    />
    <!-- <div>
      {{this}}
      <br>
      {{ this.$route.query || 'query No' }}
      <br>
      {{ this.$route.query.view || 'view No'}}
      <br>
      {{ this.$route.query.date || 'date No' }}
      <br>
      {{ this.$route.query.participation || 'participation No' }}
      <br>
      {{ this.$route.query.search || 'search No' }}
    </div> -->
  </div>
</template>

<script>
// https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property
import MeetupsView from '../components/MeetupsView';

export default {
  name: 'PageWithQuery',

  components: { MeetupsView },

  data() {
    return {
      view: 'list',
      date: 'all',
      participation: 'all',
      search: '',
    };
  },

  computed: {
    queryParams() {
      let params = {};

      if (this.view !== 'list') {
        params.view = this.view;
      }
      if (this.date !== 'all') {
        params.date = this.date;
      }
      if (this.participation !== 'all') {
        params.participation = this.participation;
      }
      if (this.search !== '') {
        params.search = this.search;
      }
      return params;
    },
  },
  // https://router.vuejs.org/guide/essentials/navigation.html#programmatic-navigation
  watch: {
    queryParams(query) {
      this.$router.push({ query }).catch(() => {});
    },
    $route: {
      deep: true,
      immediate: true,
      handler(to) {
        for (const key of Object.keys(to.query)) {
          if (Object.keys(this.$data).includes(key)) {
            this[key] = to.query[key];
          }
        }
      },
    },
  },
};

// В комментариях в файле с решением напишите, какой методы обновления маршрута (push или replace) вы выбрали и почему.
// UX опыт использования дашбордов, шопов и т. д. говорит - шаг назад по фильтрам это супер удобно, а кнопка ресет всегда есть.
</script>

<style scoped></style>
