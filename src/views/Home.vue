<template>
  <div class="login-main-container">
    <nav class="navbar navbar-expand-lg">
      <p>
        <span>
          <img src="" alt="">
        </span> Sign In
      </p>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <img src="" alt="">
      </div>
    </nav>
    <div class="login-container">
      <div class="row">
        <div class="col-lg-6">
          <login/>
        </div>
        <div class="col-lg-6">
          <div style="padding: 20px">
            <img src="@/assets/images/authentication/2.png" alt="" height="500">
          </div>
        </div>
      </div>
    </div>
    <div>
      <img src="" alt="">
      <h4>------------ Sign Up ---------------</h4>
      <div class="row">
        <div class="col-lg-6 br-1">
          <sign-up />
        </div>
        <div class="col-lg-6 bl-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Authentication/Login.vue'
import SignUp from '@/components/Authentication/SignUp.vue'

export default {
  name: 'Home',
  components: {
    Login,
    SignUp
  }
}
</script>

<style scoped>
/* .login-main-container {
} */
.login-container {
  background-image: linear-gradient(111deg, #9996ec 0%, #0616fb 84%);
  height: 100vh;
  padding-top: 100px;
}
.navbar {
  /* background-image: linear-gradient(111deg, #9996ec 0%, #0616fb 84%); */
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px !important;
}
.login-form {
  margin-top: 100px;
  text-align: center;
  border-radius: 20px;
  /* background-color: rgba(0, 0, 0, 0.2); */
}

@media screen and (min-width: 912px) {
  .br-1 {
    border-right: 1px solid #30308b;
  }
  .bl-1 {
    border-left: 1px solid #30308b;
  }
}

</style>