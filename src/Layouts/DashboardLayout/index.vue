<template>
    <div>
        <top-navbar />
        <div style="padding: 20px;">
            <router-view />
        </div>
        <dashboard-footer />
    </div>
</template>


<script>
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
