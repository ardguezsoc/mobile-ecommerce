import { React } from 'react';
import { useMobileSource } from '../../hooks';
import { useQuery } from 'react-query';
import { MobileCardList } from '../../components/MobileCardList';
import { useState } from 'react';

export const Home = () => {
  const { getMobilePage } = useMobileSource();
  const [mobileData, setMobileData] = useState([]);

  useQuery(['getMobiles'], () => getMobilePage(), {
    onSuccess: setMobileData,
  });

  return <div>{mobileData.length ? <MobileCardList mobileList={mobileData} /> : <p>Loading...</p>}</div>;
};
