<script setup>
    import '../assets/style/css/style.css';
    import SearchIcon from '../components/icons/SearchIcon.vue';
    import { onMounted, data } from 'vue';
    import { useMoviesStore } from '../stores/Movies';

    const moviesStore = useMoviesStore()
    onMounted( () => {
        moviesStore.getMovies()
    });
    
</script>

<template>
    <div class="d-flex col center w-100">
        <h1>IAMDB</h1>
        <form class="input-holder d-flex w-100">
            <input type="text" placeholder="" v-model="getMovies">
            <button type="submit" class="d-flex text-capitalize" >
                search
                <SearchIcon class="icon"/>
            </button>
        </form>
    </div>
</template>

<style scoped>
    div,form{
        padding: 0 120px;
        justify-content: center;
        align-items: center;
    }
    div{
        margin-top: 40px;
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
        flex: 2 0 86%;
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
        flex: 0 2 14%;
        justify-content: center;
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
    .icon{
        padding: 0;
        margin-left: 12px;
    }
    @media only screen and (max-width: 767px){
        div,form{
            padding: 0 15px;
            margin: 0;
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
        }
        .icon{
            width: 18px;
        }
    }
</style>
