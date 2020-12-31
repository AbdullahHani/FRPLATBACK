<template>
  <div style="padding: 10px;">
    <p class="category-heading">Graphic Design and Illustration</p>
    <div style="display: flex; justify-content: flex-start; flex-wrap: wrap;">
      <gig-card v-for="(gig, index) in gigs" :key="index" :gig="gig" />
    </div>
    <p class="category-heading">Social Media Marketing Services</p>
    <div style="display: flex; justify-content: flex-start; flex-wrap: wrap;">
      <gig-card v-for="(gig, index) in gigs" :key="index" :gig="gig" />
    </div>
    <p class="category-heading">Graphic Design and Illustration Services</p>
    <div style="display: flex; justify-content: flex-start; flex-wrap: wrap;">
      <gig-card v-for="(gig, index) in gigs" :key="index" :gig="gig" />
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