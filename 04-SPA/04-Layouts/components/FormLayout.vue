<template>
  <form class="form meetup-form">
    <div class="meetup-form__content">
      <fieldset class="form-section">
        <div class="form-group">
          <label class="form-label">Название</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Дата</label>
          <div class="input-group">
            <input type="date" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Место проведения</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Описание</label>
          <div class="input-group">
            <textarea rows="3" class="form-control"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Изображение</label>
          <div class="image-uploader">
            <label class="image-uploader__preview">
              <span>Загрузить изображение</span>
              <input type="file" accept="image/*" class="form-control-file" />
            </label>
          </div>
        </div>
      </fieldset>

      <h3 class="form__section-title">Программа</h3>
      <div class="form-section form-section_inner mb-3">
        <button type="button" class="remove-button">
          <img alt="icon" src="/assets/icons/icon-trash.svg" class="icon" />
        </button>
        <div class="form-group">
          <div class="dropdown show">
            <button
              type="button"
              class="button button dropdown__toggle dropdown__toggle_icon"
            >
              <img
                alt="icon"
                src="/assets/icons/icon-cal-sm.svg"
                class="icon"
              />
              <span>Тип</span>
              <span> - Открытие</span>
            </button>
            <div class="dropdown__menu show">
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Регистрация
              </button>
              <button
                type="button"
                class="dropdown__item active dropdown__item_icon"
              >
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Открытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-clock.svg"
                  class="icon"
                />
                Перерыв
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-coffee.svg"
                  class="icon"
                />
                Coffee Break
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Закрытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Afterparty
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-tv.svg" class="icon" />
                Доклад
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Другое
              </button>
            </div>
          </div>
        </div>
        <div class="form__row">
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Начало</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Окончание</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Нестандартный текст (необязательно)</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
      </div>
      <div class="form-section form-section_inner mb-3">
        <button type="button" class="remove-button">
          <img alt="icon" src="/assets/icons/icon-trash.svg" class="icon" />
        </button>
        <div class="form-group">
          <div class="dropdown">
            <button
              type="button"
              class="button button dropdown__toggle dropdown__toggle_icon"
            >
              <img
                alt="icon"
                src="/assets/icons/icon-key.svg"
                class="icon"
              /><span>Тип</span><span> - Регистрация</span>
            </button>
            <div class="dropdown__menu" style="display: none">
              <button
                type="button"
                class="dropdown__item active dropdown__item_icon"
              >
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Регистрация
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Открытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-clock.svg"
                  class="icon"
                />
                Перерыв
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-coffee.svg"
                  class="icon"
                />
                Coffee Break
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Закрытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Afterparty
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-tv.svg" class="icon" />
                Доклад
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Другое
              </button>
            </div>
          </div>
        </div>
        <div class="form__row">
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Начало</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Окончание</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Нестандартный текст (необязательно)</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
      </div>
      <div class="form-section form-section_inner mb-3">
        <button type="button" class="remove-button">
          <img alt="icon" src="/assets/icons/icon-trash.svg" class="icon" />
        </button>
        <div class="form-group">
          <div class="dropdown">
            <button
              type="button"
              class="button button dropdown__toggle dropdown__toggle_icon"
            >
              <img
                alt="icon"
                src="/assets/icons/icon-tv.svg"
                class="icon"
              /><span>Тип</span><span> - Доклад</span>
            </button>
            <div class="dropdown__menu" style="display: none">
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Регистрация
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Открытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-clock.svg"
                  class="icon"
                />
                Перерыв
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-coffee.svg"
                  class="icon"
                />
                Coffee Break
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Закрытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Afterparty
              </button>
              <button
                type="button"
                class="dropdown__item active dropdown__item_icon"
              >
                <img alt="icon" src="/assets/icons/icon-tv.svg" class="icon" />
                Доклад
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Другое
              </button>
            </div>
          </div>
        </div>
        <div class="form__row">
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Начало</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Окончание</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Тема</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Докладчик</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Описание</label>
          <div class="input-group">
            <textarea class="form-control"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Язык</label>
          <div class="dropdown">
            <button type="button" class="button button dropdown__toggle">
              <span>Язык</span><span> - RU</span>
            </button>
            <div class="dropdown__menu" style="display: none">
              <button type="button" class="dropdown__item">Не указано</button>
              <button type="button" class="dropdown__item active">RU</button>
              <button type="button" class="dropdown__item">EN</button>
            </div>
          </div>
        </div>
      </div>
      <div class="form-section form-section_inner mb-3">
        <button type="button" class="remove-button">
          <img alt="icon" src="/assets/icons/icon-trash.svg" class="icon" />
        </button>
        <div class="form-group">
          <div class="dropdown">
            <button
              type="button"
              class="button button dropdown__toggle dropdown__toggle_icon"
            >
              <img
                alt="icon"
                src="/assets/icons/icon-coffee.svg"
                class="icon"
              />
              <span>Тип</span><span> - Coffee Break</span>
            </button>
            <div class="dropdown__menu" style="display: none">
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Регистрация
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Открытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-clock.svg"
                  class="icon"
                />
                Перерыв
              </button>
              <button
                type="button"
                class="dropdown__item active dropdown__item_icon"
              >
                <img
                  alt="icon"
                  src="/assets/icons/icon-coffee.svg"
                  class="icon"
                />
                Coffee Break
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Закрытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Afterparty
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-tv.svg" class="icon" />
                Доклад
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Другое
              </button>
            </div>
          </div>
        </div>
        <div class="form__row">
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Начало</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Окончание</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Нестандартный текст (необязательно)</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
      </div>
      <div class="form-section form-section_inner mb-3">
        <button type="button" class="remove-button">
          <img alt="icon" src="/assets/icons/icon-trash.svg" class="icon" />
        </button>
        <div class="form-group">
          <div class="dropdown">
            <button
              type="button"
              class="button button dropdown__toggle dropdown__toggle_icon"
            >
              <img
                alt="icon"
                src="/assets/icons/icon-clock.svg"
                class="icon"
              /><span>Тип</span><span> - Перерыв</span>
            </button>
            <div class="dropdown__menu" style="display: none">
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Регистрация
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Открытие
              </button>
              <button
                type="button"
                class="dropdown__item active dropdown__item_icon"
              >
                <img
                  alt="icon"
                  src="/assets/icons/icon-clock.svg"
                  class="icon"
                />
                Перерыв
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-coffee.svg"
                  class="icon"
                />
                Coffee Break
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Закрытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Afterparty
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-tv.svg" class="icon" />
                Доклад
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Другое
              </button>
            </div>
          </div>
        </div>
        <div class="form__row">
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Начало</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Окончание</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Нестандартный текст (необязательно)</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
      </div>
      <div class="form-section form-section_inner mb-3">
        <button type="button" class="remove-button">
          <img alt="icon" src="/assets/icons/icon-trash.svg" class="icon" />
        </button>
        <div class="form-group">
          <div class="dropdown">
            <button
              type="button"
              class="button button dropdown__toggle dropdown__toggle_icon"
            >
              <img
                alt="icon"
                src="/assets/icons/icon-key.svg"
                class="icon"
              /><span>Тип</span><span> - Закрытие</span>
            </button>
            <div class="dropdown__menu" style="display: none">
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Регистрация
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Открытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-clock.svg"
                  class="icon"
                />
                Перерыв
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-coffee.svg"
                  class="icon"
                />
                Coffee Break
              </button>
              <button
                type="button"
                class="dropdown__item active dropdown__item_icon"
              >
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Закрытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Afterparty
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-tv.svg" class="icon" />
                Доклад
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Другое
              </button>
            </div>
          </div>
        </div>
        <div class="form__row">
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Начало</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Окончание</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Нестандартный текст (необязательно)</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
      </div>
      <div class="form-section form-section_inner mb-3">
        <button type="button" class="remove-button">
          <img alt="icon" src="/assets/icons/icon-trash.svg" class="icon" />
        </button>
        <div class="form-group">
          <div class="dropdown">
            <button
              type="button"
              class="button button dropdown__toggle dropdown__toggle_icon"
            >
              <img
                alt="icon"
                src="/assets/icons/icon-cal-sm.svg"
                class="icon"
              /><span>Тип</span><span> - Afterparty</span>
            </button>
            <div class="dropdown__menu" style="display: none">
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Регистрация
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Открытие
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-clock.svg"
                  class="icon"
                />
                Перерыв
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-coffee.svg"
                  class="icon"
                />
                Coffee Break
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-key.svg" class="icon" />
                Закрытие
              </button>
              <button
                type="button"
                class="dropdown__item active dropdown__item_icon"
              >
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Afterparty
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img alt="icon" src="/assets/icons/icon-tv.svg" class="icon" />
                Доклад
              </button>
              <button type="button" class="dropdown__item dropdown__item_icon">
                <img
                  alt="icon"
                  src="/assets/icons/icon-cal-sm.svg"
                  class="icon"
                />
                Другое
              </button>
            </div>
          </div>
        </div>
        <div class="form__row">
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Начало</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
          <div class="form__col">
            <div class="form-group">
              <label class="form-label">Окончание</label>
              <div class="input-group">
                <input type="time" placeholder="00:00" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Нестандартный текст (необязательно)</label>
          <div class="input-group">
            <input class="form-control" />
          </div>
        </div>
      </div>
      <div class="form-section_append">
        <button type="button">+ Добавить этап программы</button>
      </div>
    </div>
    <div class="meetup-form__aside">
      <div class="meetup-form__aside_stick">
        <button type="button" class="button button_secondary button_block">
          Отмена
        </button>
        <button type="submit" class="button button_primary button_block">
          Сохранить
        </button>
      </div>
    </div>
  </form>
