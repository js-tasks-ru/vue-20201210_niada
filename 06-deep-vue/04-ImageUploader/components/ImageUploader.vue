<template>
  <div class="image-uploader" @click="handleChangeImage">
    <label
      class="image-uploader__preview"
      :class="{ 'image-uploader__preview-loading': showSpinner }"
      :style="setBgImageStyleProperty"
    >
      <!--
        Пустой (imageId === null), изображение не выбрано, отображается текст
        "Загрузить изображение", а клик запускает нативный выбор файла;

        Загрузка, пользователь выбрал изображение и загружает его на сервер,
        отображается текст "Загрузка...", а элемент с превью изображения имеет
        класс image-uploader__preview-loading;

        Заполненный (imageId !== null), изображение выбрано и отображается на
        превью через установку CSS переменной --bg-image, а текст сменяется на
        "Удалить изображение";
      -->
      <span v-show="imageId !== null">Удалить изображение</span>
      <span v-if="showSpinner">Загрузка...</span>
      <span v-else-if="imageId === null">Загрузить изображение</span>

      <input
        type="file"
        accept="image/*"
        class="form-control-file"
        :value="bgImageURL"
        :disabled="showSpinner || this.imageId !== null"
        @change="uploadImage"
      />
    </label>
  </div>
</template>

<script>
import { ImageService } from '../image-service';

export default {
  name: 'ImageUploader',

  // inheritAttrs: false,
  // imageId, он же модель с событием change – ID текущего изображения.
  // Значение по умолчанию – null, изображение не выбрано.
  model: {
    prop: 'imageId',
    event: 'change',
  },
  props: {
    imageId: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      showSpinner: false,
      bgImageURL: null,
    };
  },

  // --bg-image: var(--default-cover)
  computed: {
    setBgImageStyleProperty() {
      if (this.imageId) {
        let url = ImageService.getImageURL(this.imageId);

        return this.renderBgImageURL(url);
      } else {
        return null;
      }
    },
  },

  methods: {
    uploadImage(event) {
      this.showSpinner = true;
      ImageService.uploadImage(event.target.files[0])
        .then((res) => {
          if (res.id) {
            this.$emit('change', res.id);
          }
        })
        // err - Обработчик ошибок
        .finally(() => {
          this.showSpinner = false;
        });
    },
    handleChangeImage(event) {
      if (this.imageId) {
        event.preventDefault();
        this.$emit('change', null);
        this.bgImageURL = null;
      }
    },
    renderBgImageURL(url) {
      return `--bg-image: url('${url}')`;
    },
  },
};
</script>

<style scoped>
.image-uploader .form-control-file {
  height: 0;

  opacity: 0;
}

.image-uploader .image-uploader__preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 512px;
  height: 228px;
  border: 2px solid var(--blue-light);

  --bg-image: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    var(--bg-image);
  border-radius: 8px;

  cursor: pointer;
  transition: 0.2s border-color;

}

.image-uploader .image-uploader__preview > span {
  font-family: 'Nunito', Arial, sans-serif;
  line-height: 28px;
  font-size: 20px;
  font-weight: 600;
  color: var(--white);
}

.image-uploader .image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader .image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
