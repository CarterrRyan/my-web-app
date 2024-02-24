<script>
import SideBar from './components/sidebar/sidebarPanel.vue'
import {sidebarWidth} from './components/sidebar/state.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  components: {SideBar},
  setup(){
    const router = useRouter()
    const hideSidebar = ref(false)
    //updates hidesidebar based on current routes meta information
    router.beforeEach((to,from,next)=>{
      hideSidebar.value = to.meta.hideSidebar || false
      next();
    });

    return {hideSidebar,sidebarWidth}
  },
  mounted(){
    this.$router.push('/signin');
  },
};
</script>


<template>
  <SideBar :hide-sidebar="hideSidebar" />
<div :style="{'margin-left': sidebarWidth}">
  <router-view></router-view>
</div>
</template>



<style>
</style>
