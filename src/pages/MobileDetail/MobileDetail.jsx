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
import { useTranslation } from 'react-i18next';

export const MobileDetail = () => {
  const { getMobileDetails, postMobileToCart } = useMobileSource();
  const { addItem } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data: mobileDetail = [], isLoading } = useQuery([`getMobileDetails${id}`], () => getMobileDetails(id));

  const { mutate, isLoading: addingItemToCart } = useMutation(
    ({ memory, color }) => postMobileToCart({ id, memory, color }),
    {
      onSuccess: () => {
        showToast(t('toast.success'), 'success');
        addItem(id);
      },
      onError: () => {
        showToast(t('toast.error'), 'error');
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
