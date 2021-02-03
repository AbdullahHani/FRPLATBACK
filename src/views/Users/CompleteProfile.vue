<template>
  <div>
    <div class="container-fluid">
      <div class="container mb-5 card-background">
        <b-tabs v-model="tabIndex" content-class="mt-3" class="custom-bullet">
          <b-progress
            :value="user.profileCompleted"
            :max="max"
            show-progress
            animated
          ></b-progress>
          <b-tab>
            <template #title>
              <p>
                <span class="custom-bullet selected">1</span>
                Personal Info
              </p>
            </template>
            <form @submit="updatePersonalInfo">
              <div class="form-group" style="text-align: left">
                <div
                  class="card-background mt-2"
                  style="display: block; text-align: center"
                >
                  <b-button
                    @click="uploadImage"
                    style="
                      height: 150px;
                      width: 150px;
                      border-radius: 8px;
                      border: 1px solid rgba(0, 0, 0, 0.25);
                      background: none;
                    "
                  >
                    <img
                      v-if="personalInfo.avatar"
                      :src="personalInfo.avatar"
                      alt=""
                      height="120"
                    />
                    <img
                      v-else
                      src="@/assets/images/others/add-file.png"
                      alt=""
                    />
                  </b-button>
                  <p>Upload Image</p>
                </div>
                <div
                  class="card-background mt-2"
                  style="display: flex; padding: 0"
                >
                  <b-icon icon="person-fill" class="field-icon"></b-icon>
                  <input
                    type="text"
                    class="form-control custom-light-bg"
                    v-model="personalInfo.name"
                    required
                    placeholder="Full Name"
                  />
                </div>
                <div class="card-background p-0 mt-2" style="display: flex">
                  <b-icon icon="person-lines-fill" class="field-icon"></b-icon>
                  <textarea
                    name="project"
                    class="form-control custom-light-bg py-3"
                    cols="30"
                    rows="5"
                    v-model="personalInfo.description"
                    required
                    placeholder="Enter your biography"
                    style="border: none; outline: none"
                  ></textarea>
                </div>
                <div
                  class="card-background mt-2"
                  style="display: flex; padding: 0"
                >
                  <b-icon icon="flag-fill" class="field-icon"></b-icon>
                  <input
                    type="text"
                    class="form-control custom-light-bg"
                    v-model="personalInfo.country"
                    required
                    placeholder="Country"
                  />
                </div>
                <div
                  class="card-background mt-2"
                  style="display: flex; padding: 0"
                >
                  <b-icon icon="calendar-date-fill" class="field-icon"></b-icon>
                  <datetime
                    v-model="personalInfo.dob"
                    type="date"
                    input-class="form-control custom-light-bg inp"
                    placeholder="Date of Birth"
                  ></datetime>
                </div>
                <div
                  class="card-background mt-2"
                  style="display: flex; padding: 0"
                >
                  <b-icon icon="person-fill" class="field-icon"></b-icon>
                  <input
                    type="text"
                    class="form-control custom-light-bg"
                    v-model="personalInfo.referral"
                    placeholder="Referral"
                  />
                </div>
                <div
                  v-for="(language, index) in personalInfo.languages"
                  :key="index"
                  style="display: flex"
                  class="mt-2 card-background p-0"
                >
                  <b-icon icon="speaker-fill" class="field-icon"></b-icon>
                  <input
                    v-model="personalInfo.languages[index]"
                    placeholder="Language..."
                    type="text"
                    class="form-control custom-light-bg py-0"
                    required
                  />
                  <button
                    v-if="index !== 0"
                    class="mr-2"
                    style="
                      font-size: 24px;
                      font-weight: 700;
                      background: none;
                      border: none;
                      outline: none;
                    "
                    @click="removeLanguage(index)"
                  >
                    -
                  </button>
                </div>
                <div class="mt-2">
                  <b-button class="btn btn-info" @click="addLanguage()">
                    + <b-icon icon="speaker" style="font-size: 24px"></b-icon>
                  </b-button>
                </div>
                <div
                  v-for="(interest, index) in personalInfo.interests"
                  :key="index"
                  style="display: flex"
                  class="mt-2 card-background p-0"
                >
                  <b-icon icon="trophy-fill" class="field-icon"></b-icon>
                  <input
                    v-model="personalInfo.interests[index]"
                    placeholder="Interest"
                    type="text"
                    class="form-control custom-light-bg py-0"
                    required
                  />
                  <button
                    v-if="index !== 0"
                    class="mr-2"
                    style="
                      font-size: 24px;
                      font-weight: 700;
                      background: none;
                      border: none;
                      outline: none;
                    "
                    @click="removeInterest(index)"
                  >
                    -
                  </button>
                </div>
                <div class="mt-2">
                  <b-button class="btn btn-info" @click="addInterest()">
                    + <b-icon icon="trophy" style="font-size: 24px"></b-icon>
                  </b-button>
                </div>
                <div align="right">
                  <button
                    type="submit"
                    class="btn btn-success bg-darkblue"
                    style="
                      background-color: #30308b;
                      font-weight: 600;
                      outline: none;
                    "
                  >
                    Continue
                  </button>
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
            <form @submit="updateProfessionalInfo" style="text-align: left">
              <div
                v-for="(occupation, index) in professionalInfo.occupations"
                :key="index"
                style="display: flex"
                class="mt-2 card-background p-0"
              >
                <b-icon
                  icon="arrow-right-circle-fill"
                  class="field-icon"
                ></b-icon>
                <input
                  v-model="professionalInfo.occupations[index]"
                  placeholder="Occupation"
                  type="text"
                  class="form-control custom-light-bg py-0"
                  required
                />
                <button
                  v-if="index !== 0"
                  class="mr-2"
                  style="
                    font-size: 24px;
                    font-weight: 700;
                    background: none;
                    border: none;
                    outline: none;
                  "
                  @click="removeOccupation(index)"
                >
                  -
                </button>
              </div>
              <div class="mt-2">
                <b-button class="btn btn-info" @click="addOccupation()">
                  +
                  <b-icon
                    icon="arrow-right-circle"
                    style="font-size: 24px"
                  ></b-icon>
                </b-button>
              </div>
              <div
                v-for="(skill, index) in professionalInfo.skills"
                :key="index"
                class="row mt-2"
              >
                <div class="card-background p-0 col-md-6" style="display: flex">
                  <b-icon icon="controller" class="field-icon"></b-icon>
                  <input
                    type="text"
                    class="form-control custom-light-bg"
                    placeholder="Skill"
                    v-model="professionalInfo.skills[index].skill"
                    required
                  />
                </div>
                <div class="card-background p-0 col-md-6" style="display: flex">
                  <b-icon icon="bar-chart-line" class="field-icon"></b-icon>
                  <select
                    placeholder="Experience Level"
                    class="form-control custom-light-bg"
                    v-model="professionalInfo.skills[index].experience"
                    required
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Professional">Professional</option>
                  </select>
                  <button
                    v-if="index !== 0"
                    class="mr-2"
                    style="
                      font-size: 24px;
                      font-weight: 700;
                      background: none;
                      border: none;
                      outline: none;
                    "
                    @click="removeSkill(index)"
                  >
                    -
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <b-button class="btn btn-info" @click="addSkill()">
                  + <b-icon icon="controller" style="font-size: 24px"></b-icon>
                </b-button>
              </div>
              <!-- Education -->
              <div
                v-for="(education, index) in professionalInfo.educations"
                :key="index"
                class="row mt-2"
              >
                <div class="card-background p-0 col-lg-4" style="display: flex">
                  <b-icon icon="book-fill" class="field-icon"></b-icon>
                  <input
                    type="text"
                    placeholder="Degree"
                    class="form-control custom-light-bg"
                    v-model="professionalInfo.educations[index].degree"
                    required
                  />
                </div>
                <div class="card-background p-0 col-lg-4" style="display: flex">
                  <b-icon icon="building" class="field-icon"></b-icon>
                  <input
                    type="text"
                    placeholder="College"
                    class="form-control custom-light-bg"
                    v-model="professionalInfo.educations[index].college"
                    required
                  />
                </div>
                <div class="card-background p-0 col-lg-4" style="display: flex">
                  <b-icon icon="flag-fill" class="field-icon"></b-icon>
                  <input
                    type="text"
                    class="form-control custom-light-bg"
                    placeholder="Country"
                    v-model="professionalInfo.educations[index].country"
                    required
                  />
                  <button
                    v-if="index !== 0"
                    class="mr-2"
                    style="
                      font-size: 24px;
                      font-weight: 700;
                      background: none;
                      border: none;
                      outline: none;
                    "
                    @click="removeEducation(index)"
                  >
                    -
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <b-button class="btn btn-info" @click="addEducation()">
                  + <b-icon icon="book" style="font-size: 24px"></b-icon>
                </b-button>
              </div>
              <!-- Certificated -->
              <div
                v-for="(
                  certification, index
                ) in professionalInfo.certifications"
                :key="index"
                class="row mt-2"
              >
                <div class="card-background p-0 col-lg-4" style="display: flex">
                  <b-icon icon="trophy-fill" class="field-icon"></b-icon>
                  <input
                    type="text"
                    placeholder="Cerificate Title"
                    class="form-control custom-light-bg"
                    v-model="professionalInfo.certifications[index].certifiedIn"
                    required
                  />
                </div>
                <div class="card-background p-0 col-lg-4" style="display: flex">
                  <b-icon icon="building" class="field-icon"></b-icon>
                  <input
                    type="text"
                    placeholder="Certificate Institute"
                    class="form-control custom-light-bg"
                    v-model="
                      professionalInfo.certifications[index].certifiedFrom
                    "
                    required
                  />
                </div>
                <div class="card-background p-0 col-lg-4" style="display: flex">
                  <b-icon icon="calendar-fill" class="field-icon"></b-icon>
                  <input
                    type="text"
                    class="form-control custom-light-bg"
                    placeholder="Year"
                    v-model="professionalInfo.certifications[index].year"
                    required
                  />
                  <button
                    v-if="index !== 0"
                    class="mr-2"
                    style="
                      font-size: 24px;
                      font-weight: 700;
                      background: none;
                      border: none;
                      outline: none;
                    "
                    @click="removeCertification(index)"
                  >
                    -
                  </button>
                </div>
              </div>
              <div class="mt-2">
                <b-button class="btn btn-info" @click="addCertification()">
                  + <b-icon icon="trophy" style="font-size: 24px"></b-icon>
                </b-button>
              </div>
              <div align="right">
                <b-button
                  type="submit"
                  class="btn btn-success bg-darkblue"
                  style="
                    background-color: #30308b;
                    font-weight: 600;
                    outline: none;
                  "
                >
                  Continue
                </b-button>
                <button @click="tabIndex--" class="btn">
                  <strong>Back</strong>
                </button>
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
                  <!-- <h4 class="display-7 head">
                    Our first impression matters ! Create a new Profile and
                    Start earning now from the crowd here.
                  </h4> -->
                  <hr class="border-blue m-0 mt-3" />
                  <h4 class="display-7 head mt-3">
                    <strong>Your Social Media Account</strong>
                  </h4>
                </div>
              </div>

              <div class="col-lg-6 col-md-8 col-sm-12 mt-2 mx-auto" style="list-style: none">
                <button class="social-login facebook">
                  <b-icon icon="facebook" style="font-size: 24px"></b-icon>
                  Link your Facebook
                </button>
                <button class="social-login google">
                  <b-icon icon="google" style="font-size: 24px"></b-icon>
                  Link your Google Account
                </button>
                <button class="social-login linked-in">
                  <b-icon icon="linkedin" style="font-size: 24px"></b-icon>
                  Link your LinkedIn
                </button>
              </div>

            </div>
              <div align="right">
                <b-button
                  @click="tabIndex++"
                  class="btn btn-success bg-darkblue"
                  style="
                    background-color: #30308b;
                    font-weight: 600;
                    outline: none;
                  "
                >
                  Continue
                </b-button>
                <b-button
                  @click="tabIndex--"
                  class="ml-3"
                  style="color: white;"
                >
                  <strong>Back</strong>
                </b-button>
              </div>
          </b-tab>
          <b-tab>
            <template #title>
              <p>
                <span class="custom-bullet selected">4</span>
                Account Security
              </p>
            </template>
            <div class="container card-background mt-4">
              <div class="container mb-5" style="width: 100%">
                <div class="row">
                  <div class="col-md-10 mt-4 mx-auto">
                    <h3 class="display-7 head">
                      <strong>Account Security</strong>
                    </h3>
                    <h4 class="display-7 head">
                      You would have access to your account security in your profile settings.
                    </h4>

                    <div class="col-md-10 mt-5 pl-5 ml-2">
                      <button
                        @click="
                          () => {
                            $router.push('/feeds');
                          }
                        "
                        class="btn btn-primary bg-darkblue"
                        style="width: 120px; margin-left: -60px"
                      >
                        Continue
                      </button>
                      <a class="ml-3" style="color: darkblue" href="#">
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
</template>

