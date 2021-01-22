<template>
  <div>
    <h3 class="text-blue text-left font-weight-bold ml-3">PORTFOLIO</h3>
    <div class="container-fluid">
      <div class="row" style="justify-content: center">
        <div class="col-md-10 card-background">
          <form style="text-align: left;" @submit="onSubmit">
            <div class="form-group card-background p-0" style="display: flex;">
              <b-icon icon="building" class="field-icon"></b-icon>
              <input
                type="text"
                class="form-control"
                id="projectName"
                v-model="form.projectName"
                placeholder="Project Name"
              />
            </div>
            <div class="form-group row">
              <div class="col-md-6 card-background p-0" style="display: flex;">
                <b-icon icon="building" class="field-icon"></b-icon>
                <select
                  class="form-control custom-light-bg"
                  id="category"
                  v-model="form.category"
                  @change="selectCategory"
                  @select="selectCategory"
                  required
                >
                  <option value="" disabled selected>Select your category</option>
                  <option
                    v-for="category in categories"
                    :key="category.title"
                    :value="category.title"
                  >
                    {{ category.title }}
                  </option>
                </select>
              </div>
              <div class="col-md-6 card-background p-0" style="display: flex;">
                <b-icon icon="building" class="field-icon"></b-icon>
                <select
                  class="form-control custom-light-bg"
                  id="subcategory"
                  v-model="form.subCategory"
                  required
                >
                  <option v-if="!form.category" value="" disabled selected>
                    Select category first
                  </option>
                  <option v-else value="" disabled selected>Select your subcategory</option>
                  <option
                    v-for="subCategory in getSubCategory()"
                    :key="subCategory"
                    :value="subCategory"
                  >
                    {{ subCategory }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row mt-2">
              <div class="form-group col-lg-3 col-md-6 col-sm-6 card-background p-0" style="display: flex">
                <b-icon icon="building" class="field-icon"></b-icon>
                <input
                  type="number"
                  class="form-control"
                  id="projectName"
                  v-model="form.period.time"
                  placeholder="Project Name"
                />
              </div>
              <div class="form-group col-lg-3 col-md-6 col-sm-6 card-background p-0" style="display: flex;">
                <b-icon icon="building" class="field-icon"></b-icon>
                <select
                  class="form-control custom-light-bg"
                  id="subcategory"
                  v-model="form.period.type"
                  required
                >
                  <option value="" disabled selected>Select period type</option>
                  <option value="Hours">Hours</option>
                  <option value="Days">Days</option>
                  <option value="Weeks">Weeks</option>
                  <option value="Months">Months</option>
                  <option value="Years">Years</option>
                </select>
              </div>
              <div class="form-group col-lg-6 col-md-12 col-sm-12 card-background p-0" style="display: flex;">
                <b-icon icon="building" class="field-icon"></b-icon>
                <select
                  class="form-control custom-light-bg"
                  id="subcategory"
                  v-model="form.clientType"
                  required
                >
                  <option value="" disabled selected>Select client type</option>
                  <option value="Texenn">Texenn</option>
                  <option value="Personal">Personal</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <div class="card-background mb-4" style="display: block; text-align: center;">
                <div v-if="form.imageVideos.length > 0" class="row">
                  <div v-for="image in form.imageVideos" :key="image.url" class="col-md-3">
                    <div v-if="image.extension === 'mp4'" style="height: 100px;">
                      <video poster="data:image/gif,AAAA" preload="auto" controls autoplay height="80">
                        <source type="video/mp4" :src="image.url"/>
                      </video>
                    </div>
                    <div v-else style="height: 100px;">
                      <img :src="image.url" alt="" height="80">
                    </div>
                  </div>
                </div>
                <b-button
                  @click="uploadImage"
                  style="height: 80px; width: 80px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.25); background: none;">
                  <img src="@/assets/images/others/add-file.png" alt="">
                </b-button>
                <p>Upload Images/Videos</p>
              </div>
            </div>
            <div class="form-group card-background p-0" style="display: flex;">
              <b-icon icon="building" class="field-icon"></b-icon>
              <textarea
                class="form-control"
                id="caption"
                rows="3x"
                maxlength="300"
                placeholder="Describe your project (max 300 words)"
                style="border: none; padding: 15px 10px;"
                v-model="form.caption"
              ></textarea>
            </div>
            <div class="form-group">
              <div class="card-background mb-4" style="display: block; text-align: center;">
                <div v-if="form.files.length > 0" class="row">
                  <div v-for="file in form.files" :key="file.url" class="col-md-3">
                    <div v-if="file.extension === 'pdf'" style="height: 100px;">
                      <img src="@/assets/images/pdf.png" alt="" height="80">
                    </div>
                    <div v-if="file.extension === 'doc' || file.extension === 'docx'" style="height: 100px;">
                      <img src="@/assets/images/microsoft-word.png" alt="" height="80">
                    </div>
                    <div v-if="file.extension === 'xls' || file.extension === 'xlsx'" style="height: 100px;">
                      <img src="@/assets/images/excel.png" alt="" height="80">
                    </div>
                  </div>
                </div>
                <b-button
                  @click="uploadFile"
                  style="height: 80px; width: 80px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.25); background: none;">
                  <img src="@/assets/images/others/add-file.png" alt="">
                </b-button>
                <p>Upload Files</p>
              </div>
            </div>
            <div class="form-group card-background p-0" style="display: flex;">
              <b-icon icon="building" class="field-icon"></b-icon>
              <input type="text" class="form-control" id="url" placeholder="URL" v-model="form.url"/>
            </div>
            <div class="form-group card-background p-0" style="display: flex;">
              <b-icon icon="building" class="field-icon"></b-icon>
              <b-form-tags
                input-id="tags-separators"
                v-model="form.technologies"
                separator=" ,;"
                placeholder="Enter new technology separated by space, comma or semicolon"
                no-add-on-enter
                input-class="inp"
                required
                style="border: none;"
              ></b-form-tags>
            </div>
            <div class="form-group">
              <div class="card-background mb-4" style="display: block; text-align: center;">
                <div v-if="form.imagesForCover.length > 0" class="row">
                  <div v-for="image in form.imageVideos" :key="image.url" class="col-md-3">
                    <img :src="image.url" alt="" height="80">
                  </div>
                </div>
                <b-button
                  @click="uploadCoverPhotos"
                  style="height: 80px; width: 80px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.25); background: none;">
                  <img src="@/assets/images/others/add-file.png" alt="">
                </b-button>
                <p>Images for Portfolio Cover</p>
              </div>
            </div>
            <br /><br />

            <div class="col-md-10 mt-5 pl-5 ml-5">
              <button
                @click="onSubmit"
                type="submit"
                class="btn btn-primary bg-darkblue"
                style="width: 120px; margin-left: -60px"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Portfolio",
  components: {
  },
  data() {
    return {
      categories: [],
      selectedCategory: {},
      form: {
        user: '',
        category: '',
        subCategory: '',
        imageVideos: [],
        projectName: '',
        caption: '',
        files: [],
        url: '',
        imagesForCover: [],
        technologies: [],
        clientType: '',
        period: {
          time: 0,
          type: ''
        }
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('getCategories')
      .then(
        (response) => {
          this.categories = response.data.data
        }
      )
  },
  methods: {
    selectCategory() {
      const categories = this.categories.filter(category => category.title === this.form.category)
      this.selectedCategory = categories[0]
    },
    getSubCategory() {
      // return ['Hi', 'Hello', 'How']
      return this.selectedCategory ? this.selectedCategory.subCategories : []
    },
    onSubmit(e) {
      e.preventDefault()
      this.form.user = this.user._id
      this.$store.dispatch('createPortfolio', this.form)
        .then(
          (response) => {
            if (response) {
              this.$router.push('/portfolio')
            }
          }
        )
        .catch(
          (error) => {
            console.log(error.response.data)
          }
        )
    },
    createCloudinaryWidget () {
      const newWidget = window.cloudinary.createUploadWidget({
        cloudName: 'storage96',
        uploadPreset: 'texxen_portfolio_images_videos',
        multiple: true,
        clientAllowedFormats: ['png', 'jpg', 'jpeg', 'mp4']
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          this.form.imageVideos.push({
            url: result.info.url,
            extension: result.info.format
          })
        }
      }
      )
      return newWidget
    },
    createCloudinaryWidgetForFiles () {
      const newWidget = window.cloudinary.createUploadWidget({
        cloudName: 'storage96',
        uploadPreset: 'texxen_portfolio_files',
        multiple: true,
        clientAllowedFormats: ['pdf', 'xlsx', 'xls', 'doc', 'docx']
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          this.form.files.push({
            url: result.info.url,
            extension: result.info.format
          })
        }
      }
      )
      return newWidget
    },
    createCloudinaryWidgetForCover () {
      const newWidget = window.cloudinary.createUploadWidget({
        cloudName: 'storage96',
        uploadPreset: 'texxen-portfolio-cover',
        multiple: true,
        clientAllowedFormats: ['png', 'jpeg', 'jpg']
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          this.form.imagesForCover.push(result.info.url)
        }
      }
      )
      return newWidget
    },
    uploadCoverPhotos () {
      const cloudinaryWidget = this.createCloudinaryWidgetForCover()
      cloudinaryWidget.open()
    },
    uploadImage () {
      const cloudinaryWidget = this.createCloudinaryWidget()
      cloudinaryWidget.open()
    },
    uploadFile () {
      const cloudinaryWidget = this.createCloudinaryWidgetForFiles()
      cloudinaryWidget.open()
    }
  }
};
</script>

<style scoped>
input, select {
  height: 50px;
  border: none;
  outline: none;
}
input:focus, select:focus {
  outline: none;
}
.field-icon {
  font-size: 22px;
  margin: 15px 10px;
}
.inp {
  border: none;
  height: 50px;
}
</style>