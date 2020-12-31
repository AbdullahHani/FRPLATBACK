<template>
  <div>
    <div class="container-fluid">
      <nav
        class="navbar navbar-expand-lg navbar-light mx-auto w-100 text-center"
      >
        <a class="navbar-brand text-blue" href="#">
          <img
            src="@/assets/images/others/logo.png"
            class="w-50"
            alt="Texenn"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link navbar-link" href="#">Gigs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-link" href="#">Messages</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-link" href="#">Orders</a>
            </li>
            <li class="nav-item">
              <img
                class="rounded-circle w-50"
                src="@/assets/images/others/Ellipse 27.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </nav>
      <hr class="border-blue m-0" />

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
              style="display: flex; flex-wrap: wrap;"
            >
              <div style="width: 300px; height: 180px; margin: 10px;">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px;"
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
              <div style="width: 300px; height: 180px; margin: 10px;">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px;"
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
              <div style="width: 300px; height: 180px; margin: 10px;">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px;"
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
              <div style="width: 300px; height: 180px; margin: 10px;">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px;"
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
              <div style="width: 300px; height: 180px; margin: 10px;">
                <img
                  class="mt-2 ml-3"
                  style="width: 50px;"
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
                @click="() => {
                  $router.push('/profile/complete')
                  }"
                type="submit"
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
        <div class="row text-center no-gutters border-blue text-grey pt-3 mt-5">
          <div class="col-md-4 mt-2">
            <p class="mb-0">Copyright © 2020</p>
            <p class="mb-0">Powered by AMSUS Technologies</p>
            <p>Privacy Policy</p>
          </div>
          <div class="col-md-4 mt-2">
            <p class="">Our Mailing Address</p>
            <p>Contact Details</p>
          </div>
          <div class="col-md-4 p-3 rounded-icon mt-2">
            <img
              class="mx-1"
              src="@/assets/images/others/Group 23.png"
              alt=""
            />
            <img
              class="mx-1"
              src="@/assets/images/others/Group 22.png"
              alt=""
            />
            <img
              class="mx-1"
              src="@/assets/images/others/Group 25.png"
              alt=""
            />
            <img
              class="mx-1"
              src="@/assets/images/others/Group 24.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
