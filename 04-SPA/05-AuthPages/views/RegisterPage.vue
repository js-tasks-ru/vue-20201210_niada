<template>
  <form @submit.prevent="onSubmit" class="form">
    <div class="form-group">
      <label class="form-label">Email</label>
      <div class="input-group">
        <input v-model="email" class="form-control" type="email" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Имя</label>
      <div class="input-group">
        <input v-model="fullname" class="form-control" type="text" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Пароль</label>
      <div class="input-group">
        <input v-model="password" class="form-control" type="password" />
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Повтор пароля</label>
      <div class="input-group">
        <input v-model="passwordConfirm" class="form-control" type="password" />
      </div>
    </div>
    <div class="form-group">
      <label class="checkbox"
        ><input v-model="Accept_EULA" type="checkbox" />Я согласен с условиями
        <span></span
      ></label>
    </div>
    <div class="form__buttons">
      <button type="submit" class="button button_primary">
        Зарегистрироваться
      </button>
    </div>
    <div class="form__append">
      Уже есть аккаунт?
      <router-link :to="{ name: 'login' }" class="link">Войдите</router-link>
    </div>
  </form>
</template>

<script>
import { register } from '../data';
// https://github.com/js-tasks-ru/vue-course-materials/blob/master/meetups-markup/register.html

export default {
  name: 'RegisterPage',

  data() {
    return {
      email: '',
      fullname: '',
      password: '',
      passwordConfirm: '',
      Accept_EULA: false,
    };
  },

  methods: {
    async onSubmit() {
      if (!this.email) {
        alert('Требуется ввести Email');
      } else if (!this.fullname) {
        alert('Требуется ввести полное имя');
      } else if (!this.password) {
        alert('Требуется ввести пароль');
      } else if (this.password != this.passwordConfirm) {
        alert('Пароли не совпадают');
      } else if (this.Accept_EULA == false) {
        alert('Требуется согласиться с условиями');
      } else {
        let resToJSON = await register(
          this.email,
          this.fullname,
          this.password,
        );

        if (!resToJSON.error) {
          alert(resToJSON.id); // при успешном запросе выводится ID зарегистрированного пользователя
        } else {
          alert(resToJSON.message); // при неуспешном запросе выводится сообщение из ошибки
        }
      }
    },
  },
};
</script>

<style scoped></style>
