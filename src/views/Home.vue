<template>
<!-- <div clas="d-flex justify-content-center p-5"> -->
<div class="p-4 m-3 p-lg-5 m-lg-5 p-md-3 m-md-3 m-sm-3 p-sm-3 ">
    <h2 class="mont ps-3 ps-lg-0 text-head text-white">
        VIDEO
    </h2>
    <div class="start-position w-100 px-3">
        <Header></Header>
        <div class="row m-auto w-100 justify-content-center mt-5">
            <div class="col-sm-12 col-md-12 col-lg-3">
                <div class="p-4 text-left bg-card muli">
                    <h5 class="mont text-start text-white">
                        Filter Results
                    </h5>
                    <form class="text-start my-5">

                        <div class="">
                            <label for="name" class="text-white">
                                Name(contains)
                            </label>
                            <input placeholder="Text String" class="form-control text-white rounded-0 muli bg-input border-0 my-2 py-2">
                        </div>

                        <br>

                        <div class="row mt-m-1">

                            <div class="col-sm-12 col-md-4 col-lg-12">
                                <div class="">
                                    <label for="name" class="text-white">
                                        Minimum Score
                                    </label>
                                    <input placeholder="1 - 10" class="form-control text-white rounded-0 muli bg-input border-0 mt-2 py-2">
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-12">
                                <div class="my-4 my-md-0 my-lg-4">
                                    <label for="select" class="text-white mb-1 muli">Order By</label>
                                    <div class="d-flex mt-2 mt-md-0">
                                        <button class="btn bg-button rounded-0">
                                            <Icon icon="dashicons:arrow-up-alt" class="text-white" />
                                        </button>
                                        <select placeholder="Release Date" class="form-control rounded-0 border-0" id="select">
                                            <option>
                                                Score
                                            </option>
                                            <option>
                                                Name
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-2  col-lg-12">
                                <div class="text-end w-100 ">
                                    <button style="margin-top:28px" class="btn rounded-0 bg-button form-control form-control-sm float-lg-end text-white muli px-lg-4 my-lg-2 border-0">
                                        <font class="small">
                                            Clear
                                        </font>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            <div class="col-sm-12 col-md-12 my-5 my-lg-0 col-lg-9">
                <div class="pl-2 pr-5">

                  
                    <div class="" style="max-height:100px !important">
                        <div class="row my-4 no-gutters pr-5 pl-2" v-for="game in games" :key="game.id" style="">
                            <div class="col-sm-12 col-md-2 pe-md-0" style="">
                                <div class="bg-dark w-100 h-100 mb-5" style="min-height:100px;position:relative">
                                    <img class="card-img" src="" alt="">
                                    <div class="m-4 d-flex badge d-md-none justify-self-center mont bg-button h4 align-self-center text-white justify-content-center align-items-center" style="width:40px;height:40px;border-radius:100%;font-size:20px;">
                                        <b>
                                            {{ Math.round(game.rating * 10) / 10}}
                                        </b>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-10 ps-md-0">
                                <button class="bg-card p-3 d-flex w-100 h-100 border-0 btn-card btn rounded-0">
                                    <div class="text-start w-100 pr-5 p-3">
                                        <div class="card-title mont h5 text-white" style="line-height:20px !important">
                                           {{ game.name }}<br>
                                            <font class="bg-text" style="font-size:13px !important">
                                               {{ timestamps_to_date(game.first_release_date) }}
                                            </font>
                                        </div>
                                        <div class="muli small bg-text text" style="font-size:12px">
                                            {{ game.summary}}
                                        </div>
                                    </div>
                                    <div class="mx-4 d-none d-md-flex justify-self-center mont bg-button h5 align-self-center text-white justify-content-center align-items-center" style="width:50px;height:40px;border-radius:100%">
                                        <b>{{ Math.round(game.rating * 10) / 10 }}</b>
                                    </div>
                                </button>
                            </div>
                        </div>

                        
                        <!-- <div class="row my-4 no-gutters pr-5 pl-2" :key="game.id" style="">
                            <div class="col-sm-12 col-md-2 pe-md-0" style="">
                                <skeleton-loader-vue class="bg-dark w-100 h-100 mb-5" style="min-height:100px;position:relative"/>
                                    <img class="card-img" src="" alt="">
                                     <div class="m-4 d-flex badge d-md-none justify-self-center mont bg-button h4 align-self-center text-white justify-content-center align-items-center" style="width:40px;height:40px;border-radius:100%;font-size:20px;">
                                        <b>7</b>
                                    </div> 
                            </div>
                            <div class="col-sm-12 col-md-10 ps-md-0">
                                <button class="bg-card p-3 d-flex w-100 h-100 border-0 btn-card btn rounded-0">
                                    <div class="text-start w-100 pr-5 p-3">
                                        <skeleton-loader-vue class="card-title mont h5 text-white" style="line-height:20px !important"/>
                                            <skeleton-loader-vue class="bg-text" style="font-size:13px !important"/>
                                            <skeleton-loader-vue class="muli small bg-text text" style="font-size:12px"/>
                                    </div>
                                    <skeleton-loader-vue 
                                        class="mx-4 d-none d-md-flex justify-self-center mont bg-button h5 align-self-center text-white justify-content-center align-items-center" 
                                        style="width:50px;height:40px;border-radius:100%"
                                    />
                                </button>
                            </div>
                        </div> -->
                    </div>


                </div>
            </div>
        </div>
    </div>
</div>
<!-- </div> -->
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";
import {
    Icon
} from '@iconify/vue';
import Header from '../components/Header.vue';

import GameListService from "../services/GameListService";
import Game from "../types/Game";
import ResponseData from "../types/ResponseData";

export default defineComponent({
    name: "Home",
    components: {
        Icon,
        Header
    },
    data() {
        return {
            games: [] as Game[]
        }
    },
    methods:{
        timestamps_to_date(old_date: number){
            const date = new Date(old_date);
            const formatted_date = this.fN(date.getDate()) + '/' + this.fN(date.getMonth()+1) + '/' + this.fN(date.getFullYear())
            console.log(formatted_date)
            return formatted_date;
        },
        fN(myNumber:number){
            let formattedNumber = myNumber.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false
            })
            return formattedNumber;
        },
        truncate(str:string, n:number){
            return (str.length > n) ? str.substr(0, n-1) + '...' : str;
        }
    },
    created() {
      const gls = new GameListService();
      
        gls.getAll()
            .then((response: ResponseData) => {
                this.games = response.data
                console.log(response)
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }
});
</script>

<style>

</style>
