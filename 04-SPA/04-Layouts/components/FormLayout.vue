<template>
  <div class="page page_meetup-forms">
    <div class="container">
      <h2>{{ title }}</h2>

      <slot />
    </div>
  </div>
</template>

<script>
//https://github.com/js-tasks-ru/vue-course-materials/blob/master/meetups-markup/meetup-form.html
//https://github.com/js-tasks-ru/vue-course-materials/blob/master/meetups-markup/styles/_page_forms.css
export default {
  name: 'FormLayout',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.page.page_meetup-forms {
  padding: 70px 0;
}

@media all and (max-width: 992px) {
  .page.page_meetup-forms {
    padding: 48px 0;
  }

  .container {
    padding: 0 16px;
  }
}
</style>
