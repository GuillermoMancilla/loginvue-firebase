<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <router-link to="/"><b-navbar-brand>Wolfy Pages</b-navbar-brand></router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">                  
                    <template v-if="user">
                        <b-nav-item-dropdown right> 
                        <template #button-content>
                            <em>{{user.email}}</em>
                        </template>
                        <b-dropdown-item><router-link to="/dashboard"> Profile </router-link></b-dropdown-item>
                        <b-dropdown-item href="#" @click.prevent="logout">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </template>
                    <template v-else>
                        <b-nav-item>
                            <router-link to="/register"><b-button size="sm" class="my-8 my-sm-0 bg-success" type="submit">Sign In</b-button></router-link>
                        </b-nav-item>
                        <b-nav-item >
                            <router-link to="/login"><b-button size="sm" class="my-2 my-sm-0 bg-primary" type="submit">Log In</b-button></router-link>
                        </b-nav-item>
                    </template>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Navvue",
    data(){
        return{
            user:""
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(() => {
                this.$router.push({name: 'login'})
            })
        }
    },
    created () {
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.user = user
            }else{
                user=null
            }
        })
    }
}
</script>