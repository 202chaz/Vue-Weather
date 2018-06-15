<template>
  <div id="weatherDisplay">
    <div v-if="weatherData.weather">
      <h2 class="md-display-2">{{weatherData.name}}</h2>
      <h4 class="md-display-1">{{weatherData.weather[0].description | capitalize}}</h4>
      <img :src="getImage(weatherData.weather[0].description)" class="image">
      <h6 class="md-headline">{{weekday}}</h6>
      <h6 class="md-headline">Low: {{weatherData.main.temp_min}}</h6>
      <h6 class="md-headline">High: {{weatherData.main.temp_max}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weatherDisplay',
  props:['weatherData'],
  data: function() {
    return {
      weekday:''
    }
  },
  methods: {
    getImage(image) {
      console.log('../assets/'+image.replace(/\s/g, "_")+'.svg')
      return require('../assets/'+image.replace(/\s/g, "_")+'.svg')
    }
  },
  mounted() {
    let date = new Date();
    let today = date.getDay();
    let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    this.weekday = weekDays[today];
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .image {
    height:150px;
    width:150px;
  }
  img {
    fill:white;
  }
  h2, h4, h6 {
    color:#fff;
    margin-top:5px;
    margin-bottom:5px;
  }
</style>