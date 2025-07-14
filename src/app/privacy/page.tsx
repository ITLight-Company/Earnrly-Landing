import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy - Earnrly',
    description: 'Privacy Policy for Earnrly - Learn how we protect and handle your personal data.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">E</span>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900">Earnrly</h1>
                        </div>
                        <Link
                            href="/"
                            className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

                        <section>
                            <p className="text-sm text-gray-500 mb-6">Last updated: July 14, 2025</p>

                            <p className="text-lg">
                                At Earnrly, we take your privacy seriously. This Privacy Policy explains how we collect,
                                use, disclose, and safeguard your information when you use our mobile application and services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>

                            <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name and email address when you create an account</li>
                                <li>Payment information for reward withdrawals</li>
                                <li>Profile information you choose to provide</li>
                                <li>Communication preferences</li>
                            </ul>

                            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Usage Data</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>App usage patterns and preferences</li>
                                <li>Task completion data and earnings</li>
                                <li>Device information and mobile identifiers</li>
                                <li>Location data (with your permission)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide and maintain our earning platform</li>
                                <li>Process payments and track your earnings</li>
                                <li>Send you relevant task opportunities</li>
                                <li>Improve our app and user experience</li>
                                <li>Communicate with you about your account</li>
                                <li>Prevent fraud and ensure platform security</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                            <p className="mb-4">We do not sell your personal information. We may share your information only in these circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Service Providers:</strong> Third-party companies that help us operate our platform</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                                <li><strong>With Your Consent:</strong> When you explicitly agree to sharing</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures to protect your
                                personal information against unauthorized access, alteration, disclosure, or destruction.
                                This includes encryption, secure servers, and regular security audits.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                            <p className="mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access and review your personal information</li>
                                <li>Correct inaccurate or incomplete data</li>
                                <li>Delete your account and associated data</li>
                                <li>Export your data in a portable format</li>
                                <li>Opt-out of marketing communications</li>
                                <li>Restrict certain data processing activities</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
                            <p>
                                Our app may use cookies and similar tracking technologies to enhance your experience,
                                analyze usage patterns, and deliver personalized content. You can control cookie
                                settings through your device preferences.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
                            <p>
                                Earnrly is intended for users aged 18 and older. We do not knowingly collect personal
                                information from children under 18. If we become aware of such collection, we will
                                delete the information immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Users</h2>
                            <p>
                                Your information may be transferred to and processed in countries other than your own.
                                We ensure appropriate safeguards are in place to protect your data in accordance with
                                this Privacy Policy and applicable laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any
                                material changes by posting the new policy on this page and updating the &quot;Last updated&quot;
                                date. Your continued use of Earnrly after changes become effective constitutes acceptance
                                of the revised policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                            <p className="mb-4">
                                If you have questions about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p><strong>Email:</strong> privacy@earnrly.com</p>
                                <p><strong>Address:</strong> [Your Business Address]</p>
                                <p><strong>Phone:</strong> [Your Contact Number]</p>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-16">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <div className="text-center text-gray-500">
                        <p>&copy; 2025 Earnrly. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
