<template>
    <div class="loog my-5">
        <h1 class="mb-5">Log Into your account</h1>
        <form action="#" @submit.prevent="login">
            <div class="row justify-content-center">
                <div class="mb-3 col-6">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ex: Someone@wolfy.cl" v-model="email">
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control text-center" id="exampleInputPassword1" placeholder="your password here" v-model="password">
                </div>
            </div>
                <!-- <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <div>
                    <button type="submit" class="btn btn-primary my-4">Log in</button>
                </div>
            
        </form>
        <div class="alert alert-danger mt-2" role="alert" v-if="error">
            {{error}}
        </div>
    </div>
</template>

<script>
import'@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'login',
    data (){
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods:{
        login(){
            this.error = ''
            if(this.email && this.password){
                //send form
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    this.$router.push({name:'dashboard'})
                    console.log(user)
                }).catch( err => {
                    this.error = err.message
                })
            }else{
                this.error = 'all fields are required to register '
            }
        }
    }
}
</script>
<style scoped>
.loog{
    text-align: center;
}
</style>