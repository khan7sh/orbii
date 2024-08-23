import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="space-y-4 text-text-muted">
        <p>
          At OrbiFusion, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, such as when you fill out a contact form, sign up for our newsletter, or use our services. This may include your name, email address, phone number, and any other information you choose to provide.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, to send you marketing communications (if you've opted in), and to comply with legal obligations.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">3. Information Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and customer service.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">5. Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. Please contact us if you wish to exercise these rights.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">6. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>Email: contact@orbifusion.com</p>
        <p>Address: United Kingdom CB1 1PT</p>
      </div>
      <Link href="/" className="text-primary hover:underline mt-8 inline-block">
        Back to Home
      </Link>
    </div>
  )
}