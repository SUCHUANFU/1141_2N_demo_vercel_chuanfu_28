import { useEffect } from 'react';

const Alert_28 = ({ alert, showAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [showAlert]);

  if (alert.type === 'success') {
    return (
      <p className='grid items-center text-center text-green-600 bg-green-100 p-2 rounded'>
        {alert.msg}
      </p>
    );
  } else if (alert.type === 'danger') {
    return (
      <p className='grid items-center text-center text-red-600 bg-red-100 p-2 rounded'>
        {alert.msg}
      </p>
    );
  }
};

export default Alert_28;
