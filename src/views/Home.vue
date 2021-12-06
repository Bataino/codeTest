<template>
<!-- <div clas="d-flex justify-content-center p-5"> -->
<div class="m-3 p-lg-5 m-lg-5 p-md-3 m-md-3 m-sm-3 py-sm-3 ">
    <h2 class="mont ps-3 ps-lg-0 text-head text-white">
        VIDEO
    </h2>
    <div class="start-position w-100 px-lg-3">
        <Header></Header>
        <div class="row m-auto w-100 justify-content-center mt-5">
            <div class="col-sm-12 col-md-12 col-lg-3">
                <div class="p-4 text-left bg-card muli">
                    <h5 class="mont text-start text-white">
                        Filter Results
                    </h5>

                    <div class="text-start my-5">
                        <div class="">
                            <label for="name" class="text-white">
                                Name(contains)
                            </label>
                            <input placeholder="Text String" v-model="name" class="form-control text-white rounded-0 muli bg-input border-0 my-2 py-2" @keyup="search">
                        </div>

                        <br>

                        <div class="row mt-m-1">

                            <div class="col-sm-12 col-md-4 col-lg-12">
                                <div class="">
                                    <label for="name" class="text-white">
                                        Minimum Score
                                    </label>
                                    <input placeholder="1 - 10" tyoe="tel" @keyup="search" v-model="min_score" class="form-control text-white rounded-0 muli bg-input border-0 mt-2 py-2">
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-6 col-lg-12">
                                <div class="my-4 my-md-0 my-lg-4">
                                    <label for="select" class="text-white mb-1 muli">Order By</label>
                                    <form class="d-flex mt-2 mt-md-0">
                                        <button class="btn bg-button rounded-0" v-if="this.order_type == 'D'" @click="changeOrderType">
                                            <Icon icon="dashicons:arrow-up-alt" class="text-white" />
                                        </button>
                                        <button class="btn bg-button rounded-0" v-if="this.order_type == 'A'" @click="changeOrderType">
                                            <Icon icon="dashicons:arrow-down-alt" class="text-white" />
                                        </button>
                                        <select placeholder="Order By" v-model="order_by" class="w-100 custom-select rounded-0 border-0" @change="SortAll_A" id="select">
                                            <option value="score">
                                                Score
                                            </option>
                                            <option value="name">
                                                Name
                                            </option>
                                             <option value="release_date">
                                                Release Date
                                            </option>
                                        </select>
                                    </form>
                                </div>
                            </div>

                            <div class="col-sm-12 col-md-2  col-lg-12">
                                <div class="text-end w-100 ">
                                    <button 
                                        style="margin-top:28px" class="btn small rounded-0 bg-button form-control form-control-sm float-lg-end text-white muli px-lg-4 my-lg-2 border-0"
                                        @click="clear"
                                        >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div class="col-sm-12 col-md-12 my-5 my-lg-0 col-lg-9">
                <div class="pl-2 pr-5">
                    <!-- <div class="pt-5 mt-4" v-show="!games[0]">
                        <div class="spinner-grow rounded-0 mt-5 bg-text" role="status" style="font-size:30px;min-height:200px;min-width:200px">
                        </div>
                    </div> -->
                     <div class=""  v-if="!games[0] && loaded" style="max-height:100px !important">
                        <div>
                            <h2>No Result Found</h2>
                        </div>
                    </div>

                    <div class=""  v-show="!games[0] && !loaded" style="max-height:100px !important">
                        <div class="row mb-4 no-gutters pr-5 pl-2"  v-for="demo in demo" :key="demo" style="opacity:.1">
                            <div class="col-sm-12 col-md-2 pe-md-0" style="">
                                <div class="bg-dark w-100 h-100 mb-5" style="min-height:100px;position:relative">
                                    <img class="card-img" src="" alt="">
                                    <div 
                                        class="m-4 spinner-grow d-flex badge d-md-none justify-self-center mont bg-button h4 align-self-center text-white justify-content-center align-items-center" 
                                        style="width:40px;height:40px;border-radius:100%;font-size:16px;">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-10 ps-md-0">
                                <button class="bg-card p-3 d-flex w-100 h-100 border-0 btn-card btn rounded-0">
                                    <div class="text-start w-100 pr-5 p-3">
                                        <div class="card-title mont h5 text-white" style="line-height:20px !important">
                                           <div class="py-1 spinner-grow px-4 me-5 rounded-0"></div><br>
                                            <div class="bg-text py-1 mt-1 spinner-grow w-100 rounded-0" style="font-size:13px !important">
                                            </div>
                                        </div>
                                        <div class="muli small bg-text w-100 spinner-grow rounded-0 my-1 py-4 text" style="font-size:12px">
                                        </div>
                                    </div>
                                    <div 
                                        class="mx-4 spinner-grow d-none d-md-flex justify-self-center mont bg-button h5 align-self-center text-white justify-content-center align-items-center" 
                                        style="width:50px;height:40px;border-radius:100%;font-size:16px"
                                    >
                                        <b></b>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="" style="max-height:100px !important">
                        <div class="row mb-4 no-gutters pr-5 pl-2" v-for="game in games" :key="game.id" style="">
                            <div class="col-sm-12 col-md-2 pe-md-0" style="">
                                <div class="bg-dark w-100 h-100 mb-5" style="min-height:100px;position:relative">
                                    <img class="card-img" src="" alt="">
                                    <div 
                                        class="m-4 d-flex badge d-md-none justify-self-center mont bg-button h4 align-self-center text-white justify-content-center align-items-center" 
                                        style="width:40px;height:40px;border-radius:100%;font-size:16px;">
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
                                            <span class="bg-text" style="font-size:13px !important">
                                               {{ timestamps_to_date(game.first_release_date) }}
                                            </span>
                                        </div>
                                        <div class="muli small bg-text text" style="font-size:12px">
                                            {{ game.summary}}
                                        </div>
                                    </div>
                                    <div 
                                        class="mx-4 d-none d-md-flex justify-self-center mont bg-button h5 align-self-center text-white justify-content-center align-items-center" 
                                        style="width:50px;height:40px;border-radius:100%;font-size:16px"
                                    >
                                        <b>{{ Math.round(game.rating * 10) / 10 }}</b>
                                    </div>
                                </button>
                            </div>
                        </div>
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

