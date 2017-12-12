<template>
  <div class="nav">
   <ul>
   <li>top250</li>
   <li>正在热映</li>
   <li>即将上映</li>

   </ul>
  </div>
</template>

<script>
console.log(navigator.userAgent)
var flag=true
if(navigator.userAgent.indexOf("Mobile")<0){
flag=false

}
console.log(flag)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav{
        height    : 1rem;
        background: rgb(33, 150, 243);
        width:100%;
        position:fixed;
         top:1rem

    }
    .nav ul{
        display   : flex;
        height: 1rem;
        color : #fff;
        background:rgb(33, 150, 243);

    }
    .nav li{
         color      : #fff;
         text-align : center;
         flex       :1;
         line-height:1rem
    }
</style>
