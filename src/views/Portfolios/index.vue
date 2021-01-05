<template>
  <div style="background-color: white;">
    <div class="row ml-4" style="margin: 0; padding: 0;">
      <div class="col-lg-6 card-background" style="padding: 73px 0px">
        <img class="profile-avatar" :src="user.avatar">
        <h1>{{ user.name }}</h1>
        <p>{{ user.description }}</p>
        <b-form-rating v-bind="4.2" variant="warning" class="mb-2"></b-form-rating>
        <p>4.2 (100 reviews)</p>
        <div class="flex-container" style="justify-content: center; ">
            <button
              class="profile-button btn-blue"  
            >
              Contact Me
            </button>
            <button
              class="profile-button btn-white"
            >
              Get a Quote
            </button>
        </div>
        <hr class="hr-span">
      </div>
      <div class="col-lg-6">
        <div style="display: flex; flex-wrap: wrap; margin-left: 80px;">
          <gig-card
            v-for="(gig, index) in gigs"
            :key="index"
            :gig="gig"
          />
        </div>
        <div style="display: flex; flex-wrap: wrap; margin-left: 80px;">
          <div
            v-for="portfolio in portfolios"
            :key="portfolio._id"
            class="card-background mt-2"
            @click="() => {
              $router.push(`/portfolio/${portfolio._id}`)
            }"
          >
            <p style="color: #0616fb; font-size: 22px; text-align: left; font-weight: 700;">{{ portfolio.projectName }}</p>
            <div class="ml-4 pl-2" style="border-left: 5px solid #0616fb" align="left">
              <div>
                <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Category</p>
                <p class="ml-5 mt-0 mb-0">{{ portfolio.category }}</p>
              </div>
              <div>
                <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Sub Category</p>
                <p class="ml-5 mt-0 mb-0">{{ portfolio.subCategory }}</p>
              </div>
              <div>
                <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Caption</p>
                <p class="ml-5 mt-0 mb-0">{{ portfolio.caption }}</p>
              </div>
              <div>
                <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">url</p>
                <p class="ml-5 mt-0 mb-0"><a :href="portfolio.url" target="_blank">{{ portfolio.url }}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GigCard from '@/components/Dashboard/GigCard'
import { mapState } from 'vuex'
export default {
  name: 'ProfilePage',
  components: {
    GigCard
  },
  data() {
    return {
      gigs: [
        {
          seller: {
            name: 'Furqan Mohsin',
            ratings: {
              value: 4.5,
              raters: [1, 2, 3, 4, 5]
            },
            startingPrice: 200
          }
        },
        {
          seller: {
            name: 'Furqan Mohsin',
            ratings: {
              value: 4.5,
              raters: [1, 2, 3, 4, 5]
            },
            startingPrice: 300
          }
        },
        {
          seller: {
            name: 'Furqan Mohsin',
            ratings: {
              value: 4.5,
              raters: [1, 2, 3, 4, 5]
            },
            startingPrice: 200
          }
        },
        {
          seller: {
            name: 'Furqan Mohsin',
            ratings: {
              value: 4.5,
              raters: [1, 2, 3, 4, 5]
            },
            startingPrice: 100
          }
        },
      ],
      portfolios: []
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('getPortfolioByUser', this.user._id)
      .then(
        (response) => {
          this.portfolios = response.data.data
        }
      )
  }
}
</script>

<style scoped>

.row {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.top-nav a {
  float: left;
  display: block;
  color: #575656;
  text-align: center;
  padding: 14px 16px;
  font-size: 17px;
  font-weight: bold;
}

.top-nav a:hover {
  color: #30308b;
}

.top-nav a.active {
  color: #30308b;
}

.top-nav input[type=text] {
  border: none;
  font-size: 17px;
}

.flexr {
  display: flex;
}

.bottom-nav {
  width: 100%;
  display: flex;
}

.bottom-nav a {
  color: #575656;
  font-size: 17px;
  font-weight: bold;
  margin-left: 80px;
}

.bottom-nav a:hover {
  color: #30308b;
}

.bottom-nav a.active {
  color: #30308b;
}

.flex-container {
  display: flex;
  justify-content: space-around;
}
.profile-button {
  border-radius: 8px; 
  border: none;
  font-weight: bold;
  margin: 0 20px;
  padding: 5px 10px;
}
.btn-white {
  background-color: white;
  color: #30308b;
  border: solid 0.2px #707070; 
}
.btn-blue {
  background-color: #30308b;
  color: white;
}
.profile-avatar {
  max-height: 200px;
  border-radius: 20px;
}
.hr-span {
  background-color: silver; 
  height: 1px;
  margin-top: 50px;
  box-shadow: 0px 2px 20px 0px;
}
</style>