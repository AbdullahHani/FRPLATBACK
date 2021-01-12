<template>
  <div style="background-color: white;">
    <div class="card-background ml-4">
      <md-button
        @click="() => {
          $router.push('/projects/create')
        }"
        class="btn btn-success float-right"
      >
        Add Project
      </md-button>
      <div class="row mt-5">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          style="pointer: cursor;"
          v-for="project in projects"
          :key="project._id"
          @click="() => {
            $router.push(`/projects/${project._id}`)
          }"
        >
          <div class="card-background">
            <p style="color: #0616fb; font-size: 22px; text-align: left; font-weight: 700;">{{ project.projectName }}</p>
            <div class="pl-2" style="border-left: 60px solid #0616fb" align="left">
              <div>
                <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Category</p>
                <p class="ml-5 mt-0 mb-0">{{ project.category }}</p>
              </div>
              <div>
                <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Sub Category</p>
                <p class="ml-5 mt-0 mb-0">{{ project.subCategory }}</p>
              </div>
              <div>
                <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Description</p>
                <p class="ml-5 mt-0 mb-0">{{ project.description }}</p>
              </div>
              <div>
                <p class="mb-0 mt-0" style="font-size: 12px; font-weight: 700;">Budget</p>
                <p class="ml-5 mt-0 mb-0" style="font-size: 16px; font-weight: 700;">${{ project.budget }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfilePage',
  components: {
  },
  data() {
    return {
      projects: []
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('getProjects')
      .then(
        (response) => {
          this.projects = response.data.data
        }
      )
  }
}
</script>

<style scoped>

.row {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.top-nav a {
  float: left;
  display: block;
  color: #575656;
  text-align: center;
  padding: 14px 16px;
  font-size: 17px;
  font-weight: bold;
}

.top-nav a:hover {
  color: #30308b;
}

.top-nav a.active {
  color: #30308b;
}

.top-nav input[type=text] {
  border: none;
  font-size: 17px;
}

.flexr {
  display: flex;
}

.bottom-nav {
  width: 100%;
  display: flex;
}

.bottom-nav a {
  color: #575656;
  font-size: 17px;
  font-weight: bold;
  margin-left: 80px;
}

.bottom-nav a:hover {
  color: #30308b;
}

.bottom-nav a.active {
  color: #30308b;
}

.flex-container {
  display: flex;
  justify-content: space-around;
}
.profile-button {
  border-radius: 8px; 
  border: none;
  font-weight: bold;
  margin: 0 20px;
  padding: 5px 10px;
}
.btn-white {
  background-color: white;
  color: #30308b;
  border: solid 0.2px #707070; 
}
.btn-blue {
  background-color: #30308b;
  color: white;
}
.profile-avatar {
  max-height: 200px;
  border-radius: 20px;
}
.hr-span {
  background-color: silver; 
  height: 1px;
  margin-top: 50px;
  box-shadow: 0px 2px 20px 0px;
}
</style>