<template>
  <div>
    <div class="container-fluid">
      <div class="container mb-5 card-background">
        <div class="row">
          <div class="col-md-12 mt-0 mx-auto">
            <b-tabs v-model="tabIndex" content-class="mt-3" class="custom-bullet">
              <b-progress :value="user.profileCompleted" :max="max" show-progress animated></b-progress>
              <b-tab>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">1</span>
                    Personal Info
                  </p>
                </template>
                <form @submit="updatePersonalInfo">
                  <div class="form-group"  style="text-align: left;">
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control custom-light-bg py-0"
                      v-model="personalInfo.name"
                      required
                    />
                    <br />
                    <div class="card-background" style="display: block; text-align: center;">
                      <b-button
                        @click="uploadImage"
                        style="height: 150px; width: 150px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.25); background: none;">
                        <img v-if="personalInfo.avatar" :src="personalInfo.avatar" alt="" height="120">
                        <img v-else src="@/assets/images/others/add-file.png" alt="">
                      </b-button>
                      <p>Upload Image</p>
                    </div>
                    
                    <div>
                      <label
                        class="label-large"
                        for="name"
                        style="font-size: 20px;"
                      >
                        Biography
                      </label>
                      <textarea
                        name="project"
                        class="form-control custom-light-bg py-0"
                        cols="30"
                        rows="5"
                        v-model="personalInfo.description"
                        required
                      ></textarea>
                    </div>
                    <br />
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Languages
                    </label>
                    <div
                      v-for="(language, index) in personalInfo.languages"
                      :key="index"
                      style="display: flex;"
                      class="mt-2"
                    >
                      <input
                        v-model="personalInfo.languages[index]"
                        placeholder="Language..."
                        type="text"
                        class="form-control custom-light-bg py-0"
                        required
                      />
                      <button
                        v-if="index !== 0"
                        style="border: 1px solid rgba(0, 0, 0, 0.4); border-radius: 50%; padding: 0 15px; margin: 0 10px;"
                        @click="removeLanguage(index)"
                      >
                        -
                      </button>
                    </div>
                    <div class="mt-2">
                      <b-button
                        class="btn btn-success"
                        @click="addLanguage()"
                      >
                        Add Language
                      </b-button>
                    </div>

                    <div class="col-md-11 ml-2 mt-2 mx-auto">
                      <b-button
                        type="submit"
                        class="btn btn-success bg-darkblue float-right"
                        style="width: 120px;"
                      >
                        Continue
                      </b-button>
                      <b-button
                        @click="tabIndex--"
                        class="btn btn- float-right"
                        style="width: 120px;"
                      >
                        Back
                      </b-button>
                    </div>
                  </div>
                </form>
              </b-tab>
              <!-- Professional Info -->
              <b-tab>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">2</span>
                    Professional Info
                  </p>
                </template>
                <form @submit="updateProfessionalInfo">
                  <div class="form-group" style="text-align: left;">
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Your Occupation
                    </label>
                    <div
                      v-for="(occupation, index) in professionalInfo.occupations"
                      :key="index"
                      class="row ml-1"
                    >
                      <input
                        v-model="professionalInfo.occupations[index]"
                        placeholder="Occupation..."
                        type="text"
                        class="form-control custom-light-bg mt-1 col-md-11"
                        required
                      />
                      <div class="mt-1">
                        <b-button
                          v-if="index !== 0"
                          style="border: 1px solid rgba(0, 0, 0, 0.4); border-radius: 50%; padding: 4px 12px; margin: 0 10px;"
                          @click="removeOccupation(index)"
                        >
                          -
                        </b-button>
                      </div>
                    </div>
                    <div class="mt-2">
                      <b-button
                        class="btn btn-success"
                        @click="addOccupation()"
                      >
                        Add Occupation
                      </b-button>
                    </div>
                    <br />
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Skills
                    </label>
                    <div
                      v-for="(skill, index) in professionalInfo.skills"
                      :key="index"
                      class="row ml-1">
                      <input
                        type="text"
                        class="form-control custom-light-bg mt-1 col-md-6"
                        placeholder="Skill"
                        v-model="professionalInfo.skills[index].skill"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Experience Level"
                        class="form-control custom-light-bg mt-1 col-md-5"
                        v-model="professionalInfo.skills[index].experience"
                        required
                      />
                      <div class="mt-1">
                        <b-button
                          v-if="index !== 0"
                          style="border: 1px solid rgba(0, 0, 0, 0.4); border-radius: 50%; padding: 4px 12px; margin: 0 10px;"
                          @click="removeSkill(index)"
                        >-</b-button>
                      </div>
                    </div>
                    <div class="mt-2">
                      <b-button
                        class="btn btn-success"
                        @click="addSkill()"
                      >
                        Add Skill
                      </b-button>
                    </div>
                    <!-- Education -->
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Education
                    </label>
                    <div
                      v-for="(education, index) in professionalInfo.educations"
                      :key="index"
                      class="row ml-1">
                      <input
                        type="text"
                        placeholder="Degree"
                        class="form-control custom-light-bg mt-1 col-md-4"
                        v-model="professionalInfo.educations[index].degree"
                        required
                      />
                      <input
                        type="text"
                        placeholder="College"
                        class="form-control custom-light-bg mt-1 col-md-4"
                        v-model="professionalInfo.educations[index].college"
                        required
                      />
                      <input
                        type="text"
                        class="form-control custom-light-bg mt-1 col-md-3"
                        placeholder="Country"
                        v-model="professionalInfo.educations[index].country"
                        required
                      />
                      <div class="mt-1">
                        <b-button
                          v-if="index !== 0"
                          style="border: 1px solid rgba(0, 0, 0, 0.4); border-radius: 50%; padding: 4px 12px; margin: 0 10px;"
                          @click="removeEducation(index)"
                        >-</b-button>
                      </div>
                    </div>
                    <div class="mt-2">
                      <b-button
                        class="btn btn-success"
                        @click="addEducation()"
                      >
                        Add Education
                      </b-button>
                    </div>
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Certification
                    </label>
                    <div
                      v-for="(certification, index) in professionalInfo.certifications"
                      :key="index"
                      class="row ml-1">
                      <input
                        type="text"
                        placeholder="Certified In..."
                        class="form-control custom-light-bg mt-1 col-md-4"
                        v-model="professionalInfo.certifications[index].certifiedIn"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Certified From..."
                        class="form-control custom-light-bg mt-1 col-md-5"
                        v-model="professionalInfo.certifications[index].certifiedFrom"
                        required
                      />
                      <input
                        type="text"
                        class="form-control custom-light-bg mt-1 col-md-2"
                        placeholder="Year..."
                        v-model="professionalInfo.certifications[index].year"
                        required
                      />
                      <div class="mt-1">
                        <b-button
                          v-if="index !== 0"
                          style="border: 1px solid rgba(0, 0, 0, 0.4); border-radius: 50%; padding: 4px 12px; margin: 0 10px;"
                          @click="removeCertification(index)"
                        >-</b-button>
                      </div>
                    </div>
                    <div class="mt-2">
                      <b-button
                        class="btn btn-success"
                        @click="addCertification()"
                      >
                        Add Certification
                      </b-button>
                    </div>
                    <div class="col-md-11 ml-2 mt-2 mx-auto">
                      <b-button
                        type="submit"
                        class="btn btn-primary bg-darkblue"
                        style="width: 120px; margin-left: -60px;"
                      >
                        Continue
                      </b-button>
                      <b-button @click="tabIndex--" class="ml-3" style="color: darkblue;">
                        <strong>Back</strong>
                      </b-button>
                    </div>
                  </div>
                </form>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">3</span>
                    Linked Accounts
                  </p>
                </template>
                <div class="container mb-5">
                  <div class="row">
                    <div class="col-md-10 mt-4 mx-auto">
                      <h3 class="display-7 head">
                        <strong>Linked Account</strong>
                      </h3>
                      <h4 class="display-7 head">
                        Our first impression matters ! Create a new Profile and
                        Start earning now from the crowd here.
                      </h4>
                      <hr class="border-blue m-0 mt-3" />
                      <h4 class="display-7 head mt-3">
                        <strong>Your Social Media Account</strong>
                      </h4>
                    </div>
                  </div>

                  <ul class="col-md-10 mt-2 mx-auto" style="list-style: none;">
                    <li>
                      <i class="fab fa-google-plus-g"></i>
                      Google
                    </li>
                    <li>
                      <i class="fab fa-facebook"></i>
                      Facebook
                    </li>
                    <li>
                      <i class="fab fa-linkedin"></i>
                      Linked In
                    </li>
                  </ul>

                  <div class="col-md-10 mt-5 pl-5 ml-5">
                    <b-button
                      @click="tabIndex++"
                      class="btn btn-primary bg-darkblue"
                      style="width: 120px; margin-left: -60px;"
                    >
                      Continue
                    </b-button>
                    <b-button @click="tabIndex--" class="ml-3" style="color: darkblue;">
                      <strong>Back</strong>
                    </b-button>
                  </div>
                </div>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">4</span>
                    Account Security
                  </p>
                </template>
                <div
                  class="container card-background mt-4"
                >
                  <h4 class="display-7 head mt-5">
                    Our first impression matters ! Create a new Profile and
                    Start earning now from the crowd here.
                  </h4>

                  <label
                    class="label-large mt-2"
                    style="font-size: 20px; font-weight: bolder;"
                  >
                    Please complete the following steps
                  </label>

                  <ul style="list-style: none;">
                    <li>Please complete the following</li>
                    <li>Please complete the following</li>
                    <li>Please complete the following</li>
                  </ul>

                  <div class="col-md-10 mt-5 pl-5 ml-5">
                    <button
                      type="submit"
                      class="btn btn-primary bg-darkblue"
                      style="
                        width: 120px;
                        justify-content: space-around;
                        margin-left: -60px;
                      "
                    >
                      Edit Profile
                    </button>
                  </div>
                  <br />
                  <br />
                  <div class="container mb-5" style="width: 100%">
                    <div class="row">
                      <div class="col-md-10 mt-4 mx-auto">
                        <h3 class="display-7 head">
                          <strong>Account Security</strong>
                        </h3>
                        <h4 class="display-7 head">
                          Our first impression matters ! Create a new Profile
                          and Start earning now from the crowd here.
                        </h4>

                        <div class="col-md-10 mt-5 pl-5 ml-2">
                          <button
                            @click="() => {
                                $router.push('/gigs/create')
                            }"
                            class="btn btn-primary bg-darkblue"
                            style="width: 120px; margin-left: -60px;"
                          >
                            Continue
                          </button>
                          <a class="ml-3" style="color: darkblue;" href="#">
                            <strong>Back</strong>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  data() {
    return {
      tabIndex: 0,
      max: 100,
      personalInfo: {
        name: '',
        avatar: '',
        description: '',
        languages: ['']
      },
      professionalInfo: {
        occupations: [''],
        skills: [
          {
            skill: '',
            experience: ''
          }
        ],
        educations: [
          {
            country: '',
            college: '',
            degree: ''
          }
        ],
        certifications: [
          {
            certifiedIn: '',
            certifiedFrom: '',
            year: ''
          }
        ],
      }
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    if (this.user.email) {
      if (!this.user.personalInfo) {
        this.tabIndex = 0
        return
      } else {
        this.personalInfo = {
          name: this.user.name,
          avatar: this.user.avatar,
          description: this.user.description,
          languages: this.user.languages
        }
      }
      if (!this.user.professionalInfo) {
        this.tabIndex = 1
        return
      } else {
        this.professionalInfo = {
          occupations: this.user.occupations,
          skills: this.user.skills,
          educations: this.user.educations,
          certifications: this.user.certifications || []
        }
      }
      if (!this.user.linkedAccounts) {
        this.tabIndex = 2
        return
      } else if (!this.user.accountSecurity) {
        this.tabIndex = 3
        return
      }
    }
  },
  methods: {
    removeLanguage(key) {
      this.personalInfo.languages = this.personalInfo.languages.filter((language, index) => index !== key)
    },
    addLanguage() {
      this.personalInfo.languages.push('')
    },
    removeOccupation(key) {
      this.professionalInfo.occupations = this.professionalInfo.occupations.filter((occupation, index) => index !== key)
    },
    addOccupation() {
      this.professionalInfo.occupations.push('')
    },
    removeSkill(key) {
      this.professionalInfo.skills = this.professionalInfo.skills.filter((skill, index) => index !== key)
    },
    addSkill() {
      this.professionalInfo.skills.push({
        skill: '',
        experience: ''
      })
    },
    removeEducation(key) {
      this.professionalInfo.educations = this.professionalInfo.educations.filter((education, index) => index !== key)
    },
    addEducation() {
      this.professionalInfo.educations.push({
        country: '',
        college: '',
        degree: ''
      })
    },
    removeCertification(key) {
      this.professionalInfo.certifications = this.professionalInfo.certifications.filter((certification, index) => index !== key)
    },
    addCertification() {
      this.professionalInfo.certifications.push({
        certifiedIn: '',
        certifiedFrom: '',
        year: ''
      })
    },
    updatePersonalInfo(e) {
      e.preventDefault()
      const data = {
        id: this.user._id,
        payload: this.personalInfo
      }
      this.$store.dispatch('addPersonalInfo', data)
        .then(
          (response) => {
            this.$store.commit('currentUser', response.data.data)
            this.tabIndex += 1
          }
        )
    },
    updateProfessionalInfo(e) {
      e.preventDefault()
      const data = {
        id: this.user._id,
        payload: this.professionalInfo
      }
      this.$store.dispatch('addProfessionalInfo', data)
        .then(
          (response) => {
            this.$store.commit('currentUser', response.data.data)
            this.tabIndex += 1
          }
        )
    },
    createCloudinaryWidget () {
      const newWidget = window.cloudinary.createUploadWidget({
        cloudName: 'storage96',
        uploadPreset: 'texennavatar',
        multiple: false,
        maxFiles: 1,
        cropping: true,
        clientAllowedFormats: ['png', 'jpg', 'jpeg']
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          this.personalInfo.avatar = result.info.secure_url
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

<style scoped>
.custom-bullet {
    border-radius: 0.8em;
    margin-left: 50px;
}
</style>