<template>
  <div class="mainPage">
      <transition name="media">
          <div class="noMedia">
            <h2>Сайт не підтримує мобільні пристрої 😔</h2>
        </div>
      </transition>
      <!-- <div class="landscape">
          <div class="sun"></div>
          <div class="mountains"></div>
          <div class="desert"></div>
          <div class="castus">
          </div>
      </div> -->
        <div class="greeting">
            <div class="hello">
                <transition name="fadeTitle">
                    <app-title v-if="show == true" @onTitle="onTitle"></app-title>
                </transition>
                <h1>Вітаю тебе на моєму сайті</h1>
                <p>Упс, здається деякі <a @click="titleShow"><span class="active_focus">компоненти</span></a> загубилися</p>
                <p>Допоможеш мені їх знайти?</p>
                <div class="block_submit">
                    <button class="active_focus" @click="$emit('onDeveloper')">Вперед</button> <br>
                    <p class="active_focus lazy"><a href="#" @click="$emit('onHeader')">В мене немає часу, давай сам</a></p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        titleShow (){
           return this.show = true;
        },
        onTitle(){
           return this.show = false;
        }
    },
    computed: {

    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lobster');
a{
    text-decoration: none;
    outline: none;
    cursor: pointer;
}
.mainPage{
    background: url('../assets/img/fon.png') ;
    background-size: cover;
    width: 100%;
    height: 100vmin;
    font-family: 'Lobster', cursive;
}
.noMedia{
    display: none;
    max-width: 800px;
    height: 100vmin;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    text-align: center;
}
.greeting{  
    max-width: 800px;
    height: 100vmin;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.greeting .hello{
    position: absolute;
    padding: 40px 0;
    color: rgb(233, 30, 99);
    text-align: center;
}
.greeting .hello h1{
    font-size: 50px;
}
.greeting .hello p {
    font-size: 24px;
}
.greeting .hello span{
   color: rgb(46, 204, 113);
}
.greeting .hello a:focus,
.greeting .hello a:hover{
    border-bottom: 2px solid rgb(46, 204, 113);
}
.block_submit{
    width: 300px;
    margin: 0 auto;
}
.block_submit button{
    padding: 10px 40px;
    background: transparent;
    border: 2px solid rgb(233, 30, 99);
    border-radius: 10px; 
    font-size: 28px;
    color: rgb(233, 30, 99);
    cursor: pointer;
    transition: all .3s ease-out;
}
.block_submit button:hover,
.block_submit button:focus{
   border-color: rgb(46, 204, 113);
   color: rgb(46, 204, 113);
}
.active_focus{
    outline: none;
    border: 2px transparent;
}
.greeting .block_submit .lazy a{
    color: #a8a9a3;
    font-size: 16px;
}
.greeting .block_submit .lazy a:focus,
.greeting .block_submit .lazy a:hover{
    border-bottom: 2px solid #a8a9a3;
}
/* *** Transition *** */
.fadeTitle-enter-active, .fadeTitle-leave-active {
  transition: .3s
}
.fadeTitle-enter, .fadeTitle-leave-to  {
  transform: scale(.6);
  opacity: 0;
}

/* @@@ MEDIA @@@ */
@media screen and (max-width: 768px){
    .mainPage{
        background: #000;
        color: rgb(233, 30, 99);
    }
    .noMedia{
        display: flex;
    }
    .landscape,
    .greeting{
        display: none;
    }
}
/* @media screen and (max-height: 468px){
    .greeting .hello h1{
        font-size: 40px;
    }
    .block_submit button{
        font-size: 18px;
    }
    .greeting .hello p {
        font-size: 18px;
    }
} */
</style>
