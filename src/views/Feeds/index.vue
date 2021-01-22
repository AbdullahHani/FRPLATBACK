<template>
  <div style="padding: 10px;">
    <div class="card-background">
      <div align="right">
        <button
            class="add-portfolio"
            @click="() => {
                $router.push('/portfolio/create')
            }"
        >+</button>
      </div>
      <div class="row">
        <div
            class="col-lg-4 col-md-12 col-sm-12"
            v-for="(portfolio, index) in portfolios"
            :key="index"
        >
            <portfolio-card
                :portfolio="portfolio"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PortfolioCard from '@/components/Portfolios/Cards/index'

export default {
  name: 'Dashboard',
  components: {
    PortfolioCard
  },
  data() {
    return {
      categorizedGigs: [],
      portfolios: [],
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
    this.$store.dispatch('getPortfolios')
      .then(
        (response) => {
          this.portfolios = response.data.data
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
  .add-portfolio {
    height: 70px;
    width: 70px;
    font-weight: 900;
    font-size: 48px;
    color: #fff;
    padding: 0;
    border-radius: 50%;
    border: 5px solid #fff;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);
    background-image: url('../../assets/others/add-button.png');
    background-size: cover;
    outline: none;
  }
</style>