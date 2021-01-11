<template>
  <div class="page page_onboarding">
    <div class="container">
      <h1 class="page__title text-center">{{ title }}</h1>
      Auth Page
    </div>
  </div>
</template>

<script>
// https://github.com/js-tasks-ru/vue-course-materials/blob/master/meetups-markup/login.html
export default {
  name: 'AuthLayout',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.page {
  padding: 48px 0;
}

.page__title {
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  color: var(--body-color);
  margin: 0 0 32px;
}

.page.page_onboarding {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}
</style>
