import { motion } from 'motion/react';
import SubsidiaryCard from './SubsidiaryCard';

export default function Subsidiaries() {
  const subsidiaries = [
    {
      name: "Ecosphere Trade BV",
      logo: "ET",
      description: "Delivering Indian Food to EU Diaspora with brands such as Balaji, ART etc.",
      details: "Ecosphere Trade BV specializes in importing and distributing authentic Indian food products across European markets, catering primarily to the Indian diaspora. We partner with renowned Indian brands to bring the authentic taste of India to Europe.",
      locations: ["Netherlands", "European Union"]
    },
    {
      name: "Shri Sai Ram Financials Cooperatie",
      logo: "SF",
      description: "A communal investment into startups, scaleups in India, Netherlands, Switzerland.",
      details: "Shri Sai Ram Financials Cooperatie is a community-focused investment cooperative that pools resources to support promising startups and scale-ups. We provide not just capital but also strategic guidance and networking opportunities to help businesses grow.",
      locations: ["India", "Netherlands", "Switzerland"]
    },
    {
      name: "KensoFI",
      logo: "KF",
      description: "AI based solution for Loan, finance management.",
      details: "KensoFI leverages artificial intelligence to revolutionize loan and finance management. Our cutting-edge solutions help financial institutions streamline their operations, assess risks more accurately, and provide better services to their customers.",
      locations: ["Netherlands", "Switzerland"]
    },
    {
      name: "Emanate",
      logo: "EM",
      description: "A company providing solutions in Data, AI, ERP across Finance, Government and Healthcare industries.",
      details: "Emanate delivers comprehensive data, AI, and ERP solutions tailored for finance, government, and healthcare sectors. Our expertise lies in transforming complex data into actionable insights and implementing robust enterprise systems that drive efficiency and innovation.",
      locations: ["Netherlands", "Switzerland", "Zambia"]
    }
  ];

  return (
    <section id="subsidiaries" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Subsidiaries</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">Discover our diverse portfolio of companies operating across multiple industries and regions</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subsidiaries.map((subsidiary, index) => (
            <SubsidiaryCard
              key={index}
              name={subsidiary.name}
              logo={subsidiary.logo}
              description={subsidiary.description}
              details={subsidiary.details}
              locations={subsidiary.locations}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}