<template>
    <div>
        <h3>User {{ $route.params.id }}</h3>
        <slot>
            <ul>
                <li>First Name: </li>
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
        
    }
</script>

<style lang="scss" scoped>

</style>