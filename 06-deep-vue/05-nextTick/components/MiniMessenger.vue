<template>
  <main>
    <messages-list class="messages" :messages="messages" ref="list" />
    <form @submit.prevent="send" style="display: flex">
      <input type="text" placeholder="New message" v-model="newMessage" />

      <button>Send</button>
    </form>
  </main>
</template>

<script>
import MessagesList from './MessegesList';

let id = 0;

export default {
  name: 'MiniMessenger',

  components: { MessagesList },

  data() {
    return {
      newMessage: '',
      messages: [
        { id: id++, text: 'First message' },
        { id: id++, text: 'Second message' },
        { id: id++, text: 'Third message' },
        { id: id++, text: 'Forth message' },
      ],
    };
  },

  mounted() {
    this.mesList = this.$refs['list'].$el;
    // console.log("this.mesList", this.mesList);
  },

  methods: {
    send() {
      if (this.newMessage !== '') {
        this.messages.push({
          id: id++,
          text: this.newMessage,
        });
        this.newMessage = '';

        this.$nextTick(() => {
          this.mesList.scrollTop = this.mesList.scrollHeight;
        });
      }
    },
  },
};
</script>

<style scoped>
main {
  width: 200px;
  border: 1px solid #333;

  font-family: sans-serif;

  background-color: #efefef;
}

.messages {
  padding: 0 1rem;
  height: 300px;

  overflow: auto;
}

input {
  flex: 1 1 100%;
  padding: 0.5rem;
  width: 100%;
}
</style>
