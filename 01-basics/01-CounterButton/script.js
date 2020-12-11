import Vue from './vue.esm.browser.js';

console.log('Hello');

// eslint-disable-next-line no-unused-vars
var app = new Vue({
  el: '#app',
  data: {
    stat: {
      counter: 0,
    },
  },
  methods: {
    counterUpper: function (number) {
      console.log('click');
      app.stat.counter = app.stat.counter + number;
    },
  },
});

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события
