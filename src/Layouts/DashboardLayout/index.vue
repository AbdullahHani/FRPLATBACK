<template>
    <div>
        <div class="app-content">
            <router-view :key="$route.name"/>
        </div>
        <top-navbar />
        <dashboard-footer />
    </div>
</template>


<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import TopNavbar from './TopNavbar'
import DashboardFooter from './DashboardFooter'

export default {
    name:'DashboardLayout',
    components: {
        TopNavbar,
        DashboardFooter
    }
}

</script>

<style scoped>
.app-content {
    margin-top: 100px !important;
}
</style>