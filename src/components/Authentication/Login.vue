<template>
    <div class="card-background">
      <img height="60" src="@/assets/images/others/Group 62.png" alt="">
      <form @submit="auth" class="mt-5">
        <div class="form-group card-background" style="display: flex; padding: 0;">
          <b-icon icon="envelope-fill" style="font-size: 22px; margin: 15px 10px;"></b-icon>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="login.email"
            placeholder="Email"
            style="height: 50px;"
            @click="handleError"
            required
          />
        </div>
        <div class="form-group card-background" style="display: flex; padding: 0;">
          <b-icon icon="lock-fill" style="font-size: 22px; margin: 15px 10px;"></b-icon>
          <input
            :type="showPassword ? 'text' : 'password'"
            class="form-control"
            id="email"
            v-model="login.password"
            placeholder="Password"
            style="height: 50px;"
            @click="handleError"
            required
          />
          <button type="button" @click="showPassword = !showPassword" style="background: none; outline: none; border: none;">
            <b-icon :icon="showPassword ? 'eye' : 'eye-fill'" style="font-size: 22px; margin: 15px 10px;"></b-icon>
          </button>
        </div>
        <p v-if="error" style="color: red; text-align: center">{{ error }}</p>
        <div style="display: flex; justify-content: space-between;">
          <p style="padding-top: 10px;">
            <router-link
              style="color: #30308b; font-weight: 700;"
              to="/signup"
            >
              Get Started!
            </router-link>
          </p>
          <div class="card-background" style="padding: 0">
              <button
                type="submit"
                class="btn"
                @click="auth"
                style="padding: 10px 30px; font-weight: 800;"
              >
                Login
              </button>
          </div>
        </div>
      </form>
      <p class="or">OR</p>
      <button class="social-login facebook" @click="socialLogin('facebook')">
        <b-icon icon="facebook" style="font-size: 24px;"></b-icon> Sign In with Facebook
      </button>
      <button class="social-login google" @click="socialLogin('google')">
        <b-icon icon="google" style="font-size: 24px;"></b-icon> Sign In with Google
      </button>
      <button class="social-login linked-in" @click="socialLogin('linkedin')">
        <b-icon icon="linkedin" style="font-size: 24px;"></b-icon> Sign In with LinkedIn
      </button>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "App",
  data() {
    return {
      loading: false,
      login: {
        email: "",
        password: ""
      },
      showPassword: false,
      error: ''
    };
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    if (this.user) {
      if(this.user.email) {
        this.$router.push('/feeds');
      }
    }
  },
  methods: {
    auth(e) {
      e.preventDefault()
      this.loading = true;
      this.$store.dispatch('userLogin', this.login)
        .then(
          (response)=> {
            const res = response.data.data;
            this.$store.commit('currentUser', res);
            this.loading = false;
            if(res.profileCompleted < 100) {
              this.$router.push('/seller/complete');
            } else {
              this.$router.push('/feeds');
            }
          }
        )
        .catch(
          (error) => {
            const res = error.response.data
            this.error = res.errEmail || res.errPassword
            if (res.message) {
              this.makeToast(res)
            }
          }
        )
    },
    socialLogin(network) {
      if (network) {
        return
      }
      return
      // const hello = this.hello
      // hello(network)
      //   .login({
      //     scope: 'email',
      //     force: true
      //   })
      //   .then(() => {
      //     // const authRes = hello(network).getAuthResponse()
      //     hello(network)
      //       .api('me')
      //       .then(json => {
      //         const profile = json
      //         const {
      //           email,
      //           name,
      //           first_name,
      //           last_name,
      //           picture
      //         } = profile
      //         const payload = {
      //           email: email,
      //           name: name,
      //           firstName: first_name,
      //           lastName: last_name,
      //           avatar: picture,
      //           authType: network
      //         }
      //         this.$store.dispatch('socialLogin', payload)
      //           .then(response => {
      //             this.$store.commit('currentUser', response.data.data)
      //             this.$router.push('/dashboard')
      //           })
      //           .catch(error => {
      //             this.notification(error.response.data, 'error')
      //           })
      //       })
      //   })
    },
    handleError() {
      this.error = ''
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
input {
  border: none;
  outline: none;
}
.or {
  text-transform: uppercase;
  margin-top: 10px;
  color: #30308b;
}
.or::before {
  content: '';
  width: 30%;
  height: 2px;
  background: #30308b;
  display: inline-block;
  margin: 0 5px 3px 15px;
}
.or::after {
  content: '';
  width: 30%;
  height: 2px;
  background: #30308b;
  display: inline-block;
  margin: 0 15px 3px 5px;
}
.btn {
  background: #30308b;
  color: #fff;
}
.social-login {
  width: 100%;
  height: 55px;
  margin-bottom: 5px;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 700;
}
.google {
  background-color: #d30505;
}
.facebook {
  background-color: #0066ff;
}
.linked-in {
  background-color: #2433bb;
}
</style>