<template>
    <div>
            <div class="container">
                 <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="sidenavbar" style="display: grid; text-align: left; color: black;" >
                        <a href="#account" class="current">Account</a>
                        <a href="#security">Security</a>
                        <a href="#notifications">Notifications</a>
                        <a href="#billing" >Billing Information</a>
                    </div>
                </div>
                <div class="col-md-7" >
                    <h3 class="text-blue " style="font-size: 18px; padding-top: 40px; ">My Profile Setting</h3>
                        <hr class="border-blue m-0 w-100">
                    <form class="pt-4">
                        <div class="form-group">
                            
                     <label class="label-large " for="gigTitle" >Email </label>
                     <div class="dandt lower"> 
                     <input type="text" class=" form-control dandt mail" placeholder="" >
                     
                        </div><br><br>
                        <label class="label-large " for="gigTitle" >Online Status <button class="clrbtn"></button> </label> 
                      <div class="dropdown btnnn" >
                    <button class="btn  btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Go Offline For</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item btn  btn-secondary" type="button">Go Online For</button>
                    </div>
                    </div>
                        

                        <div class="col-md-3 ml-auto">
                            <button type="submit" class="btn  btn-primary bg-darkblue" style="width: 200PX; margin-left: -60px;">Save Settings</button>
                        </div>
                        </div>
                    </form><br>

        <hr class="border-blue m-0">


            <label class="label-large " style="font-size: 30px;" for="" >Account Deactivation </label>
            <label class="label-large " style="font-size: 20px;" for="" >What happens when you deactive your account? </label>
            <label class="label-large ull " for="gigTitle" >
                <ul><li>You wont be able to reactive your Gigs</li>
                <li>You wont be able to reactive your Gigs</li>
            <li>You wont be able to reactive your Gigs</li></ul>
             </label>
                
                <form class="form-inline">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" style="width: 80%;">
                         <option selected>I'm leaving beacuse </option>
                         <option value="1">One</option>
                         <option value="2">Two</option>
                         <option value="3">Three</option>
                    </select>


                    <button type="submit" class="btn btn-primary bg-darkblue">Submit</button>
                </form>
            </div>
    </div>
</div>   
            </div>
</div>         
</template>

<script>
export default {
  name: "Account",
};
</script>