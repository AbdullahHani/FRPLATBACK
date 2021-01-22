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
            required
          />
          <button type="button" @click="showPassword = !showPassword" style="background: none; outline: none; border: none;">
            <b-icon :icon="showPassword ? 'eye' : 'eye-fill'" style="font-size: 22px; margin: 15px 10px;"></b-icon>
          </button>
        </div>
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
      <button class="social-login facebook"><b-icon icon="facebook" style="font-size: 24px;"></b-icon> Signin with Facebook</button>
      <button class="social-login google"><b-icon icon="google" style="font-size: 24px;"></b-icon> Signin with Google</button>
      <button class="social-login linked-in"><b-icon icon="linkedin" style="font-size: 24px;"></b-icon> Signin with LinkedIn</button>
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
      showPassword: false
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
            console.log(error.response.data)
          }
        )
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
  width: 150px;
  height: 2px;
  background: #30308b;
  display: inline-block;
  margin: 0 5px 3px 15px;
}
.or::after {
  content: '';
  width: 150px;
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