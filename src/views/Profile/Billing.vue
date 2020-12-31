<template>
<div>
            <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="sidenav">
                        <a href="#account">Account</a>
                        <a href="#security">Security</a>
                        <a href="#notifications">Notifications</a>
                        <a href="#billing" class="current">Billing Information</a>
                    </div>
                </div>
                <div class="col-md-7">
                    <form class="pt-5">
                        <div class="form-group">
                            <label for="fullname">Full Name</label>
                            <input type="email" class=" form-control custom-blue-bg py-0" id="fullname" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="companyName">Company Name</label>
                            <input type="password" class=" form-control custom-blue-bg py-0" id="companyName">
                        </div>
                        <div class="form-group">
                            <label for="country">Country</label>
                            <input type="email" class=" form-control custom-blue-bg py-0" id="country" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="region">State/Region</label>
                            <input type="email" class=" form-control custom-blue-bg py-0" id="region" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="email" class=" form-control custom-blue-bg py-0" id="address" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="email" class=" form-control custom-blue-bg py-0" id="city" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group">
                            <label for="zipcode">Zip Code</label>
                            <input type="email" class=" form-control custom-blue-bg py-0" id="zipcode" aria-describedby="emailHelp">
                        </div>

                        <div class="form-group form-check row">
                            <label class="form-check-label text-blue" for="exampleCheck1">Send me Invoice via Email</label>
                            <input type="checkbox" class="form-check-input tick" id="exampleCheck1">
                        </div>
                        <div class="col-md-3 ml-auto">
                            <button type="submit" class="btn btn-primary bg-darkblue">Save Settings</button>
                        </div>

                    </form>
                </div>
            </div>
     </div>
</div>

</template>

<script>
export default {
    name:'Notification'
}
</script>