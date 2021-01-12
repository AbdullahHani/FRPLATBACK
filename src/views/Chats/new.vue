<template>
  <div class="new-chat-container">
    <!-- <div>
      <el-select
        v-model="selectedUser"
        filterable
        :loading="loading"
        @change="createChat">
        <el-option
          v-for="user in options"
          :key="user._id"
          :value="user._id"
          >
            <div style="display: flex; height: 50px !important;">
              <div style="width: 5%; height: 50px;">
                <img
                  :src="user.avatar"
                  alt=""
                  v-if="user.avatar"
                  height="30"
                  style="border-radius: 50%;">
                <img
                  src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
                  alt=""
                  v-else
                  height="30"
                  style="border-radius: 50%;">
              </div>
              <div style="width: 80%; height: 50px;">
                <p style="margin: 0;">{{ user.name }}</p>
              </div>
              <hr>
            </div>
          </el-option>
      </el-select>
    </div> -->
    <img src="@/assets/images/others/Group 62.png" height="50px" alt="">
    <p style="font-family: Helvetica; font-weight: 700;">Marketing Alliance Club - Messenger</p>
    <p style="font-family: Helvetica; font-size: 12px; color: #707070;">Select user to start chat with</p>
    <button
      v-for="(user, index) in users"
      :key="index"
      class="user-card"
      @click="() => {
        selectedUser = user._id
        createChat()
      }"
    >
      <div style="width: 50px; height: 50px; overflow: hidden; border-radius: 50%; margin: 10px;">
        <img v-if="user.avatar" :src="user.avatar" height="50" alt="">
        <img v-else src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" height="50" alt="">
      </div>
      <p style="margin-top: 25px;">{{ user.name }}</p>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NewChat',
  data() {
    return {
      users: [],
      selectedUser: '',
      loading: false,
      options: []
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.user
    })
  },
  created() {
    this.$store.dispatch('getUsers')
      .then(
        (response) => {
          const options = response.data.data.filter(item => {
            return item._id !== this.currentUser._id
          })
          this.users = options
          this.options = options
        }
      )
  },
  methods: {
    createChat() {
      const payload = {
        to: this.selectedUser,
        from: this.currentUser._id
      }
      this.$store.dispatch('createChat', payload)
        .then(
          (response) => {
            this.notification(response.data, 'success')
            this.$router.push(`/chats/${response.data.data._id}`)
          }
        )
        .catch(
          (error) => {
            this.notification(error.response.data, 'error')
          }
        )
    },
    notification(data, type) {
      this.$notify({
        title: data.status,
        message: data.message,
        type: type
      })
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.users.filter(item => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    }
  }
}
</script>

<style lang="scss">
.new-chat-container {
  text-align: center;
  padding: 10px;
  .el-select {
    width: 100%;
    border-radius: 12px;
    outline: #6c63ff;

    input {
      height: 60px;
      background: #f7f7f7;
      border-color: #f7f7f7;
      border-radius: 8px;
    }
  }
  .user-card {
    display: flex;
    width: 100%;
    border: none;
    margin: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
  }
}

</style>
