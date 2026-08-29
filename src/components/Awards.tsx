import { motion } from 'motion/react';
import { Award, Globe, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import award1 from 'figma:asset/369f1ed8a74bac15a8afd9e9258dcb8e2dd062a9.png';
import award2 from 'figma:asset/de43512661e726137cc039002be7d91da1cf5153.png';

export function Awards() {
  const achievements = [
    {
      image: award1,
      title: 'Global Icon Award 2025',
      location: 'Dubai, UAE',
      event: '4th Global Business & Sustainability Summit 2025',
      description: 'Honoured to receive the prestigious Global Icon Award 2025 for emerging as an entrepreneur leading multiple rising startups from H.E Dr Abdullah belhaif Al Nuaimi and honourable Ms Lubna Nayeem.',
      organizer: 'Policy Times Chamber of Commerce (PTCC)',
      date: 'September 22, 2025',
      highlights: [
        'Recognition for entrepreneurial excellence',
        'Leading multiple rising startups',
        'International business leadership',
      ],
    },
    {
      image: award2,
      title: 'Meeting with Industry Leader',
      location: 'Dubai, UAE',
      event: 'Danube Properties - Breez Premium Waterfront Residences',
      description: 'As a Real Estate entrepreneur, especially a first-generation entrepreneur, it\'s no less than a dream to meet and exchange greets with a persona like the tycoon in the field Mr. Rizwan Sajan at Danube Properties who is a true inspiration for people like us.',
      organizer: 'Policy Times Chamber of Commerce (PTCC) & Pakiza Properties',
      date: '2025',
      highlights: [
        'Networking with industry tycoons',
        'Learning from market leaders',
        'Exploring Dubai real estate opportunities',
      ],
    },
  ];

  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37]">Awards & Recognition</span>
          <h2 className="mt-2 text-[#0a1628]">
            Global Excellence & Industry Leadership
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Recognized internationally for entrepreneurial excellence and commitment to 
            innovation in real estate development across India and the Middle East.
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: Award, label: 'International Awards', value: 'Multiple' },
            { icon: Globe, label: 'Global Presence', value: 'India & UAE' },
            { icon: TrendingUp, label: 'Industry Standing', value: 'Top Tier' },
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center border-t-4 border-t-[#d4af37]">
              <stat.icon className="h-10 w-10 text-[#d4af37] mx-auto mb-3" />
              <div className="text-[#0a1628] mb-1">{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-[400px] lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent lg:bg-gradient-to-r"></div>
                    <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                      <div className="inline-block px-4 py-2 bg-[#d4af37] text-[#0a1628] rounded-full">
                        {achievement.location}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 text-[#d4af37] rounded-full mb-4">
                        <Award className="h-4 w-4" />
                        {achievement.date}
                      </div>
                      <h3 className="text-[#0a1628] mb-2">{achievement.title}</h3>
                      <p className="text-[#d4af37]">{achievement.event}</p>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="mb-6">
                      <p className="text-[#0a1628] mb-3">Key Highlights:</p>
                      <div className="space-y-2">
                        {achievement.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-gray-600">
                        <span className="text-[#0a1628]">Organized by:</span> {achievement.organizer}
                      </p>
                    </div>

                    {achievement.location && (
                      <div className="mt-4 hidden lg:block">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37] text-white rounded-full">
                          <Globe className="h-4 w-4" />
                          {achievement.location}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Gratitude Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#0a1628] to-[#1a2a3f] rounded-2xl p-12 text-center text-white"
        >
          <Award className="h-12 w-12 text-[#d4af37] mx-auto mb-4" />
          <h3 className="mb-4">Gratitude & Acknowledgment</h3>
          <p className="max-w-3xl mx-auto text-gray-300 mb-6">
            A heartfelt thank you to <span className="text-[#d4af37]">Policy Times Chamber of Commerce (PTCC)</span> and 
            <span className="text-[#d4af37]"> Mr. Akram Hoque</span> for organizing such knowledgeable summits and 
            providing opportunities to connect with industry leaders. Special thanks to 
            <span className="text-[#d4af37]"> Pakiza Properties</span> for their guidance in exploring real estate 
            opportunities in Dubai.
          </p>
          <p className="text-gray-400 italic">
            "It was a wonderful experience and pleasure to meet leaders who inspire entrepreneurs 
            like us to reach new heights of excellence."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
