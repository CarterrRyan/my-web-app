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
    this.$router.push('/register');
  },
}
</script>

<style>
</style>
