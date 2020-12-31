<template>
    <div>
        <simple-navbar />
        <div class="main-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Edit3  from './Edit3'

export default {
    name: 'Edit3',
    components: {
        Edit3
    }
}
</script>
