import { Button } from "@/components/ui/button"
import { Rocket, Zap, Search, Code, BarChart, Users, CheckCircle, MessageSquare, Cog, Bot, X, Atom } from "lucide-react"
import Link from "next/link"
import React, { useState, useEffect } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import MobileMenu from '@/components/MobileMenu';
import { DotPattern } from "@/components/magicui/dot-pattern";
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import ShimmerButton from '@/components/magicui/shimmer-button';
import ShineBorder from '@/components/magicui/shine-border';

export default function Home() {
  const [showAirtable, setShowAirtable] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuItems = ['Services', 'Features', 'Process', 'Contact'];

  // ... rest of the component code ...

  return (
    <ErrorBoundary>
      {/* ... rest of the JSX ... */}
    </ErrorBoundary>
  )
}