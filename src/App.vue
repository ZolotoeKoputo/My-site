<template>
  <div id="app">
    <!-- <app-404></app-404> -->
    <app-main-page v-if="state == 'start'" @onDeveloper="onDeveloper"  @onHeader="onHeader"></app-main-page>
      <transition v-else-if="state == 'header'" name="header">
        <app-header ></app-header>
      </transition>
    <app-developer-version v-else-if="state == 'developer'"></app-developer-version>
    <div v-else>Unknown state</div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      state: 'start'
    }
  },
  methods: {
    onHeader(){
      this.state = 'header'
    },
    onDeveloper(){
      this.state = 'developer'
    }
  }
}
</script>

<style>
 * > body{
     margin: 0;
     padding: 0;
 }

.header-enter-active, .header-leave-active {
    transition: all .3s cubic-bezier(.65, .05, .36, 1);
}

.header-enter, .header-leave-active {
    top: -100%;
}
</style>
