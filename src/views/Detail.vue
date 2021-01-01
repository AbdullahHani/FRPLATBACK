<template>
  <div>
    <div class="container-fluid">
      <div class="container mb-5">
        <div class="row">
          <div class="col-md-10 mt-5 mx-auto">
            <h3 class="display-7 head">
              <strong>Want to make a Successful Texenn profile ?</strong>
            </h3>
            <h4 class="display-7 head">
              Our first impression matters ! Create a new Profile and Start
              earning now from the crowd here.
            </h4>
          </div>

          <div class="row">
            <div
              class="col-lg-11 col-md-10 col-sm-10 ml-auto"
              style="display: flex; flex-wrap: wrap"
            >
              <div style="width: 300px; height: 180px; margin: 10px">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px"
                  src="@/assets/images/others/profile.png"
                />
                <div
                  style="
                    width: 200px;
                    height: 100px;
                    float: right;
                    margin: 10px;
                  "
                >
                  <h6 class="display-7 head">
                    Our first impression matters ! Create a new Profile and
                    Start earning now from the crowd here.
                  </h6>
                </div>
              </div>
              <div style="width: 300px; height: 180px; margin: 10px">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px"
                  src="@/assets/images/others/profile (1).png"
                />
                <div
                  style="
                    width: 200px;
                    height: 100px;
                    float: right;
                    margin: 10px;
                  "
                >
                  <h6 class="display-7 head">
                    Our first impression matters ! Create a new Profile and
                    Start earning now from the crowd here.
                  </h6>
                </div>
              </div>
              <div style="width: 300px; height: 180px; margin: 10px">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px"
                  src="@/assets/images/others/link.png"
                />
                <div
                  style="
                    width: 200px;
                    height: 100px;
                    float: right;
                    margin: 10px;
                  "
                >
                  <h6 class="display-7 head">
                    Our first impression matters ! Create a new Profile and
                    Start earning now from the crowd here.
                  </h6>
                </div>
              </div>
              <div style="width: 300px; height: 180px; margin: 10px">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px"
                  src="@/assets/images/others/to-do-list.png"
                />
                <div
                  style="
                    width: 200px;
                    height: 100px;
                    float: right;
                    margin: 10px;
                  "
                >
                  <h6 class="display-7 head">
                    Our first impression matters ! Create a new Profile and
                    Start earning now from the crowd here.
                  </h6>
                </div>
              </div>
              <div style="width: 300px; height: 180px; margin: 10px">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px"
                  src="@/assets/images/others/safety-lock.png"
                />
                <div
                  style="
                    width: 200px;
                    height: 100px;
                    float: right;
                    margin: 10px;
                  "
                >
                  <h6 class="display-7 head">
                    Our first impression matters ! Create a new Profile and
                    Start earning now from the crowd here.
                  </h6>
                </div>
              </div>
            </div>

            <div class="col-md-10 ml-5 mt-5 mx-auto">
              <button
                @click="
                  () => {
                    $router.push('/seller/complete');
                  }
                "
                type="submit"
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
  </div>
</template>
