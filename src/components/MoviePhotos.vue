<script setup>
    import '../assets/style.css';
    import Vector from './icons/Vector.vue';
</script>

<template>
    <div class="container">
        <h2 class="movie-photos-title title m-title text-capitalize">photos</h2>
        <ul class="movie-photos-list d-flex row wrap list-unstyled justify-content-between">
            <li class="photos-list-items col">
                <router-link 
                to="/photo/:id"
                class="photos-link">
                    <div class="photo-items-holder" id="photos-items">
                        <img class="photos-img" src="assets/images/photos1.jpg" alt="Iron Man photo 1">
                        <div class="photos-icon">
                            <Vector class="icon-overlay"/>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .movie-photos-title{
        margin-top: 62px;
    }
    .movie-photos-list{
        margin: 0 -12px;
        padding: 0;
    }
    .movie-photos-list li{
        padding: 0;
        margin: 0;
        flex: 0 0 20%;
    }
    .photo-items-holder{
        width: 100%;
        position: relative;
        padding:12px;
        margin: 0;
    }
    .photos-img{
        aspect-ratio: 3/2;
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: calc(var(--border-radius-value)*4);
    }
    .photo-items-holder:hover .photos-img{
        opacity: 0.71;
    }
    .icon-overlay{
        width: 13.08%;
        position: absolute;
        top: 40%;
        left: 44%;
        opacity: 0;
    }
    .photo-items-holder:hover .icon-overlay{
        opacity: 1;
    }

    @media only screen and (max-width: 767px) {
        .movie-photos-list{
        margin: 0 -6px;
        }
        .movie-photos-list li{
            flex-direction: column;
            padding: 0;
            margin: 0;
            flex: 0 0 50%;
        }
        .photo-items-holder{
            padding: 6px;
        }
    }
</style>