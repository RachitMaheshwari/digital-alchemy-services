
import React from "react";
import { 
  Cpu, 
  Smartphone, 
  Globe, 
  Code, 
  Server, 
  TestTube,
  Paintbrush,
  Clock,
  DollarSign,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ServiceCard from "@/components/ServiceCard";
import PriceCard from "@/components/PriceCard";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Professional{" "}
                <span className="bg-gradient-to-r from-techpro-blue to-techpro-purple bg-clip-text text-transparent">
                  Tech Solutions
                </span>{" "}
                for Your Business
              </h1>
              <p className="text-gray-600 text-lg mb-8 animate-fade-in">
                We provide top-tier development services for web, mobile, and custom software 
                solutions that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Button className="bg-techpro-purple hover:bg-techpro-purple/90 text-white">
                  Get Started
                </Button>
                <Button variant="outline" className="border-techpro-purple text-techpro-purple hover:bg-techpro-purple/10">
                  View Services
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-techpro-purple to-techpro-blue rounded-lg blur-lg opacity-20"></div>
                <div className="bg-white p-6 rounded-lg shadow-xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Development team working"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">✅ Services Offered</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive range of development services to meet your tech needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="web-dev">
            <ServiceCard
              icon={<Globe size={24} />}
              title="Website Development"
              description="Custom websites tailored to your business needs"
              items={[
                "Static HTML Website",
                "WordPress Website",
                "E-commerce Website",
                "Custom Web Applications"
              ]}
            />
            
            <ServiceCard
              icon={<Smartphone size={24} />}
              title="Mobile App Development"
              description="Build powerful mobile applications for Android and iOS"
              items={[
                "Android Apps (Native/Kotlin)",
                "Flutter/Hybrid Apps",
                "Mobile App UI/UX Design",
                "App Maintenance & Updates"
              ]}
            />
            
            <ServiceCard
              icon={<Cpu size={24} />}
              title="Software Development"
              description="Custom software solutions for your business"
              items={[
                "Desktop Applications (Windows)",
                "SaaS Applications",
                "Custom ERP/CRM Systems",
                "Enterprise Software Solutions"
              ]}
            />
            
            <ServiceCard
              icon={<Code size={24} />}
              title="Frontend & Backend Dev"
              description="Full-stack development services"
              items={[
                "UI Design (Figma / HTML / CSS)",
                "API Development (Node.js / PHP)",
                "Database Setup (MySQL / MongoDB)",
                "Third-Party API Integration"
              ]}
            />
            
            <ServiceCard
              icon={<Server size={24} />}
              title="DevOps & Hosting"
              description="Infrastructure setup and maintenance"
              items={[
                "Server Setup (Linux, Nginx, Apache)",
                "CI/CD Pipeline Integration",
                "Domain & SSL Setup",
                "Cloud Infrastructure Management"
              ]}
            />
            
            <ServiceCard
              icon={<TestTube size={24} />}
              title="Testing Services"
              description="Ensure quality and reliability"
              items={[
                "Manual Testing",
                "Automation Testing (Selenium / Appium)",
                "Performance Testing",
                "Security Testing"
              ]}
            />
          </div>
          
          <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Other Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <span className="mr-2 text-techpro-purple">✓</span>
                <span>Logo Design</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-techpro-purple">✓</span>
                <span>SEO Setup</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-techpro-purple">✓</span>
                <span>Social Media Integration</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-techpro-purple">✓</span>
                <span>Bug Fixing</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-techpro-purple">✓</span>
                <span>Code Optimization</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-techpro-purple">✓</span>
                <span>Monthly Maintenance</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-techpro-purple">✓</span>
                <span>Retainer Plans</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-techpro-purple">✓</span>
                <span>Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Models Section */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">💰 Pricing Models</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to suit your project needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PriceCard
              icon={<Clock size={32} className="text-techpro-purple" />}
              title="Hourly Rate"
              description="For ongoing work or undefined scope"
              price="₹500 – ₹2,000 / hour"
              features={[
                "Flexible engagement",
                "Pay only for hours worked",
                "Regular progress reports",
                "Ideal for maintenance tasks",
                "Quick turnaround time"
              ]}
            />
            
            <PriceCard
              icon={<Briefcase size={32} className="text-techpro-purple" />}
              title="Project-Based"
              description="For defined scope and deliverables"
              price="₹10,000 – ₹1,00,000+"
              features={[
                "Clear project scope",
                "Fixed price agreement",
                "Milestone-based payments",
                "Complete documentation",
                "Post-delivery support"
              ]}
              isPopular={true}
            />
            
            <PriceCard
              icon={<DollarSign size={32} className="text-techpro-purple" />}
              title="Retainer"
              description="For long-term development support"
              price="₹30,000 – ₹2,00,000 / month"
              features={[
                "Dedicated developer(s)",
                "Priority service",
                "Monthly billing",
                "Regular consultations",
                "Discounted hourly rates"
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Price Ranges Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📦 Estimated Price Ranges</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              General pricing guidelines for our most popular services
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Service</TableHead>
                  <TableHead className="text-right font-bold">Estimated Price Range</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Basic Static Website (3–5 pages)</TableCell>
                  <TableCell className="text-right">₹8,000 – ₹15,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>WordPress Website</TableCell>
                  <TableCell className="text-right">₹10,000 – ₹25,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Custom Web Application</TableCell>
                  <TableCell className="text-right">₹30,000 – ₹1,50,000+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Android App (Basic Features)</TableCell>
                  <TableCell className="text-right">₹20,000 – ₹50,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Full-Stack Development Project</TableCell>
                  <TableCell className="text-right">₹50,000 – ₹3,00,000+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Freelance Hourly Rate</TableCell>
                  <TableCell className="text-right">₹500 – ₹2,000 / hour</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Monthly Retainer (Dedicated Developer)</TableCell>
                  <TableCell className="text-right">₹40,000 – ₹2,00,000 / month</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">🧾 Starting Prices (Quick Reference)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-center">
                <div className="font-medium">Logo Design</div>
                <div className="text-lg font-bold text-techpro-purple mt-2">₹1,500</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-center">
                <div className="font-medium">Basic HTML/CSS Website</div>
                <div className="text-lg font-bold text-techpro-purple mt-2">₹10,000</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-center">
                <div className="font-medium">WordPress Website</div>
                <div className="text-lg font-bold text-techpro-purple mt-2">₹15,000</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-center">
                <div className="font-medium">Android App Development</div>
                <div className="text-lg font-bold text-techpro-purple mt-2">₹30,000+</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-center">
                <div className="font-medium">Custom Backend API</div>
                <div className="text-lg font-bold text-techpro-purple mt-2">₹20,000</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-center">
                <div className="font-medium">Hosting & DevOps Setup</div>
                <div className="text-lg font-bold text-techpro-purple mt-2">₹5,000 – ₹15,000</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-center">
                <div className="font-medium">Manual/Automated Testing</div>
                <div className="text-lg font-bold text-techpro-purple mt-2">₹500 / hour</div>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-center">
                <div className="font-medium">Monthly Maintenance</div>
                <div className="text-lg font-bold text-techpro-purple mt-2">₹5,000 / month</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">⚙️ Need a Custom Quote?</h2>
              <p className="text-gray-600 mb-6">
                Every project is unique. Share your requirements, and I'll provide a personalized 
                estimate that fits your goals and budget.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <h3 className="text-lg font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-techpro-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Experienced developers with proven expertise</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-techpro-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-techpro-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>On-time delivery and regular updates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 mr-2 text-techpro-purple flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Post-delivery support and maintenance</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-techpro-blue hover:bg-techpro-blue/90">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  Call: +91 (123) 456-7890
                </Button>
                <Button variant="outline" className="border-techpro-blue text-techpro-blue hover:bg-techpro-blue/10">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Email: contact@techpro.dev
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-6">Get Your Custom Quote</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
