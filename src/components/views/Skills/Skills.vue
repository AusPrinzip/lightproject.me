<template>
    <div class="skills">
        <div class="languages">
            <div class="heading">
                <font-awesome-icon class="icon" :icon="faPlus"/>
                Languages
            </div>
            <ul>
                <li v-for="language in languages" :key="language.name">
                    <div class="skill-name">{{ language.name }}</div>
                    <div>
                        <LevelProgress :value="language.level"></LevelProgress>
                        <div class="level">{{ language.level }}%</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="frameworks">
            <div class="heading">
                <font-awesome-icon class="icon" :icon="faPlus"/>
                AWS
            </div>
            <ul>
                <li v-for="aws in aws" :key="aws.name">
                    <div class="skill-name">{{ aws.name }}</div>
                    <div>
                        <LevelProgress :value="aws.level"></LevelProgress>
                        <div class="level">{{ aws.level }}%</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="frameworks">
            <div class="heading">
                <font-awesome-icon class="icon" :icon="faPlus"/>
                Frameworks
            </div>
            <ul>
                <li v-for="framework in frameworks" :key="framework.name">
                    <div class="skill-name">{{ framework.name }}</div>
                    <div>
                        <LevelProgress :value="framework.level"></LevelProgress>
                        <div class="level">{{ framework.level }}%</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  import LevelProgress from '../../domains/Common/LevelProgress.vue'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'

  export default {
    name: 'ListGroup',
    props: ['leftColData', 'rightColData', 'leftColLabel', 'rightColLabel'],
    components: {FontAwesomeIcon, LevelProgress},
    computed: {
      faPlus() {
        return faPlus
      }
    },
    data: () => ({
      languages: [
        {
          name: 'Python',
          level: 45
        },
        {
          name: 'JavaScript',
          level: 75
        },
        {
          name: 'HTML5',
          level: 75
        },
        {
          name: 'CSS3',
          level: 60
        },
        {
          name: 'Mongodb',
          level: 65
        },
        {
          name: 'C#',
          level: 15
        }
      ],
      frameworks: [
        {
          name: 'React.js 16+',
          level: 50
        },
        {
          name: 'Vue.js 3+',
          level:75
        },
        {
          name: 'UI-Material',
          level: 45
        },
        {
          name: 'Bootstrap',
          level: 50
        },
        {
          name: 'jQuery',
          level: 30
        }
      ],
      aws: [
        {
          name: 'AMI',
          level: 50
        },
        {
          name: 'Cloudfront',
          level: 75
        },
        {
          name: 'Cloudformation',
          level: 40
        },
        {
          name: 'Fargate',
          level: 40
        },
        {
          name: 'EC2',
          level: 75
        },
        {
          name: 'S3',
          level: 75
        },
        {
          name: 'Codepipeline',
          level: 60
        },
      ]
    })
  }
</script>
<style scoped>
    .languages, .frameworks {
        min-width: 250px;
    }

    .heading {
        color: #C62828;
        font-weight: bold;
        font-size: 28px;
    }

    .heading .icon {
        font-size: 10px;
        vertical-align: middle;
        padding: 5px;
    }

    ul {
        list-style: none;
        padding-left: 20px;
    }

    ul li {
        text-transform: uppercase;
        font-size: 24px;
        padding: 10px 0 10px 0;
    }

    .skills {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: left;
        justify-content: center;
        width: 100%;
    }

    .level {
        display: inline-block;
        font-size: 14px;
        vertical-align: top;
        padding: 6px;
    }

    .skill-name {
        font-size: 15px
    }

    @media (max-width: 1024px) {
        .heading {
            font-size: 20px;
            margin-left: 10px;
        }

        .skill-name {
            font-size: 14px;
        }
    }

    @media (max-width: 374px) {
        .skills {
            margin-left: -30px;
        }
    }
</style>
