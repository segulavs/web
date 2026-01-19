import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface JointVentureCardProps {
  name: string;
  description: string;
  logo: string;
  index: number;
}

function JointVentureCard({ name, description, logo, index }: JointVentureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
            {logo}
          </div>
          <h3 className="text-xl font-bold text-white ml-4">{name}</h3>
        </div>
        
        <p className="text-purple-100 mb-4">{description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm text-purple-300 hover:text-purple-100 transition-colors duration-200 mt-2"
        >
          {isExpanded ? (
            <>
              <span>Show less</span>
              <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              <span>Learn more</span>
              <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function JointVentures() {
  const jointVentures = [
    {
      name: "FinthosAI",
      logo: "FA",
      description: "An AI-driven financial technology venture specializing in predictive analytics and automated investment strategies for financial institutions."
    },
    {
      name: "Dutch Caution",
      logo: "DC",
      description: "A security and risk management joint venture providing comprehensive safety solutions and consultancy services across Europe."
    },
    {
      name: "DBX EDM",
      logo: "DE",
      description: "Enterprise data management solutions focusing on data governance, quality, and integration for large-scale organizations."
    }
  ];

  return (
    <section id="joint-ventures" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Joint Ventures</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">Strategic partnerships expanding our reach and capabilities</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jointVentures.map((venture, index) => (
            <JointVentureCard
              key={index}
              name={venture.name}
              logo={venture.logo}
              description={venture.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}