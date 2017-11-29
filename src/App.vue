<template>
  <div id="app">
   <div class="preloder">
     <div class="preloder_item">
       <div class="item_loder"></div>
     </div>
     <div class="preloder_item">
         <div class="item_spin"></div>
     </div>
     <div class="preloder_item">
         <div class="item_img"></div>
     </div>
   </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  margin: 0;
}
.preloder{
width: 100%;
height: 100vmin;
background: #fff;
}
.preloder_item{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
.item_loder{
  width: 100px;
  height: 100px;
  border: 5px solid #d62ab8;
  border-bottom-color: #fff;
  border-left-color: #19e685;
  border-top-color: #fff;
  border-radius: 50%;
  animation: preloder_item 1s infinite linear;
}
.item_spin{
  width: 70px;
  height: 70px;
   border: 5px solid #f13128;
  border-bottom-color: #6464eb;
  border-left-color: #0fc3f2;
  border-top-color: #e8d51b;
  border-radius: 50%;
  animation: preloder_spin 1s infinite linear;
}
/* .item_img{
  width: 25px;
  height: 25px; 
  border-radius: 50%;
  background: red;
} */

@keyframes preloder_item{
  0%{
      transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

@keyframes preloder_spin{
  0%{
      transform: rotate(0deg);
  }
  100%{
    transform: rotate(-360deg);
  }
}

</style>
