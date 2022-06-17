<template>
    <div class="skills">
        <div class="projects">
            <div class="heading">
                <font-awesome-icon class="icon" :icon="faPlus" />
                Projects
            </div>
            <ul>
                <li v-for="project in projects" :key="project.name">
                    <h4>
                        <a :href="project.link">{{ project.name }}</a>
                    </h4>
                    <p>{{ project.description }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default {
    data: () => ({
        projects: [
            {
                name: "risitasApp",
                link: "https://splinter.monster",
                description:
                    "Improve your Splinterlands NFT gaming winrate with risitas advanced User Interface",
            },
            {
                name: "coindenser",
                link: "https://coindenser.com",
                description: "Crypto news blog",
            },
            {
                name: "coinsocialmedia",
                link: "https://coinsocialmedia.com",
                description:
                    "How is crypto doing on social media? Separate organic interest from bots and paid engagement. Our artificial intelligence will help you see who is talking about your favourite cryptocurrency on YouTube videos, Twitter or Telegram channels",
            },
            {
                name: "hivetips",
                link: "https://chrome.google.com/webstore/detail/hivetips/pepgdkiflaefcmpogbpjpckbbddbjamc?hl=en",
                description:
                    "A chrome extension for tipping on social media platforms with HIVE tokens",
            },
        ],
    }),
    computed: {
        faPlus() {
            return faPlus;
        },
    },
};
</script>
<style scoped>
a:link {
    color: var(--tangerine);
    background-color: transparent;
    text-decoration: none;
}

a:visited {
    color: var(--tangerine-light);
    background-color: transparent;
    text-decoration: none;
}

a:hover {
    color: var(--tangerine-dark);
    background-color: transparent;
    text-decoration: underline;
}

a:active {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
}

.projects {
    display: inline-block;
    padding: 0 20px 0 20px;
    max-width: 550px;
    text-align: justify;
}

.frameworks {
    min-width: 250px;
}

.heading {
    color: var(--tangerine);
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

/*ul li {
text-transform: uppercase;
font-size: 24px;
padding: 10px 0 10px 0;
}
*/

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
