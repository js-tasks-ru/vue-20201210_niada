<template>
  <div
    class="input-group"
    :class="{
      'input-group_icon': handlerLeftIcon || handlerRightIcon,
      'input-group_icon-left': handlerLeftIcon,
      'input-group_icon-right': handlerRightIcon,
    }"
  >
    <slot name="left-icon"></slot>

    <component
      class="form-control"
      :class="{ 'form-control_sm': small, 'form-control_rounded': rounded }"
      :is="!multiline ? 'input' : 'textarea'"
      :value.prop="value"
      v-bind="$attrs"
      v-on="listeners"
    />

    <slot name="right-icon"></slot>
  </div>
</template>

<script>
export default {
  name: 'AppInput',

  inheritAttrs: false,

  props: {
    small: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      handlerLeftIcon: false,
      handlerRightIcon: false,
    };
  },

  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: ($event) => this.$emit('input', $event.target.value),
        change: ($event) => this.$emit('change', $event.target.value),
      };
    },
  },

  mounted() {
    this.renderIcons();
  },

  updated() {
    this.renderIcons();
  },

  model: {
    prop: 'value',
    event: 'input',
  },

  methods: {
    renderIcons() {
      console.log("🚀 ~ file: AppInput.vue ~ line 82 ~ renderIcons ~ renderIcons");
      this.handlerLeftIcon = !!this.$slots['left-icon'];
      this.handlerRightIcon = !!this.$slots['right-icon'];
    },
  },
};
</script>

<style scoped>
.form-control {
  padding: 12px 16px;
  height: 52px;
  border: 2px solid var(--blue-light);

  font-family: 'Nunito', 'Arial', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);

  border-radius: 8px;
  background-color: var(--white);
  outline: none;
  box-shadow: none;
  transition: 0.2s all;
}

.form-control::placeholder {
  font-weight: 400;
  color: var(--blue-2);
}
.form-control:focus {
  border-color: var(--blue);
}

textarea.form-control {
  width: 100%;
  min-height: 211px;
}

.form-control.form-control_rounded {
  border-radius: 26px;
}

.form-control.form-control_sm.form-control_rounded {
  border-radius: 22px;
}

.form-control.form-control_sm {
  padding: 8px 16px;
  height: 44px;

  border-radius: 4px;
}

.input-group {
  position: relative;
}

.input-group .form-control {
  width: 100%;
}

.input-group.input-group_icon .form-control {
  padding-left: 50px;
}

.input-group.input-group_icon .icon {
  position: absolute;
  top: 50%;

  transform: translate(0, -50%);
}

.input-group.input-group_icon.input-group_icon-left .icon:first-child {
  left: 16px;
}

.input-group.input-group_icon.input-group_icon-right .icon:last-child {
  right: 16px;
}
</style>
