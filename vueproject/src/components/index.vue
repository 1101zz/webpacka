<template>
  <div class="index">
     <common-header title="movie" bgColor="rgb(33, 150, 243)"></common-header>
      <common-footer></common-footer>

  </div>

</template>

<script>
import CommonHeader from "./header"
import CommonFooter from "./footer"
import CommonNav from "./nav"
import CommonList from "./list"
import Axios from 'axios'
    export default {

        data () {
            return {
                    movieList: [],
                    isShow   : false
              }
        },methods:{
        add(){
           Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+_this.movieList.length+"&limit=10")
            .then((res)=>{
           _this.movieList=_this.movieList.concat(res.data.data.movies)
           _this.isShow=false;})
        }


        },
              mounted(){ let _this=this
              Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+_this.movieList.length+"&limit=10")
                          .then((res)=>{
                         _this.movieList=_this.movieList.concat(res.data.data.movies)
                         _this.isShow=false;})

                window.onscroll=function(){
                let clientHeight = document.documentElement.clientHeight;
                let scrollTop    = document.documentElement.scrollTop;
                let scrollHeight = document.documentElement.scrollHeight;
                console.log(document.documentElement.scrollTop)
                if(clientHeight+scrollTop>=scrollHeight){
                     _this.isShow=true;
                   Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+_this.movieList.length+"&limit=10")
                               .then((res)=>{
                              _this.movieList=_this.movieList.concat(res.data.data.movies)
                              _this.isShow=false;})
                }
                }
              },

        components:{
            CommonHeader,
            CommonFooter,
            CommonNav,
             CommonList
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .list-box{
      margin-bottom:1rem;
      margin-top: 2rem;
      overflow:auto
  }
  .loading{
  margin-bottom:3rem;
  text-align:center
  }
</style>
