<template>
  <div>
    <div class="main-con">
      <div align="right">
        <p class="message-time" align="right">{{ formattedTime(message.createdAt) }}</p>
      </div>
      <div class="message-con">
        <p class="message">{{ message.text }}</p>
      </div>
      <div class="avatar-con">
        <img
          v-if="message.user.avatar"
          :src="message.user.avatar"
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
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'MessageLeft',
  props: {
    message: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    formattedTime(date) {
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
    }
  }
}
</script>

<style scoped>
.main-con {
  display: flex;
  margin: 5px;
  justify-content: flex-end;
}
.message-con {
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: #f0f0ff;
  max-width: 60%;
  padding: 5px 20px;
  margin: 0 30px 0 20px;
}
.avatar-con {
  height: 40px;
  width: 40px;
  overflow: hidden;
  border-radius: 50%;
}
.message {
  color: #707070;
  font-family: Helvetica;
  font-size: 12px;
}
.message-time {
  color: #707070;
  font-family: Helvetica;
  font-size: 10px;
}
</style>
