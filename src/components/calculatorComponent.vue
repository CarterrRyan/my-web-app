<template>
    <div class = container>
     <h1 class = calculator>Calculator:</h1>
     <h3 class = calculator>Number 1:</h3>
     <input class = inputs v-model="num1" placeholder ="Enter first number" type = int>
      <h3 class = calculator>Number 2:</h3>
      <input class = inputs v-model="num2" placeholder="Enter second number" type = int>
      <h3 class = calculator>Operator</h3>
      <input class = inputs v-model="operator" placeholder="+,-,*,/" type = string>
      <button class = inputs @click="calculate">calculate</button>
    <p>result: {{ this.response }}</p>
    </div>
    
  </template>

<script>
import axios from'axios';
export default{
    name:'calculatorComponent',
    data(){
        return{
            num1:'' ,
            num2:'',
            operator:'',
            response:''
        }
    },
    methods:{
        async calculate(){
            console.log(1,this.operator );
            try{
                console.log(2,this.operator);
                
                const response = await axios.post('https://node-js-server-f70732e0f0ad.herokuapp.com/calculate',{
                    num1:this.num1,
                    num2:this.num2,
                    operator:this.operator
                })
            console.log(3,this.operator);
            this.response = response.data
            console.log(response.data)
            }
        catch(e){
            console.log(e)
        }
    }
    }
 }

</script>

<style scoped>
/* Your component's styles go here */
</style>
