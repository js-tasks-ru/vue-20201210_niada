<template>
  <div class="toasts">
    <div
      v-for="(toast, key) in toasts"
      :key="key"
      class="toast"
      :class="toast.type === 'error' ? 'toast_error' : 'toast_success'"
    >
      <app-icon
        :icon="toast.type === 'error' ? 'alert-circle' : 'check-circle'"
      />

      <span>{{ toast.message }}</span>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';

const DELAY = 5000;
// const DELAY = 50000;

export default {
  name: 'AppToast',

  components: { AppIcon },

  data() {
    return {
      toasts: [],
    };
  },

  methods: {
    error(message) {
      let toast = {
        message,
        type: 'error',
      };

      this.setShowTimer(toast);
      this.toasts.push(toast);
      // console.log("file: AppToast.vue ~ line 36 ~ error ~ toast", toast);
    },
    success(message) {
      let toast = {
        message,
        type: 'success',
      };

      this.setShowTimer(toast);
      this.toasts.push(toast);
      // console.log("file: AppToast.vue ~ line 46 ~ success ~ toast", toast);
    },
    setShowTimer(toast) {
      setTimeout(() => {
        const i = this.toasts.findIndex((el) => el === toast);

        if (i >= 0) {
          this.toasts.splice(i, 1);
        }
      }, DELAY);
    },
  },
};
</script>

<style scoped>
.toasts {
  z-index: 999;
  position: fixed;
  bottom: 8px;
  right: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}

.toast {
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  align-items: center;

  padding: 16px;
  width: auto;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 18px;
  line-height: 28px;
  background: #ffffff;
}

.toast + .toast {
  margin-top: 20px;
}

.toast > .icon {
  margin-right: 12px;
}

.toast.toast_success {
  color: var(--green);
}

.toast.toast_error {
  color: var(--red);
}
</style>
