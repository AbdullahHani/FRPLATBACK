<template>
    <div class="login-form">
        <form>
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
                    <router-link to="getStarted" type="button" class="btn btn-primary">Login</router-link>
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
       this.$router.push('/getStarted') 
      }
    }
  },
  methods: {
    auth() {
      this.loading = true;
      this.$store.dispatch('loginUser', this.login)
        .then(
          (response)=> {
            const res = response.data.data;
            localStorage.setItem('token', res.token);
            localStorage.setItem('userId', res._id);
            localStorage.setItem('user', JSON.stringify(res));
            this.$store.commit('setUser', res);
            this.loading = false;
            if(res.date){
              this.$router.push('/getStarted');
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