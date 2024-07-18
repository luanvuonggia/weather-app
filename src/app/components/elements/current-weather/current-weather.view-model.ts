import { CurrentWeatherProps } from "./current-weather.types";
import { useTranslation } from "@lib/i18n";
import { ENDPOINT } from '@utils/endpoint';
import { HttpError } from '@utils/error';
import { getAPI } from '@utils/fetch';
import useWeatherStore from '@store/weather';

function useCurrentWeatherViewModel({}: CurrentWeatherProps) {
  const { t } = useTranslation();
  const key = import.meta.env.VITE_WEATHER_API_KEY
  const { setCurrentWeather } = useWeatherStore();

  const getCurrentWeather = async (lat: number, lon: number) => {
    try {
      const res = await getAPI(`${ENDPOINT.getCurrentWeather}?lat=${lat}&lon=${lon}&appid=${key}`);
      setCurrentWeather(res);
      return res;
    } catch (error) {
      throw error as HttpError;
    }
  };

  return {
    getCurrentWeather,
    t,
  };
}

export default useCurrentWeatherViewModel;
