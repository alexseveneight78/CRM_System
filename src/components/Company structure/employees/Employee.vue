<template>
    <div>
        <p>Loaded ID: {{ id }}</p>
        <slot>
            <ul>
                <li>First Name: {{ user }}</li>
                <li>Last Name: </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </slot>
    </div>
</template>

<script>
    export default {
        props: ['user'],
        data(){
            return {
                id: this.$route.params.id
            }
        },
        created(){
            console.log(this.$route.params.id)
        },
        watch: {
            '$route'(to, from) {
                this.id = to.params.id
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>