<template>
  <div class="container-fluid">
    <div class="card-background" align="left">
      <h1 class="display-5 head" style="color: #0616fb;">{{ portfolio.projectName }}</h1>
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
                  <h4 style="font-weight: 600; font-size: 16px;">Caption</h4>
                  <p>{{ portfolio.caption }}</p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Category</h4>
                  <p>{{ portfolio.category }}</p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Sub Category</h4>
                  <p>{{ portfolio.subCategory }}</p>
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Images/Videos</h4>
                  <gallery :medias="portfolio.imageVideos" />
                  <hr />
              </div>
              <div>
                  <h4 style="font-weight: 600; font-size: 16px;">Documents</h4>
                  <files :medias="portfolio.files" />
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Portfolios/Gallery'
import Files from '@/components/Portfolios/Files'
export default {
  name: 'Viewportfolio',
  components: {
      Gallery,
      Files
  },
  data() {
    return {
      portfolio: {}
    }
  },
  created() {
    this.$store.dispatch('getPortfolio', this.$route.params.id)
      .then(
        (response) => {
          this.portfolio = response.data.data
        }
      )
  }
}
</script>