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
      }
  }
</script>