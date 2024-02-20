<template>
  <div>
    <h1>Home</h1>
    <button @click="Calculator" class = calculator>Calculator</button>
    <button @click = "clock" class = clock>Clock</button>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  methods:{
    Calculator(){
      this.$router.push('/calculate');
    },
    clock(){
      this.$router.push('/clock')
    }
  }
}
</script>

<style scoped>
/* Your CSS styles go here */
</style>
