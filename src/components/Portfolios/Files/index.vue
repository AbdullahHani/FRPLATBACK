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
                    <img v-if="media.extension === 'pdf'" src="@/assets/images/pdf.png" alt="" style="max-height: 200px;">
                    <img v-else-if="media.extension === 'doc' || media.extension === 'docx'" src="@/assets/images/microsoft-word.png" alt="" style="max-height: 200px;">
                    <img v-else-if="media.extension === 'xls' || media.extension === 'xlsx'" src="@/assets/images/excel.png" alt="" style="max-height: 200px;">
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
                <div style="height: 94%; padding-top: 40px;">
                    <div v-if="selectedMedia.extension === 'pdf'" style="height: 100%; overflow-y: scroll;">
                        <pdf :src="selectedMedia.url"></pdf>
                    </div>
                    <VueDocPreview v-else :value="selectedMedia.url" type="office" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueDocPreview from 'vue-doc-preview'
import pdf from 'vue-pdf'

export default {
    name: 'Files',
    props: {
        medias: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    components: {
        VueDocPreview,
        pdf
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