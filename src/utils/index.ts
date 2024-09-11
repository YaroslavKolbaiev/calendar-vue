import { toast, type ToastOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const throwToast = (message: string) => {
  toast(message, {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
  } as ToastOptions);
};

const generateUniqueId = () => `
  ${Date.now()}-${Math.random().toString(36).substr(2, 9)}
`;

export { throwToast, generateUniqueId };
