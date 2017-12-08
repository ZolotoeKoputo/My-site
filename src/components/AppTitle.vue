<template>
    <div class="main">
       <div class="header">
           <div class="header_title">
               <h4>Підказка</h4>               
           </div>
           <div class="content">
               <p>
                Колись мій сайт складався з компонентів такого чудового фреймворку, як <a href="https://ru.vuejs.org/v2/guide/components.html#Что-такое-компоненты" target="_blank">Vue.js</a>,
                але я не вгледів за ними і вони загубилися.
               </p>
           </div>
       </div>
       <div class="footer">
           <button @click="$emit('onTitle')">Зрозуміло</button>
       </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
.main{
    background: rgba(0%, 0%, 0%, 1);
    max-width: 350px;
    border-radius: 18px;
    position: absolute;
    top: 150px;
    left: 165px;
}
.main .header_title{
    background: rgb(46, 204, 113);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 5px;
    color: #000;
}
.main .content{
    text-align: center;
    padding: 5px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
}
.main .content p{
    margin: 0;
}
.main .content a{
    color: rgb(46, 204, 113);
}
.footer{
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
padding: 2px;
}
.footer button{
    padding: 5px 15px;
    border-radius: 10px;
    border: 2px solid #fff;
    background: transparent;
    cursor: pointer;
    color: #fff;
    margin-bottom: 10px;
    outline: none;
    transition: .3s;
    font-size: 18px;
}
.footer button:focus,
.footer button:hover{
    border-color: rgb(46, 204, 113);
}
/* @@@ MEDIA @@@ */
/* @media screen and (max-height: 468px){
    .main{
        max-width: 300;
        top: 130px;
        left: 100px;
    }
} */
</style>