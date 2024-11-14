'use client'

import { Button } from "@/components/ui/button"
import { Rocket, Zap, Search, Code, BarChart, Users, CheckCircle, MessageSquare, Cog, Bot, X, Atom, Mail, Calendar, Mic, MapPin } from "lucide-react"
import Link from "next/link"
import React, { useState, useEffect } from 'react'
import MobileMenu from '@/components/MobileMenu';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import ShimmerButton from '@/components/magicui/shimmer-button';
import ShineBorder from '@/components/magicui/shine-border';
import { Input } from "@/components/ui/input"
import { Toast } from '@/components/ui/toast'

const services = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "AI Lead Generation",
    description: "Unlock the potential of your sales funnel with our AI Lead Generation service. By leveraging cutting-edge AI technology, we analyze your target market and craft personalized outreach strategies that resonate with each prospect.",
    features: ["Market analysis", "Personalized outreach", "Lead scoring", "Automated follow-ups"],
    featured: false
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-white" />,
    title: "AI Customer Support",
    description: "Revolutionize your customer service with our AI Chatbot. Available 24/7, it provides instant, accurate responses to your customers' inquiries, improving their experience while reducing your support team's workload.",
    features: ["24/7 availability", "Instant responses", "Multi-language support", "Learning capability"],
    featured: true
  },
  {
    icon: <Bot className="h-6 w-6 text-primary" />,
    title: "AI Sales Assistant",
    description: "Enhance your sales team's efficiency with our AI Sales Assistant. This innovative tool assists your team in providing personalized customer experiences, navigating complex catalogs with ease, and swiftly finding the right products to meet customer needs.",
    features: ["Personalized experiences", "Catalog navigation", "Product matching", "Sales analytics"],
    featured: false
  }
];

