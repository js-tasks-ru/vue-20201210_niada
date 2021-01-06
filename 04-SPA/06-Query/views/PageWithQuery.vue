<template>
  <div class="container">
    <meetups-view
      :view.sync="view"
      :date.sync="date"
      :participation.sync="participation"
      :search.sync="search"
    />
    <!-- <section><div>
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
    </div></section> -->
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
      return {
        view: this.view || 'list',
        date: this.date || 'all',
        participation: this.participation || 'all',
        search: this.search || '',
      };
    },
  },

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
