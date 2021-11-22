<template>
  <div id="login">
    <h2>To-Do App</h2>
    <h3>Please log in to use the To-Do App written in <a href="https://vuejs.org/" target="_blank">VueJS</a> and using <a href="https://firebase.google.com" target="_blank">Google Firebase</a></h3>
    <div v-if="loginErr">
      There was an error while logging in. ({{loginErrCode}})
    </div>
    <div v-if="loginGood">
      You have been logged in.
    </div>
    <div>
      <form @submit.prevent v-if="!signup_form">
        <h3>Log In</h3>
        <label for="email">Email</label>
        <input v-model.trim="loginForm.email" type="text" placeholder="Enter email..." id="email" />
        <br><br>
        <label for="password">Password</label>
        <input v-model.trim="loginForm.password" type="password" placeholder="Enter password..." id="password" />
        <br><br>
        <button @click="login_complete" class="button">Log In</button>
      </form>

      <form @submit.prevent v-if="signup_form">
        <h3>Sign Up</h3>
        <label for="email1">Email</label>
        <input v-model.trim="signUpForm.email" type="text" placeholder="Enter email..." id="email1" />
        <br><br>
        <label for="password1">Password</label>
        <input v-model.trim="signUpForm.password" type="password" placeholder="Enter password..." id="password1" />
        <br><br>
        <button @click="signup_complete" class="button">Sign Up</button>
      </form>
      <br><br>
      <span v-if="!signup_form" @click="goToSignup">Don't have an account? Sign up today!</span>
      <span v-if="signup_form" @click="goToSignup">Log in with an existing account</span>
    </div>
  </div>
</template>

<script>
import {auth, db} from '@/firebase'
import userAuth from '@/App.vue'

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
      loginErrCode: '',
      loginGood: false,
      signup_form: false,
    }
  },
  methods: {
    login_complete() {
      auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
      .then((userCred) => {
        userAuth.uuid = userCred.user.uid;
        this.loginErr = false;
        this.loginGood = true;
        this.loginForm.email = '';
        this.loginForm.password = '';
        this.signUpForm.email = '';
        this.signUpForm.password = '';
        this.$router.push({
          name: 'Home',
        });

      })
      .catch((error) => {
        this.loginErrCode = error.code;
        this.loginErr = true;
        this.loginGood = false;
        this.loginForm.email = '';
        this.loginForm.password = '';
        this.signUpForm.email = '';
        this.signUpForm.password = '';
      });
    },
    signup_complete() {
      auth.createUserWithEmailAndPassword(this.signUpForm.email, this.signUpForm.password)
      .then((userCred) => {
        userAuth.uuid = userCred.user.uid;
        this.loginGood = true;
        this.loginErr = false;
        this.loginForm.email = '';
        this.loginForm.password = '';
        this.signUpForm.email = '';
        this.signUpForm.password = '';

        // initialize firebase
        db.ref('/tasks/' + userAuth.uuid).set({dummy:'ignore'})
        .catch((error) => {
          this.loginErrCode = error.code;
          this.loginGood = false;
          this.loginErr = true;
        });
      })
      .catch((error) => {
        this.loginErrCode = error.code;
        this.loginErr = true;
        this.loginGood = false;
        this.loginForm.email = '';
        this.loginForm.password = '';
        this.signUpForm.email = '';
        this.signUpForm.password = '';
      });
    },
    goToSignup() {
      this.signup_form = !this.signup_form;
    }
  }
}
</script>

<style scoped>
form {
  border: 2px solid black;
  border-radius: 3px;
  width: 750px;
  margin: 0 auto;
  text-align: center;
}

@media only screen and (max-width: 750px) {
  form {
    border: 2px solid black;
    border-radius: 3px;
    text-align: center;
  }
}
</style>
