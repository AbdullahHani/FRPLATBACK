<template>
    <div>
        <hr />
        <div class="row">
            <div class="col-2">
                <img :src="comment.user.avatar" alt="" height="50" style="border-radius: 50%;">
            </div>
            <div class="col-10" style="padding-left: 10px;">
                <p style="font-size: 16px; font-weight: 700; margin: 0;">{{ comment.user.name }}</p>
                <p>{{ comment.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentCard',
    props: {
        comment: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>