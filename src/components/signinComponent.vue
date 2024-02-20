<template>
    <div class="main">
     <h1 class="email"> Email:</h1>
      <input class="email" v-model="email" placeholder="Email" type="Text">
      <!-- <h1 class="name"> Name:</h1>
      <input class="name" v-model="name" placeholder="Name" type="Text"> -->
      <h1 class="password"> Password:</h1>
      <input class="password" v-model="password" placeholder="Password" type="Text">  
    </div>
    <button @click="signUpWithGoogle" class="signUpWithGoogle">Sign up with Google</button>
    <button @click="signIn" class="password">Sign In</button>
    <button @click="register" class="password">Register</button>
  </template>

<script>
import { auth } from '../../firebaseConfig.mjs';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from'axios';
export default {
  name: 'registerComponent',
  data(){
    return{
      email: '',
      password: '',
      found: false
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
    },

    async signIn(){
        try{
          const x = await axios.post('http://localhost:3000/signIn', {
            email: this.email,
            password: this.password,
          });
          this.found = x.data.Success
          if(this.found == true){
            this.$router.push('/home');
          }
          console.log(this.found);
        }catch(error){
          console.log(error);
        }
    }
}
}
</script>

<style scoped>
/* Your CSS styles go here */
.email{
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  color: rgb(0, 0, 0);
}

.password{
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  color: rgb(0, 0, 0);
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

@media (max-width: 768px) {
  .main {
    height: auto;
  }
}
.signUpWithGoogle {
  transition: background-color .3s, box-shadow .3s;
  padding: 12px 17px 12px 42px;
  margin-left: 40%;
  top: 20px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  
  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
    background-color: #eff0f1;
  }
  
  &:active {
    background-color: #eeeeee;
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 -1px 0 rgba(0, 0, 0, .04),
      0 2px 4px rgba(0, 0, 0, .25),
      0 0 0 3px #c8dafc;
  }
  
  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;
  }
}
</style>
