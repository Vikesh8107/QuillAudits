// components/Popup.tsx
import React from 'react';

interface PopupProps {
  closeModal: () => void;
}

const Popup: React.FC<PopupProps> = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          Close
        </button>
        <h2 className="text-xl font-semibold mb-4">QuillAudits</h2>
        <p>
          Please fill out this form to get a free quote from our experts. You will hear from us soon.
        </p>
        {/* Additional content here */}
      </div>
    </div>
  );
};

export default Popup;
