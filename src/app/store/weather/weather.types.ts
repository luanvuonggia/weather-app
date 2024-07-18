export interface WeatherState {
  currentWeather: any;
  forecast: any;
  setCurrentWeather: (weather: any) => void;
  setForecast: (forecast: any) => void;
}