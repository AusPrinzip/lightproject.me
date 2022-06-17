<template>
    <div id="app">
        <transition v-if="showMenus" name="fade" appear>
            <NavBar></NavBar>
        </transition>
        <transition v-if="showMenus" name="fade" appear>
            <SideBar></SideBar>
        </transition>
        <transition name="fade" appear>
            <router-view class="page-content"></router-view>
        </transition>
        <MainFooter></MainFooter>
    </div>
</template>

<script>
// import Welcome from "./components/views/Welcome/Welcome.vue";
import NavBar from "./components/domains/Navigation/NavBar.vue";
import MainFooter from "./components/domains/MainFooter/MainFooter.vue";
import SideBar from "./components/domains/SideBar/SideBar.vue";

export default {
    name: "app",
    components: {
        // Welcome,
        NavBar,
        MainFooter,
        SideBar,
    },
    data: () => ({
        showMenus: false,
    }),
    mounted() {
        setTimeout(() => (this.showMenus = true), 2000);
    },
};
</script>

<style>
:root {
  --tangerine: #F28500;
  --tangerine-dark: #AD5F00;
  --tangerine-light: #f59d33;
}
* {
    margin: 0;
}

#app:before {
    content: "";
    position: fixed;
    z-index: -1;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: url("assets/images/snow.jpg") center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    filter: grayscale(55%);
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #f1f1f1;
    height: 100vh;
    background: rgba(33, 27, 27, 0.9);
    overflow: hidden;
}

.navbar {
    display: block;
    width: auto;
    float: right;
    margin-right: 50px;
    margin-top: 50px;
}

.sidebar {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    z-index: 2;
}

.page-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    overflow-y: auto;
    z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.7s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

@media (max-width: 1024px) {
    .sidebar {
        right: 0;
    }

    .page-content {
        max-height: 80vh;
        top: 100px;
        transform: translate(-50%, 0);
    }

    .navbar {
        margin-right: 0;
        float: none;
    }
}
</style>
