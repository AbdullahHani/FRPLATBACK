<template>
  <div class="container-fluid" v-if="portfolio.likes">
    <div class="card-background" align="left">
      <h1 class="display-5 head" style="color: #30308b; font-weight: 900">{{ portfolio.projectName }}</h1>
      <div v-if="user._id !== portfolio.user._id" class="mt-2 mb-5" style="display: flex; justify-content: flex-end;">
        <button
          v-if="portfolio.likes.indexOf(user._id) === -1"
          style="background: blue; border-radius: 5px; outline: none; border: none; padding: 10px 15px;"
          @click="likePortfolio"
        >
          <b-icon icon="hand-thumbs-up" scale="1.5" style="color: #fff;" size="lg"></b-icon>
        </button>
        <button
          v-else
          style="background: blue; border-radius: 5px; outline: none; border: none; padding: 10px 15px;"
          disabled
        >
          <b-icon icon="hand-thumbs-up" scale="1.5" style="color: #fff;" size="lg"></b-icon>
        </button>
      </div>
      <div class="row">
          <!-- <div class="col-md-3">
            <div
                class="card-background"
                style="height: 100%; padding: 0; overflow: hidden; background-image: linear-gradient(45deg, #9996ec 0%, #0616fb 95%);"
            >
            </div>
          </div> -->
          <div class="col-lg-8 portfolio-main" style="min-height: 400px;">
            <div style="min-height: 200px; box-shadow: 0px 30px 100px 0px rgba(0, 0, 0, 0.16);">
              <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000;"
                fade
                indicators
                controls
                background="#000"
                img-width="768px"
                img-height="300px"
              >
                <b-carousel-slide
                    v-for="(image, index) in portfolio.imagesForCover"
                    :key="index"
                    :img-src="image"
                ></b-carousel-slide>
              </b-carousel>
            </div>
              <div class="mt-4">
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
                  <h4 style="font-weight: 600; font-size: 16px;">Likes</h4>
                  <p>{{ portfolio.likes.length }}</p>
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
                  <hr />
              </div>
          </div>
          <div class="col-lg-4">
            <div class="card-background comment-card">
              <div>
                <h4 style="font-weight: 600; font-size: 16px;">Comments</h4>
                <comment-card
                  v-for="comment in portfolio.comments"
                  :key="comment._id"
                  :comment="comment"
                />
              </div>
              <form @submit="Comment">
                <div class="form-group">
                  <input type="text" class="form-control" id="comment" placeholder="Add your comment..." required v-model="comment.text" />
                </div>
                <div align="right">
                  <button type="submit" class="comment-button">Comment</button>
                </div>
              </form>
            </div>
          </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-md-12 col-sm-12"
          v-for="rPortfolio in relatedPortfolios"
          :key="rPortfolio._id"
        >
          <portfolio-card :portfolio="rPortfolio" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from '@/components/Portfolios/Gallery'
import Files from '@/components/Portfolios/Files'
import PortfolioCard from '@/components/Portfolios/Cards'
import CommentCard from '@/components/Portfolios/Comments'
import { mapState } from 'vuex'

export default {
  name: 'Viewportfolio',
  components: {
      Gallery,
      Files,
      PortfolioCard,
      CommentCard
  },
  data() {
    return {
      portfolio: {},
      relatedPortfolios: [],
      comment: {
        portfolio: '',
        text: ''
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('getPortfolio', this.$route.params.id)
      .then(
        (response) => {
          this.portfolio = response.data.data
        }
      )
    this.$store.dispatch('getPortfoliosByCategory', this.$route.params.id)
      .then(
        (response) => {
          this.relatedPortfolios = response.data.data
        }
      )
  },
  methods: {
    likePortfolio() {
      this.$store.dispatch('likePortfolio', this.$route.params.id)
        .then(
          (response) => {
            this.portfolio = response.data.data
          }
        )
    },
    Comment(e) {
      e.preventDefault()
      this.comment.portfolio = this.$route.params.id
      this.$store.dispatch('commentOnPortfolio', this.comment)
        .then(
          (response) => {
            this.portfolio = response.data.data
            this.comment.text = ''
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

<style lang="scss">
// .portfolio-main {
//   overflow: scroll;
// }
//   ::-webkit-scrollbar {
//     width: 12px;
//   }
 
//   ::-webkit-scrollbar-track {
//       box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
//       -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
//       border-radius: 10px;
//   }
 
//   ::-webkit-scrollbar-thumb {
//     box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
//       border-radius: 10px;
//       -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
//   }
.comment-card {
  padding: 5px 10px;
  margin: 0;
}
.comment-button {
  background-color: #30308b;
  font-weight: 700;
  color: #fff;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 5px 10px;
}
</style>