import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#0a1628] text-[#d4af37] p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-6 text-gray-300">Effective Date: April 23, 2025</p>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                <p className="text-gray-300">Easymakan Development Corporation ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you use our website and communicate with us, including via Meta WhatsApp messaging services.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
                <p className="text-gray-300 mb-2">We collect the following types of information:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Personal identification information (name, email address, phone number)</li>
                    <li>Property inquiry details and preferences</li>
                    <li>WhatsApp phone number and message content when you contact us via WhatsApp</li>
                    <li>Website usage data and analytics</li>
                    <li>Device and browser information</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                <p className="text-gray-300 mb-2">Your information may be used to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Respond to property inquiries and provide our services</li>
                    <li>Send transactional and service-related communications</li>
                    <li>Send WhatsApp notifications about properties and updates (with your consent)</li>
                    <li>Improve our website and customer experience</li>
                    <li>Comply with legal obligations</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">4. WhatsApp Messaging (Meta)</h2>
                <p className="text-gray-300 mb-2">We use the <strong className="text-[#d4af37]">Meta WhatsApp Business API</strong> to communicate with you. By providing your phone number and opting in, you agree to receive WhatsApp messages from us.</p>

                <h3 className="text-lg font-semibold mt-4 mb-1">Types of Messages</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-3">
                    <li>Property inquiry responses and follow-ups</li>
                    <li>Appointment confirmations and reminders</li>
                    <li>New property listings relevant to your preferences</li>
                    <li>Customer support communications</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-1">Opt-In</h3>
                <p className="text-gray-300 mb-3">You provide consent to receive WhatsApp messages when you submit a contact form on our website, initiate a WhatsApp conversation with us, or explicitly agree to receive WhatsApp communications. Message frequency will vary based on your inquiries and preferences.</p>

                <h3 className="text-lg font-semibold mt-4 mb-1">Opt-Out</h3>
                <p className="text-gray-300 mb-3">You may opt out of WhatsApp messages at any time by replying <strong className="text-[#d4af37]">STOP</strong> to any message we send, or by contacting us at support@easymakan.com. After opting out, you will no longer receive WhatsApp communications from us.</p>

                <h3 className="text-lg font-semibold mt-4 mb-1">Data Shared with Meta</h3>
                <p className="text-gray-300 mb-3">When you communicate with us via WhatsApp, your phone number and message content are processed by Meta Platforms, Inc. as part of the WhatsApp platform. Meta may process this data in accordance with their own privacy policy. We encourage you to review <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Meta's WhatsApp Privacy Policy</a>.</p>

                <h3 className="text-lg font-semibold mt-4 mb-1">No Third-Party Marketing Sharing</h3>
                <p className="text-gray-300">Your mobile phone number and WhatsApp data will <strong className="text-[#d4af37]">never</strong> be shared with third parties for their marketing or promotional purposes.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">5. Sharing of Information</h2>
                <p className="text-gray-300">We do not sell your personal information. We may share data only with trusted service providers who assist in operating our business (e.g., CRM, analytics), under strict confidentiality agreements. We may also disclose information when required by law.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
                <p className="text-gray-300">We retain your personal information only as long as necessary to fulfill the purposes described in this policy or as required by law. WhatsApp message history is retained for customer service purposes and deleted when no longer needed.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">7. Data Security</h2>
                <p className="text-gray-300">We implement industry-standard security measures including encryption, access controls, and secure servers to protect your personal information. However, no transmission over the internet is 100% secure.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">8. Your Rights</h2>
                <p className="text-gray-300 mb-2">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Withdraw consent for WhatsApp communications at any time</li>
                    <li>Lodge a complaint with the relevant data protection authority</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">9. Third-Party Links</h2>
                <p className="text-gray-300">Our website may contain links to third-party websites including Meta/WhatsApp. We are not responsible for the privacy practices of those sites and encourage you to review their policies.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">10. Children's Privacy</h2>
                <p className="text-gray-300">Our services are not directed to children under 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete it immediately.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">11. Changes to This Policy</h2>
                <p className="text-gray-300">We may update this privacy policy from time to time. We will notify you of significant changes via email or WhatsApp message where appropriate. The updated policy will be posted on this page with a revised effective date.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">12. Contact Us</h2>
                <p className="text-gray-300">If you have any questions about this privacy policy or wish to exercise your rights, please contact us:</p>
                <ul className="list-none text-gray-300 mt-2 space-y-1">
                    <li>Email: <a href="mailto:support@easymakan.com" className="underline hover:text-white">support@easymakan.com</a></li>
                    <li>Website: <Link to="/" className="underline hover:text-white">easymakandev.com</Link></li>
                </ul>
            </section>

            <Link to='/' className="text-[#d4af37] hover:underline mt-4 block">← Back to Home</Link>
        </div>
    );
};

export default PrivacyPolicy;
