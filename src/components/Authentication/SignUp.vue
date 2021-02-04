<template>
  <div class="card-background">
    <img height="60" src="@/assets/images/others/Group 62.png" alt="" />
    <form @submit="register" class="mt-5">
      <div class="form-group card-background" style="padding: 0; display: flex">
        <b-icon
          icon="person-fill"
          style="font-size: 22px; margin: 15px 10px"
        ></b-icon>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="formData.userName"
          placeholder="Username"
          style="height: 50px"
          @click="handleError"
          required
        />
      </div>
      <div class="form-group card-background" style="padding: 0; display: flex">
        <b-icon
          icon="chat-right-text-fill"
          style="font-size: 22px; margin: 15px 10px"
        ></b-icon>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="formData.name"
          placeholder="Name"
          style="height: 50px"
          @click="handleError"
          required
        />
      </div>
      <div class="form-group card-background" style="padding: 0; display: flex">
        <b-icon
          icon="envelope-fill"
          style="font-size: 22px; margin: 15px 10px"
        ></b-icon>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formData.email"
          placeholder="Email"
          style="height: 50px"
          @click="handleError"
          required
        />
      </div>
      <div class="form-group card-background" style="padding: 0; display: flex">
        <b-icon
          icon="lock-fill"
          style="font-size: 22px; margin: 15px 10px"
        ></b-icon>
        <input
          :type="showPassword ? 'text' : 'password'"
          class="form-control"
          id="password"
          v-model="formData.password"
          placeholder="Password"
          style="height: 50px"
          required
          @click="handleError"
        />
        <button
          type="button"
          @click="showPassword = !showPassword"
          style="background: none; outline: none; border: none"
        >
          <b-icon
            :icon="showPassword ? 'eye' : 'eye-fill'"
            style="font-size: 22px; margin: 15px 10px"
          ></b-icon>
        </button>
      </div>
      <div class="form-group card-background" style="padding: 0; display: flex">
        <b-icon
          icon="unlock-fill"
          style="font-size: 22px; margin: 15px 10px"
        ></b-icon>
        <input
          :type="showConfirmPassword ? 'text' : 'password'"
          class="form-control"
          id="confirmPassword"
          v-model="formData.confirmPassword"
          placeholder="Confirm Password"
          style="height: 50px"
          @click="handleError"
          required
        />
        <button
          type="button"
          @click="showConfirmPassword = !showConfirmPassword"
          style="background: none; outline: none; border: none"
        >
          <b-icon
            :icon="showConfirmPassword ? 'eye' : 'eye-fill'"
            style="font-size: 22px; margin: 15px 10px"
          ></b-icon>
        </button>
      </div>
      <p v-if="errors.confirmPassword" style="color: red; text-align: center">
        {{ errors.confirmPassword }}
      </p>
      <div class="form-group card-background" style="padding: 0; display: flex">
        <b-icon
          icon="phone-fill"
          style="font-size: 22px; margin: 15px 10px"
        ></b-icon>
        <input
          type="text"
          class="form-control"
          id="phoneNumber"
          v-model="formData.phoneNumber"
          placeholder="Phone Number"
          style="height: 50px"
          @click="handleError"
          required
        />
      </div>
      <p v-if="error" style="color: red; text-align: center">{{ error }}</p>
      <div style="display: flex; justify-content: space-between">
        <p style="padding-top: 10px">
          <router-link style="color: #30308b; font-weight: 700" to="/">
            Already have an account?
          </router-link>
        </p>
        <div class="card-background" style="padding: 0">
          <button
            type="submit"
            class="btn"
            @click="register"
            style="padding: 10px 30px; font-weight: 800"
          >
            Get Started!
          </button>
        </div>
      </div>
    </form>
    <p class="or">OR</p>
    <button class="social-login facebook">
      <b-icon icon="facebook" style="font-size: 24px"></b-icon> Signin with
      Facebook
    </button>
    <button class="social-login google">
      <b-icon icon="google" style="font-size: 24px"></b-icon> Signin with Google
    </button>
    <button class="social-login linked-in">
      <b-icon icon="linkedin" style="font-size: 24px"></b-icon> Signin with
      LinkedIn
    </button>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      error: '',
      formData: {
        userName: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: '',
        interests: '',
        phoneNumber: '',
        country: '',
        referral: ''
      },
      errors: {
        password: '',
        confirmPassword: ''
      },
      showPassword: false,
      showConfirmPassword: false
    }
  },
  methods: {
    register(e) {
      e.preventDefault()
      if (this.formData.password !== this.formData.confirmPassword) {
        this.errors.confirmPassword = 'Password does not match'
        return
      }
      this.$store.dispatch('registerUser', this.formData)
        .then(
          (response) => {
            this.$store.commit('currentUser', response.data.data)
            this.$router.push('/seller/complete')
          }
        )
        .catch(
          (error) => {
            const res = error.response.data
            this.error = res.errUserName || res.errEmail
            if (res.message) {
              this.makeToast(res)
            }
          }
        )
    },
    handleError() {
      this.errors = {
        password: '',
        confirmPassword: ''
      }
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
}
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