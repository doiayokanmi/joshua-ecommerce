'use client'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AnyComponent() {
  const showToast = () => {
    toast.success('This is a success message');
  };

  return (
    <div>
        <ToastContainer />
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
}

export default AnyComponent;
