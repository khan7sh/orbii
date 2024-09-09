import { Button } from "../components/ui/button"
import { Rocket, Zap, Search, Code, BarChart, Users, CheckCircle, MessageSquare, Cog, Bot, X, Atom } from "lucide-react"
import Link from "next/link"
import React, { useState, useEffect } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import MobileMenu from '../components/MobileMenu';

export default function Component() {
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
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-sm py-2 px-4"
              onClick={() => setShowAirtable(true)}
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
          <section className="w-full h-[calc(100vh-5rem)] flex items-center py-12 sm:py-20 md:py-32 lg:py-0 bg-gradient-to-br from-purple-100 via-white to-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-radial from-purple-300/40 to-transparent animate-pulse"></div>
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
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
                    asChild
                    className="bg-primary text-white hover:bg-primary/90 text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <a
                      href="https://calendly.com/contact-optimizeai/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Call
                    </a>
                  </Button>
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
                  <div key={index} className="bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl group overflow-hidden">
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
          <section id="process" className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-purple-50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">
                Our Process
              </h2>
              <div className="max-w-4xl mx-auto">
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
              <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary mb-6 text-center">Get in Touch</h2>
                <p className="text-text-muted text-lg md:text-xl mb-8 text-center">
                  Ready to transform your business with AI? Let's start a conversation.
                </p>
                <div className="flex justify-center mb-8">
                  <Button
                    asChild
                    className="w-full md:w-auto bg-primary text-white hover:bg-primary/90 text-lg py-3 px-6"
                  >
                    <a
                      href="https://calendly.com/contact-optimizeai/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Call
                    </a>
                  </Button>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Contact Us</h3>
                  <p className="text-text-muted">
                    Email: <a href="mailto:contact@optimizeai.agency" className="text-primary hover:underline">contact@optimizeai.agency</a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-purple-100 border-t border-purple-200">
          <div className="container mx-auto flex flex-col sm:flex-row gap-4 py-8 w-full shrink-0 items-center justify-between px-4 md:px-6">
            <p className="text-sm text-text-muted text-center sm:text-left">© 2023 Optimize AI Agency. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <Link className="text-sm text-text-muted hover:text-primary transition-colors" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-sm text-text-muted hover:text-primary transition-colors" href="/privacy">
                Privacy
              </Link>
              <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/optimizeai.agency/" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-primary transition-colors">
                Instagram
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  )
}