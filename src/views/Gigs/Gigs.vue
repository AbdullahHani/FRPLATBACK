<template>
  <div>
    <div class="container-fluid">

      <div class="container mb-5">
        <div class="row">
          <div class="col-md-10 mt-5 mx-auto">
            <div style="">
              <h1 class="display-4 head" style="width: 60%;">Gigs</h1>
              <div style="margin-left: 74%; font-size: 40px;">
                <b-button 
                  style="
                  width: 150px;
                  height: 40px;
                  "
                  @click="() => {
                    $router.push('/gigs/create')
                  }">
                <strong style="font-size: 18px;">Create Gig</strong>
                </b-button>
              </div>
            </div>
            <div class="forteen" style="margin-left: -89px;">
              <ul style="display: inline-flex;">
                <li class="">
                  <a class="nav-link text-blue" style="color: black;" href="#">
                    <strong>Active</strong>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style="color: black;" href="#">Pending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style="color: black;" href="#">
                    Require Modification
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style="color: black;" href="#">Draft</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" style="color: black;" href="#">Denied</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-10" style="background-color: rgb(243, 248, 252);">
          <div class="row">
            <div class="col-md-10" style="margin-left: 12%;">
              <div class="forteen" style="margin-left: 120px;">
                <ul style="display: inline-flex;">
                  <li class="" style="font-size: 14px;">
                    Impression
                  </li>
                  <li class="nav-item" style="font-size: 14px;">
                    Clicks
                  </li>
                  <li class="nav-item" style="font-size: 14px;">
                    Orders
                  </li>
                  <li class="nav-item" style="font-size: 14px;">
                    Cancelation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul style="list-style: none; margin-left: -20px; width: 86.1%;">
            <li>
              <div class="form-check">
                <input class="" type="checkbox" value="" id="defaultCheck1" />
                <label class="" for="defaultCheck1">
                  <img
                    style="width: 80px; height: 45px;"
                    src="@/assets/images/others/capture.png"
                  />
                </label>
              </div>
            </li>

            <li>
              <div class="form-check mt-1">
                <input class="" type="checkbox" value="" id="defaultCheck1" />
                <label class="" for="defaultCheck1">
                  <img
                    style="width: 80px; height: 45px;"
                    src="@/assets/images/others/capture.png"
                  />
                </label>
              </div>
            </li>
            <li>
              <div class="form-check mt-1">
                <input class="" type="checkbox" value="" id="defaultCheck1" />
                <label class="" for="defaultCheck1">
                  <img
                    style="width: 80px; height: 45px;"
                    src="@/assets/images/others/capture.png"
                  />
                </label>
              </div>
            </li>

            <li>
              <div class="form-check mt-1">
                <input class="" type="checkbox" value="" id="defaultCheck1" />
                <label class="" for="defaultCheck1">
                  <img
                    style="width: 80px; height: 45px;"
                    src="@/assets/images/others/capture.png"
                  />
                </label>
              </div>
            </li>
            <li>
              <div class="form-check mt-1">
                <input class="" type="checkbox" value="" id="defaultCheck1" />
                <label class="" for="defaultCheck1">
                  <img
                    style="width: 80px; height: 45px;"
                    src="@/assets/images/others/capture.png"
                  />
                </label>
              </div>
            </li>

            <br />
            <br />
            <br />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
