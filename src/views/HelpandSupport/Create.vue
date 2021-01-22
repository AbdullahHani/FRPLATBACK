<template>
  <div class="container-fluid">
    <div class="container mb-5">
      <div class="container mb-5">
        <div class="row">
          <div class="col-md-10 mt-4 mx-auto card-background" style="min-height: 455px;">
            <h3 class="display-7 mt-5 text-center head">
              <strong>Help & Support</strong>
            </h3>
            <div style="text-align: left;">
            <h3 class="display-9 head"><strong>Submit a request</strong></h3>
            
            <label class="label-large" for="name" style="font-size: 20px"
              >What can we help you with ?</label
            >
            <select id="inputState" class="form-control">
              <option selected>Select the relevent subject</option>
              <option>...</option>
            </select>
            <div class="col-md-10 mt-5 pl-5 ml-2">
              <button
                type="submit"
                class="btn btn-primary bg-darkblue"
                style="width: 100px; margin-left: -50px; background-color: darkblue;"
              >
                Submit
              </button>
              <!-- <a class="ml-3" style="color: darkblue" href="#"
                ><strong>Back</strong></a
              > -->
             </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>