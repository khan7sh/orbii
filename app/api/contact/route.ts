import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received form data:', body)
    
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          first_name: body.firstName,
          last_name: body.lastName,
          email: body.email,
          company: body.company,
          message: body.message
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    console.log('Successfully inserted data:', data)
    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error', details: error },
      { status: 500 }
    )
  }
} 