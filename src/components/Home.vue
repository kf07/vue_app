<template>
    <div id="home">
        <h1>{{ msg }}</h1>
        <vs-button @click="googleLogin" vs-type="border" vs-color="primary">Googleアカウントでログイン</vs-button>
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
        }
    }
</script>

<style scoped>

</style>