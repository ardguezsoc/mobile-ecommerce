import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useMobileSource } from '../../hooks';
import './index.css';
import { MobileCard } from './components/MobileCard';
import { useMutation } from 'react-query';

export const MobileDetail = () => {
  const { getMobileDetails, postMobileToCart } = useMobileSource();
  const { id } = useParams();

  const { data: mobileDetail = [], isLoading } = useQuery(['getMobileDetails'], () => getMobileDetails(id));

  const { mutate } = useMutation(({ memory, color }) => postMobileToCart({ id, memory, color }));

  return (
    <div className="mainContainer">
      <h1>Mobile Details</h1>
      {isLoading ? <p>Loading...</p> : <MobileCard mobileData={mobileDetail} postMobile={mutate} />}
    </div>
  );
};
