<template>
  <div style="padding: 10px;">
    <div class="card-background">
      <div
        v-for="categorizedGig in categorizedGigs"
        :key="categorizedGig.category"
      >
        <p class="category-heading">{{ categorizedGig.category }}</p>
        <div style="row">
          <gig-card
            class="col-lg-3 col-md-6 col-sm-12"
            v-for="(gig, index) in categorizedGig.gigs"
            :key="index"
            :gig="gig"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GigCard from '@/components/Dashboard/GigCard'

export default {
  name: 'Dashboard',
  components: {
    GigCard
  },
  data() {
    return {
      categorizedGigs: [],
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
        }
      ]
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('gigsByCategories')
      .then(
        (response) => {
          this.categorizedGigs = response.data.data
        }
      )
  }
}
</script>

<style scoped>
  .category-heading {
    font-size: 16px;
    color: #747373;
    font-weight: 700;
    text-align: left;
  }
</style>