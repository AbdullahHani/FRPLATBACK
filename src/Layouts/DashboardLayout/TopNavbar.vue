<template>
    <div class="custom-navbar">
         <nav class="navbar navbar-expand-lg navbar-light mx-auto w-100 text-center">
            <a class="navbar-brand text-blue" href="#"><img src="@/assets/images/others/Group 62.png" class="w-50" alt="Texenn"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style="justify-content: flex-end;">
                <ul v-if="user.role === 'Buyer'" class="navbar-nav">
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/feeds">Feeds</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/dashboard">Dashboard</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/chats">Messages</router-link>
                    </li>
                    <li class="nav-item" style="margin-left: 20px;">
                        <div class="dropleft">
                            <button
                                class="dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style="padding: 0; border: none; background: none; outline: none;"
                            >
                                <img :src="user.avatar" height="50" style="border-radius: 50%;" alt="">
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" align="left">
                                <div class="dropdown-item" align="left">
                                    <router-link class="nav-link navbar-link"  to="/profile">Profile Settings</router-link>
                                </div>
                                <div class="dropdown-item" align="left">
                                    <router-link class="nav-link navbar-link"  to="/help&support">Help & Support</router-link>
                                </div>
                                <div class="dropdown-item">
                                    <b-form-checkbox v-model="checked" name="check-button" switch @change="switchProfile">
                                        <b>{{ user.role === 'Buyer' ? 'Switch to Seller' : 'Switch to Buyer' }}</b>
                                    </b-form-checkbox>
                                </div>
                                <hr style="margin: 0;" />
                                <div class="dropdown-item">
                                    <button
                                        class="nav-link navbar-link"
                                        @click="logout"
                                        style="background: none; outline: none; border: none; width: 100%;"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul v-else class="navbar-nav ">
                    <li class="nav-item "  >
                        <router-link
                            class="nav-link navbar-link text-center"
                            to="/feeds"
                            :style="{color: $route.path.includes('feed') ? '#30308b' : ''}"
                        >
                        Feeds
                    </router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link
                            class="nav-link navbar-link text-center"
                            to="/gigs"
                            :style="{color: $route.path.includes('gig') ? '#30308b' : ''}"
                        >
                            Gigs
                        </router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link
                            class="nav-link navbar-link text-center"
                            to="/portfolio"
                            :style="{color: $route.path.includes('portfolio') ? '#30308b' : ''}"
                        >
                            Portfolios
                        </router-link>
                    </li>
                    <!-- <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/requests">Buyer Request</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/orders">Orders</router-link>
                    </li>
                    <li class="nav-item "  >
                        <router-link class="nav-link navbar-link text-center"  to="/chats">Messages</router-link>
                    </li> -->
                    <li class="nav-item" style="margin-left: 20px;">
                        <div class="dropleft">
                            <button
                                class="dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style="padding: 0; border: none; background: none; outline: none;"
                            >
                                <img :src="user.avatar" height="50" style="border-radius: 50%;" alt="">
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" align="left">
                                <div class="dropdown-item" align="left">
                                    <router-link
                                        class="nav-link navbar-link"
                                        to="/profile"
                                        :style="{color: $route.path.includes('profile') ? '#30308b' : ''}"
                                    >
                                        Profile Settings
                                    </router-link>
                                </div>
                                <!-- <div class="dropdown-item" align="left">
                                    <router-link
                                        class="nav-link navbar-link"
                                        to="/help&support"
                                        :style="{color: $route.path.includes('help') ? '#30308b' : ''}"
                                    >
                                        Help & Support
                                    </router-link>
                                </div> -->
                                <!-- <div class="dropdown-item">
                                    <b-form-checkbox v-model="checked" name="check-button" switch @change="switchProfile">
                                        <b>{{ user.role === 'Buyer' ? 'Switch to Seller' : 'Switch to Buyer' }}</b>
                                    </b-form-checkbox>
                                </div> -->
                                <hr style="margin: 0;" />
                                <div class="dropdown-item">
                                    <button
                                        class="nav-link navbar-link"
                                        @click="logout"
                                        style="background: none; outline: none; border: none"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
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
        },
        logout() {
            this.$store.commit('currentUser', null)
            this.$router.push('/')
        }
    }
}
</script>

<style>
.custom-navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
}
.profile-icon {
    background: none;
    background-color: transparent !important;
}
</style>