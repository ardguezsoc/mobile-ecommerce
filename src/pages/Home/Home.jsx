import React from 'react';
import { useMobileSource } from '../../hooks';
import { useQuery } from 'react-query';
import { MobileCardList } from '../../components/MobileCardList/MobileCardList';
import { useState } from 'react';
import { Search } from '../../components/Search';
import filterMobileArray from './utils/filterMobileArray';
import { Toast, showToast } from '../../components/Toast';
import { useNavigate } from 'react-router-dom';

import './index.scss';
import { useEffect } from 'react';
import { Spinner } from '../../components/Spinner';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { getMobilePage } = useMobileSource();
  const [mobileData, setMobileData] = useState([]);
  const [searchData, setSearchData] = useState();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateTo = (navigationPath) => navigate(navigationPath);

  const { data: mobileListData = [], isLoading } = useQuery(['getMobiles'], () => getMobilePage(), {
    onSuccess: setMobileData,
    onError: () => showToast(t('toast.error'), 'error'),
  });

  useEffect(() => {
    searchData ? setMobileData(filterMobileArray(mobileData, searchData)) : setMobileData(mobileListData);
  }, [searchData]);

  return (
    <div className="mainContainer">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="homeContainer">
          <Toast />
          <Search setSearchData={setSearchData} />
          <MobileCardList mobileList={mobileData} navigateTo={navigateTo} />
        </div>
      )}
    </div>
  );
};
