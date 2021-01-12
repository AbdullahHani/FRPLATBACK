<template>
  <div class="custom-sidebar card-background">
    <div style="display: flex">
      <router-link to="/dashboard" style="width: 10%; padding: 10px 0">
        <b-icon icon="arrow-bar-left"></b-icon>
      </router-link>
      <b-form-input
        v-model="query"
        type="text"
        class="search-input"
        placeholder="Search chat"
        @keypress.native="searchChat"
        @keyup.native="searchChat"
        @keyup.enter.native="searchChat"
        @change="searchChat"
      >
      </b-form-input>
      <router-link to="/chats" style="width: 10%; padding: 10px 0">
        <b-icon icon="pen-fill"></b-icon>
      </router-link>
    </div>
    <div
      class="sidebar-chat-con"
      v-for="chat in filteredChatList()"
      :key="chat._id"
      @click="() => {
        $router.push(`/chats/${chat._id}`)
      }"
    >
      <div v-if="show(chat)">
        <div
          :class="
            chat._id === $route.params.id ? ' sb-simple sb-active' : 'sb-simple'
          "
        >
          <div
            v-if="chat.from._id === user._id"
            style="
              width: 50px;
              height: 50px;
              border-radius: 50%;
              overflow: hidden;
            "
          >
            <img
              v-if="chat.to.avatar"
              :src="chat.to.avatar"
              alt=""
              style="height: 100%"
            />
            <img
              v-else
              src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
              alt=""
              style="height: 100%"
            />
          </div>
          <div
            v-else
            style="
              width: 50px;
              height: 50px;
              border-radius: 50%;
              overflow: hidden;
            "
          >
            <img
              v-if="chat.from.avatar"
              :src="chat.from.avatar"
              alt=""
              style="height: 100%"
            />
            <img
              v-else
              src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
              alt=""
              style="height: 100%"
            />
          </div>
          <div
            style="width: 80% text-overflow: ellipsis; white-space: nowrap; overflow: hidden; margin-left: 10px; position: relative;"
          >
            <p
              style="
                color: #000;
                margin: 2px;
                font-size: 16px;
                font-weight: 700;
              "
            >
              {{ chat.to._id === user._id ? chat.from.name : chat.to.name }}
            </p>
            <p
              style="margin: 2px 2px 10px 2px; font-size: 14px; color: #707070"
            >
              {{
                chat.messages.length > 0
                  ? chat.messages[chat.messages.length - 1].text
                  : "Send message"
              }}
            </p>
            <p
              v-if="chat.messages.length > 0"
              align="right"
              style="margin: 2px 2px 10px 2px; font-size: 10px; color: #707070"
            >
              {{
                formatTime(chat.messages[chat.messages.length - 1].createdAt)
              }}
            </p>
          </div>
          <!-- <el-badge v-if="calculateUnread() > 0" :value="calculateUnread()" style="float: right;" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as io from 'socket.io-client'
import moment from 'moment'

export default {
  name: 'Sidebar',
  data() {
    return {
      chats: [],
      filteredChats: [],
      // socket: io('http://localhost:5000'),
      socket: io('https://texxen-be.herokuapp.com'),
      query: ''
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.socket.on('newMessage', function (data) {
      console.log(data)
      this.$store.dispatch('getChats')
        .then(
          (response) => {
            this.chats = response.data.data
            this.filteredChats = response.data.data
          }
        )
    }.bind(this))
    this.$store.dispatch('getChats')
      .then(
        (response) => {
          this.chats = response.data.data
          this.filteredChats = response.data.data
        }
      )
  },
  methods: {
    formatTime(date) {
      const dateDifference = new Date() - new Date(date)
      if (dateDifference < 60000) {
        return 'Just now'
      } else if (dateDifference < 3600000) {
        const minutes = Math.floor(dateDifference / 60000)
        return minutes + 'm ago'
      } else if (dateDifference < 86400000) {
        const hours = Math.floor(dateDifference / 3600000)
        return hours + 'h ago'
      } else if (dateDifference < 172800000) {
        return 'Yesterday at ' + moment(date).format('h:mm a')
      } else if (dateDifference < 432000000) {
        const days = Math.floor(dateDifference / 86400000)
        return days + ' days ago at ' + moment(date).format('h:mm a')
      }
      return moment(date).format('dddd DD MMMM YYYY h:mm a')
    },
    calculateUnread() {
      let count = 0
      const messages = this.$props.chat.messages
      const currentRoute = this.$route.params.id
      if (currentRoute) {
        if (currentRoute !== this.$props.chat._id) {
          for (const message of messages) {
            if (message.user._id !== this.user._id && message.read === 'No') {
              count += 1
            }
          }
          return count
        }
      }
      return 0
    },
    searchChat() {
      const filteredChats = []
      if (this.query === '') {
        this.filteredChats = this.chats
      } else {
        for (const chat of this.chats) {
          if (chat.to._id === this.user._id) {
            if (chat.from.name.toLowerCase().includes(this.query.toLowerCase())) {
              filteredChats.push(chat)
            }
          } else {
            if (chat.to.name.toLowerCase().includes(this.query.toLowerCase())) {
              filteredChats.push(chat)
            }
          }
        }
        this.filteredChats = filteredChats
      }
    },
    filteredChatList() {
      return this.filteredChats
    },
    show(chat) {
      if (!this.user) {
        return false
      }
      if (chat.to && chat.from) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.sidebar-chat-con {
  box-shadow: 0 5px 5px 0 #ad9f9f !important;
  width: 100%;
}
.sb-simple {
    display: flex;
    padding: 10px;
    height: 90px;
    background-color: #f7f7fc;
}
.sb-active {
    background-color: #e8e8ff;
}
.custom-sidebar {
    position: fixed;
    top: 90px;
    width: 500px;
    max-height: 90vh;
    height: 100%;
    overflow-y: scroll;
    background-color: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
}
</style>