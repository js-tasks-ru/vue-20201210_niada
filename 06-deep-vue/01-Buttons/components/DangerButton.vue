<template>
  <base-button class="button_danger" v-bind="$attrs" v-on="$listeners">
    <slot />
  </base-button>
</template>

<script>
import BaseButton from './BaseButton';

export default {
  name: 'DangerButton',

  components: { BaseButton },

  inheritAttrs: false,
};
</script>

<style scoped>
.button_danger {
  color: var(--red);

  background-color: var(--white);
  border-color: var(--red);
}

.button_danger:hover {
  border-color: var(--red-light);
}
</style>
