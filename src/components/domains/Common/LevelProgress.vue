<template>
    <div class="level-progress">
        <div :style="`width: ${value}%`"></div>
    </div>
</template>

<script>
    export default {
        name: 'LevelProgress',
        props: ['value']
    }
</script>

<style scoped>
    .level-progress {
        display: inline-block;
        border-radius: 8px;
        width: 60%;
        padding: 0;
        border: 0 none;
        background: #851d1d;
    }

    .level-progress > div {
        border-radius: 8px;
        background: #ea3030;
        height: 15px;
    }

    @media(max-width: 1024px) {
        .level-progress {
            width: 45%;
        }
        .level-progress > div {
            height: 11px;
        }
    }
</style>