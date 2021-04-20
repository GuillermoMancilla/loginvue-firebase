<template>
    <div class="my-5 reeg">
        <h1>Create an account</h1>
        <form action="#" @submit.prevent="register">
            <div class="row justify-content-center">
                <div class="mb-3 col-5">
                    <label for="exampleInputName1" class="form-label">Name</label>
                    <input type="text" class="form-control text-center" id="exampleInputName1" placeholder="your Name here" v-model="name">
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="mb-3 col-5">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ex: Someone@wolfy.cl" v-model="email">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="mb-3 col-5">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control text-center" id="exampleInputPassword1" placeholder="your password here" v-model="password">
                </div>
            </div>
                <!-- <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> -->
                <div>
                    <button type="submit" class="btn btn-primary mb-6">Submit</button>
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
    name: 'register',
    data (){
        return{
            name: '',
            email: '',
            password: '',
            error: ''
        }
    },
    methods:{
        register(){
            this.error = ''
            if(this.name && this.email && this.password){
                //send form
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(user => {
                    this.name = ''
                    this.email = ''
                    this.password = ''
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
.reeg{
text-align: center;
width: 100%;
}
form{
    width: 98%;
}
</style>