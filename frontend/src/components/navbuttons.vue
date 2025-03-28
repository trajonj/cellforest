<template>
    <div class = "navbuttons">
        <span class="bckbttn">
            <button @click="goBack" class="bckbttn">back</button>
        </span>
        <!-- <span class="fwdbttn">
            <button @click="goForward" class="fwdbttn">→</button>
        </span> -->
    </div>
</template>

<script>
export default {
    name: 'navigationbuttons',
        methods: {
            goBack() {
                return this.$router.go(-1);
            },
            goForward() {
                return this.$router.go(1);
            }
        }
};
</script>

<style scoped>
.go-back {
    display: flex;
    cursor: pointer;
}
button {
    border: 0;
    margin: 2px;
    margin-left: 20px;
}
</style>