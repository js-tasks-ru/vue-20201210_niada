<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input
          v-model="email"
          class="form-control"
          type="email"
          placeholder="demo@email"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input
          v-model="password"
          class="form-control"
          type="password"
          placeholder="password"
        />
      </div>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary button_block">
        Войти
      </button>
    </div>
    <div class="form__append">
      Нет аккаунта?&nbsp;<router-link :to="{ name: 'register' }" class="link"
        >Зарегистрируйтесь</router-link
      >
    </div>
  </form>
</template>

<script>
// https://github.com/js-tasks-ru/vue-course-materials/blob/master/meetups-markup/login.html
import { login } from '../data';

export default {
  name: 'LoginPage',

  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    async onSubmit() {
      if (!this.email) {
        alert('Требуется ввести Email');
      } else if (!this.password) {
        alert('Требуется ввести пароль');
      } else {
        let resToJSON = await login(this.email, this.password);

        if (!resToJSON.error) {
          alert(resToJSON.fullname); //при успешном запросе выводится полное имя пользователя;
        } else {
          alert(resToJSON.message); //при неуспешном запросе выводится сообщение «Неверные учетные данные»
        }
      }
    },
  },
};
</script>
<style scoped></style>
