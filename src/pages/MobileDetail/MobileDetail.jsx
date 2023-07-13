import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useCart, useMobileSource } from '../../hooks';
import './index.css';
import { MobileCard } from './components/MobileCard';
import { useMutation } from 'react-query';
import { BackArrow } from '../../components/BackArrow';
import { useNavigate } from 'react-router-dom';

export const MobileDetail = () => {
  const { getMobileDetails, postMobileToCart } = useMobileSource();
  const { addItem } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: mobileDetail = [], isLoading } = useQuery(['getMobileDetails'], () => getMobileDetails(id));

  const { mutate } = useMutation(({ memory, color }) => postMobileToCart({ id, memory, color }), {
    onSuccess: () => addItem(id),
  });

  return (
    <div className="mainContainer">
      <div>
        <BackArrow goBack={() => navigate(-1)} /> <h1>Mobile Details</h1>
      </div>
      {isLoading ? <p>Loading...</p> : <MobileCard mobileData={mobileDetail} postMobile={mutate} />}
    </div>
  );
};
