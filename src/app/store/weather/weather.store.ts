import { WeatherState } from './weather.types';
import { create } from 'zustand';

const useWeatherStore = create<WeatherState>((set) => ({
  currentWeather: {},
  forecast: {},
  setCurrentWeather: (weather: any) => set(() => ({ currentWeather: weather })),
  setForecast: (forecast: any) => set(() => ({ forecast: forecast })),
}))

export default useWeatherStore;
