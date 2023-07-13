import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useCart, useMobileSource } from '../../hooks';
import './index.scss';
import { MobileCard } from './components/MobileCard';
import { useMutation } from 'react-query';
import { BackArrow } from '../../components/BackArrow';
import { useNavigate } from 'react-router-dom';
import { Toast, showToast } from '../../components/Toast';
import { Spinner } from '../../components/Spinner';

export const MobileDetail = () => {
  const { getMobileDetails, postMobileToCart } = useMobileSource();
  const { addItem } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: mobileDetail = [], isLoading } = useQuery(['getMobileDetails'], () => getMobileDetails(id));

  const { mutate, isLoading: addingItemToCart } = useMutation(
    ({ memory, color }) => postMobileToCart({ id, memory, color }),
    {
      onSuccess: () => {
        showToast('Item added to cart', 'success');
        addItem(id);
      },
      onError: () => {
        showToast('Something went wrong', 'error');
      },
    }
  );

  return (
    <div className="mainContainer">
      <BackArrow goBack={() => navigate(-1)} />
      <Toast />
      {isLoading ? (
        <Spinner />
      ) : (
        <MobileCard mobileData={mobileDetail} postMobile={mutate} addingItemToCart={addingItemToCart} />
      )}
    </div>
  );
};
