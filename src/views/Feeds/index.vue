<template>
  <div style="padding: 10px;">
    <div class="card-background" style="min-height: 70vh;">
      <div align="right">
        <button
            class="add-portfolio"
            @click="() => {
                $router.push('/portfolio/create')
            }"
        >+</button>
      </div>
      <div v-if="portfolios.length > 0" class="row">
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
      <div v-else-if="portfolios.length === 0">
        <p v-if="showEmptyMessage" style="font-size: 22px; text-align: center;" class="pt-5">Be the one to add first portfolio.</p>
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
      showEmptyMessage: false
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
          if (this.portfolios.length === 0) {
            this.showEmptyMessage = true
          }
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