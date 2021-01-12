<template>
  <div style="text-align: left;">
    <div class="container-fluid">
      <div class="mb-5">
        <div class="row">
          <div class="col-12 mt-5 mx-auto">
            <div style="">
              <h1 class="display-4 head" style="width: 60%;">Buyer Request</h1>
            </div>
            <!-- <div class="forteen">
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
            </div> -->
          </div>
        </div>
        <div class="card-background">
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
                  v-for="project in projects"
                  :key="project._id"
                  align="center"
                >
                  <th scope="row" style="padding-top: 20px;">{{ project.projectName }}</th>
                  <td style="padding-top: 20px;">{{ project.description }}</td>
                  <td style="padding-top: 20px;">{{ project.category }}</td>
                  <td style="padding-top: 20px;">{{ project.subCategory }}</td>
                  <td style="padding-top: 20px;">{{ formattedDate(project.deliveryDate) }}</td>
                  <td style="padding-top: 20px;">${{ project.budget }}</td>
                  <td>
                    <button
                      @click="() => {
                        selectedProject = project
                        showModal = true
                      }"
                      class="card-background"
                      style="margin: 0; padding: 10px 15px; border-radius: 50%; background: none; border: none; outline: none;"
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
    <b-modal
      id="modal-lg"
      size="lg"
      title="Large Modal"
      hide-footer
      v-model="showModal"
    >
      <form @submit="placeBid">
        <div class="form-group">
          <label for="projectName">Describe your offer</label>
          <textarea class="form-control" id="caption" rows="3x" v-model="bidForm.description"></textarea>
        </div>
        <div class="form-group">
          <label for="projectName">Project Name</label>
          <b-dropdown
            text="Select your Gig"
            block
            variant="primary"
            class="m-2"
            menu-class="w-100"
          >
            <b-dropdown-item
              v-for="gig in gigs"
              :key="gig._id"
              @click="selectGig(gig._id)"
            >
              <div style="display: flex; background-color: #fffdf7; border-radius: 8px;">
                <div class="height: 80px;">
                  <img :src="gig.picture" alt="" height="80">
                </div>
                <div style="padding: 30px 10px;">
                  <p style="font-weight: 700;">{{ gig.title }}</p>
                </div>
              </div>
            </b-dropdown-item>
          </b-dropdown>
        </div>
        <button type="submit" class="btn btn-info float-right">Place Bid</button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  name: 'Gigs',
  data() {
    return {
      selectedProject: {},
      showModal: false,
      projects: [],
      bidForm: {
        seller: '',
        buyer: '',
        project: '',
        description: '',
        gig: ''
      },
      gigs: []
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('getBuyerRequest')
      .then(
        (response) => {
          this.projects = response.data.data
        }
      )
    this.$store.dispatch('getMyGigs')
      .then(
        (response) => {
          this.gigs = response.data.data
        }
      )
  },
  methods: {
    formattedDate(date) {
      return moment(date).format('dddd MMMM DD, YYYY')
    },
    placeBid(e) {
      e.preventDefault()
      this.bidForm.seller = this.user._id
      this.bidForm.buyer = this.selectedProject.user._id
      this.bidForm.project = this.selectedProject._id
      this.$store.dispatch('createBid', this.bidForm)
        .then(
          (response) => {
            this.makeToast(response.data)
            this.showModal = false
          }
        )
        .catch(
          (error) => {
            this.makeToast(error.response.data)
          }
        )
    },
    selectGig(gig) {
      this.bidForm.gig = gig
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