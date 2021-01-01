<template>
    <div>
        <top-navbar />
        <div style="padding: 20px;">
            <router-view :key="$route.name"/>
        </div>
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
