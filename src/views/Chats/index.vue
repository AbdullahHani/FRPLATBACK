<template>
  <div v-if="show">
    <div v-if="chat.from._id === currentUser._id" class="chat-head">
      <div class="chat-head-avatar">
        <img
          v-if="chat.to.avatar"
          :src="chat.to.avatar"
          alt=""
          style="height: 100%;"
        >
        <img
          v-else
          src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
          alt=""
          style="height: 100%;"
        >
      </div>
      <div style="margin-left: 10px;">
        <p>{{ chat.to.name }}</p>
      </div>
    </div>
    <div v-else class="chat-head">
      <div class="chat-head-avatar">
        <img
          v-if="chat.from.avatar"
          :src="chat.from.avatar"
          alt=""
          style="height: 100%;"
        >
        <img
          v-else
          src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
          alt=""
          style="height: 100%;"
        >
      </div>
      <div style="margin-left: 10px;">
        <p>{{ chat.from.name }}</p>
      </div>
    </div>
    <div class="chat-container">
      <div v-if="chat.messages.length > 0" v-chat-scroll class="message-container">
        <div v-for="(message, index) in messages" :key="index">
          <message-right v-if="currentUser._id === message.user._id" :message="message" />
          <message-left v-else :message="message" />
        </div>
      </div>
      <div v-else align="center">
        <p style="color: #707070; font-size: 12px; font-family: Helvetica; margin: 20px;">Send message</p>
      </div>
      <form class="message-form" @submit="handleSubmit">
        <input v-model="msg" type="text" class="message-input" placeholder="Type your message here..">
        <button class="message-send" @click="handleSubmit">
          <img src="@/assets/images/send.svg" alt="">
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import MessageLeft from './components/left'
import MessageRight from './components/right'
import * as io from 'socket.io-client'
import { mapState } from 'vuex'

export default {
  name: 'Chats',
  components: {
    MessageLeft,
    MessageRight
  },
  data() {
    return {
      messages: [],
      msg: '',
      chatId: '',
      chat: {},
      // socket: io('http://localhost:5000'),
      socket: io('https://texxen-be.herokuapp.com'),
      show: false
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.user
    })
  },
  created() {
    // this.socket.emit('sendMessage', {})
    this.socket.on('newMessage', function(data) {
      if (data.user) {
        this.messages.push(data)
      }
    }.bind(this))
    this.chatId = this.$route.params.id
    this.$store.dispatch('getChat', this.chatId)
      .then(
        (response) => {
          const res = response.data.data
          this.chat = res
          this.messages = res.messages
          if (this.currentUser._id !== res.to._id && this.currentUser._id !== res.from._id) {
            this.$router.push('/chats')
          } else {
            this.show = true
          }
        }
      )
  },
  mounted() {
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      if (!this.msg) {
        return
      }
      const msg = this.msg
      this.msg = ''
      const message = {
        chatId: this.$route.params.id,
        text: msg,
        user: this.currentUser,
        to: this.currentUser._id === this.chat.to._id ? this.chat.from._id : this.chat.to._id
      }
      this.$store.dispatch('sendMessage', message)
        .then(
          (response) => {
            if (response.data.data) {
              this.msg = ''
              this.socket.emit('sendMessage', response.data.data)
            }
          }
        )
        .catch(
          (error) => {
            const err = error.response.data
            this.$notify({
              type: 'error',
              title: 'Failed',
              message: err.message
            })
          }
        )
    }
  }
}
</script>

<style scoped>
.chat-head {
  width: 100%;
  display: flex;
  background-color: #f6fbff;
  box-shadow: 0px 0px 2px 0px #f0f0ff;
  height: 80px;
  padding: 15px 10px;
}
.chat-head-avatar {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  overflow: hidden;
}
.message-form {
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.message-input {
  height: 60px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  color: #707070;
  background: #fafafb;
  border: none;
  min-width: 93%;
  padding: 10px;
  font-size: 16px;
  outline: none;
}
.message-send {
  background-color: #fafafb;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  outline: none;
  border-left: 0.01rem solid #707070;
  width: 50px;
}
.chat-container {
  padding: 10px;
}
.message-container {
  overflow-y: scroll;
  height: 63vh;
}
::-webkit-scrollbar {
  width: 0px !important;  /* Remove scrollbar space */
  background: transparent !important;  /* Optional: just make scrollbar invisible */
}
</style>

<style lang="scss">
.chat-container {
  .message-container {
    ::-webkit-scrollbar {
      width: 0px !important;  /* Remove scrollbar space */
      background: transparent !important;  /* Optional: just make scrollbar invisible */
    }
  }
}
</style>
