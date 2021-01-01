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
            <div class="col-lg-1 col-md-0 col-sm-0"></div>
            <div class="col-lg-10 col-md-12 col-sm-12 row" style="flex-wrap: wrap">
              <div class="col-lg-4 col-md-6 col-sm-0 mt-2">
                <div class="card-background" style="display: flex; padding: 10px;">
                  <img
                    class="m-3"
                    style="height: 50px"
                    src="@/assets/images/others/profile.png"
                  />
                  <div>
                    <h6 class="display-7 head" style="text-align: left;">
                      Our first impression matters ! Create a new Profile and
                      Start earning now from the crowd here.
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-0 mt-2">
                <div class="card-background" style="display: flex; padding: 10px;">
                  <img
                    class="m-3"
                    style="height: 50px"
                    src="@/assets/images/others/profile (1).png"
                  />
                  <div>
                    <h6 class="display-7 head" style="text-align: left;">
                      Our first impression matters ! Create a new Profile and
                      Start earning now from the crowd here.
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-0 mt-2">
                <div class="card-background" style="display: flex; padding: 10px;">
                  <img
                    class="m-3"
                    style="height: 50px"
                    src="@/assets/images/others/link.png"
                  />
                  <div>
                    <h6 class="display-7 head" style="text-align: left;">
                      Our first impression matters ! Create a new Profile and
                      Start earning now from the crowd here.
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-0 mt-2">
                <div class="card-background" style="display: flex; padding: 10px;">
                  <img
                    class="m-3"
                    style="height: 50px"
                    src="@/assets/images/others/to-do-list.png"
                  />
                  <div>
                    <h6 class="display-7 head" style="text-align: left;">
                      Our first impression matters ! Create a new Profile and
                      Start earning now from the crowd here.
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-0 mt-2">
                <div class="card-background" style="display: flex; padding: 10px;">
                  <img
                    class="m-3"
                    style="height: 50px"
                    src="@/assets/images/others/safety-lock.png"
                  />
                  <div>
                    <h6 class="display-7 head" style="text-align: left;">
                      Our first impression matters ! Create a new Profile and
                      Start earning now from the crowd here.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-1 col-md-0 col-sm-0"></div>

            <div class="col-md-10 ml-5 mt-5 mx-auto">
              <button
                @click="
                  () => {
                    $router.push('/profile/complete');
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
