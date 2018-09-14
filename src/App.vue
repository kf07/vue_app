<template>
    <div id="app">
        <div>
            <vs-navbar v-model="activeItem" class="nabarx">
                <!--<vs-button vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button>-->

                <vs-navbar-title>
                    App
                </vs-navbar-title>

                <vs-spacer></vs-spacer>

                <vs-navbar-item index="0">
                    <a href="#">Home</a>
                </vs-navbar-item>
                <vs-navbar-item index="1">
                    <a href="#">News</a>
                </vs-navbar-item>
                <vs-navbar-item index="2">
                    <a href="#">Update</a>
                </vs-navbar-item>
            </vs-navbar>
        </div>
        <div class="main">
        <Home v-if="!isLogin"></Home>
        <Calendar v-if="isLogin" :user="userData"></Calendar>
        </div>
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
                userData: null,
                activeItem: 0,
                search: ''
            }
        },
        components: {
            Home: Home,
            Calendar: Calendar
        },
        created: function () {
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

<style scoped>
    .main {
        padding: 40px;
    }
</style>