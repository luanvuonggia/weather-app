import React, { useEffect } from "react";
import clsx from "clsx";
import { withResourceBundle } from "@lib/i18n";
import { CurrentWeatherProps } from "./current-weather.types";
import styles from "./current-weather.module.scss";
import useCurrentWeatherViewModel from "./current-weather.view-model";
import { Card } from "antd";
import { toC } from "@utils/common";
import useWeatherStore from "@store/weather";
import useSearchStore from "@store/search/search.store";

function CurrentWeather(props: CurrentWeatherProps) {
  const { children, className, testingID } = props;
  const { currentWeather } = useWeatherStore();
  const { currentSearch } = useSearchStore();

  const { getCurrentWeather } = useCurrentWeatherViewModel(props);
  let today = new Date();

  useEffect(() => {
    console.log("rr");
    getCurrentWeather(10.76, 106.66);
  }, [currentSearch]);

  return (
    <div
      className={clsx("current-weather mt-8", styles.currentWeather, className)}
      data-testid={testingID}
    >
      {children}
      <Card style={{ width: 440 }}>
        <p className={styles.currentDate}>{today.toDateString()}</p>
        {currentWeather?.weather && (
          <div className="flex justify-around mt-2 px-10 items-center">
            <img
              alt="icon-weather"
              src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0]?.icon}@2x.png`}
            ></img>
            <div>
              <div className="text-5xl">
                {toC(currentWeather?.main?.temp)}°C
              </div>
              <div>{currentWeather?.weather[0]?.description}</div>
            </div>
          </div>
        )}
        <div className="flex justify-around mt-2">
          <div>
            <div className={styles.titleText}>Humidity</div>
            <div className={styles.valueText}>
              {currentWeather?.main?.humidity}%
            </div>
          </div>
          <div>
            <div className={styles.titleText}>Winds</div>
            <div className={styles.valueText}>
              {currentWeather?.wind?.speed} m/s
            </div>
          </div>
          <div>
            <div className={styles.titleText}>Visibility</div>
            <div className={styles.valueText}>{currentWeather?.visibility}</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default React.memo(
  withResourceBundle(CurrentWeather, () => import("./translations"))
);
