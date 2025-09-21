import React from "react";
import Container from "../../ui/Container";

const CancellationRefund = () => {
  return (
    <div className="bg-gray-100 py-12">
      <Container>
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Cancellation & Refund Policy
          </h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              At <span className="font-semibold">RaveenaTarotStarr</span>, we
              value your trust and aim to deliver the best experience. This
              Cancellation & Refund Policy outlines the terms under which
              cancellations and refunds are processed.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              1. Cancellation Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Orders or bookings can be cancelled within{" "}
                <span className="font-semibold">24 hours</span> of purchase.
              </li>
              <li>
                Once the order is processed or the service is initiated,
                cancellations will not be accepted.
              </li>
              <li>
                To request a cancellation, please contact our support team at{" "}
                <span className="font-semibold">
                  Raveenatarotstarr@gmail.com
                </span>.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-black">
              2. Refund Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Eligible refunds will be processed within{" "}
                <span className="font-semibold">7–10 business days</span> to the
                original payment method.
              </li>
              <li>
                Refunds will only be provided for cancellations made within the
                allowed timeframe.
              </li>
              <li>
                No refunds will be issued for partially used services, digital
                products, or customized items.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-black">
              3. Exceptions
            </h2>
            <p>
              Certain services/products may be non-refundable or have specific
              terms mentioned at the time of purchase. Please review product or
              service details carefully before completing your order.
            </p>

            <h2 className="text-2xl font-semibold text-black">
              4. Contact Us
            </h2>
            <p>
              For any questions or concerns about our Cancellation & Refund
              Policy, please contact us at:
            </p>
            <p className="font-semibold">
              Email: Raveenatarotstarr@gmail.com <br />
              Phone: +91 9008408625
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CancellationRefund;
