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
                <SearchIcon class="icon"/>
            </button>
        </div>
    </div>
</template>

<style scoped>
    div{
        padding: 0 120px;
        justify-content: center;
        align-items: center;
    }
    h1{
        margin-bottom: 120px;
        align-self: flex-end;
        font-size: 96px;
        font-weight: 700;
        line-height: 112.5px;
    }
    .input-holder{
        padding: 0;
    }
    input{
        flex: 2 0 83%;
        padding: 18px 32px;
        border-radius: 100px;
        border: 1px solid #EEEBDD;
        background-color: transparent;
        color: var(--primary-text-color);
        outline: none;
    }
    input::placeholder{
            opacity: 30%;
    }
    button{
        flex: 0 2 17%;
        justify-content: space-between;
        padding: 18px 32px;
        margin-left: 12px;
        border-radius: 100px;
        font-size: 21px;
        font-weight: 400;
        line-height: 24.61px;
        background-color: var(--accent-color);
        transition: 0.3s;
    }
    button:hover{
        background-color: #8E0D0D;
    }
    @media only screen and (max-width: 767px){
        div{
            padding: 0 15px;
        }
        h1{
            align-self: center;
            font-size: 48px;
            font-weight: 700;
            line-height: 56.25px;
        }
        .input-holder{
            flex-direction: column;
            margin-top: 32px;
        }
        input,button{
            flex:none;
            width: 100%;
        }
        input{
            padding: 12px 32px;
        }
        button{
            padding: 12px 24px;
            margin: 12px 0 0;
            justify-content: center;
        }
        .icon{
            width: 18px;
            margin-left: 12px;
        }
    }
</style>
