<template>
    <div class="main">
     <h1 class="email"> Email:</h1>
      <input class="email" v-model="email" placeholder="Email" type="Text">
      <h1 class="name"> Name:</h1>
      <input class="name" v-model="name" placeholder="Name" type="Text">
      <h1 class="password"> Password:</h1>
      <input class="password" v-model="password" placeholder="Password" type="Text">  
    </div>
    <button @click="signUpWithGoogle" class="signUpWithGoogle">Sign up with Google</button>
    <button @click="signIn" class="signIn">Sign In</button>
    <button @click="register" class="register">Register</button>
  </template>

<script>
import { auth } from '../../firebaseConfig.mjs';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export default {
  name: 'registerComponent',
  data(){
    return{
      email: '',
      name: '',
      password: ''
    }
  },
  methods:{
      async signUpWithGoogle(){
        try{ 
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth,provider);
          this.$router.push('/home');
        }catch(error) {
        console.log(error);
      }
    },
    async register(){
        this.$router.push('/register');
    }
}
}
</script>

<style scoped>
/* Your CSS styles go here */
</style>
