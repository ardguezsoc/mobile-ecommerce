import { React } from 'react';
import { useMobileSource } from '../../hooks';
import { useQuery } from 'react-query';
import { MobileCardList } from '../../components/MobileCardList/MobileCardList';
import { useState } from 'react';
import { Search } from '../../components/Search';
import filterMobileArray from './utils/filterMobileArray';

import './index.css';
import { useEffect } from 'react';

export const Home = () => {
  const { getMobilePage } = useMobileSource();
  const [mobileData, setMobileData] = useState([]);
  const [searchData, setSearchData] = useState();

  const { data: mobileListData = [] } = useQuery(['getMobiles'], () => getMobilePage(), {
    onSuccess: setMobileData,
  });

  useEffect(() => {
    searchData ? setMobileData(filterMobileArray(mobileData, searchData)) : setMobileData(mobileListData);
  }, [searchData]);

  return (
    <div className="mainContainer">
      {mobileData.length ? (
        <div className="homeContainer">
          <Search setSearchData={setSearchData} />
          <MobileCardList mobileList={mobileData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
