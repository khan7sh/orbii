import React from 'react'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <div className="space-y-4 text-text-muted">
        <p>
          Welcome to OrbiFusion. By using our services, you agree to these terms. Please read them carefully.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">1. Use of Services</h2>
        <p>
          You must follow any policies made available to you within the Services. Don't misuse our Services. For example, don't interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">2. Privacy</h2>
        <p>
          OrbiFusion's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that OrbiFusion can use such data in accordance with our privacy policies.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">3. Modifications</h2>
        <p>
          We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">4. Liabilities</h2>
        <p>
          When permitted by law, OrbiFusion will not be responsible for lost profits, revenues, or data, financial losses or indirect, special, consequential, exemplary, or punitive damages.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">5. Business uses of our Services</h2>
        <p>
          If you are using our Services on behalf of a business, that business accepts these terms. It will hold harmless and indemnify OrbiFusion and its affiliates, officers, agents, and employees from any claim, suit or action arising from or related to the use of the Services or violation of these terms.
        </p>
        <h2 className="text-xl font-semibold text-secondary mt-6">Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>Email: contact@optimizeai.agency</p>
        <p>Address: United Kingdom CB1 1PT</p>
      </div>
      <Link href="/" className="text-primary hover:underline mt-8 inline-block">
        Back to Home
      </Link>
    </div>
  )
}