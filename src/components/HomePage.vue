<script setup>
    import '../assets/style.css';
    import SearchIcon from './icons/SearchIcon.vue';
</script>

<template>
    <div class="d-flex col center w-100">
        <h1>IAMDB</h1>
        <div class="input-holder d-flex w-100">
            <input type="text" placeholder="Type the name of your favorite movie ...">
            <button class="d-flex text-capitalize">
                search
                <SearchIcon/>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
