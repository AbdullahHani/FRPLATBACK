<template>
  <div>
    <h3 class="text-blue text-left font-weight-bold ml-3">PORTFOLIO</h3>
    <div class="container-fluid">
      <div class="row" style="justify-content: center">
        <div class="col-md-10 card-background">
          <form style="text-align: left;" @submit="onSubmit">
            <div class="form-group">
              <label for="projectName">Project Name</label>
              <input type="text" class="form-control" id="projectName" v-model="form.projectName" />
            </div>
            <div class="form-group row">
              <div class="col-md-6">
                <label class="label-large" for="category">Category</label>
                <select
                  class="form-control custom-light-bg"
                  id="category"
                  v-model="form.category"
                  @change="selectCategory"
                  @select="selectCategory"
                  required
                >
                  <option
                    v-for="category in categories"
                    :key="category.title"
                    :value="category.title"
                  >
                    {{ category.title }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="label-large" for="subcategory">
                  Sub-Category
                </label>
                <select
                  class="form-control custom-light-bg"
                  id="subcategory"
                  v-model="form.subCategory"
                  required
                >
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
            <div class="form-group">
              <label for="caption">Description:</label>
              <textarea class="form-control" id="caption" rows="3x" v-model="form.description"></textarea>
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
            <div class="form-group">
              <label for="url">Budget</label>
              <input type="number" class="form-control" id="url" v-model="form.budget"/>
            </div>
            <div class="form-group">
              <label for="url">Delivery Date</label>
              <datetime
                v-model="form.deliveryDate"
                type="datetime"
                input-class="form-control"
              ></datetime>
            </div>

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
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
export default {
  name: "Portfolio",
  components: {
    Datetime
  },
  data() {
    return {
      categories: [],
      selectedCategory: {},
      form: {
        user: '',
        deliveryDate: '',
        category: '',
        subCategory: '',
        projectName: '',
        description: '',
        files: [],
        budget: null
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
      this.$store.dispatch('createProject', this.form)
        .then(
          (response) => {
            if (response) {
              this.$router.push('/projects')
            }
          }
        )
        .catch(
          (error) => {
            console.log(error.response.data)
          }
        )
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
    uploadFile () {
      const cloudinaryWidget = this.createCloudinaryWidgetForFiles()
      cloudinaryWidget.open()
    }
  }
};
</script>