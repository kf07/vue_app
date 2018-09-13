<template>
    <div class="calendar">
        <h1>カレンダー</h1>
        <span>{{ user.displayName }}</span>
        <button @click="logout">ログアウト</button>
    </div>
</template>

<script>
    export default {
        name: "calendar",
        props: ["user"],
        data(){
            return {
            }
        },
        methods: {
            logout :function(){
                firebase.auth().signOut();
            }
        }
    }
</script>

<style scoped>

</style>