<script setup>
    import '../assets/style/css/style.css'
</script>

<template>
    <div class="container">
        <h2 class="movie-faqs-title title m-title">FAQs</h2>
        <ul class="movie-faqs-list list-unstyled">
            <li class="faqs-list-items">
                <details class="faqs-holder">
                    <summary class="faqs-qn list-unstyled"></summary>
                    <p class="faqs-answ"></p>
                </details>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .movie-faqs-title{
    margin-top: 50px;
    }
    .faqs-holder{
        width: fit-content;
    }
    .movie-faqs-list{
        padding: 0px;
        margin: 0px;
        
    }
    .faqs-qn{
        font-size: 21px;
        font-weight: 700;
        line-height: 25px;
        padding: 12px 0;
        cursor: pointer;
    }
    .faqs-answ{
        padding: 6px 0 6px 28px;
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: rgba(238, 235, 221, 0.6);
        border-left: 4px solid var(--accent-color);
    }
    @media only screen and (max-width: 767px) {
        .faqs-qn{
            font-size: 18px;
            line-height: 21px;
            padding-right: 25px;
        }
        .faqs-answ{
            padding: 6px 8px 6px 24px;
            font-size: 12px;
            line-height: 14px;
        }
    }
</style>