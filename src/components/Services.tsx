import { motion } from 'motion/react';
import { Building, Hammer, MessageSquare, Map } from 'lucide-react';
import { Card } from './ui/card';

export function Services() {
  const services = [
    {
      icon: Building,
      title: 'Property Development',
      description: 'From concept to completion, we develop premium residential and commercial properties that set new standards in quality and design.',
      features: ['Residential Projects', 'Commercial Complexes', 'Mixed-Use Developments', 'Luxury Villas'],
    },
    {
      icon: Hammer,
      title: 'Construction & Project Management',
      description: 'Expert project management ensuring timely delivery, quality construction, and adherence to international standards.',
      features: ['Quality Assurance', 'Timely Delivery', 'Budget Management', 'Safety Compliance'],
    },
    {
      icon: MessageSquare,
      title: 'Real Estate Consulting',
      description: 'Strategic advisory services for investors and buyers, helping you make informed decisions in the real estate market.',
      features: ['Investment Advisory', 'Market Analysis', 'Legal Assistance', 'Property Valuation'],
    },
    {
      icon: Map,
      title: 'Infrastructure & Urban Planning',
      description: 'Comprehensive urban planning solutions creating sustainable communities with modern infrastructure and amenities.',
      features: ['Master Planning', 'Township Development', 'Smart City Solutions', 'Green Infrastructure'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37]">Our Services</span>
          <h2 className="mt-2 text-[#0a1628]">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            We offer end-to-end real estate services, from development to delivery,
            ensuring excellence at every step of your property journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 group border-t-4 border-t-[#d4af37]">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#d4af37] transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-[#d4af37] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0a1628] mb-2">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#0a1628] to-[#1a2a3f] rounded-2xl p-12 text-center text-white"
        >
          <h3 className="mb-4">Why Choose Easymakan?</h3>
          <p className="max-w-3xl mx-auto mb-8 text-gray-300">
            With over 5 years of excellence, we combine innovation, integrity, and
            expertise to deliver projects that exceed expectations. Our commitment to
            quality and customer satisfaction makes us the preferred choice for property
            development in Kolkata.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { number: '100%', label: 'On-Time Delivery' },
              { number: 'A+', label: 'Quality Rating' },
              { number: '98%', label: 'Customer Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[#d4af37] mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
