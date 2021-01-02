<template>
  <button @click="clickListenner"><span>{{ count }}</span></button>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    clickListenner() {
      this.$emit('increment', this.count + 1);
    },
  },
  model: {
    prop: 'count',
    event: 'increment',
  },
};
</script>

<style>
</style>
