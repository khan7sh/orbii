import { Button } from "../components/ui/button"
import { Brain, Rocket, Zap, Search, Code, BarChart, Users, CheckCircle, MessageSquare, Cog, Bot } from "lucide-react"
import Link from "next/link"
import React, { useState, useEffect } from 'react'

export default function Component() {
  const [showAirtable, setShowAirtable] = useState(false)

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-text">
      <header className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between border-b border-gray-200">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <span className="ml-2 text-lg sm:text-xl font-bold text-secondary">OrbiFusion</span>
        </Link>
        <nav className="hidden sm:flex gap-6 sm:gap-8">
          {["Services", "Features", "Process", "Contact"].map((item) => (
            <a key={item} className="text-sm font-medium hover:text-primary transition-colors" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <button className="sm:hidden text-primary" onClick={() => {/* Add mobile menu toggle logic here */}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-20 md:py-32 lg:py-44">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl mx-auto text-secondary">
                Welcome to <span className="text-primary">OrbiFusion</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-text-muted text-base sm:text-lg md:text-xl">
                Revolutionizing businesses with cutting-edge AI solutions. Unlock the power of artificial intelligence
                with OrbiFusion.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary/90 text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6"
                >
                  <a
                    href="https://calendly.com/azam-orbifusion/ai-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10 text-base sm:text-lg py-2 sm:py-3 px-4 sm:px-6"
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
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                      href="https://calendly.com/azam-orbifusion/ai-consultation"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">
              Our Features
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Brain, title: "Advanced AI Algorithms", description: "Cutting-edge machine learning models for optimal performance." },
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">
              Our Process
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  { icon: Search, title: "Discovery", description: "We analyze your business needs and objectives." },
                  { icon: Code, title: "Development", description: "Our experts design and develop tailored AI solutions." },
                  { icon: BarChart, title: "Implementation", description: "We integrate the AI solution into your existing systems." },
                  { icon: Users, title: "Training", description: "We provide comprehensive training for your team." },
                  { icon: CheckCircle, title: "Optimization", description: "Continuous improvement and support for optimal performance." },
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      {<step.icon className="w-6 h-6 text-white" />}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-secondary">{step.title}</h3>
                      <p className="text-text-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-text-muted text-lg md:text-xl">
                Ready to transform your business with AI? Book a call with us today.
              </p>
              <div className="w-full max-w-sm">
                <Button
                  asChild
                  className="w-full bg-primary text-white hover:bg-primary/90 text-lg py-3"
                >
                  <a
                    href="https://calendly.com/azam-orbifusion/ai-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto flex flex-col sm:flex-row gap-4 py-8 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t border-gray-200">
        <p className="text-sm text-text-muted text-center sm:text-left">© 2023 OrbiFusion AI. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm text-text-muted hover:text-primary transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm text-text-muted hover:text-primary transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}