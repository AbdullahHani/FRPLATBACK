<template>
    <div class="login-form">
        <form @submit="register">
            <div class="form-wrapper-outer">
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="text" v-model="formData.userName"></b-form-input>
                    <div class="field-placeholder"><span>Username</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="text" v-model="formData.name"></b-form-input>
                    <div class="field-placeholder"><span>Name</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="email" v-model="formData.email"></b-form-input>
                    <div class="field-placeholder"><span>Email</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="password" v-model="formData.password"></b-form-input>
                    <div class="field-placeholder"><span>Password</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="password" v-model="formData.confirmPassword"></b-form-input>
                    <div class="field-placeholder"><span>Re-Type Password</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="text" v-model="formData.country"></b-form-input>
                    <div class="field-placeholder"><span>Country</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="text" v-model="formData.phoneNumber"></b-form-input>
                    <div class="field-placeholder"><span>Phone Number</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="text" v-model="formData.dob"></b-form-input>
                    <div class="field-placeholder"><span>Date of Birth</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="text" v-model="formData.interests"></b-form-input>
                    <div class="field-placeholder"><span>Interests</span></div>
                </b-input-group>
                <b-input-group class="field-wrapper-signup">
                    <b-form-input type="text" v-model="formData.referral"></b-form-input>
                    <div class="field-placeholder"><span>Referred By</span></div>
                </b-input-group>
                <div class="form-button">
                    <button type="button" class="btn btn-primary" @click="register">Sign Up</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            formData: {
                userName: '',
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                dob: '',
                interests: '',
                phoneNumber: '',
                country: '',
                referral: ''
            },
            errors: {
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        register(e) {
            e.preventDefault()
            if (this.formData.password !== this.formData.confirmPassword) {
                this.errors.confirmPassword = 'Password does not match'
                return
            }
            this.$store.dispatch('registerUser', this.formData)
                .then(
                    (response) => {
                        this.$store.commit('currentUser', response.data.data)
                        this.$router.push('/dashboard')
                    }
                )
        }
    }
}
</script>

<style scoped>
input {
    border-radius: 24px !important;
    height: 50px;
}
input:focus {
    background-color: transparent;
    color: #000;
    font-size: 22px;
}
</style>