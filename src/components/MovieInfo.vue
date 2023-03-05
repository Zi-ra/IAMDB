<script setup>
    import '../assets/style/css/style.css'
    import InfoCast from '../components/InfoCast.vue'
    import HeartIcon from './icons/HeartIcon.vue';
    import PlayIcon from './icons/PlayIcon.vue';
    import ShareIcon from './icons/ShareIcon.vue';
</script>

<template>
    <div class="container">
        <div class="movie-info-holder d-flex row">
            <div class="movie-pictorial-data">
                <img class="movie-poster" src="???????" alt="?????">
                <div class="movie-graph-holder d-flex row">
                    <div class="graph" >?????????</div>
                    <div class="graph-details d-flex col">
                        <span class="graph-details-number">?????????</span>
                        <span class="graph-details-text">ratings on IMDB</span>
                    </div>
                </div>
            </div>
            <div class="movie-data ">
                <div class="movie-data-info">
                    <h1 class="movie-info-title">????????</h1>
                    <span class="movie-info-director">Directors: Jon Favreau</span>
                    <div class="movie-info-time">
                        <ul class="info-time-list d-flex row list-unstyled">
                            <li class="info-time-items col"><div class="time-items">2008</div></li>
                            <li class="info-time-items col"><di class="time-items">PG-13</di></li>
                            <li class="info-time-items col"><div class="time-items last-child">2h 6m</div></li>
                        </ul>
                    </div>
                    <div class="movie-btn-holder d-flex row">
                        <a class="movie-thrailer-btn-link border-100 text-decoration-none"  href="#" title="Watch Thrailer" target="_blank">
                            <button class="movie-thrailer-btn border-100 d-inline-flex">    
                                <span class="thrailer-btn-text text-center">Watch thrailer</span>
                                <PlayIcon class="thrailer-btn-icon"/>
                            </button>
                        </a>
                        <a class="movie-share-btn-link border-50 text-decoration-none" href="#" title="Share" target="_blank" >
                            <button class="movie-share-btn d-flex border-50">    
                                <ShareIcon class="share-btn-icon"/>
                            </button>    
                        </a>
                        <a class="movie-share-btn-link border-50 text-decoration-none" href="#" title="Share" target="_blank" >
                            <button class="movie-share-btn d-flex border-50">    
                                <HeartIcon class="share-btn-icon"/>
                            </button>    
                        </a>
                    </div>
                    <div class="movie-info-summary">
                        <p>??????????</p>
                    </div>
                </div>
                <div class="movie-data-details">
                    <h2 class="details-title">Details</h2>
                    <div class="details-table">
                        <div class="table-items-holder">
                            <div class="table-items-title">Writers</div>
                            <div class="table-items-info">Mark Fergus, Hawk Ostby, Art Marcum</div>
                        </div>
                        <div class="table-items-holder">
                            <div class="table-items-title">Genres</div>
                            <div class="table-items-info">Action, Adventure, Sci-Fi</div>
                        </div>
                        <div class="table-items-holder">
                            <div class="table-items-title">Awards</div>
                            <div class="table-items-info">Nominated for 2 Oscars, 21 wins & 73 nominations total</div>
                        </div>
                        <div class="table-items-holder" id="table-items-info-third">
                            <div class="table-items-title">Country of Origin</div>
                            <div class="table-items-info">USA, Canada</div>
                        </div>            
                        <div class="table-items-holder" id="table-items-info-last">
                            <div class="table-items-title">IMDB Rating</div>
                            <div class="table-items-info">7.9</div>
                        </div>
                    </div>
                </div>
            </div>
            <InfoCast/>
        </div>
    </div>
</template>

<style scoped>
    .movie-info-holder{
        margin-top: calc(var(--d-bg-height)*-0.6);
        justify-content: space-between;
    }

