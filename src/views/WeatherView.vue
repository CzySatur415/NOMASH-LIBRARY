<template>
  <div class="container">
    <div class="header">
      <h1>WEATHER APP</h1>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="search-input"
        />
        <button @click="searchByCity" class="search-button">
          Search Weather
        </button>
        <br><br>
        <span>Enter city name and click 'Search Weather' to get real-time weather info.</span>
      </div>
    </div>
    <main>
      <div v-if="weatherData">
        <h2>
          {{ weatherData.name }}, {{ weatherData.sys.country }}
        </h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
const apikey = "2946f81a976b740f804bda1656b9fdbf"; 

export default {
  name: "WeatherView",
  data() {
    return {
      city: "",
      weatherData: null,
    };
  },
  computed: {
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp - 273)
        : null;
    },
    iconUrl() {
      return this.weatherData
        ? `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
  },
  methods: {
    async searchByCity() {
      if (!this.city) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
      await this.fetchWeatherData(url);
    },
    async fetchWeatherData(url) {
      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        this.weatherData = null;
        alert("Weather data not found or API error!");
        console.error("Error fetching weather data:", error);
      }
    },
    async fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
          await this.fetchWeatherData(url);
        });
      }
    },
  },
  mounted() {
    this.fetchCurrentLocationWeather();
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: #f8fdfc;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.header {
  text-align: center;
}
.search-bar {
  margin: 20px 0;
  text-align: center;
}
.search-input {
  padding: 8px;
  font-size: 18px;
  border: 1px solid #bbb;
  border-radius: 4px;
  width: 220px;
}
.search-button {
  padding: 8px 16px;
  font-size: 18px;
  background: #42b883;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 8px;
  cursor: pointer;
}
.search-button:hover {
  background: #369870;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}
h2 {
  font-size: 2rem;
  margin: 20px 0 10px 0;
}
p {
  font-size: 1.2rem;
  margin: 10px 0;
}
span {
  font-size: 1.1rem;
  color: #333;
}
img {
  width: 60px;
  height: 60px;
}
</style>
