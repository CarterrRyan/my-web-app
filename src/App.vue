<script>
import SideBar from './components/sidebar/sidebarPanel.vue'
import {sidebarWidth} from './components/sidebar/state.js'
export default {
  name: 'App',
  components: {SideBar},
  setup(){
    return {sidebarWidth}
  },
  mounted(){
    this.$router.push('/signin');
  },
}
</script>


<template>
  <SideBar />
<div :style="{'margin-left': sidebarWidth}">
  <router-view></router-view>
</div>
</template>



<style>
</style>
