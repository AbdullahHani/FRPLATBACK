<template>
    <div class="login-form">
        <form @submit="auth">
          <img height="80" src="@/assets/images/others/Group 62.png" alt="">
            <div class="form-wrapper-outer">
                <b-input-group class="field-wrapper-login">
                    <b-form-input type="email" v-model="login.email"></b-form-input>
                    <div class="field-placeholder"><span>Email</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-login">
                    <b-form-input type="password" v-model="login.password"></b-form-input>
                    <div class="field-placeholder"><span>Password</span></div>
                </b-input-group>
                <div class="form-button">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      @click="auth"
                      style="padding: 10px 30px; font-weight: 800;"
                    >
                      Login
                    </button>
                </div>
            </div>
        </form>
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
      }
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
        if(this.user.role === 'Buyer'){
          this.$router.push('/dashboard');
        } else {
          this.$router.push('/gigs');
        }
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
            if(res.role === 'Buyer'){
              this.$router.push('/dashboard');
            } else {
              this.$router.push('/gigs');
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
    border-radius: 24px !important;
    height: 50px;
}
input:focus {
    background-color: transparent;
    color: #fff;
    font-size: 22px;
}
</style>