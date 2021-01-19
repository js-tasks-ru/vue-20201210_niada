<template>
  <div class="wrapper bg-grey">
    <the-header></the-header>

    <main class="main">
      <router-view />
    </main>

    <the-footer></the-footer>
  </div>
</template>

<script>
// https://github.com/js-tasks-ru/vue-course-materials/blob/master/meetups-markup/index.html
import TheHeader from '../components/TheHeader';
import TheFooter from '../components/TheFooter';

export default {
  name: 'BaseLayout',

  components: { TheHeader, TheFooter },
};
</script>

<style scoped>
main {
  flex: 1 0 auto;
}
</style>
