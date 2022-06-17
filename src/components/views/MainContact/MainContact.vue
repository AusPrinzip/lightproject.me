<template>
  <div>
    <a href="https://t.me/lightproject1">Find me on Telegram<font-awesome-icon class="fa-sm" :icon="['fab', 'telegram']"/></a>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
a,
a:visited,
a:active,
a:link {
    color: #b6b6b6;
}

div {
    list-style: none;
    font-size: 36px;
    padding: 20px;
}

div svg:hover {
    color: var(--tangerine);
    transition-duration: 0.3s;
}

p {
    font-size: 15px;
}

</style>
