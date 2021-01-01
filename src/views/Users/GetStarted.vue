<template>
  <div>
    <div class="container-fluid">
      <div class="container">
        <div class="row ml-5">
          <div class="col-md-10 mt-5 ml-auto bg-img-home">
            <!-- <button
                        @click="() => {
                            $router.push('/billing')
                        }"
                        style="background: none; outline: none;"
                    > -->
            <img
              src="@/assets/images/others/Component 9 – 1.png"
              alt=""
              style="max-height: 95%; cursor: pointer"
              @click="
                () => {
                  $router.push('/detail');
                }
              "
            />
            <!-- </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-img-home {
    /* background-image: url('../assets/images/others/Component 9 – 1.png'); */
    background-size: contain;
    background-repeat: no-repeat;
    height: 500px;
}
</style>