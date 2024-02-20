import React, {useEffect} from 'react';

type ToastProps = {
  message: string;
  isVisible: boolean;
  duration?: number;
  onClose: () => void;
};

export const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`flex space-x-2 fixed bottom-5 right-5 bg-gradient-to-t from-gray-800 to-neutral-900  py-2 px-4 rounded-lg shadow-xl transition ${!isVisible && 'hidden'}`}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currencolor"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-green-500 bg-green-800 rounded-full w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <p className={'text-md font-normal text-white'}>
        Producto creado exitosamente
      </p>
    </div>
  );
};