export default function Home() {
  const [showAirtable, setShowAirtable] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuItems = ['Services', 'Features', 'Process', 'Contact'];
  const [showToast, setShowToast] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setShowToast(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form:', error instanceof Error ? error.message : 'An unknown error occurred');
      // You could also set an error state here to show to the user
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-text relative overflow-hidden">
      {/* Global background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-100/70 via-white/70 to-purple-100/70"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-5"></div>
      <div className="fixed inset-0 bg-gradient-radial from-purple-300/20 to-transparent animate-pulse"></div>
      
      {/* Paint-like spots */}
      <div className="fixed -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
      <div className="fixed top-1/4 right-1/3 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-1/3 left-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      <div className="fixed -bottom-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-6000"></div>

      {/* Content */}
      <div className="relative z-10">
        <header className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between border-b border-gray-200/50">
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
            <Button
              className="text-sm font-medium py-2 px-4 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => {
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{ opacity: 1 }}
            >
              Get Started
            </Button>
          </nav>
          <button className="sm:hidden text-primary" onClick={() => setMobileMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </header>
        {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
        <main className="flex-1">
          {/* Hero section */}
          <section className="w-full min-h-[calc(100vh-5rem)] flex items-center py-12 sm:py-20 md:py-32 lg:py-0 relative overflow-hidden">
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
                  <Button
                    className="text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => window.open("https://calendly.com/contact-optimizeai/30min", "_blank")}
                  >
                    Book a Call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10 text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Let's Talk
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Video section */}
          <section className="w-full py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter max-w-3xl mx-auto text-secondary drop-shadow-lg pb-2">
                  Ready to <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">Transform</span> Your Business?
                </h2>
                <p className="mx-auto max-w-[700px] text-text-muted text-lg sm:text-xl md:text-2xl font-medium mt-6">
                  Watch our video to see how Optimize AI Agency can revolutionize your operations with cutting-edge AI solutions.
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <HeroVideoDialog
                  videoSrc="https://www.youtube.com/embed/GTIFPFqbB8c?si=itOuB2GYYZoAWGgL"
                  animationStyle="from-bottom"
                  className="w-full aspect-video mb-12"
                />
                <div className="text-center">
                  <Button
                    className="text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => window.open("https://calendly.com/contact-optimizeai/30min", "_blank")}
                  >
                    Book Discovery Call
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services section */}
          <section id="services" className="py-24 relative bg-gradient-to-b from-gray-50/50 to-white/50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-20">
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6 tracking-tight">
                  AI Solutions for Your Business
                </h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto">
                  Powered with the most advanced language models on the market, like{' '}
                  <span className="text-primary font-medium">GPT 4</span>,{' '}
                  <span className="text-primary font-medium">Gemini Pro</span> and{' '}
                  <span className="text-primary font-medium">Claude Pro</span>.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-7xl mx-auto">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className={`group relative ${
                      service.featured 
                        ? 'md:transform md:-translate-y-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
                        : 'bg-white'
                    } rounded-2xl p-8 transition-all duration-500 hover:shadow-xl border border-gray-100/50`}
                  >
                    <div className={`${
                      service.featured 
                        ? 'bg-white/10' 
                        : 'bg-gray-50'
                      } rounded-xl p-3 w-fit mb-6`}
                    >
                      {service.icon}
                    </div>
                    
                    <h3 className={`text-xl font-semibold mb-4 ${
                      service.featured ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`mb-8 ${service.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 ${
                            service.featured ? 'text-green-400' : 'text-green-500'
                          } flex-shrink-0`} />
                          <span className={service.featured ? 'text-gray-300' : 'text-gray-600'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="absolute inset-0 border border-gray-200/50 rounded-2xl pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent opacity-50" />
          </section>

          <section className="py-20 relative bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Designed for your own AI for your Business</h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto">
                  Our Tool Stack Right Now
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                {/* Large featured card */}
                <div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white group hover:shadow-2xl transition-all duration-500">
                  <div className="h-full flex flex-col">
                    <div className="bg-white/20 rounded-xl p-3 w-fit mb-6">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">AI Sales Assistant</h3>
                    <p className="text-white/90 mb-auto">
                      Upgrade your customer service with our AI Sales Assistant, designed to guide and assist customers through their shopping journey. Our intelligent system provides personalized product recommendations, answers detailed product questions, handles inquiries 24/7, and helps customers make informed purchasing decisions. By combining advanced natural language processing with deep product knowledge, our AI Assistant increases conversion rates while reducing support workload, leading to enhanced customer satisfaction and increased sales.
                    </p>
                  </div>
                </div>

                {/* Medium cards */}
                <div className="p-6 rounded-3xl bg-white/80 hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100 text-secondary group hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-3 w-fit mb-6">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors">AI Product Recommender</h3>
                  <p className="text-text-muted">Leverage AI to offer personalized product suggestions to your customers. Our tool analyzes browsing behavior and preferences, boosting engagement and sales through tailored recommendations.</p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100 text-secondary group hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-3 w-fit mb-6">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors">AI Community Manager</h3>
                  <p className="text-text-muted">Automate interactions on social platforms like Instagram and Facebook with our AI Community Manager. Efficiently manage DMs and comments, ensuring timely and consistent communication with your audience.</p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100 text-secondary group hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-3 w-fit mb-6">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors">AI Integration Consultancy</h3>
                  <p className="text-text-muted">Gain expert insights and training on AI implementation. Our professional consulting services equip your team with the knowledge and skills to effectively integrate and leverage AI in your e-commerce operations.</p>
                </div>

                <div className="p-6 rounded-3xl bg-white/80 hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100 text-secondary group hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-3 w-fit mb-6">
                    <Cog className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors">Management & Support</h3>
                  <p className="text-text-muted">Ensure seamless operation of AI tools with our continuous management services. We provide ongoing support and updates, keeping your systems optimized and aligned with your business goals.</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-200/30 rounded-full filter blur-3xl" />
            <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-indigo-200/30 rounded-full filter blur-3xl" />
          </section>

          <section id="features" className="w-full py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">
                Our Features
              </h2>
              <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { icon: Atom, title: "Advanced AI Algorithms", description: "Cutting-edge machine learning models for optimal performance." },
                  { icon: Rocket, title: "Scalable Solutions", description: "Grow your AI capabilities alongside your business needs." },
                  { icon: Zap, title: "Real-time Insights", description: "Instant data analysis for quick and informed decision-making." },
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center group p-6 rounded-lg transition-all duration-300 hover:bg-white/80 hover:backdrop-blur-sm hover:shadow-xl">
                    {React.createElement(feature.icon, { className: "h-16 w-16 mb-6 text-primary group-hover:scale-110 transition-transform duration-300" })}
                    <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
                    <p className="text-text-muted">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="w-full py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl max-w-4xl mx-auto">
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

          <section id="contact" className="w-full py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary mb-4">
                    Let's Work Together
                  </h2>
                  <p className="text-lg text-text-muted max-w-2xl mx-auto">
                    Ready to transform your business with AI? Get in touch with us today and let's discuss how we can help you achieve your goals.
                  </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                  {/* Contact Form - Takes up 3 columns */}
                  <div className="lg:col-span-3">
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 p-6 rounded-xl shadow-sm">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-secondary">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John"
                            className="w-full bg-white border-gray-200 focus:border-primary focus:ring-primary"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-secondary">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            className="w-full bg-white border-gray-200 focus:border-primary focus:ring-primary"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-secondary">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                          placeholder="Tell us about your project..."
                          required
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 text-base font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>

                  {/* Contact Information - Takes up 2 columns */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary mb-2">Schedule a Meeting</h3>
                      <p className="text-text-muted mb-4">
                        Book a 30-minute consultation to discuss your AI needs.
                      </p>
                      <Button
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300"
                        onClick={() => window.open('https://calendly.com/contact-optimizeai/30min', '_blank')}
                      >
                        Book a Call
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary mb-4">Contact Information</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-white p-2 rounded-full">
                              <Mail className="h-5 w-5 text-primary" />
                            </div>
                            <a href="mailto:contact@optimizeai.agency" className="text-text-muted hover:text-primary transition-colors">
                              contact@optimizeai.agency
                            </a>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="bg-white p-2 rounded-full">
                              <MapPin className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-text-muted">United Kingdom</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Toast 
            message="Message sent successfully! We'll get back to you soon." 
            isVisible={showToast} 
            onClose={() => setShowToast(false)} 
          />
        </main>
        <footer className="border-t border-purple-200/50 relative z-10">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <Atom className="h-8 w-8 text-primary" />
                <span className="text-lg font-bold text-secondary">Optimize AI Agency</span>
              </div>
              <p className="text-text-muted text-sm">Revolutionizing businesses with cutting-edge AI solutions.</p>
              <div className="flex justify-center space-x-6 w-full">
                <a href="https://instagram.com/optimizeai.agency" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://x.com/optimizeai_" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.6-4.2 4-6.6 6-3.8 1.1 1.3 1.8 2.8 1.9 4.3.1.4.4.8.8.8z"></path></svg>
                </a>
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
                <span className="text-text-muted">|</span>
                <a href="/terms" className="text-text-muted hover:text-primary transition-colors">Terms & Conditions</a>
                <span className="text-text-muted">|</span>
                <a href="/cookies" className="text-text-muted hover:text-primary transition-colors">Cookies Policy</a>
              </div>
              <p className="text-text-muted text-sm">© {new Date().getFullYear()} Optimize AI Agency. All rights reserved.</p>
              <div className="mt-6 pt-6 border-t border-purple-100 w-full text-center">
                <p className="text-base">
                  Made with ❤️ by{' '}
                  <a 
                    href="https://thecraftweb.co.uk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    thecraftweb.co.uk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}