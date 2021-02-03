<template>
<div>
  <div class="gig-card card-background" style="padding: 0;">
    <div style="width: 100%; overflow: hidden;">
      <img
        v-if="gig.picture"
        class="avatar"
        :src="gig.picture"
        alt=""
        style="height: 100%; width: 100%"
      >
      <img
        v-else
        class="avatar"
        src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
        alt=""
        style="height: 100%;"
      >
    </div>
    <div style="display: flex;">
      <div style="padding-left: 10px; text-align: left; margin-top: 10px;">
        <p class="seller-rating">
          {{ gig.user.ratings.value }} ({{ gig.user.ratings.raters.length }}) <span class="seller-choice">Expert's Choice</span>
        </p>
        <div style="display: flex; margin: 5px -8px;">
          <button
            class="gig-button"
            @click="goToGig">
            <img src="@/assets/images/others/buttonBars.png" height="20" alt="">
          </button>
          <p class="seller-starting-price">Starting from ${{ gig.pricings[0].price  }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'GigCard',
  props: {
    gig: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    goToGig() {
      this.$router.push(`/gigs/${this.$props.gig._id}`)
    }
  }
}
</script>

<style lang="scss">
  .gig-card {
    width: 280px;
    // border: 1px solid #3a3b3b;
    margin: 10px;
    border-radius: 20px;
    background-color: #ffffff;
  }
  .seller-name {
    color: #575656;
    font-size: 16px;
    margin: 0;
    font-weight: 700;
  }
  .seller-rating {
    color: #30308b;
    font-size: 12px;
    margin: 0;
    text-align: left;
    font-weight: 700;
  }
  .seller-choice {
    color: #747373;
    font-size: 14px;
    // margin: 0;
  }
  .seller-starting-price {
    // padding-left: 20px;
    color: #747373;
    font-size: 16px;
    margin: 0;
    font-weight: 600;
  }
  .gig-button {
    background: none;
    border: none;
    outline: none;
    margin: 0;
  }
</style>