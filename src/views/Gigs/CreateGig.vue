<template>
  <div>
    <div class="container-fluid">
      <div class="container mb-5">
        <div class="row">
          <div class="col-md-10 mt-5 mx-auto">
            <h1 class="display-4 head">Create Gig</h1>
            <b-tabs v-model="tabIndex" content-class="mt-3">
              <b-tab active>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">1</span>
                    Overview
                  </p>
                </template>
                <form>
                  <div class="form-group">
                    <label class="label-large" for="gigTitle">Gig Title</label>
                    <textarea
                      name="gig"
                      class="form-control custom-light-bg py-0"
                      id="gigTitle"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label class="label-large" for="category">Category</label>
                      <select
                        class="form-control custom-light-bg"
                        id="category"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="label-large" for="subcategory">
                        Sub-Category
                      </label>
                      <select
                        class="form-control custom-light-bg"
                        id="subcategory"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="label-large" for="projectdescription">
                      Describe your Project
                    </label>
                    <textarea
                      name="project"
                      class="form-control custom-light-bg py-0"
                      id="projectdescription"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label class="label-large" for="tags">Tags</label>
                    <select class="form-control custom-light-bg" id="tags">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="label-large" for="suggestions">
                      Suggestions
                    </label>
                    <input
                      type="password"
                      class="form-control custom-light-bg py-0"
                      id="suggestions"
                    />
                  </div>
                </form>
                <b-button @click="tabIndex++">
                  Continue
                </b-button>
              </b-tab>
              <b-tab>
                <template #title>
                  <p>
                    <span class="custom-bullet selected">2</span>
                    Pricing
                  </p>
                </template>
                <div class="container mb-5">
                  <div class="row">
                    <div class="col-md-10 mt-5 mx-auto">
                      <label
                        class="label-large"
                        style="font-size: 22px;"
                        for="projectdescription"
                      >
                        Packages
                      </label>

                      <div
                        class="danilo w-90"
                        style="
                          display: flex;
                          justify-content: space-between;
                          height: 650px;
                        "
                      >
                        <div
                          class="danil"
                          style="
                            width: 29%;
                            border: 1px solid darkblue;
                            background-color: white;
                            border-radius: 5px;
                            height: 650px;
                          "
                        >
                          <h1
                            style="
                              background-color: darkblue;
                              width: 100%;
                              height: 50px;
                              text-align: center;
                              color: #fff;
                              border-radius: 5px;
                            "
                          >
                            Silver
                          </h1>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <div
                            class="container"
                            style="
                              border: 1px solid #ced4da;
                              border-radius: 5px;
                              width: 90%;
                              height: 120px;
                            "
                          ></div>
                          <br />
                          <input
                            type="text  "
                            class="form-control py-0"
                            style="
                              background-color: white;
                              width: 90%;
                              margin-left: 12px;
                            "
                            id="suggestions"
                          />
                          <br />
                          <br />
                          <h1
                            style="
                              background-color: darkblue;
                              width: 100%;
                              height: 50px;
                              text-align: center;
                              color: #fff;
                              border-radius: 5px;
                            "
                          >
                            $ 7.00
                          </h1>
                          <br />
                          <button
                            type="submit"
                            class="btn btn-primary bg-darkblue"
                            style="width: 100px; margin-left: 80px;"
                          >
                            Order
                          </button>
                        </div>

                        <div
                          class="danil"
                          style="
                            width: 29%;
                            border: 1px solid darkblue;
                            background-color: white;
                            border-radius: 5px;
                            height: 650px;
                          "
                        >
                          <h1
                            style="
                              background-color: darkblue;
                              width: 100%;
                              height: 50px;
                              text-align: center;
                              color: #fff;
                              border-radius: 5px;
                            "
                          >
                            Silver
                          </h1>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <div
                            class="container"
                            style="
                              border: 1px solid #ced4da;
                              border-radius: 5px;
                              width: 90%;
                              height: 120px;
                            "
                          ></div>
                          <br />
                          <input
                            type="text  "
                            class="form-control py-0"
                            style="
                              background-color: white;
                              width: 90%;
                              margin-left: 12px;
                            "
                            id="suggestions"
                          />
                          <br />
                          <br />
                          <h1
                            style="
                              background-color: darkblue;
                              width: 100%;
                              height: 50px;
                              text-align: center;
                              color: #fff;
                              border-radius: 5px;
                            "
                          >
                            $ 7.00
                          </h1>
                          <br />
                          <button
                            type="submit"
                            class="btn btn-primary bg-darkblue"
                            style="width: 100px; margin-left: 80px;"
                          >
                            Order
                          </button>
                        </div>

                        <div
                          class="danil"
                          style="
                            width: 29%;
                            border: 1px solid darkblue;
                            background-color: white;
                            border-radius: 5px;
                            height: 650px;
                          "
                        >
                          <h1
                            style="
                              background-color: darkblue;
                              width: 100%;
                              height: 50px;
                              text-align: center;
                              color: #fff;
                              border-radius: 5px;
                            "
                          >
                            Silver
                          </h1>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <p class="text-center">
                            select the relevant subject
                            <br />
                          </p>
                          <div
                            class="container"
                            style="
                              border: 1px solid #ced4da;
                              border-radius: 5px;
                              width: 90%;
                              height: 120px;
                            "
                          ></div>
                          <br />
                          <input
                            type="text  "
                            class="form-control py-0"
                            style="
                              background-color: white;
                              width: 90%;
                              margin-left: 12px;
                            "
                            id="suggestions"
                          />
                          <br />
                          <br />
                          <h1
                            style="
                              background-color: darkblue;
                              width: 100%;
                              height: 50px;
                              text-align: center;
                              color: #fff;
                              border-radius: 5px;
                            "
                          >
                            $ 7.00
                          </h1>
                          <br />
                          <button
                            type="submit"
                            class="btn btn-primary bg-darkblue"
                            style="width: 100px; margin-left: 80px;"
                          >
                            Order
                          </button>
                        </div>
                      </div>

                      <button
                        @click="() => {
                                $router.push('/gigs')
                            }"
                        type="submit"
                        class="btn mt-5 float-right btn-primary bg-darkblue"
                        style="width: 180px; margin-left: -60px;"
                      >
                        Apply & Save
                      </button>
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
  data () {
    return {
      tabIndex: 1
    }
  }
}
</script>

<style scoped></style>
