import { motion } from 'motion/react';
import { Building2, Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import { Card } from './ui/card';
import founderImage from 'figma:asset/f04946f3a1453bbb7874bb983ea6d8e6d77ef56b.png';

export function About() {
  const values = [
    {
      icon: Building2,
      title: 'Excellence',
      description: 'Committed to delivering world-class quality in every project',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering modern architectural solutions and smart designs',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparency and ethical practices',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Creating homes and spaces that exceed expectations',
    },
  ];



  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37]">About Us</span>
          <h2 className="mt-2 text-[#0a1628]">
            Shaping Kolkata's Skyline Since 2020
          </h2>
          <div className="mt-4 max-w-3xl mx-auto text-gray-600">
            Easymakan Development Corporation is a premier real estate developer in Kolkata, committed to creating iconic landmarks that combine luxury, functionality, and sustainability. With over five years of industry expertise, the company has redefined the city’s skyline through innovative residential and commercial developments.
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-l-4 border-[#d4af37] h-full">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-[#d4af37] mr-3" />
                <h3 className="text-[#0a1628]">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To revolutionize real estate in Eastern India by delivering exceptional
                properties that combine architectural brilliance, sustainable practices,
                and customer satisfaction. We strive to create living spaces that enhance
                the quality of life for our residents.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-l-4 border-[#d4af37] h-full">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-[#d4af37] mr-3" />
                <h3 className="text-[#0a1628]">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To become India's most trusted and admired real estate brand, known for
                innovation, quality, and timely delivery. We envision creating sustainable
                communities that stand the test of time and become landmarks of excellence.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-center text-[#0a1628] mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-[#d4af37]" />
                  </div>
                  <h4 className="mb-2 text-[#0a1628]">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-[#0a1628] mb-12">Leadership</h3>
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative h-[400px] md:h-auto">
                <img
                  src={founderImage}
                  alt="Founder & CEO"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a1628]/20 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-[#d4af37]/10 text-[#d4af37] rounded-full mb-4">
                    Leadership
                  </div>
                  <h3 className="text-[#0a1628] mb-2">Sabir Ali Mollah</h3>
                  <p className="text-gray-600 mb-6">
                    Founder & CEO, Easymakan Development Corporation
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    A visionary entrepreneur and first-generation business leader, driving innovation 
                    and excellence in real estate development across India and international markets.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With a passion for creating world-class properties and sustainable communities, 
                    our founder has established Easymakan as a trusted name in luxury real estate development.
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-[#d4af37] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#0a1628]">Global Icon Award 2025</p>
                      <p className="text-gray-600">4th Global Business & Sustainability Summit, Dubai</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-[#d4af37] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#0a1628]">International Business Leader</p>
                      <p className="text-gray-600">Expanding horizons in India & UAE markets</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-[#d4af37] mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#0a1628]">First-Generation Entrepreneur</p>
                      <p className="text-gray-600">Leading multiple rising startups with innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
