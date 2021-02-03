<template>
  <div style="text-align: left; min-height: 70vh;">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-3 pt-4">
            <div class="sidenavbar card-background">
                <router-link
                class="nav-link navbar-link text-left"
                to="/profile"
                >Account
              </router-link>
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/security"
                >Security</router-link
              >
              <!-- <router-link
                class="nav-link navbar-link text-left"
                to="/profile/notification"
                >Notification</router-link
              > -->
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/billing"
                >Billing Information</router-link
              >
            </div>
          </div>
          <div class="col-md-7">
            <div class="card-background pb-5">
              <h3 class="text-blue" style="font-size: 18px">
                Change Password
              </h3>
              <hr class="border-blue w-100" />
              <form class="pt-4" @submit="changePassword">
                <div class="form-group">
                  <div class="row ml-1">
                    <label class="label-large">Current Password </label>
                    <div class="dandt lower">
                      <input
                        type="password"
                        class="form-control dandt mail ml-4"
                        placeholder=""
                        v-model="passwordForm.oldPassword"
                        required
                      />
                    </div>
                    <br /><br />
                  </div>
                  <div class="row ml-1">
                    <label class="label-large">New Password </label>
                    <div class="dandt lower" style="margin-left: 19px">
                      <input
                        type="password"
                        class="form-control ml-4"
                        placeholder=""
                        v-model="passwordForm.newPassword"
                        required
                      />
                    </div>
                    <br /> <br />
                  </div>
                  <div class="row ml-1 mb-4">
                    <label class="label-large" style="margin-left: -2px"
                      >Confirm Password
                    </label>
                    <div class="">
                      <input
                        type="password"
                        class="form-control ml-4"
                        placeholder=""
                        v-model="passwordForm.confirmPassword"
                        required
                      />
                    </div>
                    <br> <br>
                    <p v-if="unmatchPassword" style="text-align: center; color: red; font-size: 12px;">
                      {{ unmatchPassword }}
                    </p>
                  </div>
                  <button
                    type="submit" 
                    class="float-right btn btn-info mb-4"
                  >
                    Change Password
                  </button>
                </div>
              </form>
              <hr class="border-blue mt-3 w-120" />
            </div>
            <!-- <div class="bgcl card-background mt-4">
              <div class="row ml-5 pt-2">
                <div class="col-4"><strong>Phone Varifiction</strong></div>
                <div class="col-6 ml-5">
                  Edit Your phone is verified with <br />Texenn.Click edit to change
                  your <br />phone number.<br />
                  <a href="#" style="color: darkblue">Edit Now</a>
                  <br />
                </div>
              </div>
              <div class="row ml-5 pt-2">
                <div class="col-4"><strong>Security Question</strong></div>
                <div class="col-6 ml-5">
                  Edit Your phone is verified with <br />Texenn.Click edit to change
                  your <br />phone number.<br />
                  <a href="#" style="color: darkblue">Edit Now</a>
                  <br />
                </div>
              </div>
              <div class="row ml-5 pt-2">
                <div class="col-4"><strong>Two Factor Authentication</strong></div>
                <div class="col-6 ml-5">
                  To help your account secure, <br />We'll ask you to submit a code
                  when <br />using a new device to log in.<br />

                  <br />
                </div>
              </div>
              <hr class="border-blue mt-2 pl-2 col-md-6 w-80" />
            </div> -->
            <!-- <div class="card-background mt-4">
              <div>
                <strong>Connected Devices</strong>
              </div>
              <div>
                <button class="mt-1 device-btn"
                  ><img class="float-left pl-3" src="@/assets/images/others/smartphone.png"
                /></button>
                <br />
                <button class="mt-1 device-btn"
                  ><img class="float-left" src="@/assets/images/others/Component 8 – 1.png"
                /></button>
                <br />
                <button class="mt-1 device-btn"
                  ><img class="float-left pl-2" src="@/assets/images/others/Group 104.png"
                /></button>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Security",
  data() {
    return {
      passwordForm: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      unmatchPassword: ''
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    changePassword(e) {
      e.preventDefault()
      if (this.passwordForm.newPassword !== this.passwordForm.confirmPassword) {
        this.unmatchPassword = 'Password does not match'
      } else {
        const data = {
          id: this.user._id,
          payload: this.passwordForm
        }
        this.$store.dispatch('updatePassword', data)
          .then(
            (response) => {
              this.$store.commit('currentUser', response.data.data)
              this.makeToast(response.data)
            }
          )
          .catch(
            (error) => {
              this.makeToast(error.response.data)
            }
          )
      }
    },
    onFocusPassword() {
      this.unmatchPassword = ''
    },
    makeToast(data) {
      this.$bvToast.toast(data.message, {
        title: data.status,
        autoHideDelay: 3000,
        appendToast: false
      })
    }
  }
};
</script>

<style scoped>
.device-btn{
  width: 100%;
  height: 50px;
  border:1px solid #ced4da;
  border-radius: 5px;
}
.device-btn img{
  height: 40px;
}

</style>
<style>
.sidenavbar {
  position: fixed;
}
</style>