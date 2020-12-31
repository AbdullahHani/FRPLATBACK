<template>
  <div>
    <h3 class="text-blue text-left font-weight-bold ml-3">PORTFOLIO</h3>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 col-sm-0"></div>
        <div class="col-md-5 card-background">
          <form style="text-align: left;" @submit="onSubmit">
            <div class="form-group">
              <label for="category">Category</label>
              <select class="form-control" id="category" v-model="form.category">
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div class="form-group">
              <label for="sub-catogory">Sub-Catagory</label>
              <select class="form-control" id="sub-category" v-model="form.subCategory">
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div class="form-group">
              <label for="projectName">Project Name</label>
              <input type="text" class="form-control" id="projectName" v-model="form.projectName" />
            </div>
            <div class="form-group row">
              <div class="col-md-4 mr-5">
                <div class="col mb-n1 text-left">
                  <label class="mb-0" for="projectName"
                    >Upload Image/Video</label
                  >
                </div>
                <div class="col mb-n1 text-right">
                  <small class="mr-3"> max size</small>
                </div>
              </div>
              <div class="col-md-6">
                <img class="icon" src="add-file.png" alt="" />
              </div>
            </div>
            <div class="form-group">
              <label for="caption">Enter caption:</label>
              <textarea class="form-control" id="caption" rows="3x" v-model="form.caption"></textarea>
            </div>
            <div class="form-group row">
              <div class="col-md-4 mr-5">
                <div class="col mb-n1 text-left">
                  <label class="mb-0" for="textfile">Upload Text File</label>
                </div>
                <div class="col mb-n1 text-right">
                  <small class="mr-3">max size</small>
                </div>
              </div>
              <div class="col-md-6">
                <img id="textfile" class="icon" src="add-file.png" alt="" />
              </div>
            </div>
            <div class="form-group">
              <label for="url">Enter URL</label>
              <input type="text" class="form-control" id="url" v-model="form.url"/>
            </div>
            <br /><br />

            <div class="col-md-10 mt-5 pl-5 ml-5">
              <button
                type="submit"
                class="btn btn-primary bg-darkblue"
                style="width: 120px; margin-left: -60px"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-2 col-sm-0"></div>
        <div class="col-md-3">
            <!-- <nav class="navbar navbar-light ">
                <ul class="navbar-nav custom-nav ml-auto">
                    <li class="nav-item px-1">
                        <a class="nav-link" href="#">Sub-catogory</a>
                    </li>
                    <li class="nav-item px-1">
                        <a class="nav-link" href="#">Sub-catogory</a>
                    </li>
                    <li class="nav-item px-1">
                        <a class="nav-link" href="#">Sub-catogory</a>
                    </li>
                </ul>
            </nav> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
      return {
          form: {
            category: '',
            subCategory: '',
            projectName: '',
            imageVideoUrl: '',
            extension: '',
            caption: '',
            url: ''
          }
      }
  },
  methods: {
      onSubmit(e) {
          e.preventDefault()
          console.log(this.form)
      }
  }
};
</script>