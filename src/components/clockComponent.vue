<template>
  <div class="hero">
        <div class="container">
            <div class="clock">
                <span id="hrs">{{ currentTime.hours }}</span>
                <span>:</span>
                <span id="min">{{ currentTime.mins }}</span>
                <span>:</span>
                <span id ="sec">{{ currentTime.secs }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
        currentTime:{
            hours:'',
            mins:'',
            secs:''
        }
    };
  },
  mounted(){
    //updates time every second
    this.updateTime();
    setInterval(this.updateTime,1000)
  },
  methods:{
    updateTime() {
        const date = new Date();
        this.currentTime.hours = String(date.getHours()).padStart(2,'0');
        this.currentTime.mins = String(date.getMinutes()).padStart(2,'0');
        this.currentTime.secs = String(date.getSeconds()).padStart(2,'0');  
    }
  }
}
</script>

<style scoped>
*{
    margin:0px;
    padding:0px;
    font-family:'cascadia code', sans-serif;
    box-sizing: border-box;
}
.hero{
    width: 100%;
    min-height: 100vh;
    background:linear-gradient(45deg,#08001f,#30197d);
    color:#fff;
    position: relative;
}
.container{
    width: 800px;
    height: 180px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.clock{
    width: 100%;
    height:100%;
    background:rgba(235,0,255,0.11);
    border-radius:10px;
    display:flex;
    align-items: center;
    justify-content:center;
    backdrop-filter: blur(40px );
}
.container::before{
    content:'';
    width:180px;
    height:180px;
    background:#f41b75;
    border-radius:5px;
    position:absolute;
    left:-50px;
    top:-50px;
    z-index:-1;
}
.container::after{
    content:'';
    width:180px;
    height:180px;
    background:#419aff;
    border-radius:50%;
    position:absolute;
    right:-30px;
    bottom:-50px;
    z-index:-1;
}.clock span{
    font-size:80px;
    width:110px;
    display:inline-block;
    text-align:center;
    position:relative;
}
.clock span::after{
    font-size: 16px;
    position: absolute ;
    bottom:-5px;
    left:50%;
    transform:translatex(-50%);
}
#hrs::after{
    content:'Hours';
}
#min::after{
    content:'Minutes';
}
#sec::after{
    content:'Seconds';
}
</style>
