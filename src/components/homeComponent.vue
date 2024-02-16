<template>
  <div>
    <h1>Home</h1>
    <button @click="Calculator" class = calculator>Calculator</button>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  methods:{
    Calculator(){
      this.$router.push('/calculate');
    }
  
  }
}
</script>

<style scoped>
/* Your CSS styles go here */
</style>
