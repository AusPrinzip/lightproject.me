<template>
    <div>
      <p>Find me on Telegram</p><a href="https://t.me/lightproject1"><font-awesome-icon :icon="['fab', 'telegram']"/></a>
    </div>
</template>
<script>
  export default {}
</script>

<style scoped>
    a, a:visited, a:active, a:link {
        color: #b6b6b6;
    }

    div {
        list-style: none;
        font-size: 36px;
        padding: 20px;
    }

    div svg:hover {
        color: #C62828;
        transition-duration: 0.3s;
    }

</style>
