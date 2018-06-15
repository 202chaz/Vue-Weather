<template>
  <div id="app">
    <Weather v-on:formSubmit="getData"></Weather>
    <WeatherDisplay :weatherData="weatherData"></WeatherDisplay>
  </div>
</template>

<script>
import Weather from './components/Weather';
import WeatherDisplay from './components/WeatherDisplay'

export default {
  name: 'App',
  components: {
    Weather,
    WeatherDisplay
  },
  data: function() {
    return {
      weatherData:[]
    }
  },
  methods: {
    getData: function(data) {
      this.$http.get('https://api.openweathermap.org/data/2.5/weather?zip='+data+',us&appid=09e08654791c795ffffdac59c09da44e&units=imperial', {responseType: 'json'})
        .then((response)=> {
          this.weatherData = response.body
        }, error => {
          swal("Error", error.statusText, "error");
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
