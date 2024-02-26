<template>

  <div>
    <h1 class = "home">Home</h1>
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
.home{
  text-align: center;
  margin-left:0;
}
.clock{
  text-align: center;
}
</style>