</template>

<script>
//https://github.com/js-tasks-ru/vue-course-materials/blob/master/meetups-markup/meetup-form.html
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
.form {
  margin: 0;
}

.form__buttons {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-top: 40px;
}

.form__append {
  margin-top: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
}

.form__buttons .button + .button {
  margin-bottom: 8px;
}

.form-section {
  border: none;
  position: relative;
}

.form-section + .form-section {
  margin-top: 24px;
}

.form-section.form-section_inner {
  padding: 20px 10% 0 16px;
  border: 2px solid var(--blue-light);
  border-radius: 8px;
}

.form-section_inner .remove-button {
  position: absolute;
  top: 4px;
  right: 0;
  box-shadow: none;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 4px;
  cursor: pointer;
  transition: 0.2s all;
}

.form-section_inner .remove-button:hover {
  opacity: 0.6;
}

.form__section-title {
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  color: var(--body-color);
  margin: 0 0 24px 0;
}

.form-section_append {
  margin-top: 24px;
}

.form-section_append button {
  box-shadow: none;
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none;
  color: var(--blue);
  cursor: pointer;
  font-size: 20px;
  line-height: 28px;
}

.form-section_append button:hover {
  text-decoration: underline;
}

.form__row {
  display: flex;
  flex-direction: column;
}

.form__col + .form-col {
  margin-top: 16px;
}

.form__col:first-child {
  margin-left: 0;
}

@media all and (min-width: 992px) {
  .form-section.form-section_inner {
    padding: 28px 25% 4px 24px;
  }

  .form-section_inner .remove-button {
    top: 20px;
    right: 20px;
  }

  .form__row {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 -12px;
  }

  .form__col {
    flex: 1 1 auto;
    padding: 0 12px;
    margin-top: 0;
  }

  .form__col:first-child {
    margin-left: 0;
  }
}
</style>