/* -----Movie Pictorial Data----- */

    .movie-pictorial-data{
        width: 23%;
    }
    .movie-poster{
        width: 100%;
        border-radius: calc(var(--border-radius-value)*4);
        box-shadow: 0px 6px 12px 0px var(--bg-color) ; 
    }
    .movie-graph-holder{
        align-items: center;
        justify-content: flex-start;
        margin-top: 24px;
    }
    .graph{
        --graph-percentage: 79;
        --graph-border: 6px;
        --graph-color: var(--accent-color);
        --graph-width: 80px;
        display: inline-grid;
        place-content: center;
        position: relative;
        width: var(--graph-width);
        aspect-ratio: 1;
        margin: 5px;
        padding: 20px;
        font-size: 25px;
        font-weight: 700;
        line-height: 29px;
    }
    .graph:before{
        content:"";
        position: absolute;
        inset:0;
        border-radius: 50%;
        background: conic-gradient(var(--graph-color) calc(var(--graph-percentage)*1%), #0000 0),
        radial-gradient(farthest-side, var(--bg-color) calc(99% - var(--graph-border)), rgba(238, 235, 221, 0.4) calc(100% - var(--graph-border)) );;
        -webkit-mask:radial-gradient(farthest-side, #0000 0 calc(99% - var(--graph-border)), var(--graph-color) calc(100% - var(--graph-border)) );
        mask: radial-gradient(farthest-side, #0000 0 calc(99% - var(--graph-border)), var(--graph-color) calc(100% - var(--graph-border)) ); 
    }
    .graph-details{
        margin-left: 18px;
        align-items: flex-start;
    }
    .graph-details-number{
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        margin-bottom: 6px;
    }
    .graph-details-text{
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
    }

/* -----Movie Data----- */

    .movie-data{
        width: 42%;
        margin: 50px -17.5px 0;
    }
    .movie-info-title{
        font-size: 48px;
        font-weight: 700;
        line-height: 40px;
        margin: 0;
        padding-bottom: 6px;
    }
    .movie-info-director{
        padding: 0;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
    }
    .movie-info-time{
        width: 100%;
        margin: 0;
    }
    .info-time-list{
        width: 42%;
        margin: 24px 0;
        padding: 0;
    }
    .info-time-items{
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
    }
    .time-items{
        margin-right: 12px;
    }
    .time-items:not(.last-child)::after{
        content: "•";
        margin-left: 12px;
        width: fit-content;
    }
    .movie-btn-holder{
        justify-content: flex-start;
        align-items: center;
        width: auto;
    }
    .movie-thrailer-btn-link{
        width: 45.2%;
        margin-right: 18px;
    }
    .movie-thrailer-btn{
        justify-content: center;
        align-items: center;
        padding: 18px 32px;
        background-color: var(--accent-color);
        border: none;
        font-family: var(--main-font);
    }
    .movie-thrailer-btn:hover{
        background-color: #8E0D0D;
    }
    .thrailer-btn-text{
        font-size: 21px;
        font-weight: 400;
        line-height: 25px;
        color: var(--primary-text-color);
    }
    .thrailer-btn-icon{
        width: 11%;
        margin-left: 9%;
        padding: 0;
    }
    .movie-share-btn,.movie-thrailer-btn{
        transition: all calc(0.4s);

    }
    .movie-share-btn-link{
        width: 12.105%;
    }
    .movie-share-btn{
        align-items: center;
        padding: 18px;
        border: 2px solid var(--primary-text-color);
        background-color: var(--bg-color);
    }
    .movie-share-btn:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
    .share-btn-icon{
        width: 100%;
    }
    .movie-info-summary{
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: var(--secondary-text-color);
        opacity: 0.6;
        margin: 40px 0 42px 0;
    }
    .details-title{
        font-size: 28px;
        font-weight: 700;
        line-height: 50px;
        margin: 0;
    }
    .details-table{
        width: 100%;
    }
    .table-items-holder{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid rgba(238, 235, 221, 0.25);
        padding: 12px 0;

    }
    .table-items-title{
        flex-basis: 34%;
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        color: var(--primary-text-color);
        margin: 0;
    }
    .table-items-info{
        flex-basis: 66%;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: var(--secondary-text-color);
        opacity: 0.6;
        padding-left: 6px;
    }
    #table-items-info-third{
        border-bottom: none;
    }
    #table-items-info-last{
        display: none;
    }
    @media only screen and (max-width: 767px){
        .movie-info-holder{
        flex-direction: column;
        margin-top: calc(var(--m-bg-height)*-0.44);
        }
        .movie-pictorial-data{
            display: none;
        }
        .movie-data{
            width: 100%;
            padding: 0;
            margin: 50px 0 0;
        }
        .movie-info-title{
            font-size: 32px;
            line-height: 40px;
        }
        .movie-info-director{
            font-size: 16px;
            line-height: 19px;
        }
        .info-time-list{
            width: 100%;
            margin: 20px 0;
        }
        .info-time-items{
            font-size: 14px;
            line-height: 16px;
        }
        .movie-thrailer-btn-link{
            flex-basis: 53.7%;
        }
        .movie-thrailer-btn{
            padding: 12px 24px;
            width: 100%;

        }
        .thrailer-btn-text{
            font-size: 16px;
            font-family: 20px;
        }
        .thrailer-btn-icon{
            width: 11.4%;
            margin-left: 9.8%;
            padding: 0;
        }
        .movie-share-btn-link{
            width: 13.337%;
        }
        .movie-share-btn{
            padding: 11px;
        }
        .movie-info-summary{
            font-size: 14px;
            line-height: 16px;
            padding-right: 5px;
            margin: 36px 0 18px 0;
        }

        .details-title{
            padding: 20px 0 ;
            font-size: 24px;
            line-height: 28px;
        }
        .table-items-holder{
            border-bottom: 1px solid rgba(238, 235, 221, 0.1);
        }
        .table-items-title{
            flex-basis: 52%;
            font-size: 16px;
            line-height: 19px;
        }
        .table-items-info{
            flex-basis: 48%;
            font-size: 14px;
            line-height: 16px;
        }
        #table-items-info-last{
            display: flex;
            border-top: 1px solid rgba(238, 235, 221, 0.1);
            border-bottom: none;
        }
    }
</style>