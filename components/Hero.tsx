import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center z-10">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Shreshti
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Established in the Netherlands, pioneering innovation across multiple industries
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#subsidiaries" 
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Explore Our Companies
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
          }}
        >
          <a href="#subsidiaries" className="text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}