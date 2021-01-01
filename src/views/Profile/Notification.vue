<template>
  <div>
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-md-3 pt-4">
            <div class="sidenavbar card-background">
                <router-link
                class="nav-link navbar-link text-left"
                to="/profile/profilesetting"
                >Account
              </router-link>
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/security"
                >Security</router-link
              >
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/Notification"
                >Notification</router-link
              >
              <router-link
                class="nav-link navbar-link text-left"
                to="/profile/Billing"
                >Billing Information</router-link
              >
            </div>
          </div>
          <div class="col-md-7 mt-4 card-background">
            <div class="row mr-5">
              <div class="col">Notification</div>
              <div class="col">Type</div>
              <div class="col mr-5">Email</div>
              <div class="col mr-3">Mobile</div>
            </div>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                    </div>
                  </th>
                  <th scope="col"></th>
                  <th scope="col">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                    </div>
                  </th>
                  <th scope="col">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  NAME: "Notification",
};
</script>
