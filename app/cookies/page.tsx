import Link from 'next/link'

export default function CookiesPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>
      <div className="space-y-4 text-text-muted">
        <p>
          This Cookies Policy explains how Optimize AI Agency uses cookies and similar technologies to recognize you when you visit our website.
        </p>
        
        <h2 className="text-xl font-semibold text-secondary mt-6">What are cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners.
        </p>

        <h2 className="text-xl font-semibold text-secondary mt-6">How we use cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Essential cookies: Required for the website to function properly</li>
          <li>Analytics cookies: Help us understand how visitors interact with our website</li>
          <li>Marketing cookies: Used to track visitors across websites for marketing purposes</li>
          <li>Preference cookies: Enable the website to remember your preferences</li>
        </ul>

        <h2 className="text-xl font-semibold text-secondary mt-6">Managing cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. However, if you limit the ability of websites to set cookies, you may impact your overall user experience.
        </p>

        <h2 className="text-xl font-semibold text-secondary mt-6">Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at:
        </p>
        <p>Email: contact@optimizeai.agency</p>
        <p>Address: United Kingdom</p>
      </div>
      <Link href="/" className="text-primary hover:underline mt-8 inline-block">
        Back to Home
      </Link>
    </div>
  )
} 