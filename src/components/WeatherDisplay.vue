<template>
  <div id="weatherDisplay">
    <div v-if="weatherData.weather">
      <h2 class="md-display-2">{{weatherData.name}}</h2>
      <h4 class="md-display-1">{{weatherData.weather[0].description | capitalize}}</h4>
      <img :src="getImage(weatherData.weather[0].icon)" class="image">
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
      console.log(image)
      switch (image) {
        case '01d':
        case '01n':
          image = image.replace('01d', 'clear_sky').replace('01n', 'clear_sky')
          return require('../assets/'+image+'.svg')
        break;
        case '02d':
        case '02n':
          image = image.replace('02d', 'few_clouds').replace('02n', 'few_clouds')
          return require('../assets/'+image+'.svg')
        break;
        case '03d':
        case '03n':
          image = image.replace('03d', 'scattered_clouds').replace('03n', 'scattered_clouds')
          return require('../assets/'+image+'.svg')
        break;
        case '04d':
        case '04n':
          image = image.replace('04d', 'broken_clouds').replace('04n', 'broken_clouds')
          return require('../assets/'+image+'.svg')
        break;
        case '09d':
        case '09n':
          image = image.replace('09d', 'shower_rain').replace('09n', 'shower_rain')
          return require('../assets/'+image+'.svg')
        break;
        case '10d':
        case '10n':
          image = image.replace('10d', 'rain').replace('10n', 'rain')
          return require('../assets/'+image+'.svg')
        break;
        case '11d':
        case '11n':
          image = image.replace('11d', 'thunderstorm').replace('11n', 'thunderstorm')
          return require('../assets/'+image+'.svg')
        break;
        case '13d':
        case '13n':
          image = image.replace('13d', 'snow').replace('13n', 'snow')
          return require('../assets/'+image+'.svg')
        break;
        case '50d':
        case '50n':
          image = image.replace('50d', 'mist').replace('50n', 'mist')
          return require('../assets/'+image+'.svg')
      }
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