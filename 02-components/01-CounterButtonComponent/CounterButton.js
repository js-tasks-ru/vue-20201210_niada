export const CounterButton = {
  // Шаблон потребуется отредактировать
  template: `
  <button
    type="button"
    @click="increment"
  >{{ count }}</button>`,

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  // Компонент должен иметь модель
  model: {
    prop: 'count',
    event: 'increment',
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    increment() {
      this.$emit(`increment`, this.count + 1);
    },
  },
};
