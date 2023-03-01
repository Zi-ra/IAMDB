<script setup>
    import '../assets/style.css';
    import MovieInfo from './MovieInfo.vue';
    import MoviePhotos from './MoviePhotos.vue';
    import MovieSimilar from './MovieSimilar.vue';
    import MovieFaqs from './MovieFaqs.vue';
</script>

<template>
    <div>
        <div class="movie-bg-img-holder"></div>
        <MovieInfo/>
        <MoviePhotos/>
        <MovieSimilar/>
        <MovieFaqs/>
    </div>
</template>

<style scoped>
    .movie-bg-img-holder{
        background-image: linear-gradient(180deg, rgba(27, 23, 23, 0)58.33%, rgba(27, 23, 23, 0.8)71.23%, var(--bg-color) 100% );
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        height: calc(var(--d-bg-height)*2);
    }

    @media only screen and (max-width: 767px) {
        .movie-bg-img-holder{
            height: calc(var(--m-bg-height)*0.77);
        }
    }
</style>