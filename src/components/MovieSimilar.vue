<script setup>
    import '../assets/style/css/style.css'
    import StarIcon from './icons/StarIcon.vue';
    import HeartIcon from './icons/HeartIcon.vue';
</script>

<template>
    <div class="movie-similar container">
        <h2 class="movie-similar-title title m-title">More like this</h2>
        <nav>
            <ul class="movie-similar-list d-flex row list-unstyled">
                <li class="similar-list-items col">
                    <a class="similar-items-link text-decoration-none" title="???" href="?????">
                        <div class="similar-items-holder">
                            <div class="similar-img-holder">
                                <img class="similar-img" src="???????" alt="?????">
                            </div>
                            <div class="similar-info-holder d-inline-flex row wrap">
                                <h3 class="similar-name col"></h3>
                                <div class="similar-rating d-inline-flex">
                                    <StarIcon class="similar-icon"/>
                                    <HeartIcon class="similar-icon"/>
                                    <span>?????</span>
                                </div>
                            </div>  
                        </div>
                    </a>
                </li>   
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    .movie-similar-title{
        margin-top: 50px;
    }
    .movie-similar-list{
        overflow-y: hidden;
        overflow-x:  auto;
        margin: 0 -12px;
        padding: 0;
        scroll-behavior:smooth;
        overscroll-behavior: contain;
        scroll-snap-align: start;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        
    }
    .movie-similar-list::-webkit-scrollbar{
        width: 8px;
        height: 10px;
        border-radius: calc(var(--border-radius-value)*4);
        background-color: blue;
    }
    .movie-similar-list::-webkit-scrollbar-thumb{
        visibility: hidden;
        background-color: red;
        background-clip: content-box;
        border: 3px solid transparent;
        border-radius: calc(var(--border-radius-value)*4);

    }
    .movie-similar-list:hover::-webkit-scrollbar-thumb{
        visibility: visible;
    }
    .movie-similar-list li{
        padding: 0;
        margin: 0;
        width: 25%;
        flex-shrink: 0;
    }
    .similar-items-holder{
        padding: 12px;
    }
    .similar-img{
        aspect-ratio: 2/3;
        width: 100%;
        border-radius: calc(var(--border-radius-value)*4);
    }
    .similar-info-holder{
        align-content: center;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
    }
    .similar-name, .similar-rating{
        font-size: 18px;
        line-height: 21px;
    }
    .similar-name{
        width: 72%;
        margin: 0;
        font-weight: 700;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-top: 2px;
    }
    .similar-rating{
        width: 28%;
        justify-content: end;
        align-items: center;
        overflow: hidden;
        font-weight: 400;
        color: var(--secondary-text-color);
    }
    .similar-rating span{
        opacity: 0.4;
    }
    .similar-icon{
        width: 21.2%;
        height: 67%;
        margin-right: 6px;

    }
    @media only screen and (max-width: 767px) {
        
        .movie-similar{
            margin: 0;
            padding: 0;
        }
        .movie-similar-title{
            margin: 0;
            padding: 24px 0;
        }
        .movie-similar-list li{
            padding: 0;
            margin: 0;
            flex-direction: column;
            width: 71.3%;
            flex-shrink: 0;
        }
        .similar-name{
            width: 72%;
        }
        .similar-rating{
            width: 28%;
        }
        .similar-name, .similar-rating{
            font-size: 16px;
            line-height: 19px;
        }
    }
</style>