'use client'

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

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-[100dvh] bg-background text-text">
        <DotPattern className="opacity-30" />
        <header className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between border-b border-gray-200">
          <Link className="flex items-center justify-center" href="#">
            <div className="relative">
              <Atom className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-30 animate-pulse"></div>
            </div>
            <span className="ml-2 text-lg sm:text-xl font-bold text-secondary pt-1">Optimize AI Agency</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 sm:gap-8">
            {menuItems.map((item) => (
              <a key={item} className="text-sm font-medium hover:text-primary transition-colors" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
            <ShimmerButton
              shimmerColor="#ffffff"
              background="linear-gradient(to right, #4F46E5, #7C3AED)"
              className="text-sm py-2 px-4 text-white"
              onClick={() => window.open("https://calendly.com/contact-optimizeai/30min", "_blank")}
            >
              Get Started
            </ShimmerButton>
          </nav>
          <button className="sm:hidden text-primary" onClick={() => setMobileMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </header>
        {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
        <main className="flex-1">
          <section className="w-full h-[calc(100vh-5rem)] flex items-center py-12 sm:py-20 md:py-32 lg:py-0 bg-gradient-to-br from-purple-100/70 via-white/70 to-purple-100/70 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute inset-0 bg-gradient-radial from-purple-300/20 to-transparent animate-pulse"></div>
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50/70 to-transparent"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="flex flex-col items-center space-y-8 sm:space-y-10 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-3xl mx-auto text-secondary drop-shadow-lg pb-2">
                  Welcome to <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">Optimize AI Agency</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-text-muted text-lg sm:text-xl md:text-2xl font-medium">
                  Revolutionizing businesses with cutting-edge AI solutions. Unlock the power of artificial intelligence
                  with Optimize AI Agency.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <ShimmerButton
                    shimmerColor="#ffffff"
                    background="linear-gradient(to right, #4F46E5, #7C3AED)"
                    className="text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => window.open("https://calendly.com/contact-optimizeai/30min", "_blank")}
                  >
                    Book a Call
                  </ShimmerButton>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10 text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => setShowAirtable(true)}
                  >
                    Let's Talk
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="relative py-16">
            <h2 className="text-3xl font-bold mb-4 text-secondary text-center">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 text-text-muted text-center">Schedule a discovery call with our AI experts and unlock your company's potential.</p>
            <HeroVideoDialog
              videoSrc="https://www.youtube.com/embed/GTIFPFqbB8c"
              thumbnailSrc="https://img.youtube.com/vi/GTIFPFqbB8c/maxresdefault.jpg"
              className="max-w-4xl mx-auto"
            />
          </section>

          <section className="relative py-16 text-center">
            <ShimmerButton
              shimmerColor="#ffffff"
              background="linear-gradient(to right, #4F46E5, #7C3AED)"
              className="text-lg font-semibold mx-auto px-8 py-3 text-white"
              onClick={() => window.open("https://calendly.com/contact-optimizeai/30min", "_blank")}
            >
              Book Discovery Call Now
            </ShimmerButton>
          </section>

          {showAirtable && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-lg w-full max-w-3xl">
                <button 
                  onClick={() => setShowAirtable(false)}
                  className="float-right text-gray-500 hover:text-gray-700"
                >
                  Close
                </button>
                <iframe 
                  className="airtable-embed" 
                  src="https://airtable.com/embed/appcWgmJf5O6dgzML/pagdLX3YY6MlGML0T/form" 
                  frameBorder="0" 
                  width="100%" 
                  height="533" 
                  style={{ background: 'transparent', border: '1px solid #ccc' }}
                ></iframe>
              </div>
            </div>
          )}

          <section id="services" className="w-full py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">
                Our Services
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: MessageSquare,
                    title: "Chatbot Development",
                    description: "Enhance customer support and generate leads with advanced chatbots.",
                    features: ["Customer support", "Lead generation", "Product recommendation"]
                  },
                  {
                    icon: Cog,
                    title: "Workflow Automations",
                    description: "Streamline your business processes with intelligent automation solutions.",
                    features: ["Social media automation", "CRM management", "Web scraping systems"]
                  },
                  {
                    icon: Bot,
                    title: "AI Agents Development",
                    description: "Optimize operations with cutting-edge AI agents and decision systems.",
                    features: ["Self-adaptive systems", "Real-time processing", "Predictive analytics"]
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white transition-all duration-300 hover:shadow-2xl group overflow-hidden rounded-2xl"
                  >
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                        {React.createElement(service.icon, { className: "h-6 w-6 text-primary" })}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      <p className="text-text-muted mb-6">{service.description}</p>
                      <ul className="text-sm text-text-muted space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-6 pb-6">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        <a href="https://calendly.com/contact-optimizeai/30min">
                          Learn More
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="features" className="w-full py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">
                Our Features
              </h2>
              <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Atom, title: "Advanced AI Algorithms", description: "Cutting-edge machine learning models for optimal performance." },
                  { icon: Rocket, title: "Scalable Solutions", description: "Grow your AI capabilities alongside your business needs." },
                  { icon: Zap, title: "Real-time Insights", description: "Instant data analysis for quick and informed decision-making." },
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center group p-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl">
                    {React.createElement(feature.icon, { className: "h-16 w-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300" })}
                    <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
                    <p className="text-text-muted">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="w-full py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="bg-white p-8 rounded-xl max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-secondary mb-12">
                  Our Process
                </h2>
                <div className="space-y-12">
                  {[
                    { 
                      icon: Search, 
                      title: "AI Readiness Consultation", 
                      description: "We start by understanding your vision. Our initial consultation aligns our AI solutions with your business goals.",
                      step: "STEP 1"
                    },
                    { 
                      icon: BarChart, 
                      title: "Transparent Progress Tracking", 
                      description: "Your dedicated customer portal allows for real-time progress tracking and feedback, ensuring our solutions evolve with your needs.",
                      step: "STEP 2"
                    },
                    { 
                      icon: Code, 
                      title: "Seamless Integration", 
                      description: "We'll embed your new AI agents into your business, ensuring they deliver real value from day one.",
                      step: "STEP 3"
                    },
                    { 
                      icon: Cog, 
                      title: "Ongoing Support", 
                      description: "We'll keep adding more agents, refining and expanding their capabilities to keep your company ahead of the game.",
                      step: "STEP 4"
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          {React.createElement(step.icon, { className: "w-8 h-8 text-white" })}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-semibold text-primary mb-1">{step.step}</div>
                        <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                        <p className="text-text-muted">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="w-full py-20 md:py-32 bg-gradient-to-b from-gray-50 to-purple-100">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">
                Contact Us
              </h2>
              <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Users, title: "Meet Our Team", description: "Get to know the people behind the innovation." },
                  { icon: Code, title: "Explore Our Work", description: "See our latest projects and case studies." },
                  { icon: MessageSquare, title: "Join Our Community", description: "Stay updated with our newsletter and events." },
                ].map((contactItem, index) => (
                  <div key={index} className="flex flex-col items-center text-center group p-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-xl">
                    {React.createElement(contactItem.icon, { className: "h-16 w-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300" })}
                    <h3 className="text-xl font-bold mb-3 text-secondary">{contactItem.title}</h3>
                    <p className="text-text-muted">{contactItem.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-purple-100 border-t border-purple-200">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <Atom className="h-8 w-8 text-primary" />
                <span className="text-lg font-bold text-secondary">Optimize AI Agency</span>
              </div>
              <p className="text-text-muted text-sm">Revolutionizing businesses with cutting-edge AI solutions.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.6-4.2 4-6.6 6-3.8 1.1 1.3 1.8 2.8 1.9 4.3.1.4.4.8.8.8z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary> 
  )
}