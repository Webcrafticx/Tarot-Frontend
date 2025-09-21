import React from "react";
import Container from "../../ui/Container";

const Terms = () => {
    return (
        <div className="bg-gray-100 py-12">
            <Container>
                <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-center text-black mb-8">
                        Terms & Conditions
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        📅 Effective Date: September 17, 2025
                    </p>

                    {/* Introduction */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            1. Introduction
                        </h2>
                        <p className="text-gray-700 leading-7">
                            These Terms & Conditions govern the use of our tarot
                            readings, spiritual counselling, Reiki sessions, and
                            related services. By booking or participating in a
                            session, you agree to the terms set out below.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            2. Services Offered
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Tarot card readings for guidance and clarity</li>
                            <li>Spiritual counselling and energy healing</li>
                            <li>Workshops, group sessions, and retreats</li>
                            <li>Online and in-person consultations (as available)</li>
                        </ul>
                    </div>

                    {/* Client Responsibilities */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            3. Client Responsibilities
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>Provide accurate personal details when booking a session.</li>
                            <li>Arrive on time for scheduled appointments.</li>
                            <li>Respect practitioner boundaries and session guidelines.</li>
                            <li>
                                Understand that spiritual guidance is{" "}
                                <strong>not a substitute</strong> for medical,
                                legal, or financial advice.
                            </li>
                        </ul>
                    </div>

                    {/* Payment Terms */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            4. Payment Terms
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>💳 All sessions must be paid in advance through approved payment gateways.</li>
                            <li>💳 Bookings are confirmed only after payment is received.</li>
                            <li>💳 Late or missed sessions are <strong>non-refundable</strong>.</li>
                        </ul>
                    </div>

                    {/* Refund & Cancellation Policy */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            5. Refund & Cancellation Policy
                        </h2>
                        <p className="text-gray-700 leading-7">
                            Refunds are generally not provided for completed
                            sessions. Clients may request rescheduling with at
                            least 24 hours’ notice. In cases of practitioner
                            unavailability, a full refund or reschedule will be
                            offered.
                        </p>
                    </div>

                    {/* Limitation of Liability */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            6. Limitation of Liability
                        </h2>
                        <p className="text-gray-700 leading-7">
                            All readings, counselling, and guidance are offered
                            for <strong>personal insight and spiritual growth</strong>.
                            We make no guarantees of specific outcomes. You
                            are responsible for your own decisions and actions
                            based on the guidance received.
                        </p>
                    </div>

                    {/* Governing Law */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            7. Governing Law
                        </h2>
                        <p className="text-gray-700 leading-7">
                            These Terms & Conditions are governed by the laws of
                            India. Any disputes shall be resolved in the
                            jurisdiction of Jharkhand, India.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            📞 Contact Information
                        </h2>
                        <p className="text-gray-700 leading-7">
                            For any questions or clarifications regarding these
                            terms, please contact us:
                        </p>
                        <div className="space-y-2 mt-2">
                            <p className="text-gray-700">
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:Raveenatarotstarr@gmail.com"
                                    className="text-[#5B2655] ml-1 hover:underline font-medium"
                                >
                                    Raveenatarotstarr@gmail.com
                                </a>
                            </p>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> +91 9008408625
                            </p>
                        </div>
                    </div>

                    <footer className="mt-12 text-center border-t border-gray-200 pt-8">
                        <p className="text-gray-700 mb-2">
                            Thank you for allowing us to guide your spiritual
                            journey. 🌙
                        </p>
                        <p className="text-sm text-gray-500">
                            These terms ensure clarity and respect in our sacred
                            practitioner–client relationship.
                        </p>
                    </footer>
                </div>
            </Container>
        </div>
    );
};

export default Terms;