import {
  sortByScore_A,
  sortByScore_D,
  sortByDate_A,
  sortByDate_D  
} from "../functions/Sorting";

export default defineComponent({
    name: "Home",
    components: {
        Icon,
        Header
    },
    data() {
        return {
            demo:[1,2,3] as number[],
            games: []  as Game[],
            oldGames:[] as Game[],
            min_score:'' as string,
            name:'' as string,

            order_by: '',
            order_type: "A",

            day: 0 as number,
            month: 0 as number,
            loaded:false as boolean,

        }
    },
    computed:{
    },
    methods:{
        dateFormat(old_date:number){
           return (old_date).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        },
        timestamps_to_date(old_date: number){
            const date = new Date(old_date);
            const formatted_date = this.dateFormat(date.getDate()+1) + '/' + this.dateFormat(date.getMonth()) + '/' + date.getFullYear()

            return formatted_date;
        },
        search(){
            this.games = this.oldGames.filter(
                game => ( game.name.toUpperCase().includes(this.name.toUpperCase()) || 
                game.summary.toUpperCase().includes(this.name.toUpperCase())) &&
                game.rating >= (Number(this.min_score))
            )   
            this.SortAll_A()
        },
        async SortAll_A(){
            if(this.order_by == "name"){
                this.games.sort((a, b) => a.name.localeCompare(b.name));
            }
            else if(this.order_by == "score"){
                await sortByScore_A(this.games)
            }
            else if(this.order_by == "release_date"){
                await sortByDate_A(this.games)
            }
            this.order_type = "A"
        },
        async SortAll_D(){
            if(this.order_by == "name"){
                this.games.sort((a:Game, b:Game) => a.name.localeCompare(b.name)).reverse()
            }
            else if(this.order_by == "score"){
                await sortByScore_D(this.games)
            }
            else if(this.order_by == "release_date"){
                await sortByDate_D(this.games)
            }
            this.order_type = "D"

        },
        changeOrderType(){
            if(this.order_type == "D"){
                this.SortAll_A()
                this.order_type = "A"
            }
            else{
                this.SortAll_D()
                this.order_type = "D"
            }
            const order_type = "SortAll_" + this.order_type;
            (this as any)[order_type];
        },
        clear(){
            this.name = ""
            this.min_score = ''
            this.order_by = ''
        }
    },
    // watch:{
    //     name:function(){

    //     }
    // },
    created() {
      const gls = new GameListService();
        gls.getAll()
            .then((response: ResponseData) => {
                this.games = response.data
                this.oldGames = response.data
                this.loaded = true
                console.log(response)
            })
            .catch((e: Error) => {
                alert(e.message);
            });
    }
});
</script>

<style>

</style>
