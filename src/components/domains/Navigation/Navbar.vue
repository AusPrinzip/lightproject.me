<template>
    <div class="navbar">
        <ul>
            <li>
                <router-link to="/" exact>Home</router-link>
            </li>
            <li>
                <router-link to="/skills" exact>Skills</router-link>
            </li>
            <li>
                <router-link to="/projects">Projects</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {}
</script>
<style scoped>
    .navbar {

    }

    ul {
        list-style: none;
        padding: 0;
    }

    ul li {
        display: inline-block;
    }

    li a, li a:visited {
        text-decoration: none;
        color: #F1F1F1;
        font-weight: bold;
        padding: 10px;
    }

    li a:hover {
        color: #C62828 !important;
        transition-duration: 0.3s
    }

    li .router-link-active {
        border-bottom: 3px solid #f44336;
        color: #f44336 !important;
    }
</style>
