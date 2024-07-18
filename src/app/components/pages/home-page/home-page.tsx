import styles from './home-page.module.scss';
import { HomePageProps } from './home-page.types';
import useHomePageViewModel from './home-page.view-model';
import CurentWeather from '@components/elements/current-weather';
import Forecast from '@components/elements/forecast';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import {  Button } from 'antd';

function HomePage(props: HomePageProps) {
  console.log("render home");
  const {
    isAuthenticated,
    changeLanguage,
    language,
    gotoLogin,
    t,
  } = useHomePageViewModel(props);

  return (
    <Page className={clsx('home-page flex justify-center', styles.homePage, 'bg-gradient-to-r from-purple-500 to-indigo-600')}> 
      <div>
        <CurentWeather></CurentWeather>
        <div className={styles.forecastText}>5-day Forecast(3 Hours)</div>
        <Forecast></Forecast>
      <div className="bg-white p-8 rounded-lg shadow-xl mt-8 mx-auto max-w-2xl">
        {isAuthenticated && <div className="text-green-500 text-lg font-bold mb-4">🔐 Authenticated 🔐</div>}
        {!isAuthenticated && (
          <Button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline-purple" onClick={gotoLogin}>
            {t('login')}
          </Button>
        )}
        <a href="/#/protected-page" className="block text-center text-purple-700 mt-4 underline hover:text-purple-800">
          {t('goToProtectedPage')}
        </a>

        <div className="text-center text-gray-500 mt-4">
          {t('currentLanguage', { language: language })}
          <div className="flex justify-center mt-4">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline-purple" onClick={changeLanguage('en')}>
              en
            </button>
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded ml-4 focus:outline-none focus:shadow-outline-purple" onClick={changeLanguage('pt-BR')}>
              pt-BR
            </button>
          </div>
        </div>
      </div>
      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle(HomePage, () => import('./translations')));
