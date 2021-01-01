<template>
<div>
  <div class="gig-card card-background" style="padding: 0;">
    <div style="width: 100%; height: 200px; overflow: hidden;">
      <img
        v-if="gig.img"
        class="avatar"
        :src="gig.img"
        alt=""
        style="height: 100%;"
      >
      <img
        v-else
        class="avatar"
        src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
        alt=""
        style="height: 100%;"
      >
    </div>
    <div style="display: flex; margin: 10px;">
      <div style="width: 40px; height: 40px; overflow: hidden; border-radius: 50%;">
        <img
          v-if="gig.seller.avatar"
          :src="gig.seller.avatar"
          alt=""
          style="height: 100%;"
        >
        <img
          v-else
          src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg"
          alt=""
          style="height: 100%;"
        >
      </div>
      <div style="padding-left: 10px;">
        <p class="seller-name">
          {{ gig.seller.name }}
        </p>
        <p class="seller-rating">
          {{ gig.seller.ratings.value }} ({{ gig.seller.ratings.raters.length }})
        </p>
        <p class="seller-choice">
          Expert's Choice
        </p>
      </div>
    </div>
    <div style="display: flex; margin: 10px;">
      <button
        class="gig-button"
        @click="goToGig">
        <img src="@/assets/images/others/buttonBars.png" height="15" alt="">
      </button>
      <p class="seller-starting-price">Starting from ${{gig.seller.startingPrice}}</p>
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
    width: 200px;
    // border: 1px solid #3a3b3b;
    margin: 10px;
    border-radius: 10px;
    background-color: #ffffff;
  }
  .seller-name {
    color: #575656;
    font-size: 14px;
    margin: 0;
  }
  .seller-rating {
    color: #30308b;
    font-size: 10px;
    margin: 0;
    text-align: left;
  }
  .seller-choice {
    color: #747373;
    font-size: 14px;
    margin: 0;
  }
  .seller-starting-price {
    padding-left: 20px;
    color: #747373;
    font-size: 16px;
    margin: 0;
  }
  .gig-button {
    background: none;
    border: none;
  }
</style>