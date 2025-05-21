import React, { useEffect, useState } from "react";
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
  Briefcase,
  Star,
  Users,
  Zap,
  CheckCircle,
  Calendar,
  Settings,
  CalendarCheck,
  Handshake,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceCard from "@/components/ServiceCard";
import PriceCard from "@/components/PriceCard";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessStep from "@/components/ProcessStep";
import Testimonial from "@/components/Testimonial";
import FeatureShowcase from "@/components/FeatureShowcase";
import StatCard from "@/components/StatCard";
import ProjectCard from "@/components/ProjectCard";
import CountUp from "@/components/CountUp";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Show welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to RM",
        description: "Explore our premium tech services and solutions",
      });
    }, 1500);

    // Handle scroll animations
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Add animation classes to elements as they scroll into view
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        const position = element.getBoundingClientRect();

        // If element is in viewport
        if (position.top < window.innerHeight - 100) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toast]);

  return (
    <div className="bg-white">
      <Header isScrolled={isScrolled} />

      {/* Hero Section - Enhanced with gradient and animated elements */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-purple-50"></div>

        {/* Animated shapes in background */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-l from-purple-200/30 to-blue-300/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className="space-y-6 animate-fade-in">
                {/* <Badge variant="outline" className="px-3 py-1 text-sm border-techpro-purple text-techpro-purple bg-techpro-purple/5">
                  Premium Tech Services
                </Badge> */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
                  Professional{" "}
                  <span className="bg-gradient-to-r from-techpro-blue via-techpro-purple to-purple-500 bg-clip-text text-transparent">
                    Tech Solutions,
                  </span>{" "}
                  That Turn Ideas into Reality.
                </h1>
                <p className="text-gray-600 text-lg md:text-xl md:pr-10">
                  We deliver cutting-edge web, mobile, and custom software
                  development services that drive innovation and growth for
                  businesses of all sizes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up">
                  <a
                    href="#contact">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-techpro-blue to-techpro-purple hover:from-techpro-blue/90 hover:to-techpro-purple/90 text-white shadow-lg shadow-techpro-purple/30 transition-all duration-300 hover:shadow-xl"
                    >
                      Start Your Project
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-techpro-purple text-techpro-purple hover:bg-techpro-purple/10 shadow-sm transition-all duration-300"
                  >
                    View Services
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                      TW
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                      MS
                    </div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold">
                      JD
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">
                    <span className="font-medium">30+</span> clients trust us
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-techpro-purple to-techpro-blue rounded-2xl blur-lg opacity-30"></div>
                <div className="bg-white p-1 rounded-2xl shadow-2xl relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Development team working"
                    className="rounded-xl w-full h-auto"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-sm font-medium">
                          Project in progress
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-techpro-purple/10 text-techpro-purple border-none"
                      >
                        <Clock size={12} className="mr-1" /> Delivery in 7 days
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gradient-to-r from-gray-50 to-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard
              value={35}
              label="Projects Completed"
              icon={<CheckCircle className="text-green-500" />}
            />
            <StatCard
              value={15}
              label="Expert Developers"
              icon={<Users className="text-blue-500" />}
            />
            <StatCard
              value={2}
              suffix="+"
              label="Years Experience"
              icon={<Calendar className="text-amber-500" />}
            />
            <StatCard
              value={98}
              suffix="%"
              label="Client Satisfaction"
              icon={<Star className="text-yellow-500" />}
            />
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with tabs and categories */}
      <section
        id="services"
        className="py-16 md:py-24 bg-white animate-on-scroll"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-techpro-purple/10 text-techpro-purple hover:bg-techpro-purple/20 mb-4">
              Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Solutions We Deliver
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our comprehensive range of development services to meet your tech
              needs and drive your business forward
            </p>
          </div>

          <Tabs defaultValue="web" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
                <TabsTrigger
                  value="web"
                  className="data-[state=active]:bg-techpro-purple data-[state=active]:text-white"
                >
                  <Globe size={16} className="mr-2" /> Web
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="data-[state=active]:bg-techpro-purple data-[state=active]:text-white"
                >
                  <Smartphone size={16} className="mr-2" /> Mobile
                </TabsTrigger>
                <TabsTrigger
                  value="software"
                  className="data-[state=active]:bg-techpro-purple data-[state=active]:text-white"
                >
                  <Cpu size={16} className="mr-2" /> Software
                </TabsTrigger>
                <TabsTrigger
                  value="dev"
                  className="data-[state=active]:bg-techpro-purple data-[state=active]:text-white"
                >
                  <Code size={16} className="mr-2" /> Dev
                </TabsTrigger>
                <TabsTrigger
                  value="devops"
                  className="data-[state=active]:bg-techpro-purple data-[state=active]:text-white"
                >
                  <Server size={16} className="mr-2" /> DevOps
                </TabsTrigger>
                <TabsTrigger
                  value="testing"
                  className="data-[state=active]:bg-techpro-purple data-[state=active]:text-white"
                >
                  <TestTube size={16} className="mr-2" /> Testing
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="web" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard
                  icon={<Globe size={24} />}
                  title="Static Website"
                  description="Custom websites tailored to your business needs"
                  items={[
                    "Responsive Design",
                    "Fast Loading Speed",
                    "SEO Optimization",
                    "Mobile-Friendly Layout",
                  ]}
                />

                <ServiceCard
                  icon={<Globe size={24} />}
                  title="WordPress Website"
                  description="Custom WordPress sites with powerful features"
                  items={[
                    "Custom Theme Development",
                    "Plugin Integration",
                    "E-commerce Functionality",
                    "Content Management System",
                  ]}
                />

                <ServiceCard
                  icon={<Globe size={24} />}
                  title="E-commerce Website"
                  description="Full-featured online stores with payment integration"
                  items={[
                    "Product Catalog Management",
                    "Payment Gateway Integration",
                    "Inventory Management",
                    "Secure Checkout Process",
                  ]}
                />
                <ServiceCard
                  icon={<Globe size={24} />}
                  title="Custom Web Applications"
                  description="Tailored web applications for complex business needs"
                  items={[
                    "User Authentication & Roles",
                    "Advanced Dashboard Features",
                    "API Integration",
                    "Custom Business Logic",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard
                  icon={<Smartphone size={24} />}
                  title="Android Apps"
                  description="Native Android applications with Kotlin"
                  items={[
                    "Material Design UI",
                    "Google Play Store Deployment",
                    "Integration with Android Services",
                    "Performance Optimization",
                  ]}
                />

                <ServiceCard
                  icon={<Smartphone size={24} />}
                  title="iOS Apps"
                  description="Native iOS applications with Swift"
                  items={[
                    "Apple Human Interface Guidelines",
                    "App Store Deployment",
                    "Integration with iOS Services",
                    "Performance Optimization",
                  ]}
                />

                <ServiceCard
                  icon={<Smartphone size={24} />}
                  title="Hybrid Apps"
                  description="Cross-platform apps with Flutter/React Native"
                  items={[
                    "Single Codebase for All Platforms",
                    "Native-Like Performance",
                    "Customizable UI Components",
                    "Cost-Effective Development",
                  ]}
                />
                <ServiceCard
                  icon={<Smartphone size={24} />}
                  title="App Maintenance & Updates"
                  description="Keep your apps up-to-date and running smoothly"
                  items={[
                    "Regular Bug Fixes & Improvements",
                    "Security & OS Updates",
                    "Feature Enhancements",
                    "Performance Monitoring",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="software" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <ServiceCard
                  icon={<Cpu size={24} />}
                  title="Desktop Applications"
                  description="Windows and macOS applications"
                  items={[
                    "Cross-Platform Compatibility",
                    "Intuitive User Interface",
                    "System Integration",
                    "Offline Capabilities",
                  ]}
                />

                <ServiceCard
                  icon={<Cpu size={24} />}
                  title="SaaS Applications"
                  description="Cloud-based software solutions"
                  items={[
                    "Subscription Management",
                    "Multi-tenant Architecture",
                    "Scalable Infrastructure",
                    "Analytics Dashboard",
                  ]}
                />

                <ServiceCard
                  icon={<Cpu size={24} />}
                  title="Custom ERP/CRM"
                  description="Enterprise solutions for business management"
                  items={[
                    "Custom Workflow Automation",
                    "Data Integration & Migration",
                    "Role-Based Access Control",
                    "Reporting & Analytics",
                  ]}
                />

                <ServiceCard
                  icon={<Cpu size={24} />}
                  title="Enterprise Software Solutions"
                  description="Robust software systems for large-scale operations"
                  items={[
                    "End-to-End Business Integration",
                    "Cloud or On-Premise Deployment",
                    "Compliance & Security Features",
                    "Custom Module Development",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="dev" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <ServiceCard
                  icon={<Code size={24} />}
                  title="Frontend Development"
                  description="Modern, responsive user interfaces"
                  items={[
                    "React/Angular/Vue.js Development",
                    "UI/UX Implementation",
                    "Web Performance Optimization",
                    "Responsive Design Systems",
                  ]}
                />

                <ServiceCard
                  icon={<Code size={24} />}
                  title="Backend Development"
                  description="Robust API and server-side solutions"
                  items={[
                    "RESTful API Development",
                    "Node.js/PHP/Python Solutions",
                    "Database Design & Optimization",
                    "Authentication & Authorization",
                  ]}
                />

                <ServiceCard
                  icon={<Code size={24} />}
                  title="Full-Stack Development"
                  description="End-to-end application development"
                  items={[
                    "Seamless Frontend-Backend Integration",
                    "Comprehensive Technical Architecture",
                    "Scalable Application Design",
                    "Deployment & Maintenance",
                  ]}
                />
                <ServiceCard
                  icon={<Code size={24} />}
                  title="Database Setup"
                  description="Efficient and secure database configurations"
                  items={[
                    "Relational & NoSQL Setup",
                    "Data Modeling & Indexing",
                    "Backup & Restore Strategies",
                    "Access Control & Security",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="devops" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <ServiceCard
                  icon={<Server size={24} />}
                  title="Server Setup"
                  description="Configure and manage servers"
                  items={[
                    "Linux/Windows Server Configuration",
                    "Nginx/Apache Setup",
                    "Performance Tuning",
                    "Security Hardening",
                  ]}
                />

                <ServiceCard
                  icon={<Server size={24} />}
                  title="CI/CD Pipelines"
                  description="Automated deployment workflows"
                  items={[
                    "Continuous Integration Setup",
                    "Automated Testing Integration",
                    "Deployment Automation",
                    "Release Management",
                  ]}
                />

                <ServiceCard
                  icon={<Server size={24} />}
                  title="Cloud Infrastructure"
                  description="AWS/Azure/GCP solutions"
                  items={[
                    "Cloud Architecture Design",
                    "Infrastructure as Code",
                    "Container Orchestration",
                    "Cost Optimization",
                  ]}
                />
                <ServiceCard
                  icon={<Server size={24} />}
                  title="Domain & SSL Setup"
                  description="Secure domain and SSL certificate configuration"
                  items={[
                    "Domain Registration & DNS Setup",
                    "SSL Certificate Installation",
                    "HTTPS Redirection",
                    "Ongoing Certificate Renewal",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="testing" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <ServiceCard
                  icon={<TestTube size={24} />}
                  title="Manual Testing"
                  description="Human-verified quality assurance"
                  items={[
                    "Functional Testing",
                    "Regression Testing",
                    "User Acceptance Testing",
                    "Bug Tracking & Reporting",
                  ]}
                />

                <ServiceCard
                  icon={<TestTube size={24} />}
                  title="Automated Testing"
                  description="Reliable, repeatable test suites"
                  items={[
                    "Selenium/Cypress Test Automation",
                    "API Testing",
                    "Test-Driven Development",
                    "Continuous Testing Integration",
                  ]}
                />

                <ServiceCard
                  icon={<TestTube size={24} />}
                  title="Performance Testing"
                  description="Ensure your application can scale"
                  items={[
                    "Load Testing",
                    "Stress Testing",
                    "Scalability Assessment",
                    "Performance Optimization",
                  ]}
                />

                <ServiceCard
                  icon={<TestTube size={24} />}
                  title="Security Testing"
                  description="Protect your application from vulnerabilities"
                  items={[
                    "Vulnerability Assessment",
                    "Penetration Testing",
                    "Security Audits",
                    "OWASP Compliance Checks",
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-center">
              Additional Services
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Paintbrush size={16} className="text-techpro-purple" />
                </div>
                <span>Logo Design</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <Globe size={16} className="text-blue-500" />
                </div>
                <span>SEO Setup</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Users size={16} className="text-green-500" />
                </div>
                <span>Social Media Integration</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <Settings size={16} className="text-red-500" />
                </div>
                <span>Bug Fixing</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <Zap size={16} className="text-yellow-500" />
                </div>
                <span>Code Optimization</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                  <CalendarCheck size={16} className="text-pink-500" />
                </div>
                <span>Monthly Maintenance</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <Handshake size={16} className="text-indigo-500" />
                </div>
                <span>Retainer Plans</span>
              </div>
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <PhoneCall size={16} className="text-orange-500" />
                </div>
                <span>Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - New section */}
      <section className="py-16 md:py-24 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-techpro-blue/10 text-techpro-blue hover:bg-techpro-blue/20 mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our proven development process ensures consistent quality and
              timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ProcessStep
              number={1}
              title="Discovery"
              description="We analyze your requirements and create a detailed project plan"
              icon={<Users size={24} />}
              color="blue"
            />
            <ProcessStep
              number={2}
              title="Development"
              description="Our team builds your solution with regular updates and feedback"
              icon={<Code size={24} />}
              color="purple"
            />
            <ProcessStep
              number={3}
              title="Delivery"
              description="We deploy your project and provide ongoing support"
              icon={<CheckCircle size={24} />}
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section - New section */}
      <section className="py-16 md:py-24 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Latest Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our most recent success stories and client solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              title="E-Commerce Platform"
              category="Web Development"
              description="A fully-featured online store with inventory management"
              technologies={["React", "Node.js", "MongoDB"]}
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              title="Health Tracking App"
              category="Mobile Development"
              description="iOS and Android app for fitness and health tracking"
              technologies={["Flutter", "Firebase", "REST API"]}
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              title="Financial Dashboard"
              category="Software Development"
              description="Real-time analytics platform for financial data"
              technologies={["Angular", ".NET Core", "SQL Server"]}
            />
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-techpro-purple text-techpro-purple hover:bg-techpro-purple/10"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Showcase Section - New section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-techpro-blue-dark to-techpro-blue text-white overflow-hidden animate-on-scroll">
        <div className="container mx-auto px-4 relative">
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-techpro-purple/10 rounded-full blur-3xl"></div>

          <div className="text-center mb-16 relative">
            <Badge className="bg-white/10 text-white hover:bg-white/20 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Cutting-Edge Technology
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              We use the latest tools and frameworks to build powerful,
              future-proof solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FeatureShowcase
              title="Modern Tech Stack"
              description="We specialize in modern JavaScript frameworks, cloud-native architecture, and mobile development platforms"
              features={[
                "React, Angular, Vue.js",
                "Node.js, Python, PHP",
                "AWS, Azure, Google Cloud",
                "Flutter, React Native",
              ]}
            />

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-techpro-purple/50 to-white/30 rounded-2xl blur-lg opacity-30"></div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Code size={24} className="text-white mb-2" />
                    <h3 className="font-medium text-lg">Clean Code</h3>
                    <p className="text-white/70 text-sm">
                      Maintainable, well-documented code
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Zap size={24} className="text-white mb-2" />
                    <h3 className="font-medium text-lg">Fast Performance</h3>
                    <p className="text-white/70 text-sm">
                      Optimized for speed and efficiency
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Smartphone size={24} className="text-white mb-2" />
                    <h3 className="font-medium text-lg">Mobile-First</h3>
                    <p className="text-white/70 text-sm">
                      Responsive on all devices
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <Settings size={24} className="text-white mb-2" />
                    <h3 className="font-medium text-lg">Scalable</h3>
                    <p className="text-white/70 text-sm">
                      Built to grow with your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New section */}
      {/* <section className="py-16 md:py-24 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="RM delivered our e-commerce platform ahead of schedule. The attention to detail and quality of work was outstanding."
              author="Sarah Johnson"
              role="CEO, Fashion Boutique"
              avatar="https://randomuser.me/api/portraits/women/62.jpg"
              rating={5}
            />
            <Testimonial
              quote="Their team understood our requirements perfectly and built exactly what we needed. The mobile app has been a game-changer for our business."
              author="Michael Chen"
              role="CTO, HealthTech Startup"
              avatar="https://randomuser.me/api/portraits/men/32.jpg"
              rating={5}
            />
            <Testimonial
              quote="Professional, responsive and incredibly skilled. We've worked with RM on multiple projects and they never disappoint."
              author="Amanda Rodriguez"
              role="Product Manager, SaaS Company"
              avatar="https://randomuser.me/api/portraits/women/45.jpg"
              rating={5}
            />
          </div>
        </div>
      </section> */}

      {/* FAQ Section - New section */}
      <section className="py-16 md:py-24 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  How long does it take to develop a website?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    The timeline for website development varies based on
                    complexity. A basic website can be completed in 2-4 weeks,
                    while more complex projects with custom functionality may
                    take 2-3 months. We'll provide a detailed timeline during
                    the initial consultation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  What technologies do you use?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    We're technology agnostic and choose the best tools for each
                    project. For web development, we typically use React,
                    Angular, or Vue.js for frontend, and Node.js, PHP, or Python
                    for backend. For mobile development, we work with Flutter,
                    React Native, or native iOS/Android development.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  How do you handle project management?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    We follow Agile methodologies with regular sprints and
                    client check-ins. You'll have a dedicated project manager
                    who provides weekly updates and ensures clear communication
                    throughout the development process. We use tools like Jira
                    and Slack for project tracking and communication.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg">
                  Do you provide maintenance after project completion?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    Yes, we offer ongoing maintenance packages to keep your
                    application secure and up-to-date. This includes regular
                    updates, bug fixes, security patches, and technical support.
                    We can tailor a maintenance plan based on your specific
                    needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg">
                  What is your payment structure?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">
                    We typically work with a 40% upfront deposit, 30% at the
                    midpoint milestone, and 30% upon project completion. For
                    larger projects, we can establish more frequent
                    milestone-based payments. We accept bank transfers, credit
                    cards, and digital payments.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing Models Section - Enhanced with better visuals */}
      <section
        id="pricing"
        className="py-16 md:py-24 bg-gray-50 animate-on-scroll"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Flexible pricing options to suit your project needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PriceCard
              icon={<Clock size={32} className="text-techpro-purple" />}
              title="Hourly Rate"
              description="For ongoing work or undefined scope"
              price="₹500 – ₹2,000"
              unit="/hour"
              features={[
                "Flexible engagement",
                "Pay only for hours worked",
                "Regular progress reports",
                "Ideal for maintenance tasks",
                "Quick turnaround time",
              ]}
            />

            <PriceCard
              icon={<Briefcase size={32} className="text-techpro-purple" />}
              title="Project-Based"
              description="For defined scope and deliverables"
              price="₹10,000 – ₹1,00,000"
              unit="+"
              features={[
                "Clear project scope",
                "Fixed price agreement",
                "Milestone-based payments",
                "Complete documentation",
                "Post-delivery support",
              ]}
              isPopular={true}
            />

            <PriceCard
              icon={<DollarSign size={32} className="text-techpro-purple" />}
              title="Retainer"
              description="For long-term development support"
              price="₹30,000 – ₹2,00,000"
              unit="/month"
              features={[
                "Dedicated developer(s)",
                "Priority service",
                "Monthly billing",
                "Regular consultations",
                "Discounted hourly rates",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Price Ranges Section - Enhanced with more visual elements */}
      <section className="py-16 md:py-24 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              Service Costs
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Estimated Price Ranges
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              General pricing guidelines for our most popular services
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-lg">Service</TableHead>
                  <TableHead className="text-right font-bold text-lg">
                    Estimated Price Range
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    Basic Static Website (3–5 pages)
                  </TableCell>
                  <TableCell className="text-right">₹8,000 – ₹15,000</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    WordPress Website
                  </TableCell>
                  <TableCell className="text-right">
                    ₹10,000 – ₹25,000
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    Custom Web Application
                  </TableCell>
                  <TableCell className="text-right">
                    ₹30,000 – ₹1,50,000+
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    Android App (Basic Features)
                  </TableCell>
                  <TableCell className="text-right">
                    ₹20,000 – ₹50,000
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    Full-Stack Development Project
                  </TableCell>
                  <TableCell className="text-right">
                    ₹50,000 – ₹3,00,000+
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    Freelance Hourly Rate
                  </TableCell>
                  <TableCell className="text-right">
                    ₹500 – ₹2,000 / hour
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium">
                    Monthly Retainer (Dedicated Developer)
                  </TableCell>
                  <TableCell className="text-right">
                    ₹40,000 – ₹2,00,000 / month
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Starting Prices (Quick Reference)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-medium text-gray-600">Logo Design</div>
                <div className="text-xl font-bold text-techpro-purple mt-2">
                  ₹1,500
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-medium text-gray-600">
                  Basic HTML/CSS Website
                </div>
                <div className="text-xl font-bold text-techpro-purple mt-2">
                  ₹10,000
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-medium text-gray-600">
                  WordPress Website
                </div>
                <div className="text-xl font-bold text-techpro-purple mt-2">
                  ₹15,000
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-medium text-gray-600">
                  Android App Development
                </div>
                <div className="text-xl font-bold text-techpro-purple mt-2">
                  ₹30,000+
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-medium text-gray-600">
                  Custom Backend API
                </div>
                <div className="text-xl font-bold text-techpro-purple mt-2">
                  ₹20,000
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-medium text-gray-600">
                  Hosting & DevOps Setup
                </div>
                <div className="text-xl font-bold text-techpro-purple mt-2">
                  ₹5,000 – ₹15,000
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-medium text-gray-600">
                  Manual/Automated Testing
                </div>
                <div className="text-xl font-bold text-techpro-purple mt-2">
                  ₹500 / hour
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="font-medium text-gray-600">
                  Monthly Maintenance
                </div>
                <div className="text-xl font-bold text-techpro-purple mt-2">
                  ₹5,000 / month
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - New section */}
      <section className="py-16 relative overflow-hidden animate-on-scroll">
        <div className="absolute inset-0 bg-gradient-to-r from-techpro-purple to-techpro-blue z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover opacity-10 z-10"></div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's turn your ideas into reality. Get in touch for a free
              consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white border border-white text-techpro-purple hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-techpro-purple transition duration-200"
                >
                  Get Started
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border border-white text-techpro-purple hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-techpro-purple transition duration-200"
              >
                Learn More
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced with better design */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-gray-50 animate-on-scroll"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-techpro-purple/10 text-techpro-purple hover:bg-techpro-purple/20 mb-4">
                Contact Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Your Custom Quote
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Every project is unique. Share your requirements, and we'll
                provide a personalized estimate that fits your goals and budget.
              </p>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6">
                <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="ml-2">
                      Experienced developers with proven expertise
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="ml-2">
                      Transparent pricing with no hidden costs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="ml-2">
                      On-time delivery and regular updates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 bg-green-100 p-1 rounded-full">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="ml-2">
                      Post-delivery support and maintenance
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-techpro-blue hover:bg-techpro-blue/90 group"
                >
                  <a href="tel:+918630142314">
                    <svg
                      className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-rotate-12"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                    </svg>
                    Call: <span className="text-blue-300">+91 8630142314</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-techpro-blue text-techpro-blue hover:bg-techpro-blue/10 group"
                >
                  <a href="mailto:rachitmaheshwari829@gmail.com">
                    <svg
                      className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:translate-y-[-2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    Email: <span className="text-purple-600">rachitmaheshwari829@gmail.com</span>
                  </a>
                </Button>

              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-techpro-blue to-techpro-purple p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Get Your Custom Quote
                </h3>
                <p className="text-white/80">
                  Fill in your details and we'll get back to you within 24 hours
                </p>
              </div>
              <div className="p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
