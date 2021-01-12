<template>
    <div class="custom-navbar">
         <nav class="navbar navbar-expand-lg navbar-light mx-auto w-100 text-center">
            <a class="navbar-brand text-blue" href="#"><img src="@/assets/images/others/Group 62.png" class="w-50" alt="Texenn"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul v-if="user.role === 'Buyer'" class="navbar-nav ">
                    <!-- <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/messages">Messages</router-link>
                    </li> -->
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/dashboard">Dashboard</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/profile">Profile Settings</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/help&support">Help and Support</router-link>
                    </li>
                    <li class="nav-item" style="margin-left: 20px; padding-top: 8px;">
                        <b-form-checkbox v-model="checked" name="check-button" switch @change="switchProfile">
                            <b>{{ user.role === 'Buyer' ? 'Switch to Seller' : 'Switch to Buyer' }}</b>
                        </b-form-checkbox>
                    </li>
                </ul>
                <ul v-else class="navbar-nav ">
                    <!-- <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/messages">Messages</router-link>
                    </li> -->
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/gigs">Gigs</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/portfolio">Porfolio</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/seller/complete">Complete Profile</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/requests">Buyer Request</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/profile">Profile Settings</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/orders">Orders</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/help&support">Help and Support</router-link>
                    </li>
                    <li class="nav-item" style="margin-left: 20px; padding-top: 8px;">
                        <b-form-checkbox v-model="checked" name="check-button" switch @change="switchProfile">
                            <b>{{ user.role === 'Buyer' ? 'Switch to Seller' : 'Switch to Buyer' }}</b>
                        </b-form-checkbox>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'TopNavbar',
    data() {
        return {
            checked: false
        }
    },
    computed: {
        ...mapState({
            user: state => state.user
        })
    },
    created() {
        if(this.user.role === 'Buyer') {
            this.checked = false
        } else {
            this.checked = true
        }
    },
    methods: {
        switchProfile() {
            this.$store.dispatch('switchProfile')
                .then(
                    (response) => {
                        this.$store.commit('currentUser', response.data.data)
                        if (response.data.data.role === 'Buyer') {
                            this.checked = true
                            this.$router.push('/dashboard')
                        } else {
                            this.checked = false
                            if (!response.data.data.personalInfo || !response.data.data.professionalInfo) {
                                this.$router.push('/seller/complete')
                            } else {
                                this.$router.push('/gigs')
                            }
                        }
                    }
                )
        }
    }
}
</script>

<style scoped>
.custom-navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
}
</style>