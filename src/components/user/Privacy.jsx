import React from "react";
import Container from "../../ui/Container";

const Privacy = () => {
    return (
        <div className="bg-gray-100 py-12">
            <Container>
                <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-center text-black mb-8">
                        Privacy Policy
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Effective Date: September 17, 2025
                    </p>

                    {/* Information We Collect */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            1. Information We Collect
                        </h2>
                        <p className="text-gray-700 mb-4 leading-7">
                            We collect client information such as name, email,
                            phone number, and session-related details to provide
                            our spiritual counselling and healing services.
                        </p>
                        <p className="text-gray-700 leading-7">
                            Payment Information: We do not store payment
                            details. All transactions are processed securely via
                            third-party payment gateways such as Stripe or
                            PayPal.
                        </p>
                    </div>

                    {/* How We Use Information */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            2. How We Use Information
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>
                                Scheduling and conducting spiritual counselling
                                sessions
                            </li>
                            <li>
                                Providing energy healing and Reiki treatments
                            </li>
                            <li>
                                Communication regarding appointments and
                                sessions
                            </li>
                            <li>Organizing workshops and retreat events</li>
                            <li>Improving our spiritual guidance services</li>
                            <li>
                                Sending relevant spiritual content and updates
                                (with your consent)
                            </li>
                        </ul>
                        <p className="text-gray-700 leading-7 mt-4">
                            We do <strong>not</strong> sell or share client
                            information with third parties for marketing
                            purposes. Your spiritual journey and personal
                            information remain confidential.
                        </p>
                    </div>

                    {/* Confidentiality */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            3. Confidentiality & Session Privacy
                        </h2>
                        <p className="text-gray-700 leading-7 mb-4">
                            All information shared during spiritual counselling
                            sessions, energy healing treatments, and personal
                            consultations is kept strictly confidential. We
                            maintain the same level of privacy as traditional
                            therapeutic relationships.
                        </p>
                        <p className="text-gray-700 leading-7">
                            Session notes and spiritual guidance records are
                            securely stored and only accessed by authorized
                            practitioners to ensure continuity of care.
                        </p>
                    </div>

                    {/* Data Security */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            4. Data Security
                        </h2>
                        <p className="text-gray-700 leading-7">
                            We implement industry-standard security measures to
                            protect client data from unauthorized access,
                            misuse, or disclosure. However, while we strive for
                            absolute security, no digital platform can guarantee{" "}
                            <strong>100% protection</strong>.
                        </p>
                    </div>

                    {/* Third-Party Services */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            5. Third-Party Services
                        </h2>
                        <p className="text-gray-700 leading-7">
                            Our spiritual counselling practice may utilize
                            third-party tools such as scheduling platforms,
                            video conferencing services, payment processors, or
                            website analytics. While we choose reputable service
                            providers, we are <strong>not responsible</strong>{" "}
                            for their individual privacy policies or data
                            handling practices.
                        </p>
                    </div>

                    {/* Client Rights */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            6. Your Rights
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 space-y-2">
                            <li>
                                Request{" "}
                                <strong>
                                    access, modification, or deletion
                                </strong>{" "}
                                of your personal information
                            </li>
                            <li>
                                Opt-out of marketing communications and
                                newsletters
                            </li>
                            <li>Request copies of your session records</li>
                            <li>Raise concerns regarding your data privacy</li>
                            <li>
                                Withdraw consent for data processing at any time
                            </li>
                        </ul>
                        <p className="text-gray-700 leading-7 mt-4">
                            To exercise these rights, contact us at
                            <a
                                href="mailto:nadine@spiritualcounselling.com"
                                className="text-[#5B2655] ml-1 hover:underline font-medium"
                            >
                                nadine@spiritualcounselling.com
                            </a>
                        </p>
                    </div>

                    {/* Online Sessions */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            7. Online Sessions & Recordings
                        </h2>
                        <p className="text-gray-700 leading-7 mb-4">
                            For online spiritual counselling sessions, we use
                            secure video conferencing platforms. Sessions are
                            not recorded unless explicitly requested and
                            consented to by both parties.
                        </p>
                        <p className="text-gray-700 leading-7">
                            You are responsible for ensuring your internet
                            connection and environment provide adequate privacy
                            for your sessions.
                        </p>
                    </div>

                    {/* Policy Updates */}
                    <div className="border-b border-gray-200 pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            8. Policy Updates
                        </h2>
                        <p className="text-gray-700 leading-7">
                            We may update this Privacy Policy periodically to
                            reflect service changes or legal requirements.
                            Clients will be notified of
                            <strong> significant updates</strong> via email or
                            through our website.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="pb-6 mb-6">
                        <h2 className="text-2xl font-semibold text-black mb-4">
                            Contact Information
                        </h2>
                        <p className="text-gray-700 leading-7 mb-4">
                            For any privacy-related inquiries or concerns about
                            your spiritual counselling sessions, feel free to
                            reach out:
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-700">
                                <strong>Email:</strong>
                                <a
                                    href="mailto:nadine@spiritualcounselling.com"
                                    className="text-[#5B2655] ml-1 hover:underline font-medium"
                                >
                                    nadine@spiritualcounselling.com
                                </a>
                            </p>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> +91 9155286099
                            </p>
                            <p className="text-gray-700">
                                <strong>Address:</strong> Ramgarh, Jharkhand,
                                India
                            </p>
                        </div>
                    </div>

                    <footer className="mt-12 text-center border-t border-gray-200 pt-8">
                        <p className="text-gray-700 mb-2">
                            Thank you for trusting us with your spiritual
                            journey.
                        </p>
                        <p className="text-sm text-gray-500">
                            This privacy policy ensures your personal
                            information and spiritual guidance sessions remain
                            confidential and secure.
                        </p>
                    </footer>
                </div>
            </Container>
        </div>
    );
};

export default Privacy;
