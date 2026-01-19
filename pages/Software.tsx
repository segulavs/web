import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Database, Shield, Zap, Cpu, BarChart3, ExternalLink } from 'lucide-react';

function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false)
  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==" alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />
  )
}

interface SoftwareCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
  index: number;
}

function SoftwareCard({ title, description, features, icon, image, index }: SoftwareCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden"
    >
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-2/5">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-3/5 p-6 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white ml-4">{title}</h3>
          </div>
          
          <p className="text-purple-100 mb-6">{description}</p>
          
          <div className="mb-4 flex-grow">
            <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <button className="mt-auto flex items-center text-sm text-purple-300 hover:text-white transition-colors duration-200">
            <span>Request Demo</span>
            <ExternalLink size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Software() {
  const softwareProducts = [
    {
      title: "KensoFI Analytics",
      description: "AI-powered financial analytics platform that provides comprehensive insights for banking, investment, and loan management.",
      features: [
        "AI-driven risk assessment for loan applications",
        "Real-time portfolio analysis and optimization",
        "Customizable financial dashboards and reporting",
        "Automated compliance monitoring and alerts"
      ],
      icon: <BarChart3 size={24} />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Emanate DataVerse",
      description: "Enterprise data management solution that enables organizations to integrate, analyze, and visualize complex data structures.",
      features: [
        "Advanced data integration and transformation tools",
        "Interactive visualization dashboards",
        "Automated data quality monitoring",
        "Industry-specific data models for finance, healthcare and government"
      ],
      icon: <Database size={24} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80"
    },
    {
      title: "DBX EDM Platform",
      description: "Comprehensive enterprise data management platform that streamlines data governance, integration, and analytics.",
      features: [
        "End-to-end data governance framework",
        "API-first integration architecture",
        "Automated data lineage tracking",
        "Scalable data processing for large enterprises"
      ],
      icon: <Code size={24} />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "SecureGuard",
      description: "Comprehensive security solution for enterprise data protection and risk management.",
      features: [
        "Real-time threat detection and mitigation",
        "Advanced encryption for sensitive data",
        "Compliance monitoring for GDPR, HIPAA, and other regulations",
        "User behavior analytics to detect insider threats"
      ],
      icon: <Shield size={24} />,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "FinthosAI Engine",
      description: "Next-generation AI platform for financial institutions, offering predictive analytics and intelligent automation.",
      features: [
        "Advanced predictive models for market analysis",
        "Automated financial advisory tools",
        "NLP-powered document analysis and extraction",
        "Fraud detection and prevention algorithms"
      ],
      icon: <Cpu size={24} />,
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    },
    {
      title: "Quantum ERP",
      description: "Integrated enterprise resource planning system with AI capabilities for modern businesses.",
      features: [
        "Seamless integration with existing business systems",
        "AI-powered business process optimization",
        "Real-time analytics and reporting",
        "Industry-specific modules for diverse business needs"
      ],
      icon: <Zap size={24} />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#050108]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Software Solutions</h1>
            <p className="text-purple-200 max-w-2xl mx-auto text-lg">
              Cutting-edge software platforms and tools powering digital transformation across industries
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
          </motion.div>

          <div className="space-y-12">
            {softwareProducts.map((product, index) => (
              <SoftwareCard
                key={index}
                title={product.title}
                description={product.description}
                features={product.features}
                icon={product.icon}
                image={product.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Looking for a Custom Solution?</h2>
          <p className="text-purple-200 mb-8">
            Our team of experts can develop tailored software solutions to meet your specific business needs and challenges.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}