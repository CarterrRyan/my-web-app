<script>
import SidebarLink from './SidebarLink.vue'
import sidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state.js'
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import { byPrefixAndName } from '@awesome.me/kit-e6e8c8275f.js/icons'
export default {
  props:{
    hideSidebar:Boolean
  },
  components:{ sidebarLink, SidebarLink },
  setup(props){
    return {...props, collapsed, toggleSidebar, sidebarWidth, }
  }
  
}
</script>
<template>
  <div class="sidebar" :style="{ width: sidebarWidth }" v-show="!hideSidebar">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else>Vue Sidebar</span>
    </h1>
    <SidebarLink to="/calculate" icon="fas fa-calculator">Calculate</SidebarLink>
    <sidebarLink to="/clock" icon="fas fa-clock">Clock</sidebarLink>


    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
    <font-awesome-icon :icon="['fas', 'bars']" />
    </span>
  </div>
</template>


<style>
:root {
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;

}
</style>
<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    float: left;
    position: fixed;
    font-family: cascadia code;
    z-index:1;
    top:0;
    left:0;
    bottom:0;
    padding:0.5em;
    transition: 0.3s ease;
    display:flex;
    flex-direction: column;
}
.collapse-icon{
  position: absolute;
  bottom:0;
  padding:0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition:0.2 linear;
}
.rotate-180{
  transform: rotate(180deg);
  transition:0.2 linear;
}
</style>