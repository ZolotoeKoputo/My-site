<template>
    <div id="header">
        <header>
            <button v-if="!show" @click="show = !show">
                <i class="ion-navicon"></i>
            </button>
            <button v-if="show" @click="show = !show">
                <i class="ion-android-arrow-back"></i>
            </button>
        </header>
        <transition name="slide">  
            <aside v-show="show">
                <div class="main_head">
                    <h3>
                        Main
                    </h3>
                </div>
                <div class="list_pages">
                    <ul>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                        <li><a href="">link</a></li>
                    </ul>  
                </div>
            </aside>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            el: '#header',
            show: false
        }
    }
}

</script>

<style scoped>
header{
    width:100%;
    height: 56px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 80;
    background-color: #fff;
    box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.095);
    padding: 8px 16px;
    overflow: hidden;
    box-sizing: border-box;
}

aside {
    background-color: #fff;
    width: 250px;
    position: fixed;
    top: 55px;
    left: 0;
    bottom: 0px;
    z-index: 1;
    display: flex;
    flex-direction: columns;
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
aside .main_head{
    flex: 100%;
    text-align: center;
}
aside .list_pages ul{
 padding: 0;
 margin: 0;
}
aside .list_pages ul li{
    list-style: none;
    margin: 10px 0;
}
aside .list_pages ul li a{
    text-decoration: none;
    padding: 10px 50px;
    color: #5cb1ee;
}

aside h2{
    font-weight: 300;
    color: #afafaf;
}

button {
    background: transparent;
    border: 0;
    width: 40px;
    height: 40px;
    font-size: 30px;
    outline: none;
    color: #9f9f9f;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s easy-in-out;
}
button:active {
    background-color: rgba(0,0,0,0.1);
}

/* Анимация перехода */
.slide-enter-active, .slide-leave-active {
    transition: all .3s cubic-bezier(.65, .05, .36, 1);
}

.slide-enter, .slide-leave-active {
    left: -100%;
}
</style>
