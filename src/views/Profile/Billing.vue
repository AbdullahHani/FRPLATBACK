<template>
  <div style="text-align: left;">
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
        <div class="col-md-7 card-background mt-4">
          <form class="pt-5">
            <div class="form-group">
              <label for="fullname">Full Name</label>
              <input
                type="email"
                class="form-control custom-blue-bg py-0"
              />
            </div>
            <div class="form-group">
              <label for="companyName">Company Name</label>
              <input
                type="password"
                class="form-control custom-blue-bg py-0"
              />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input
                type="email"
                class="form-control custom-blue-bg py-0"
              />
            </div>
            <div class="form-group">
              <label for="region">State/Region</label>
              <input
                type="email"
                class="form-control custom-blue-bg py-0"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="email"
                class="form-control custom-blue-bg py-0"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input
                type="email"
                class="form-control custom-blue-bg py-0"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="zipcode">Zip Code</label>
              <input
                type="email"
                class="form-control custom-blue-bg py-0"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="form-group form-check row ">
              
              <input
                type="checkbox"
                class="form-check-input tick"
                id="exampleCheck1"
              />
              <label class="form-check-label text-blue" for="exampleCheck1"
                >Send me Invoice via Email</label
              >
            </div>
            <div class="col-md-3 ml-auto">
              <button type="submit" class="btn btn-primary bg-darkblue">
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification'
}
</script>