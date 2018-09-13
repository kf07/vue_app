<template>
  <div id="app">
    <Home v-if="!isLogin"></Home>
    <Calendar v-if="isLogin" :user="userData"></Calendar>
  </div>
</template>

<script>
  import Home from "./components/Home";
  import Calendar from "./components/Calendar";

  export default {
      name: "app",
      data() {
          return {
              isLogin: false,
              userData: null
          }
      },
      components: {
          Home: Home,
          Calendar: Calendar
      },
      created: function() {
          firebase.auth().onAuthStateChanged(user => {
              console.log(user);
              if (user) {
                  this.isLogin = true;
                  this.userData = user;
                  console.log(this.isLogin)
              } else {
                  this.isLogin = false;
                  this.userData = null;
              }
          })
      }
  }
</script>