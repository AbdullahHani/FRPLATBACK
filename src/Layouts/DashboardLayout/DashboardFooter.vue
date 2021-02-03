<template>
  <div class="custom-footer w-100">
    <div
      class="row text-center no-gutters border-blue text-grey pt-1 mt-2"
      style="font-size: 12px"
    >
      <div class="col-md-4 mt-2">
        <p class="mb-0" style="font-weight: 700;">Copyright © 2020</p>
        <p class="mb-0">Powered by <span style="font-weight: 700;">AMSUS Technologies</span></p>
        <p>Privacy Policy</p>
      </div>
      <div class="col-md-4 mt-2">
        <p class="">Our Mailing Address</p>
        <p>Contact Details</p>
      </div>
      <div class="col-md-4 rounded-icon pt-3">
        <img class="mx-1" src="@/assets/images/others/Group 23.png" height="30" alt="" />
        <img class="mx-1" src="@/assets/images/others/Group 22.png" height="30" alt="" />
        <img class="mx-1" src="@/assets/images/others/Group 25.png" height="30" alt="" />
        <img class="mx-1" src="@/assets/images/others/Group 24.png" height="30" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardFooter",
};
</script>

<style scoped>
.custom-footer {
  background-color: #fff;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
}
</style>