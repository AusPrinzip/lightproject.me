<template>
    <div class="skill">
        <div class="infos">
            <div class="heading">{{ name }}</div>
            <div class="desc">{{ desc }}</div>
        </div>
        <div class="level">
            {{ level }}%
        </div>
    </div>
</template>
<script>
  export default {
    name: 'skill',
    props: {
      name: {
        type: String,
        default: 'Skill..'
      },
      desc: {
        type: String,
        default: 'Skill description'
      },
      img: {
        type: String,
        default: ''
      },
      level: {
        type: Number,
        default: 0
      }
    },
    data: () => ({
      showLevel: 0
    })
  }
</script>
<style scoped>
    .skill {
        width: 100%;
        min-height: 100px;
        display: inline-block;
        border: 2px solid #C62828;
        border-radius: 10px;
        text-align: left;
        padding: 10px;
        margin: 10px;
    }

    .skill .heading, .skill .infos {
        display: inline-block;
    }

    .heading {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 5px;
    }

    .infos {
        max-width: 70%;
    }

    .level {
        position: relative;
        top: 50%;
        float: right;
        transform: translateY(-50%);
        font-size: 36px;
    }
</style>
