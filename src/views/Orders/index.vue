<template>
  <div style="text-align: left;">
    <div class="container-fluid">
      <div class="mt-4 mb-5">
        <b-tabs v-model="tabIndex" content-class="mt-3" class="custom-bullet">
          <b-tab>
            <template #title>
              <p>
                Pending
              </p>
            </template>
            <div class="card-background" style="min-height: 400px;">
              <div>
                <table
                  class="table mt-5 card-background"
                  style="overflow-x: scroll;"
                >
                  <thead align="center">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Sub Category</th>
                      <th scope="col">Delivery Date</th>
                      <th scope="col">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="order in pendingOrders"
                      :key="order._id"
                      align="center"
                    >
                      <th scope="row" style="padding-top: 20px;">{{ order.project.projectName }}</th>
                      <td style="padding-top: 20px;">{{ order.project.description }}</td>
                      <td style="padding-top: 20px;">{{ order.project.category }}</td>
                      <td style="padding-top: 20px;">{{ order.project.subCategory }}</td>
                      <td style="padding-top: 20px;">{{ formattedDate(order.project.deliveryDate) }}</td>
                      <td style="padding-top: 20px;">${{ order.project.budget }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              <p>
                Accepted
              </p>
            </template>
            <div class="card-background" style="min-height: 400px;">
              <div>
                <table
                  class="table mt-5 card-background"
                  style="overflow-x: scroll;"
                >
                  <thead align="center">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Sub Category</th>
                      <th scope="col">Delivery Date</th>
                      <th scope="col">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="order in acceptedOrders"
                      :key="order._id"
                      align="center"
                    >
                      <th scope="row" style="padding-top: 20px;">{{ order.project.projectName }}</th>
                      <td style="padding-top: 20px;">{{ order.project.description }}</td>
                      <td style="padding-top: 20px;">{{ order.project.category }}</td>
                      <td style="padding-top: 20px;">{{ order.project.subCategory }}</td>
                      <td style="padding-top: 20px;">{{ formattedDate(order.project.deliveryDate) }}</td>
                      <td style="padding-top: 20px;">${{ order.project.budget }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              <p>
                Denied
              </p>
            </template>
            <div class="card-background" style="min-height: 400px;">
              <div>
                <table
                  class="table mt-5 card-background"
                  style="overflow-x: scroll;"
                >
                  <thead align="center">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Sub Category</th>
                      <th scope="col">Delivery Date</th>
                      <th scope="col">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="order in deniedOrders"
                      :key="order._id"
                      align="center"
                    >
                      <th scope="row" style="padding-top: 20px;">{{ order.project.projectName }}</th>
                      <td style="padding-top: 20px;">{{ order.project.description }}</td>
                      <td style="padding-top: 20px;">{{ order.project.category }}</td>
                      <td style="padding-top: 20px;">{{ order.project.subCategory }}</td>
                      <td style="padding-top: 20px;">{{ formattedDate(order.project.deliveryDate) }}</td>
                      <td style="padding-top: 20px;">${{ order.project.budget }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              <p>
                Completed
              </p>
            </template>
            <div class="card-background" style="min-height: 400px;">
              <div>
                <table
                  class="table mt-5 card-background"
                  style="overflow-x: scroll;"
                >
                  <thead align="center">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Sub Category</th>
                      <th scope="col">Delivery Date</th>
                      <th scope="col">Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="order in completedOrders"
                      :key="order._id"
                      align="center"
                    >
                      <th scope="row" style="padding-top: 20px;">{{ order.project.projectName }}</th>
                      <td style="padding-top: 20px;">{{ order.project.description }}</td>
                      <td style="padding-top: 20px;">{{ order.project.category }}</td>
                      <td style="padding-top: 20px;">{{ order.project.subCategory }}</td>
                      <td style="padding-top: 20px;">{{ formattedDate(order.project.deliveryDate) }}</td>
                      <td style="padding-top: 20px;">${{ order.project.budget }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  name: 'Gigs',
  data() {
    return {
      acceptedOrders: [],
      pendingOrders: [],
      completedOrders: [],
      deniedOrders: [],
      tabIndex: 0
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('getOrders')
      .then(
        (response) => {
          this.acceptedOrders = response.data.data.accepted
          this.pendingOrders = response.data.data.pending
          this.completedOrders = response.data.data.completed
          this.deniedOrders = response.data.data.denied
        }
      )
  },
  methods: {
    formattedDate(date) {
      return moment(date).format('dddd MMMM DD, YYYY')
    },
    makeToast(data) {
      this.$bvToast.toast(data.message, {
        title: data.status,
        autoHideDelay: 3000,
        appendToast: false
      })
    }
  }
}
</script>