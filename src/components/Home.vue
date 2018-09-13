<template>
    <div id="home">
        <h1>{{ msg }}</h1>
        <button @click="googleLogin">Googleアカウントでログイン</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                msg: "Welcome!"
            }
        },
        methods: {
            googleLogin: function(){
                firebase
                    .auth()
                        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
            }
        },
        created: function() {
            firebase.auth().onAuthStateChanged(user => {
                console.log(user);
                if (user) {
                    console.log('s')
                    this.isLogin = true;
                    console.log(this.isLogin)
                } else {
                    console.log('g')
                    this.isLogin = false;
                }
            })
        }
    }
</script>

<style scoped>

</style>