<script setup>
    import '../assets/style/css/style.css';
    import ToRightIcon from './icons/ToRightIcon.vue';
</script>

<template>
    <nav class="movie-cast" id="movie-cast col">
        <h2 class="movie-cast-title m-title">Cast & Crew</h2>
        <ul class="movie-cast-list list-unstyled">
            <li class="cast-list-items">
                <a class="cast-holder d-flex row wrap text-decoration-none" href="#" target="_blank">
                    <img class="cast-img border-50" src="??????" alt="?????">
                    <div class="cast-info-holder">
                        <div class="cast-name">??????</div>
                        <div class="cast-role">?????</div>
                    </div>
                </a>
            </li>       
        </ul>
        <div class="movie-cast-btn-holder">
            <a class="movie-cast-btn d-flex row text-decoration-none" href="#movie-cast" target="_self">
                <span class="cast-btn-text">Show all </span>
                <ToRightIcon class="cast-btn-icon"/>
            </a>
        </div>              
    </nav>
</template>

<style scoped>
    .movie-cast{
        width: 22.109%;
        margin-top: 50px;
    }
    .movie-cast-title{
        font-size: 28px;
        font-weight: 700;
        line-height: 50px;
        margin: 0;
    }
    .movie-cast-list{
        padding: 0;
        margin: 0;
    }
    .cast-holder{
        padding-top: 24px;
    }
    .cast-img{
        width: 28.27%;
        aspect-ratio: 1;
        object-fit: cover;
    }
    .cast-info-holder{
        padding-left: 12px;
        align-self: center;
        text-align: start;

    }
    .cast-name{
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        color: var(--primary-text-color);
    }
    .cast-role{
        margin-top: 6px;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        color: var(--secondary-text-color);
        opacity: 0.6;
    }
    .cast-role::before{
        content: 'as ';
    }
    .movie-cast-btn-holder{
        width: 100%;
        margin-top: 24px;
    }
    .movie-cast-btn{
        width: 40.7%;
        justify-content: start;
        align-items: center;
        padding: 15px 0 0;
    }
    .cast-btn-text{
        color: var(--accent-color);
        padding-right: 12px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        line-height: 21px;
    }
    .cast-btn-icon{
        width: 25.01%;
    }
    @media only screen and (max-width: 767px) {
        .movie-cast{
            width: 100%;
        }
        .movie-cast-title{
            margin: 0;
        }
        .cast-img{
            width: 22.73%;
        }
        .movie-cast-btn-holder{
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        .movie-cast-btn{
            width: 110px;
            margin: 0;
        }
        .cast-btn-icon{
            width: 25%;
        }

    }
</style>