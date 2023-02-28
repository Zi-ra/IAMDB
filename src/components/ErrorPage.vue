<script>
    import '../assets/style.css'
</script>

<template>
    <div class="d-flex col center w-100">
        <h1>404</h1>
        <h2>Movie not found</h2>
    </div>
</template>

<style scoped>
    div{
        justify-items:center;
        align-items: center;
    }
    h1{
        font-size: 128px;
        font-weight: 700;
        line-height: 150px;
        opacity: 40%;
        color: var(--primary-text-color);
    }
    h2{
        font-size: 48px;
        font-weight: 700;
        line-height: 56.25px;
        color: var(--accent-color);
    }

    @media only screen and (max-width: 767px){
        h1{
            font-size: 96px;
            line-height: 112.5px;
        }
        h2{
            font-size: 40px;
            line-height: 46.88px;
        }
    }
</style>
