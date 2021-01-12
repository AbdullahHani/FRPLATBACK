<template>
    <div>
        <div class="app-content">
            <router-view :key="$route.name"/>
        </div>
        <sidebar style="" />
        <top-navbar />
    </div>
</template>


<script>
import TopNavbar from './TopNavbar'
import Sidebar from './Sidebar'

export default {
    name:'DashboardLayout',
    components: {
        TopNavbar,
        Sidebar
    }
}

</script>

<style scoped>
.app-content {
    margin-top: 100px !important;
    margin-left: 500px;
}
.sidebar {
    position: absolute;
    left: 0;
    width: 300px;
    min-height: 100%;
    margin-top: -30px;
    padding: 0;
}
</style>