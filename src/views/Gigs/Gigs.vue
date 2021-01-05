<template>
  <div style="text-align: left;">
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
            <div class="forteen" style="margin-left: -100px;">
              <ul style="display: inline-flex; list-style: none;">
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
        <div class="card-background">
          <div>
            <table
              class="table mt-5 card-background"
            >
              <thead align="center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Gig</th>
                  <th scope="col">Impressions</th>
                  <th scope="col">Clicks</th>
                  <th scope="col">Orders</th>
                  <th scope="col">Cancelation</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="gig in gigs"
                  :key="gig._id"
                  align="center"
                >
                  <th scope="row"
                  >
                    <div
                      v-if="gig.picture"
                      class="card-background"
                      style="padding: 0; height: 80px; width: 70px; border-radius: 8px; overflow: hidden"
                    >
                      <img :src="gig.picture" alt="" height="80">
                    </div>
                  </th>
                  <td style="padding-top: 38px;">{{ gig.title }}</td>
                  <td style="padding-top: 38px;">{{ gig.impressions }}</td>
                  <td style="padding-top: 38px;">{{ gig.clicks }}</td>
                  <td style="padding-top: 38px;">{{ gig.orders }}</td>
                  <td style="padding-top: 38px;">{{ gig.cancellations }}</td>
                  <td style="padding-top: 25px;">
                    <button
                      @click="() => {
                        $router.push(`/gigs/${gig._id}`)
                      }"
                      class="card-background"
                      style="margin: 0; padding: 10px; border-radius: 50%; background: none; border: none; outline: none;"
                    >
                      <b-icon icon="eye"></b-icon>
                    </button>
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
  name: 'Gigs',
  data() {
    return {
      gigs: []
    }
  },
  created() {
    this.$store.dispatch('getGigs')
      .then(
        (response) => {
          this.gigs = response.data.data
        }
      )
  }
}
</script>