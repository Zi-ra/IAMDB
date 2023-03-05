<script setup>
    import '../assets/style.css';
    import CloseIcon from '../components/icons/CloseIcon.vue'
</script>
<template>
    <div class="photos-modal" id="photos-modal-window-1">
        <div class="modal-img-holder">
            <CloseIcon class="modal-close"/>
            <img class="modal-img" src="" alt="">
        </div>                
    </div>
</template>
<style scoped>
    .photos-modal{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    visibility: hidden !important;
    opacity: 0;
    pointer-events: none;
    transition: all calc(0.6s);
    }  
    .photos-modal:target {
        visibility: visible !important;
        opacity: 1;
        pointer-events: auto;
    }
    .modal-img-holder{
        display: flex;
        width: 65%;
        position: absolute;
        align-items: center;
        justify-content: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px;
        margin: 0;
        background-color: rgba(238, 235, 221, 0.1);
    }
    .modal-img{
        width: 100%;
        object-fit: contain;
    }
    .modal-close{
        position: absolute;
        top: 0;
        right: 0;
        width: fit-content;
        color: var(--secondary-text-color);
        opacity: 0.4;
        font-size: 85%;
        font-weight: 700;
        line-height: 50px;
        text-align: center;
        margin: -0.5% 0;
        padding: 0 2%;
        text-decoration: none;
        transition: all calc(0.5s);
    }
    .modal-close:hover {
        color: black;
    }
    @media only screen and (max-width: 767px) {
        .modal-img-holder{
            width: 100%;
        }
    }
</style>