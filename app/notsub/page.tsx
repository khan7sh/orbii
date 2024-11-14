'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { ContactSubmission } from '@/types/contact'
import { useRouter } from 'next/navigation'

export default function AdminPanel() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const router = useRouter()

  const login = () => {
    if (credentials.username === 'SH' && credentials.password === 'thewebcraft') {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuth', 'true')
    } else {
      alert('Invalid credentials')
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth) setIsAuthenticated(true)

    const fetchSubmissions = async () => {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching submissions:', error)
        return
      }

      setSubmissions(data)
    }

    if (isAuthenticated) {
      fetchSubmissions()
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-900">Admin Login</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-lg"
              value={credentials.username}
              onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
            />
            <button
              onClick={login}
              className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
          <button
            onClick={() => {
              localStorage.removeItem('adminAuth')
              setIsAuthenticated(false)
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-lg"
          >
            Logout
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.map((submission) => (
                <tr key={submission.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {submission.first_name} {submission.last_name}
                  </td>
                  <td className="px-6 py-4">{submission.email}</td>
                  <td className="px-6 py-4">{submission.company || '-'}</td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs truncate">{submission.message}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(submission.created_at!).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 