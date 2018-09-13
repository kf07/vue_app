<template>
  <div id="app">
    <Home v-if="!isLogin"></Home>
    <Calendar v-if="isLogin"></Calendar>
  </div>
</template>

<script>
  import Home from "./components/Home";
  import Calendar from "./components/Calendar";

  export default {
      name: "app",
      data() {
          return {
              isLogin: false
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
                  console.log(this.isLogin)
              } else {
                  this.isLogin = false;
              }
          })
      }
  }
</script>