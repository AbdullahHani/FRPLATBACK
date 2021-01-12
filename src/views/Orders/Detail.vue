<template>
  <div class="container-fluid">
    <div class="card-background" align="left" v-if="bid.seller">
      <b-button v-if="bid.status === 'Pending'" style="background-color: #0616fb; width: 120px;" class="float-right" @click="acceptBid">Accept</b-button>
      <h1 class="display-5 head" style="color: #0616fb;">{{ bid.seller.name }}</h1>
      <p style="text-align: right; padding-right: 20px;"><router-link :to="`/profile/${bid.seller._id}`">View Profile</router-link></p>
      <div class="row">
          <div class="col-md-3">
            <div
                class="card-background"
                style="height: 100%; padding: 0; overflow: hidden; background-image: linear-gradient(45deg, #9996ec 0%, #0616fb 95%);"
            >
            </div>
          </div>
          <div class="col-md-9">
            <div>
                <h4 style="font-weight: 600; font-size: 16px;">Description</h4>
                <p>{{ bid.description }}</p>
                <hr />
            </div>
            <div>
                <h4 style="font-weight: 600; font-size: 16px;">Category</h4>
                <p>{{ bid.gig.category }}</p>
                <hr />
            </div>
            <div>
                <h4 style="font-weight: 600; font-size: 16px;">Sub Category</h4>
                <p>{{ bid.gig.subCategory }}</p>
                <hr />
            </div>
            <div>
                <h4 style="font-weight: 600; font-size: 16px;">Starting Price</h4>
                <p>${{ bid.gig.pricings[0].price }}</p>
                <hr />
            </div>
            <p style="text-align: right; padding-right: 20px;"><router-link :to="`/gigs/${bid.gig._id}`">View Gig Detail</router-link></p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewBid',
  components: {
  },
  data() {
    return {
      bid: {}
    }
  },
  created() {
    this.$store.dispatch('getBid', this.$route.params.id)
      .then(
        (response) => {
          this.bid = response.data.data
        }
      )
  },
  methods: {
    acceptBid() {
      this.$store.dispatch('acceptBid', this.bid._id)
        .then(
          (response) => {
            this.makeToast(response.data)
            this.$router.push(`/chats/${response.data.data._id}`)
          }
        )
        .catch(
          (error) => {
            this.makeToast(error.response.data)
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