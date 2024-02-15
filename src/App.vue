<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted(){
    this.$router.push('/signin');
  },
}
</script>

<style>
</style>
