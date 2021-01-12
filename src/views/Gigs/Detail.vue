<template>
  <div class="container-fluid">
    <div class="card-background" align="left">
      <h1 class="display-5 head">{{ gig.title }}</h1>
      <div class="row mt-4">
        <div
          class="col-lg-3 col-md-6 col-sm-12 ml-auto"
          style="display: flex; flex-direction: row"
        >
          <div
            class="card-background"
            style="width: 100%; background-color: white; text-align: center"
          >
            <div class="ml-auto">
              <p class="pt-2" style="font-weight: 700;">Impressions</p>
              <h2 style="color: #0616fb; font-weight: 700;">{{ gig.impressions }}</h2>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-12 ml-auto"
          style="flex-direction: row; display: flex"
        >
          <div
            class="card-background"
            style="width: 100%; background-color: white; text-align: center"
          >
            <div class="ml-auto">
              <p class="pt-2" style="font-weight: 700;">Clicks</p>
              <h2 style="color: #0616fb; font-weight: 700;">{{ gig.clicks }}</h2>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-12 ml-auto"
          style="flex-direction: row; display: flex"
        >
          <div
            class="card-background"
            style="width: 100%; background-color: white; text-align: center"
          >
            <div class="ml-auto">
              <p class="pt-2" style="font-weight: 700;">Orders</p>
              <h2 style="color: #0616fb; font-weight: 700;">{{ gig.orders }}</h2>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-12 ml-auto"
          style="flex-direction: row; display: flex"
        >
          <div
            class="card-background"
            style="width: 100%; background-color: white; text-align: center"
          >
            <div class="ml-auto">
              <p class="pt-2" style="font-weight: 700;">Cancellations</p>
              <h2 style="color: #0616fb; font-weight: 700;">{{ gig.cancellations }}</h2>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
          <div class="col-md-3">
            <div class="card-background" style="height: 390px; padding: 0; overflow: hidden;">
              <img v-if="gig.picture" :src="gig.picture" alt="" height="400">
            </div>
          </div>
          <div class="col-md-9">
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Seller</h4>
                  <p>{{ gig.user.name }} <span style="float: right;"><router-link :to="`/profile/${gig.user._id}`">Visit Profile</router-link></span></p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Description</h4>
                  <p>{{ gig.description }}</p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Category</h4>
                  <p>{{ gig.category }}</p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Sub Category</h4>
                  <p>{{ gig.subCategory }}</p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Suggestions</h4>
                  <div v-for="suggestion in gig.suggestions" :key="suggestion">
                    <p><b-icon icon="heptagon-fill" style="color: #0616fb;"></b-icon><span class="ml-2">{{ suggestion }}</span></p>
                  </div>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Tags</h4>
                  <div class="row">
                    <div class="col-lg-2 col-md-3 col-sm-4" v-for="tag in gig.tags" :key="tag">
                        <div
                            align="center"
                            style="border: 2px solid #0616fb; background-color: rgba(6, 22, 251, 0.6); border-radius: 5px;"
                        >
                            <p style="color: #fff" class="mt-1 mb-1">{{ tag }}</p>
                        </div>
                    </div>
                  </div>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Pricings</h4>
                  <div class="row card-background">
                    <div
                      v-for="pricing in gig.pricings"
                      :key="pricing.title"
                      class="col-md-4"
                    >
                      <div
                        class="card-background pb-2" style="padding: 0; margin: 5px; text-align: center;"
                      >
                        <div
                          style="width: 100%; height: 60px; background-image: linear-gradient(111deg, #9996ec 0%, #0616fb 84%); padding-top: 10px;"
                        >
                          <p style="font-size: 22px; color: #fff; text-align: center; font-weight: 800;">
                            {{pricing.title}}
                          </p>
                        </div>
                        <div class="form-group" align="center">
                          <p
                            class="mt-4" 
                            style="font-size: 36px; color: #0616fb; text-align: center; font-weight: 900;">
                            ${{ pricing.price }}
                          </p>
                        </div>
                        <div class="form-group">
                          <p style="text-align: left; font-weight: 600; margin-left: 10px;">Services</p>
                          <div
                            v-for="(service, serviceIndex) in pricing.services"
                            :key="serviceIndex"
                            style="display: flex;"
                            class="row ml-4"
                          >
                            <p><b-icon icon="heptagon-fill" style="color: #0616fb"></b-icon><span class="ml-2">{{ service }}</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewGig',
  data() {
    return {
      gig: {}
    }
  },
  created() {
    this.$store.dispatch('getGig', this.$route.params.id)
      .then(
        (response) => {
          this.gig = response.data.data
        }
      )
  }
}
</script>