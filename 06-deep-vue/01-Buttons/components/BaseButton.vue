<template>
  <component
    class="button"
    :class="{ button_block: block }"
    :is="tag"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',

  inheritAttrs: false,

  props: {
    block: {
      type: Boolean,
    },
    tag: {
      type: String,
      default: 'button',
      validator: (v) => ['button', 'a', 'router-link'].includes(v),
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px 24px;
  border: 4px solid transparent;

  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: initial;
  text-align: center;
  text-decoration: none;

  background-color: transparent;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  transition: 0.2s all;
}

.button.button_block {
  display: block;
  width: 100%;
}
</style>
