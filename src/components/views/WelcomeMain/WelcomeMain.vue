<template>
    <div class="welcome-content">
        <div class="me">
            <img src="@/assets/images/photo.jpg" />
        </div>
        <div class="description">
            <span class="rest-info">
                Self-driven full-stack developer with extensive professional experience in backend development and AWS cloud solutions. My main focus is in the crypto industry. I'm an extremely curious person who is always learning new things.
                <br><br>
                For interview requests, please, <a class="recruiters-link" href="https://9qv37zmmbvd.typeform.com/to/jXonDQwJ"><b>fill in this form</b></a>.
            </span>
        </div>
<!--         <div class="recruiters">
            For interview requests, please, fill in this <a href="https://9qv37zmmbvd.typeform.com/to/jXonDQwJ">form</a>.
        </div> -->
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
@media screen and (min-width: 1001px) {
    .me .my-name {
        font-size: 32px;
        vertical-align: top;
        max-width: 60px;
    }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 1000px) {
    .me .my-name {
        font-size: 28px;
        vertical-align: top;
        max-width: 60px;
    }
}


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
    display: flex;
    justify-content: center;
    width: 100%;
}

.me img {
    width: 150px;
    border-radius: 51%;
    border: 3px solid #f1f1f1;
    /*border-color: var(--tangerine);*/
    margin:  7%;
}


.description {
    font-size: 24px;
    display: inline-block;
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
    /*word-spacing: 4px;*/
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
