<template>
  <div style="background-color: white;">
    <div class="header">
      <!-- <div class="bottom-nav">    
        <router-link to="/Home-2" href="Home-2">Graphics & Design</router-link>
        <router-link to="/home" href="#about">Digital Marketing</router-link>
        <router-link to="/home" href="#contact">Writing & Editing</router-link>
        <router-link to="/home" href="#contact">Music & Audio</router-link>
        <router-link to="/home" href="#contact">Business</router-link>
        <router-link to="/home" href="#contact">Programming</router-link>
      </div> -->
    </div>
    <div class="row ml-4" style="margin: 0; padding: 0;">
      <div class="col-lg-6 card-background" style="padding: 73px 0px">
        <img class="profile-avatar" src="@/assets/images/others/avatar.png">
        <h1>James Gorden</h1>
        <p>Journalist, writer and content marketing specialist</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
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
      </div>
    </div>
  </div>
</template>

<script>
import GigCard from '@/components/Dashboard/GigCard'
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
      ]
    }
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