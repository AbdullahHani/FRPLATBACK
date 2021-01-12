<template>
  <div style="text-align: left;">
    <div class="container">
      <div class="row">
        <div class="col-md-3 pt-4">
          <div class="sidenavbar card-background">
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
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/notification"
                >Notification</router-link
              >
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/billing"
                >Billing Information</router-link
              >
          </div>
        </div>
        <div class="col-md-7 card-background mt-4">
          <form class="pt-5" @submit="addBillingInformation">
            <div class="form-group">
              <label for="fullname">Full Name</label>
              <input
                type="text"
                class="form-control custom-blue-bg py-0"
                v-model="form.billingInformation.name"
                required
              />
            </div>
            <div class="form-group">
              <label for="companyName">Company Name</label>
              <input
                type="text"
                class="form-control custom-blue-bg py-0"
                v-model="form.billingInformation.companyName"
                required
              />
            </div>
            <div class="form-group">
              <label for="country">Country</label>
              <input
                type="text"
                class="form-control custom-blue-bg py-0"
                v-model="form.billingInformation.country"
                required
              />
            </div>
            <div class="form-group">
              <label for="region">State/Region</label>
              <input
                type="text"
                class="form-control custom-blue-bg py-0"
                aria-describedby="emailHelp"
                v-model="form.billingInformation.state"
                required
              />
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control custom-blue-bg py-0"
                aria-describedby="emailHelp"
                v-model="form.billingInformation.address"
                required
              />
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input
                type="text"
                class="form-control custom-blue-bg py-0"
                aria-describedby="emailHelp"
                v-model="form.billingInformation.city"
                required
              />
            </div>
            <div class="form-group">
              <label for="zipcode">Zip Code</label>
              <input
                type="text"
                class="form-control custom-blue-bg py-0"
                aria-describedby="emailHelp"
                v-model="form.billingInformation.zipcode"
                required
              />
            </div>

            <div class="form-group form-check row ">
              
              <input
                type="checkbox"
                class="form-check-input tick"
                id="exampleCheck1"
                v-model="form.emailInvoice"
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
import { mapState } from 'vuex'
export default {
  name: 'Notification',
  data() {
    return {
      form: {
        billingInformation: {
          name: '',
          companyName: '',
          country: '',
          state: '',
          address: '',
          city: '',
          zipcode: ''
        },
        emailInvoice: false
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    if (this.user.billingInformation) {
      this.form = this.user
    }
  },
  methods: {
    addBillingInformation(e) {
      e.preventDefault()
      const data= {
        id: this.user._id,
        payload: this.form
      }
      this.$store.dispatch('updateUser', data)
        .then(
          (response) => {
            this.$store.commit('currentUser', response.data.data)
            this.makeToast(response.data)
          }
        )
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