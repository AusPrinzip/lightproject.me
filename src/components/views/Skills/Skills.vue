<template>
    <div class="skills">
        <div class="languages">
            <div class="heading">
                <font-awesome-icon class="icon" :icon="faPlus" />
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
                <font-awesome-icon class="icon" :icon="faPlus" />
                Libraries
            </div>
            <ul>
                <li v-for="library in libraries" :key="library.name">
                    <div class="skill-name">{{ library.name }}</div>
                    <div>
                        <LevelProgress :value="library.level"></LevelProgress>
                        <div class="level">{{ library.level }}%</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="frameworks">
            <div class="heading">
                <font-awesome-icon class="icon" :icon="faPlus" />
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
import LevelProgress from "../../domains/Common/LevelProgress.vue";
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faPlus from "@fortawesome/fontawesome-free-solid/faPlus";

export default {
    name: "ListGroup",
    props: ["leftColData", "rightColData", "leftColLabel", "rightColLabel"],
    components: {
        LevelProgress,
    },
    computed: {
        faPlus() {
            return faPlus;
        },
    },
    data: () => ({
        languages: [
            {
                name: "JavaScript",
                level: 90,
            },
            {
                name: "TypeScript",
                level: 60,
            },
            {
                name: "Solidity",
                level: 50,
            },
            {
                name: "Python",
                level: 50,
            },
            {
                name: "C#",
                level: 25,
            },
        ],
        frameworks: [
            {
                name: "Vue.js 3+",
                level: 75,
            },
            {
                name: "React.js 16+",
                level: 50,
            },
            {
                name: "expressJS",
                level: 75,
            },
        ],
        libraries: [
            {
                name: "web3",
                level: 65,
            },
            {
                name: "jQuery",
                level: 75,
            },
            {
                name: "Bootstrap",
                level: 75,
            },
            {
                name: "UI-Material",
                level: 50,
            },
        ],
    }),
};
</script>
<style scoped>
.languages,
.frameworks {
    min-width: 250px;
}

.heading {
    color: #c62828;
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
    font-size: 15px;
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
