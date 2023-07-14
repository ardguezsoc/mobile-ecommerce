import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToast = (message, type) => {
  const toastType = () => {
    switch (type) {
      case 'error':
        return toast.error(message);
      case 'info':
        return toast.info(message);
      default:
        return toast.success(message);
    }
  };
  return toastType();
};

export const Toast = () => {
  return <ToastContainer />;
};
