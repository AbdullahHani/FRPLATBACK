<template>
    <div
        class="portfolio-card"
        @click="() => {
            $router.push(`/portfolio/${portfolio._id}`)
        }"
    >
        <div class="card-background" style="padding: 0;">
            <div style="min-height: 250px; background-color: white;">
                <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000;"
                    fade
                    indicators
                    img-width="100%"
                >
                    <div v-if="portfolio.imagesForCover">
                        <b-carousel-slide
                            v-for="(image, index) in portfolio.imagesForCover"
                            :key="index"
                            :img-src="image"
                        ></b-carousel-slide>    
                    </div>
                    <div v-else>
                        <b-carousel-slide
                            img-src="https://picsum.photos/1024/480/?image=10"
                        ></b-carousel-slide>
                        <b-carousel-slide
                            img-src="https://picsum.photos/1024/480/?image=12"
                        ></b-carousel-slide>
                        <b-carousel-slide
                            img-src="https://picsum.photos/1024/480/?image=22"
                        ></b-carousel-slide>
                    </div>
                </b-carousel>
            </div>
            <div align="left" style="padding: 10px 10px 0px 10px; height: 175px;">
                <p style="font-weight: 700;">{{ portfolio.projectName }}</p>
                <p align="justify" style="font-size: 14px;">{{ portfolio.caption }}</p>
            </div>
            <hr style="margin-bottom: 5px;"/>
            <div align="left" style="padding: 10px;">
                <p
                    style="font-size: 12px; color: #707070; margin: 5px 0;"
                >
                    Category: <span style="font-size: 14px; color: #000; font-weight: 700;">{{ portfolio.category }}</span>
                </p>
                <p
                    style="font-size: 12px; color: #707070; margin: 5px 0;"
                >
                    Sub Category: <span style="font-size: 14px; color: #000; font-weight: 700;">{{ portfolio.subCategory }}</span>
                </p>

                <hr style="margin-bottom: 5px;"/>
            </div>
            <div class="row" style="margin: 0;">
                <div class="col-6" align="left" style="color: #707070; margin: 0;">
                    {{ portfolio.period.time }} {{ portfolio.period.type }}
                </div>
                <div class="col-6" align="right" style="color: #707070;">
                    {{ portfolio.clientType }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'PortfolioCard',
    props: {
        portfolio: {
            type: Object,
            default: () => {
                return {}
            }
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
.profile-avatar-container {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  position: absolute;
  top: -33px;
  left: -34px;
  border: 10px solid #0616fb;
}
.profile-avatar {
    max-height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -19px;
    left: -20px;
    z-index: 999;
}
.portfolio-card {
    position: relative;
    background-color: #fff;
}
@media screen and (max-width: 768px) {
    .portfolio-card {
      margin-top: 50px;
      margin-left: 10px;
    }
}
@media not screen and (max-width: 768px) {
    .portfolio-card {
      margin-top: 50px;
      margin-left: 10px;
    }
}
</style>