<template>
  <div class="header">
   <button>首页</button>
   <h2>movie</h2>
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
  .header{
        height    : 1rem;
        width:100%;
        background: rgb(33, 150, 243);
        display   : flex;
          position:fixed;
        top:0
    }
    .header button{
        width : 1rem;
        height: 1rem;
        color : #fff;
        float : left;
            background:rgb(33, 150, 243);
                border:0
    }
    .header h2{
         float      : left;
         color      : #fff;
         text-align : center;
         flex       : 1;
         text-indent: -1rem;
    }
</style>
