 'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { X, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-8 shadow-2xl z-50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-4 rounded-full">
            <Cookie className="h-8 w-8 text-primary" />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary">We value your privacy</h3>
            <p className="text-text-muted max-w-2xl">
              We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. 
              By clicking "Accept All", you consent to our use of cookies. Visit our{' '}
              <a href="/cookies" className="text-primary hover:underline font-medium">
                Cookie Policy
              </a>{' '}
              to learn more about how we use cookies and how you can manage your preferences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              onClick={acceptCookies}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Accept All
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowConsent(false)}
              className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-medium"
            >
              Decline Optional
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}