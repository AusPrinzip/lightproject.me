<template>
    <div class="sidebar">
        <ul>
            <li>
                <a target="_blank" href="https://hive.blog/@lightproject"><font-awesome-icon :icon="['fab', 'hive']"/></a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/AusPrinzip"><font-awesome-icon :icon="['fab', 'github']"/></a>
            </li>
            <li>
                <a target="_blank" href="https://twitter.com/lightproject4"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
            </li>
            <li>
                <a target="_blank" href="https://stackoverflow.com/users/12381009/daniel-martinez"><font-awesome-icon :icon="['fab', 'stack-overflow']"/></a>
            </li>
            <li>
                <a target="_blank" href="https://www.linkedin.com/in/carlos-del-barrio-a7360645/"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
            </li>
        </ul>
    </div>
</template>
<script>

  export default {

  }
</script>
<style scoped>
    a, a:visited, a:active, a:link {
        color: #b6b6b6;
    }

    ul {
        list-style: none;
    }

    ul li {
        font-size: 36px;
        padding: 20px;
    }

    ul li svg:hover {
        color: var(--tangerine);
        transition-duration: 0.3s;
    }

</style>
