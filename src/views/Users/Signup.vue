<template>
  <div class="login-main-container">
    <div class="login-container">
      <div class="row" style="justify-content: center">
        <div class="col-lg-4 col-md-8 col-sm-12">
          <sign-up />
        </div>
        <div class="col-lg-6 col-md-0 col-sm-0 mobile-side">
          <div style="padding: 100px 20px;">
            <img src="@/assets/images/others/2.png" alt="" height="500">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from '@/components/Authentication/SignUp.vue'

export default {
  name: 'Home',
  components: {
    SignUp
  }
}
</script>

<style scoped>
/* .login-main-container {
} */
.login-container {
  background-image: linear-gradient(111deg, #615cdf 0%, #090f5e 84%);
  min-height: 100vh;
  padding-top: 20px;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px !important;
}
.login-form {
  text-align: center;
  border-radius: 20px;
}

@media screen and (min-width: 912px) {
  .br-1 {
    border-right: 1px solid #30308b;
  }
  .bl-1 {
    border-left: 1px solid #30308b;
  }
}
@media screen and (max-width: 1024px) {
  .mobile-side {
    display: none;
  }
}
</style>