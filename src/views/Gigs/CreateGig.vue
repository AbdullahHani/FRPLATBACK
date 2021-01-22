<template>
  <div>
    <div class="container-fluid" align="left">
      <div class="container mb-5">
        <div class="row card-background" style="padding: 10px 20px;">
          <div class="col-md-12 mt-5 mx-auto">
            <h1 class="display-4 head">Create Gig</h1>
            <b-tabs v-model="tabIndex" content-class="mt-3">
              <b-tab>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">1</span>
                    Overview
                  </p>
                </template>
                <form @submit="addGig">
                    <div class="card-background mb-4" style="display: block; text-align: center;">
                      <b-button
                        @click="uploadImage"
                        style="height: 200px; width: 200px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.25); background: none;">
                        <img v-if="gigForm.picture" :src="gigForm.picture" alt="" height="180">
                        <img v-else src="@/assets/images/others/add-file.png" alt="">
                      </b-button>
                      <p>Upload Image</p>
                    </div>
                  <div class="form-group">
                    <label class="label-large" for="gigTitle">Gig Title</label>
                    <input
                      name="gig"
                      class="form-control custom-light-bg py-0"
                      v-model="gigForm.title"
                      required
                    >
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6 px-0">
                      <label class="label-large" for="category">Category</label>
                      <select
                        class="form-control custom-light-bg"
                        id="category"
                        v-model="gigForm.category"
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
                    <div class="col-md-6 px-0">
                      <label class="label-large" for="subcategory">
                        Sub-Category
                      </label>
                      <select
                        class="form-control custom-light-bg"
                        id="subcategory"
                        v-model="gigForm.subCategory"
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
                    <label class="label-large" for="projectdescription">
                      Description
                    </label>
                    <textarea
                      name="project"
                      class="form-control custom-light-bg py-0"
                      id="projectdescription"
                      cols="30"
                      rows="5"
                      placeholder="Describe your Project..."
                      v-model="gigForm.description"
                      required
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label class="label-large" for="tags">Tags</label>
                    <b-form-tags
                      input-id="tags-separators"
                      v-model="gigForm.tags"
                      separator=" ,;"
                      placeholder="Enter new tags separated by space, comma or semicolon"
                      no-add-on-enter
                      required
                    ></b-form-tags>
                  </div>
                  <div class="form-group">
                    <label class="label-large" for="suggestions">
                      Suggestions
                    </label>
                    <div
                      v-for="(suggestion, index) in gigForm.suggestions"
                      :key="index"
                      style="display: flex;"
                      class="mt-2"
                    >
                      <input
                        v-model="gigForm.suggestions[index]"
                        placeholder="Suggestion..."
                        type="text"
                        class="form-control custom-light-bg py-0"
                        required
                      />
                      <button
                        v-if="index !== 0"
                        style="border: 1px solid rgba(0, 0, 0, 0.4); border-radius: 50%; padding: 0 15px; margin: 0 10px;"
                        @click="removeSuggestion(index)"
                      >
                        -
                      </button>
                    </div>
                    <div class="mt-2">
                      <b-button
                        class="btn btn-success"
                        @click="addSuggestion()"
                      >
                        Add Suggestion
                      </b-button>
                    </div>
                  </div>
                  <b-button type="submit" class="btn btn-success float-right">
                    Continue
                  </b-button>
                </form>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">2</span>
                    Pricing
                  </p>
                </template>
                <form @submit="addPrice">
                  <div class="row card-background">
                    <div
                      v-for="(pricing, index) in pricings"
                      :key="pricing.title"
                      class="col-md-4"
                    >
                      <div
                        class="card-background pb-2" style="padding: 0; margin: 5px; text-align: center;"
                      >
                        <div
                          style="width: 100%; height: 60px; background-image: linear-gradient(111deg, #9996ec 0%, #0616fb 84%); padding-top: 10px;"
                        >
                          <p style="font-size: 22px; color: #fff; text-align: center; font-weight: 800;">
                            {{pricing.title}}
                          </p>
                        </div>
                        <div class="form-group" align="center">
                          <label class="label-large" for="gigTitle">Price</label>
                          <input
                            name="price"
                            type="number"
                            class="form-control custom-light-bg py-0"
                            style="width: 90%"
                            v-model="pricings[index].price"
                            required
                          >
                        </div>
                        <div class="form-group">
                          <label class="label-large" for="suggestions">
                            Services
                          </label>
                          <div
                            v-for="(service, serviceIndex) in pricings[index].services"
                            :key="serviceIndex"
                            style="display: flex;"
                            class="row ml-1"
                          >
                            <input
                              v-model="pricings[index].services[serviceIndex]"
                              placeholder="Service..."
                              type="text"
                              class="form-control custom-light-bg mt-1 col-md-10 col-sm-9"
                              required
                            />
                            <b-button
                              v-if="serviceIndex !== 0"
                              style="border: 1px solid rgba(0, 0, 0, 0.4); border-radius: 50%; padding: 4px 15px;"
                              @click="removeService(index, serviceIndex)"
                            >
                              -
                            </b-button>
                          </div>
                          <div class="mt-2">
                            <b-button
                              class="btn btn-success"
                              @click="addService(index)"
                            >
                              Add Service
                            </b-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <b-button type="submit" class="btn btn-info float-right mt-2">Add Pricing & Continue</b-button>
                </form>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      user: '',
      gigId: '',
      tabIndex: 0,
      selectedCategory: {},
      gigForm: {
        title: '',
        category: '',
        subcategory: '',
        picture: '',
        description: '',
        tags: [],
        suggestions: []
      },
      categories: [],
      pricings: [
        {
          title: 'Silver',
          services: [''],
          price: 0
        },
        {
          title: 'Gold',
          services: [''],
          price: 0
        },
        {
          title: 'Premium',
          services: [''],
          price: 0
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
    this.$store.dispatch('getCategories')
      .then(
        (response) => {
          this.categories = response.data.data
        }
      )
  },
  methods: {
    selectCategory() {
      const categories = this.categories.filter(category => category.title === this.gigForm.category)
      this.selectedCategory = categories[0]
    },
    getSubCategory() {
      // return ['Hi', 'Hello', 'How']
      return this.selectedCategory ? this.selectedCategory.subCategories : []
    },
    removeSuggestion(key) {
      this.gigForm.suggestions = this.gigForm.suggestions.filter((suggestion, index) => index !== key)
    },
    addSuggestion() {
      this.gigForm.suggestions.push('')
    },
    removeService(index, serviceIndex) {
      this.pricings[index].services = this.pricings[index].services.filter((service, key) => serviceIndex !== key)
    },
    addService(index) {
      this.pricings[index].services.push('')
    },
    addGig(e) {
      e.preventDefault()
      this.gigForm.user = this.user._id
      this.$store.dispatch('createGig', this.gigForm)
        .then(
          (response) => {
            this.gigId = response.data.data._id
            this.tabIndex = 1
          }
        )
    },
    addPrice(e) {
      e.preventDefault()
      if (!this.gigId) {
        this.tabIndex = 0
        return
      }
      const data = {
        id: this.gigId,
        payload: {
          pricings: this.pricings
        }
      }
      this.$store.dispatch('addPricingToGig', data)
        .then(
          (response) => {
            if (response) {
              this.$router.push('/gigs')
            }
          }
        )
    },
    createCloudinaryWidget () {
      const newWidget = window.cloudinary.createUploadWidget({
        cloudName: 'storage96',
        uploadPreset: 'texxengigspicture',
        multiple: false,
        maxFiles: 1,
        cropping: true,
        clientAllowedFormats: ['png', 'jpg', 'jpeg']
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          this.gigForm.picture = result.info.secure_url
        }
      }
      )
      return newWidget
    },
    uploadImage () {
      const cloudinaryWidget = this.createCloudinaryWidget()
      cloudinaryWidget.open()
    }
  }
}
</script>

<style scoped></style>
