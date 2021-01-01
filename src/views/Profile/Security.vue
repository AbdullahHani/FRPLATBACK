<template>
  <div style="text-align: left;">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-3 pt-4">
            <div class="sidenavbar card-background">
                <router-link
                class="nav-link navbar-link text-left"
                to="/profile/profilesetting"
                >Account
              </router-link>
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/security"
                >Security</router-link
              >
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/Notification"
                >Notification</router-link
              >
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/Billing"
                >Billing Information</router-link
              >
            </div>
          </div>
          <div class="col-md-7">
            <div class="card-background">
              <h3 class="text-blue pt-5" style="font-size: 18px">
                Change Password
              </h3>
              <hr class="border-blue m-0 w-100" />
              <form class="pt-4">
                <div class="form-group">
                  <div class="row ml-1">
                    <label class="label-large">Current Password </label>
                    <div class="dandt lower">
                      <input
                        type="Password"
                        class="form-control dandt mail ml-4"
                        placeholder=""
                      />
                    </div>
                    <br /><br />
                  </div>
                  <div class="row ml-1">
                    <label class="label-large">New Password </label>
                    <div class="dandt lower" style="margin-left: 22px">
                      <input
                        type="Password"
                        class="form-control dandt mail ml-4"
                        placeholder=""
                      />
                    </div>
                    <br /><br />
                  </div>
                  <div class="row ml-1">
                    <label class="label-large" style="margin-left: -2px"
                      >Confirm Password
                    </label>
                    <div class="dandt lower">
                      <input
                        type="Password"
                        class="form-control dandt mail ml-4"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <button class="float-right mt-4 btn btn-secondary bg-darkblue">
                    Save Settings
                  </button>
                </div>
                <br /><br />
              </form>
              <hr class="border-blue mt-3 w-120" />
            </div>
            <div class="bgcl card-background mt-4">
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
            </div>
            <div class="card-background mt-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Security",
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
.sidenavbar {
  position: fixed;
}
</style>