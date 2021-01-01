<template>
  <div>
    <div class="container-fluid">
      <div class="container mb-5 card-background">
        <div class="row">
          <div class="col-md-10 mt-0 mx-auto">
            <b-tabs v-model="tabIndex" content-class="mt-3" class="custom-bullet">
              <b-progress :value="value" :max="max" show-progress animated></b-progress>
              <b-tab active>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">1</span>
                    Personal Info
                  </p>
                </template>
                <form>
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
                      id="suggestions"
                      style="width: 400px;"
                    />
                    <br />
                    <label class="label-large" style="font-size: 20px;">
                      Upload Profile Picture
                      <button style="border: none; margin-left: 155px; background-color: white; outline: none;">
                        <img src="@/assets/images/others/add-file.png" />
                      </button>
                    </label>
                    

                    <textarea
                      name="project"
                      class="form-control custom-light-bg py-0"
                      id="projectdescription"
                      cols="30"
                      rows="5"
                      style="width: 530px;"
                    ></textarea>
                    <br />
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Language
                    </label>
                    <input
                      type="text"
                      class="form-control custom-light-bg py-0"
                      id="suggestions"
                      style="width: 400px;"
                    />
                    <br />

                    <div class="col-md-11 ml-2 mt-2 mx-auto">
                      <b-button
                        @click="tabIndex++"
                        class="btn btn-primary bg-darkblue"
                        style="width: 120px; margin-left: -60px;"
                      >
                        Continue
                      </b-button>
                      <a class="ml-3" style="color: darkblue;" href="#">
                        <strong>Back</strong>
                      </a>
                    </div>
                  </div>
                </form>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">2</span>
                    Professional Info
                  </p>
                </template>
                <form>
                  <div class="form-group" style="text-align: left;">
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Your Occupation
                    </label>
                    <a style="color: darkblue; margin-left: 175px;" href="#">
                      + Add New
                    </a>
                    <input
                      type="text"
                      class="form-control custom-light-bg py-0"
                      id="suggestions"
                      style="width: 400px;"
                    />
                    <br />
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Skills
                    </label>
                    <div class="row ml-1">
                      <input
                        type="text"
                        class="form-control custom-light-bg py-0"
                        id="suggestions"
                        placeholder="Add Skills"
                        style="width: 150px;"
                      />
                      <input
                        type="text"
                        placeholder="Experience Level"
                        class="form-control ml-2 custom-light-bg py-0"
                        id="suggestions"
                        style="width: 150px;"
                      />
                      <br />
                    </div>
                    <br />
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Education
                    </label>
                    <div class="row ml-1">
                      <input
                        type="text"
                        class="form-control custom-light-bg py-0"
                        id="suggestions"
                        placeholder="Country"
                        style="width: 150px;"
                      />
                      <input
                        type="text"
                        placeholder="College"
                        class="form-control ml-2 custom-light-bg py-0"
                        id="suggestions"
                        style="width: 150px;"
                      />
                      <br />
                    </div>
                    <br />
                    <label
                      class="label-large"
                      for="name"
                      style="font-size: 20px;"
                    >
                      Certification
                    </label>
                    <div class="row ml-1">
                      <input
                        type="text"
                        class="form-control custom-light-bg py-0"
                        id="suggestions"
                        placeholder="Certified In"
                        style="width: 150px;"
                      />
                      <input
                        type="text"
                        placeholder="Certified From"
                        class="form-control ml-2 custom-light-bg py-0"
                        id="suggestions"
                        style="width: 150px;"
                      />
                      <br />
                      <input
                        type="text"
                        placeholder="Year"
                        class="form-control ml-2 custom-light-bg py-0"
                        id="suggestions"
                        style="width: 150px;"
                      />
                      <br />
                    </div>
                    <br />

                    <div class="col-md-11 ml-2 mt-2 mx-auto">
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
                  <div
                    class="row mr-5 mt-5"
                    style="justify-content: center; width: auto;"
                  >
                    <img src="" />
                  </div>
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

                  <ul>
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
export default {
  data() {
    return {
      tabIndex: 1,
      value: 25,
      max: 100
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