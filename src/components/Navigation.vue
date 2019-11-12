<template>
    <div id="navigation">
        <div id="logo">
            <img src="../images/honeycomb.png" alt="">
        </div>
        <ul>
            <router-link to="/customers" tag="li"><a href="">Customers</a></router-link>
            <router-link to="/carriers" tag="li"><a href="">Carriers</a></router-link>
            <router-link to="/orders" tag="li"><a href="">Orders</a></router-link>
            <router-link to="/requests" tag="li"><a href="">Requests</a></router-link>
            <router-link to="/company-structure" tag="li"><a href="">Company structure</a></router-link>
            <router-link to="/salary-motivation" tag="li"><a href="">Salary & Motivation</a></router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                logo: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

    #navigation {
        width: 100%;
        background-color: 	rgb(153, 102, 102);
            #logo {
                width: 100px;
                position: relative;
                top: 8px;
                left: 5px;
             img {
                width: 32px;
                height: 32px;
                }
            }

            ul {
                padding: 0;
                margin: 5px;
                display: flex;
                align-items: center;
                flex-direction: row;
                justify-content: space-around;

                li {
                    padding: 0;
                    margin-left: 15px;
                    list-style: none;

                    a {
                        text-decoration: none;
                        color: #fff;
                        display: block;
                        padding: 3px 8px;
                        transition: 400ms;
                        border: 1px solid #fff;
                        &:hover {
                            color: #000;
                            background-color: #fff;
                        }
                    }

                }
    }
    }

</style>