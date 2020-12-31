<template>
<div>
    <div class="container-fluid">
      

      <label
        class="label-large ml-5 mt-2"
        style="font-size: 20px; font-weight: bolder"
        >Wallet
      </label>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-12 ml-auto"
          style="display: flex; flex-direction: row"
        >
          <div
            class="card-background"
            style="
              width: 100%;
              background-color: white;
              text-align: center;
            "
          >
            <div class="ml-auto">
              <p class="pt-2">Net income</p>
              <h2>$0</h2>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-12 ml-auto"
          style="flex-direction: row; display: flex"
        >
          <div
            class="card-background"
            style="
              width: 100%;
              background-color: white;
              text-align: center;
            "
          >
            <div class="ml-auto">
              <p class="pt-2">Withdrawn</p>
              <h2>$0</h2>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-12 ml-auto"
          style="flex-direction: row; display: flex"
        >
          <div
            class="card-background"
            style="
              width: 100%;
              background-color: white;
              text-align: center;
            "
          >
            <div class="ml-auto">
              <p class="pt-2">Pending Clearances</p>
              <h2>$0</h2>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 col-md-6 col-sm-12 ml-auto"
          style="flex-direction: row; display: flex"
        >
          <div
            class="card-background"
            style="
              width: 100%;
              background-color: white;
              text-align: center;
            "
          >
            <div class="ml-auto">
              <p class="pt-2">Available for Withdrawal</p>
              <h2>$0</h2>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <label
        class="label-large ml-5 mt-5"
        style="
          font-size: 20px;
          justify-content: space-around;
          font-weight: bolder;
        "
        >WITHDRAW
      </label>
      <button style="border: 1px solid; background-color: #fff">
        Easy Paisa
      </button>
      <button style="border: 1px solid; background-color: #fff">
        Bank Transfer
      </button>
      <button style="border: 1px solid; background-color: #fff">
        JazzCash
      </button>

      <div class="card-background mt-3">
        <div class="row ml-1">
          <label class="label-large ml-5 mr-2" for="name" style="font-size: 20px"
            >Show
          </label>
          <input
            type="text"
            class="form-control custom-light-bg py-0"
            id="suggestions"
            placeholder=""
            style="width: 230px"
          />

          <label
            class="label-large ml-auto mr-2"
            for="name"
            style="font-size: 20px"
            >Date</label
          >
          <input
            type="text"
            class="form-control custom-light-bg py-0"
            id="suggestions"
            placeholder="From"
            style="width: 150px"
          />
          <input
            type="text"
            placeholder="To"
            class="form-control mr-5 ml-2 custom-light-bg py-0"
            id="suggestions"
            style="width: 150px"
          />
        </div>
        <table class="table ml-2 mt-5 mr-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Withdraw",
};
</script>