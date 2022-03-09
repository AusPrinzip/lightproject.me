<template>
    <div class="welcome-content">
        <div class="me">
            <img src="@/assets/images/photo.jpeg" />
            <span class="my-name">“Quality over Quantity”</span>
        </div>
        <div class="description">
            <span class="rest-info">
                Hello there, my name is Daniel and I work as a Full-Stack web
                developer. My main skill is software architecture, including AWS
                serverless solutions and decentralised apps. I´m passionate
                about blockchain technologies with proven professional
                experience in the STEEM/HIVE ecosystem. Additionally, I am
                currently expanding my skillset with web3 and solidity smart
                contracts programming language. At the moment I work as a
                part-time freelance Full-Stack web developer and currently
                developing my own alternative UI for the NFT Game
                "Splinterlands"
                <a href="https://splinter.monster">risitasApp</a>. Feel free to
                contact me for quotes or any inquiry you might have.
            </span>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
a:link {
    color: green;
    background-color: transparent;
    text-decoration: none;
}

a:visited {
    color: pink;
    background-color: transparent;
    text-decoration: none;
}

a:hover {
    color: red;
    background-color: transparent;
    text-decoration: underline;
}

a:active {
    color: yellow;
    background-color: transparent;
    text-decoration: underline;
}

.me {
    float: left;
    line-height: 100px;
}

.me img {
    width: 100px;
    height: 100px;
    border-radius: 51%;
    border: 3px solid #f1f1f1;
}

.me .my-name {
    font-size: 36px;
    vertical-align: top;
}

.description {
    display: inline-block;
    padding: 0 20px 0 20px;
    max-width: 550px;
    text-align: justify;
}

.description .my-name {
    display: block;
    font-weight: bold;
    font-size: 36px;
}

.description .rest-info {
    font-weight: 100;
    line-height: 1.3;
    /*        word-spacing: 4px;*/
}

@media (max-width: 1024px) {
    .description {
        font-size: 14px;
    }

    .me {
        float: none;
        margin: 0 auto;
    }

    .welcome-content {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

@media (max-width: 805px) {
    .welcome-content {
        width: 80vw;
        margin-left: -30px;
    }
}

@media (max-width: 500px) {
    .me img {
        display: block;
        height: 125px;
        width: 125px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    .me .my-name {
        font-size: 30px;
        text-align: left;
    }

    .me {
        line-height: 45px;
    }
}

@media (max-width: 333px) {
    .me .my-name {
        font-size: 26px;
    }
}
</style>
