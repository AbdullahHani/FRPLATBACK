<template>
    <div>
         <nav class="navbar navbar-expand-lg navbar-light mx-auto w-100 text-center">
            <a class="navbar-brand text-blue" href="#"><img src="@/assets/images/others/Group 62.png" class="w-50" alt="Texenn"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                    <!-- <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/messages">Messages</router-link>
                    </li> -->
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/graphicDesign">Porfolio</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/seller/complete">Complete Profile</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/help&support">Help and Support</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/wallet/withdraw">Wallet</router-link>
                    </li>
                      <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/profile/profilesetting">Profile Settings</router-link>
                    </li>
                </ul>
            </div>

        </nav>
        <hr class="border-blue m-0">
    </div>
</template>

<script>
export default {
    name:'TopNavbar'
}
</script>