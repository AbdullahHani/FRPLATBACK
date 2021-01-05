<template>
    <div>
        <div class="row">
            <div
                class="col-lg-4 col-md-6 col-sm-12"
                v-for="media in medias"
                :key="media._id"
                @click="viewMedia(media)"
            >
                <div style="width: 200; height: 200;">
                    <img v-if="media.extension !== 'mp4'" :src="media.url" alt="" style="max-height: 200px;">
                    <img v-else src="@/assets/images/play.png" alt="" style="max-height: 200px;">
                </div>
            </div>
        </div>
        <div
            v-if="showMedia"
            class="show-media card-background"
        >   
            <div style="height: 90vh;">
                <button
                    class="mt-2 mr-2 float-right"
                    style="background: none; outline: none; border: none; font-weight: 800; color: #fff;"
                    @click="closeMedia"
                >
                    X
                </button>
                <div style="height: 94%;">
                    <img
                        v-if="selectedMedia.extension !== 'mp4'"
                        :src="selectedMedia.url"
                        style="max-width: 100%; max-height: 100%; margin-top: 50px;"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    props: {
        medias: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            showMedia: false,
            selectedMedia: {}
        }
    },
    methods: {
        viewMedia(media) {
            this.selectedMedia = media
            this.showMedia = true
        },
        closeMedia() {
            this.showMedia = false
        }
    }
}
</script>

<style scoped>
.show-media {
    background-color: #000;
    padding: 10px 20px;
    z-index: 999;
    position: fixed;
    top: 10px;
    left: 10px;
    height: 95vh;
    width: 98%;
}
</style>