import { useState } from 'react';

const useAlert = (options) => {
  const deafultOptions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };
  const [alert, setAlert] = useState({
    ...deafultOptions,
    ...options,
  });

  const toggleAlert = () => {
    setAlert(!alert.active);
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
