<template>
  <div style="text-align: left; min-height: 70vh;">
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-md-3 pt-4">
            <div
              class="sidenavbar card-background"
              style="display: grid; text-align: left; color: black"
            >
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
          <div class="col-md-7 card-background mt-4">
            <h3 class="text-blue" style="font-size: 18px; padding-top: 40px">
              My Profile Setting
            </h3>
            <hr class="border-blue m-0 w-100" />
            <form class="pt-4">
              <div class="form-group">
                <label class="label-large" for="gigTitle">Email </label>
                <div class="dandt lower">
                  <input
                    v-model="user.email"
                    type="text"
                    class="form-control dandt mail"
                    placeholder=""
                    disabled
                  />
                </div>
                <!-- <br /><br />
                <label class="label-large" for="gigTitle"
                  >Online Status <button class="notification-status-btn "></button>
                </label>
                <div class="dropdown btnnn ">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Go Offline For
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button
                      class="dropdown-item btn btn-secondary"
                      type="button"
                    >
                      Go Online For
                    </button>
                  </div>
                </div> -->

                <!-- <div class="col-md-3 ml-auto">
                  <button
                    type="submit"
                    class="btn btn-primary bg-darkblue"
                    style="width: 200px; margin-left: -60px"
                  >
                    Save Settings
                  </button>
                </div> -->
              </div>
            </form>
            <br />

            <hr class="border-blue m-0" />

            <!-- <label class="label-large" style="font-size: 30px" for=""
              >Account Deactivation
            </label>
            <label class="label-large" style="font-size: 20px" for=""
              >What happens when you deactive your account?
            </label>
            <label class="label-large ull" for="gigTitle">
              <ul>
                <li>You wont be able to reactive your Gigs</li>
                <li>You wont be able to reactive your Gigs</li>
                <li>You wont be able to reactive your Gigs</li>
              </ul>
            </label>

            <form class="form-inline">
              <label class="my-1 mr-2" for="inlineFormCustomSelectPref"
                >Preference</label
              >
              <select
                class="custom-select my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                style="width: 80%"
              >
                <option selected>I'm leaving beacuse</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <button type="submit" class="btn btn-primary bg-darkblue">
                Submit
              </button>
            </form> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Account",
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
};
</script>

<style scoped>
.notification-status-btn{
     border-radius: 20px;
    width: 15px;
    height: 15px;
    margin-left: 5px;
    border: none;
    background-color: lightgreen;
}
</style>
