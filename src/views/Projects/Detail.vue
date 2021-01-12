<template>
  <div class="container-fluid">
    <div class="card-background" align="left">
      <h1 class="display-5 head" style="color: #0616fb;">{{ project.projectName }}</h1>
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
                  <p>{{ project.description }}</p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Category</h4>
                  <p>{{ project.category }}</p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Sub Category</h4>
                  <p>{{ project.subCategory }}</p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Documents</h4>
                  <files :medias="project.files" />
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Bids</h4>
                  <div class="row">
                    <div
                      class="col-lg-6 col-md-6 col-sm-12"
                      v-for="bid in bids"
                      :key="bid._id"
                      @click="() => {
                        $router.push(`/orders/${bid._id}`)
                      }"
                    >
                      <div class="card-background">
                        <p style="color: #0616fb; font-size: 22px; text-align: left; font-weight: 700;">{{ bid.seller.name }}</p>
                        <div class="pl-2" style="border-left: 60px solid #0616fb" align="left">
                          <div>
                            <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Category</p>
                            <p class="ml-5 mt-0 mb-0">{{ bid.gig.category }}</p>
                          </div>
                          <div>
                            <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Sub Category</p>
                            <p class="ml-5 mt-0 mb-0">{{ bid.gig.subCategory }}</p>
                          </div>
                          <div>
                            <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Description</p>
                            <p class="ml-5 mt-0 mb-0">{{ bid.description }}</p>
                          </div>
                          <div>
                            <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Starting Price</p>
                            <p class="ml-5 mt-0 mb-0" style="font-size: 16px; font-weight: 700;">${{ bid.gig.pricings[0].price }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Files from '@/components/Portfolios/Files'
export default {
  name: 'Viewproject',
  components: {
      Files
  },
  data() {
    return {
      project: {},
      bids: []
    }
  },
  created() {
    this.$store.dispatch('getProject', this.$route.params.id)
      .then(
        (response) => {
          this.project = response.data.data
        }
      )
    this.$store.dispatch('getBidsByProject', this.$route.params.id)
      .then(
        (response) => {
          this.bids = response.data.data
        }
      )
  }
}
</script>