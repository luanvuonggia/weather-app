import React, { useEffect } from "react";
import clsx from "clsx";
import { withResourceBundle } from "@lib/i18n";
import { ForecastProps } from "./forecast.types";
import styles from "./forecast.module.scss";
import useForecastViewModel from "./forecast.view-model";
import { toC } from "@utils/common";
import { Card } from "antd";
import dayjs from "dayjs";
import { filter, groupBy } from "lodash";

function Forecast(props: ForecastProps) {
  const { children, className, testingID } = props;

  const { getForecast, forecast } = useForecastViewModel(props);
  const filterDate = filter(forecast?.list, (item)=> !dayjs(item.dt_txt).isBefore(dayjs(), 'day'));
  const groupForecastByDate = groupBy(filterDate, (item)=> dayjs(item.dt_txt).format("DD MMM"));
  useEffect(() => {
    getForecast(10.76, 106.66);
  }, []);
  return (
    <div
      className={clsx("forecast", styles.forecast, className)}
      data-testid={testingID}
    >
      {children}
      <Card style={{ width: 440 }}>
        {
          Object.keys(groupForecastByDate).map((key: string) => {
            return (
              <div>
                <div className={styles.titleText}>{key}</div>
                <div className="mb-3">
                  {groupForecastByDate[key].map((item: any) => (
                    <div className="flex justify-between mt-2">
                      <div className="flex items-center">
                        <div className="font-bold mr-8">{dayjs(item?.dt_txt).format("HH:mm")}</div>
                        <div className="flex items-center">
                          <img
                            width={34}
                            alt="icon-weather"
                            src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                          ></img>
                          <span className={styles.grayText}>{`${toC(item.main.temp_max)}/${toC(item.main.temp_min)}°C`}</span>
                        </div>
                        </div>
                      <div className="font-bold">{item?.weather[0]?.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        }
      </Card>
    </div>
  );
}

export default React.memo(
  withResourceBundle(Forecast, () => import("./translations"))
);
