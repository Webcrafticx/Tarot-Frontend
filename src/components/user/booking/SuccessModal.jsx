import React from "react";
import WhatsAppButton from "../booking/WhatsAppButton";

const SuccessModal = ({ appointmentDetails, onClose, onWhatsAppClick }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-lg mx-auto shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-center mb-3">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-serif text-center text-gray-800">Payment Successful!</h3>
          <p className="text-center text-gray-600 mt-1 text-sm">Your appointment has been confirmed</p>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-4">
            <h4 className="font-medium text-gray-800 mb-2 text-md">Appointment Details:</h4>
            <div className="text-gray-600 space-y-1.5 text-sm">
              <p><span className="font-medium">Service:</span> {appointmentDetails.serviceType}</p>
              <p><span className="font-medium">Duration:</span> {appointmentDetails.duration} minutes</p>
              <p><span className="font-medium">Time Window:</span> {appointmentDetails.selectedWindow}</p>
              <p><span className="font-medium">Date Range:</span> {appointmentDetails.selectedWindowDates?.displayDate}</p>
              <p><span className="font-medium">Amount Paid:</span> ₹{appointmentDetails.price}</p>
            </div>
          </div>

          <div className="text-center mb-3">
            <p className="text-gray-700 mb-2 font-medium text-sm">
              Please message on WhatsApp for more details:
            </p>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-3 rounded-lg mb-2">
              <span className="text-lg font-bold">9008408625</span>
            </div>
            <p className="text-xs text-gray-600">
              Send your appointment details on WhatsApp to get confirmation and further instructions.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 p-5">
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer font-medium text-sm"
            >
              Close
            </button>
            <WhatsAppButton appointmentDetails={appointmentDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;