<script>
import { mapState } from 'vuex'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
export default {
  name: 'CompleteProfile',
  components: {
    Datetime
  },
  data() {
    return {
      tabIndex: 0,
      max: 100,
      personalInfo: {
        country: '',
        interests: [''],
        dob: '',
        referral: '',
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
        this.personalInfo = this.user
      }
      if (!this.user.professionalInfo) {
        this.tabIndex = 1
        return
      } else {
        this.professionalInfo = this.user
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
    removeInterest(key) {
      this.personalInfo.interests = this.personalInfo.interests.filter((interest, index) => index !== key)
    },
    addInterest() {
      this.personalInfo.interests.push('')
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
    createCloudinaryWidget() {
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
    uploadImage() {
      const cloudinaryWidget = this.createCloudinaryWidget()
      cloudinaryWidget.open()
    }
  }
}
</script>

<style scoped>
.custom-bullet {
    border-radius: 0.8em;
}
.field-icon {
  font-size: 22px;
  margin: 15px 10px;
}
input {
  height: 50px;
  border: none;
}
select {
  height: 50px;
  border: none;
}
.social-login {
  width: 100%;
  height: 55px;
  margin-bottom: 5px;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 700;
}
.google {
  background-color: #d30505;
}
.facebook {
  background-color: #0066ff;
}
.linked-in {
  background-color: #2433bb;
}
@media screen and (min-width: 768) {
  .custom-bullet {
    margin-left: 50px;
  }
}
@media screen and (max-width: 768) {
  .custom-bullet {
    margin-left: 0;
  }
}
</style>

<style lang="scss">
.inp {
  height: 50px;
  border: none;
  width: 100%;
  outline: none;
}
</style>