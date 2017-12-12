<template>
  <div class="footer">
   <ul>
          <li><router-link to='/index'>电影</router-link></li>
          <li><router-link to='/music'>音乐</router-link></li>
          <li><router-link to='/book'>书籍</router-link></li>
          <li><router-link to='/photo'>图片</router-link></li>
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
  .footer{
        height    : 1rem;
        background: rgb(33, 150, 243);
        width:100%;
        position:fixed;
        bottom:0

    }
    .footer ul{
        display   : flex;
        height: 1rem;
        color : #fff;
        background:rgb(33, 150, 243);

    }
    .footer li{
         color      : #fff;
         text-align : center;
         flex       :1;
         line-height:1rem
    }
</style>
