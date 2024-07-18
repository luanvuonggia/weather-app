import { ForecastProps } from "./forecast.types";
import useWeatherStore from "@store/weather";
import { useTranslation } from "@lib/i18n";
import { ENDPOINT } from '@utils/endpoint';
import { HttpError } from '@utils/error';
import { getAPI } from '@utils/fetch';

function useForecastViewModel({}: ForecastProps) {
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  const { setForecast, forecast } = useWeatherStore();
  const { t } = useTranslation();
  const getForecast = async (lat: number, lon: number) => {
    try {
      const res = await getAPI(`${ENDPOINT.getForecast}?lat=${lat}&lon=${lon}&appid=${key}`);
      setForecast(res);
      return res;
    } catch (error) {
      throw error as HttpError;
    }
  };
  return {
    getForecast,
    forecast,
    t,
  };
}

export default useForecastViewModel;
