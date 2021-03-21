<template>
  <div id="login">
    <h2>To-Do App</h2>
    <h3>Please log in to use the To-Do App written in <a href="https://vuejs.org/" target="_blank">VueJS</a> and using <a href="https://firebase.google.com" target="_blank">Google Firebase</a></h3>
    <div v-if="loginErr">
      There was an error while logging in. ({{loginErrCode}}: {{loginErrMsg}})
    </div>
    <div v-if="loginGood">
      You have been logged in.
    </div>
    <div>
      <form @submit.prevent>
        <h3>Log In</h3>
        <label for="email">Email</label>
        <input v-model.trim="loginForm.email" type="text" placeholder="Enter email..." id="email" />
        <label for="password">Password</label>
        <input v-model.trim="loginForm.password" type="password" placeholder="Enter password..." id="password" />
        <button @click="login" class="button">Log In</button>
      </form>
      <form @submit.prevent>
        <h3>Sign Up</h3>
        <label for="email1">Email</label>
        <input v-model.trim="signUpForm.email" type="text" placeholder="Enter email..." id="email1" />
        <label for="password1">Password</label>
        <input v-model.trim="signUpForm.password" type="password" placeholder="Enter password..." id="password1" />
        <button @click="signup" class="button">Log In</button>
      </form>
    </div>
  </div>
</template>

<script>
import {auth} from '../firebase'
import user from '../App.vue'

export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
      signUpForm: {
        email: '',
        password: '',
      },
      loginErr: false,
      loginErrMsg: '',
      loginErrCode: '',
      loginGood: false,
    }
  },
  methods: {
    login: function() {
      auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
      .then((userCred) => {
        user.uid = userCred.user;
        this.loginErr = false;
        this.loginGood = true;
      })
      .catch((error) => {
        this.loginErrMsg = error.message;
        this.loginErrCode = error.code;
        this.loginErr = true;
        this.loginGood = false;
      });
    },
    signup: function() {
      auth.createUserWithEmailAndPassword(this.signUpForm.email, this.signUpForm.password)
      .then((userCred) => {
        user.uid = userCred.user;
        this.loginGood = true;
        this.loginErr = false;
      })
      .catch((error) => {
        this.loginErrMsg = error.message;
        this.loginErrCode = error.code;
        this.loginErr = true;
        this.loginGood = false;
      });
    }
  }
}
</script>
