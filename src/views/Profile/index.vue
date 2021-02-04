<template>
  <div style="background-color: white">
    <div class="row" style="margin: 0; padding: 0" v-if="profileUser.email">
      <div class="col-lg-6">
        <div class="card-background profile-card" align="center">
          <img class="profile-avatar" :src="profileUser.avatar" />
          <h1>{{ profileUser.name }}</h1>
          <p>{{ profileUser.description }}</p>
          <b-form-rating
            v-bind="profileUser.ratings.value"
            variant="warning"
            class="mb-2 mx-auto"
            size="lg"
            style="width: 180px"
          >
          </b-form-rating>
          <p>
            {{ profileUser.ratings.value }} ({{
              profileUser.ratings.raters.length
            }}
            reviews)
          </p>
          <div class="flex-container" style="justify-content: center">
            <!-- <button class="profile-button btn-blue">Contact Me</button> -->
            <!-- <button class="profile-button btn-white">Get a Quote</button> -->
          </div>
          <hr class="hr-span" />
          <div align="left">
            <div>
              <h4 style="font-weight: 600; font-size: 16px;">Email</h4>
              <p style="margin-left: 10px;">{{profileUser.email }}</p>
            </div>
            <div>
              <h4 style="font-weight: 600; font-size: 16px;">Skills</h4>
              <p
                style="margin: 0 10px;"
                v-for="skill in profileUser.skills"
                :key="skill"
              >
                {{ skill.skill }} <span style="font-weight: 600; font-size: 12px;">({{ skill.experience }})</span>
              </p>
            </div>
            <div>
              <h4 style="font-weight: 600; font-size: 16px;">Languages</h4>
              <p
                style="margin: 0 10px;"
                v-for="language in profileUser.languages"
                :key="language"
              >
                {{ language }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="portfolio-container">
          <gig-card v-for="(gig, index) in gigs" :key="index" :gig="gig" />
        </div>
        <div class="portfolio-container">
          <portfolio-card
            v-for="portfolio in portfolios"
            :key="portfolio._id"
            :portfolio="portfolio"
            style="max-width: 400px; min-width: 400px;"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GigCard from '@/components/Dashboard/ProfileGigCard'
import PortfolioCard from '@/components/Portfolios/Cards/Profile.vue'
import { mapState } from 'vuex'
export default {
  name: 'UserProfile',
  components: {
    GigCard,
    PortfolioCard
  },
  data() {
    return {
      profileUser: {},
      gigs: [],
      portfolios: []
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('gigsByUsers', this.$route.params.id)
      .then(
        (response) => {
          this.gigs = response.data.data
        }
      )
    this.$store.dispatch('getPortfolioByUser', this.$route.params.id)
      .then(
        (response) => {
          this.portfolios = response.data.data
        }
      )
  },
  mounted() {
    this.$store.dispatch('getUser', this.$route.params.id)
      .then(
        (response) => {
          this.profileUser = response.data.data
          console.log(response.data.data)
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
  border-radius: 50%;
  margin-top: -120px;
}
.hr-span {
  background-color: silver; 
  height: 1px;
  margin-top: 50px;
  box-shadow: 0px 2px 20px 0px;
}
.portfolio-container {
  display: flex;
  max-width: 100%;
  overflow-x: scroll;
}
@media screen and (max-width: 768px) {
    .profile-card {
      margin-top: 130px
    }
}
@media not screen and (max-width: 768px) {
    .profile-card {
      margin-top: 100px;
      margin-left: 40px;
    }
}
</style>

<style lang="scss">
    ::-webkit-scrollbar {
        width: 2px !important;
        height: 2px;
    }

        /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        width: 2px !important;
    }
        
        /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }

        /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
</style>