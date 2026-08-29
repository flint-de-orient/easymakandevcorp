import { motion } from 'motion/react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, TrendingUp, MapPin, DollarSign, Home, BarChart3, Shield, Lightbulb, FileText, Building, Zap, Leaf } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const blogData = {
    'hidco-project-premium-living-new-town': {
      title: 'HIDCO Project: Premium Living in New Town Action Area III',
      category: 'Projects',
      author: 'Easymakan Team',
      date: '2024-12-20',
      readTime: '6 min read',
      heroImage: '/hidco.png',
      excerpt: 'Discover our latest HIDCO project offering 3 BHK apartments starting from ₹69 lakhs with freehold property assurance and modern amenities.',
      content: {
        intro: 'Easymakan Development Corporation proudly presents our latest HIDCO project in the heart of New Town, Action Area III. This premium residential development offers modern living with freehold property assurance, strategic location advantages, and world-class amenities.',
        sections: [
          {
            title: 'Project Overview & Location Advantages',
            icon: MapPin,
            content: 'Located in Action Area III near Rosedale Plaza, this HIDCO project offers unparalleled connectivity and modern infrastructure in New Town\'s most sought-after residential zone.',
            image: '/hidco.png',
            highlights: [
              'HIDCO Freehold property with complete legal assurance',
              'Strategic location near Rosedale Plaza and commercial hubs',
              'Excellent connectivity to IT parks and business districts',
              'Close proximity to schools, hospitals, and shopping centers',
              'Well-planned infrastructure with wide roads and green spaces'
            ]
          },
          {
            title: 'Available Units & Pricing',
            icon: Home,
            content: 'Our HIDCO project offers spacious 3 BHK apartments designed for modern families, with competitive pricing and flexible payment options.',
            image: '/hidco.png',
            stats: [
              { label: 'Starting Price', value: '₹69 Lakhs', description: '3 BHK apartments' },
              { label: 'Carpet Area', value: '892.44 sq ft', description: 'Spacious living spaces' },
              { label: 'Handover', value: '18 months', description: 'From plot registration' },
              { label: 'Payment Plan', value: 'Flexible', description: 'Construction linked' }
            ]
          },
          {
            title: 'Payment Schedule & Financing',
            icon: DollarSign,
            content: 'We offer flexible payment options and construction-linked payment plans to make your dream home affordable and accessible.',
            benefits: [
              { feature: 'Booking Amount', saving: '20%', description: 'Initial payment on booking' },
              { feature: 'Plot Registration', saving: '20%', description: 'On plot registration completion' },
              { feature: 'Construction Linked', saving: '60%', description: 'Payments linked to construction milestones' }
            ],
            highlights: [
              'Home loan assistance available from leading banks',
              'Construction-linked payment ensures transparency',
              'No hidden charges or additional costs',
              'Flexible EMI options available'
            ]
          },
          {
            title: 'Premium Features & Amenities',
            icon: Building,
            content: 'Our HIDCO project incorporates modern design elements and premium amenities to enhance your living experience.',
            features: [
              { name: 'Quality Construction', description: 'Built with durable materials and modern techniques', benefit: 'Long-lasting durability' },
              { name: 'Eco-Friendly Design', description: 'Natural lighting and ventilation systems', benefit: 'Energy efficient' },
              { name: 'Modern Interiors', description: 'Contemporary design with premium finishes', benefit: 'Luxury living' },
              { name: 'Security Systems', description: '24/7 security with CCTV surveillance', benefit: 'Complete safety' }
            ]
          },
          {
            title: 'Why Choose Easymakan for HIDCO Projects',
            icon: Shield,
            content: 'With 4 years of experience in residential development, Easymakan ensures quality construction, legal clarity, and timely delivery.',
            highlights: [
              'Proven track record in residential development',
              'Complete legal documentation and HIDCO approvals',
              'Quality assurance with premium materials',
              'Fastest delivery with hassle-free process',
              'Dedicated customer support throughout the journey'
            ],
            stats: [
              { label: 'Experience', value: '4+ Years', description: 'In residential development' },
              { label: 'Projects', value: '100%', description: 'Legal compliance' },
              { label: 'Delivery', value: 'On-time', description: 'Guaranteed handover' },
              { label: 'Support', value: '24/7', description: 'Customer assistance' }
            ]
          }
        ]
      }
    },
    'top-10-luxury-areas-kolkata-2024': {
      title: 'Top 10 Luxury Residential Areas in Kolkata 2024',
      category: 'Market Insights',
      author: 'Easymakan Team',
      date: '2024-01-15',
      readTime: '8 min read',
      heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=80&fm=webp',
      excerpt: 'Discover the most prestigious neighborhoods in Kolkata offering world-class amenities and excellent connectivity.',
      content: {
        intro: 'Kolkata\'s luxury real estate market has evolved significantly, with several areas emerging as premium destinations for discerning buyers. Here are the top 10 luxury residential areas that offer exceptional living experiences and investment potential.',
        sections: [
          {
            title: 'Premium Locations Overview',
            icon: MapPin,
            content: 'These carefully selected areas represent the pinnacle of luxury living in Kolkata, each offering unique advantages for residents and investors.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&crop=entropy&auto=format&q=75&fm=webp',
            areas: [
              { name: 'Alipore', description: 'Known as the Beverly Hills of Kolkata, featuring colonial mansions and modern luxury apartments.', price: '₹8,000-12,000/sq ft' },
              { name: 'Ballygunge', description: 'Central location with excellent connectivity and premium residential complexes.', price: '₹6,500-9,000/sq ft' },
              { name: 'Salt Lake City', description: 'Planned township with modern infrastructure and IT proximity.', price: '₹5,500-8,000/sq ft' },
              { name: 'New Town', description: 'Emerging luxury destination with world-class amenities and green spaces.', price: '₹4,500-7,000/sq ft' },
              { name: 'Park Street Area', description: 'Heart of the city with luxury high-rises and cultural proximity.', price: '₹7,000-10,000/sq ft' }
            ]
          },
          {
            title: 'Investment Potential Analysis',
            icon: TrendingUp,
            content: 'These areas show consistent appreciation rates and strong rental demand, making them ideal for both end-users and investors.',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop&crop=entropy&auto=format',
            stats: [
              { label: 'Average Appreciation', value: '12-15% annually' },
              { label: 'Rental Yield', value: '6-8%' },
              { label: 'Capital Growth', value: '20-25% in 3 years' }
            ]
          }
        ]
      }
    },
    'kolkata-real-estate-investment-guide-2024': {
      title: 'The Complete Kolkata Real Estate Investment Guide 2024',
      category: 'Investment',
      author: 'Easymakan Research Team',
      date: '2024-01-10',
      readTime: '15 min read',
      heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=80&fm=webp',
      excerpt: 'Discover why Kolkata is emerging as India\'s most promising real estate investment destination with our comprehensive market analysis and expert insights.',
      content: {
        intro: 'Kolkata, the cultural capital of India, is experiencing a remarkable transformation in its real estate landscape. With strategic government initiatives, growing IT sector presence, and significantly lower property prices compared to Mumbai and Delhi, the city presents compelling investment opportunities for both seasoned investors and first-time buyers.',
        sections: [
          {
            title: 'Market Performance & Key Metrics',
            icon: BarChart3,
            content: 'Kolkata\'s real estate market has demonstrated remarkable resilience and consistent growth over the past decade. The city offers one of the best value propositions in India\'s tier-1 cities, with property prices that are 40-50% lower than Mumbai and Delhi while delivering comparable returns.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=entropy&auto=format&q=75&fm=webp',
            stats: [
              { label: 'Annual Appreciation', value: '8-12%', description: 'Consistent year-over-year growth' },
              { label: 'Average Price/sq ft', value: '₹3,500-5,500', description: 'Across prime locations' },
              { label: 'Rental Yield', value: '6-10%', description: 'Higher than national average' },
              { label: 'Market Size', value: '₹45,000 Cr', description: 'Total market valuation' }
            ],
            highlights: [
              'Kolkata offers 40-50% lower property prices than Mumbai/Delhi',
              'Strong rental demand from IT professionals and students',
              'Government infrastructure investments boosting connectivity',
              'Heritage value and cultural significance attracting global attention'
            ]
          },
          {
            title: 'Prime Investment Locations',
            icon: MapPin,
            content: 'Strategic location selection is crucial for maximizing returns in Kolkata\'s diverse real estate market. Here are the top-performing areas that offer the best combination of growth potential and rental yields.',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop&crop=entropy&auto=format',
            locations: [
              {
                name: 'New Town & Rajarhat',
                roi: '15-18%',
                priceRange: '₹4,500-7,000/sq ft',
                highlights: ['IT corridor proximity', 'Metro connectivity', 'Modern infrastructure', 'High rental demand'],
                description: 'The fastest-growing micro-market with excellent connectivity to IT parks and the airport.'
              },
              {
                name: 'Salt Lake & Sector V',
                roi: '12-15%',
                priceRange: '₹5,500-8,000/sq ft',
                highlights: ['Established IT hub', 'Premium developments', 'Educational institutions', 'Stable rental market'],
                description: 'Mature market with consistent demand from corporate professionals and families.'
              },
              {
                name: 'Alipore & Ballygunge',
                roi: '10-14%',
                priceRange: '₹8,000-12,000/sq ft',
                highlights: ['Heritage locations', 'Central connectivity', 'Luxury developments', 'High-end clientele'],
                description: 'Premium residential areas with strong capital appreciation potential.'
              }
            ]
          },
          {
            title: 'Proven Investment Strategies',
            icon: DollarSign,
            content: 'Success in Kolkata\'s real estate market requires a well-planned approach. Here are three proven strategies that have consistently delivered strong returns for our clients.',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop&crop=entropy&auto=format',
            strategies: [
              {
                name: 'Long-term Capital Appreciation',
                roi: '15-20%',
                timeline: '5-7 years',
                risk: 'Low',
                description: 'Purchase properties in emerging areas like New Town and hold for maximum capital gains.',
                benefits: ['Compound growth potential', 'Tax advantages', 'Inflation hedge', 'Passive income through rentals']
              },
              {
                name: 'Pre-Launch Investment',
                roi: '25-30%',
                timeline: '2-3 years',
                risk: 'Medium',
                description: 'Invest in pre-launch projects from reputed developers for maximum appreciation.',
                benefits: ['Lower entry prices', 'Payment flexibility', 'Choice of best units', 'Developer incentives']
              },
              {
                name: 'Rental Income Portfolio',
                roi: '8-12%',
                timeline: 'Ongoing',
                risk: 'Low',
                description: 'Build a portfolio of rental properties near IT parks and educational institutions.',
                benefits: ['Regular cash flow', 'Steady appreciation', 'Tax benefits', 'Portfolio diversification']
              }
            ]
          },
          {
            title: 'Future Growth Catalysts',
            icon: TrendingUp,
            content: 'Several major infrastructure and economic developments are set to transform Kolkata\'s real estate landscape over the next decade, creating unprecedented opportunities for early investors.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&crop=entropy&auto=format',
            catalysts: [
              {
                category: 'Infrastructure Development',
                projects: [
                  'Metro Line extensions to New Town and Airport',
                  'New Kolkata International Airport expansion',
                  'East-West Metro corridor completion',
                  'Riverside waterfront development projects'
                ]
              },
              {
                category: 'Economic Growth Drivers',
                projects: [
                  'IT and financial services sector expansion',
                  'Government Smart City initiatives',
                  'Educational hub development',
                  'Tourism and hospitality sector growth'
                ]
              }
            ]
          }
        ]
      }
    },
    'smart-home-features-luxury-apartments': {
      title: 'Smart Home Features Every Modern Apartment Should Have',
      category: 'Technology',
      author: 'Tech Expert',
      date: '2024-01-05',
      readTime: '10 min read',
      heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&crop=entropy&auto=format&q=80&fm=webp',
      excerpt: 'Essential smart home technologies that enhance comfort, security, and energy efficiency in luxury apartments.',
      content: {
        intro: 'Modern luxury apartments must incorporate smart home technologies to meet contemporary lifestyle demands. These features enhance comfort, security, and energy efficiency while increasing property value.',
        sections: [
          {
            title: 'Security & Safety Systems',
            icon: Shield,
            content: 'Advanced security features that provide peace of mind and protect your investment.',
            image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop&crop=entropy&auto=format',
            features: [
              { name: 'Smart Door Locks', description: 'Biometric and keyless entry systems', benefit: 'Enhanced security' },
              { name: 'Video Doorbells', description: 'HD cameras with mobile connectivity', benefit: 'Remote monitoring' },
              { name: 'CCTV Systems', description: '24/7 monitoring with AI analytics', benefit: 'Complete surveillance' },
              { name: 'Motion Sensors', description: 'Automated detection and alerts', benefit: 'Intrusion prevention' }
            ]
          },
          {
            title: 'Energy Management',
            icon: Zap,
            content: 'Smart systems that optimize energy consumption and reduce utility costs.',
            image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop&crop=entropy&auto=format',
            benefits: [
              { feature: 'Smart Thermostats', saving: '30-40%', description: 'Automated climate control' },
              { feature: 'LED Lighting Systems', saving: '60-70%', description: 'Energy-efficient illumination' },
              { feature: 'Solar Integration', saving: '50-80%', description: 'Renewable energy source' }
            ]
          }
        ]
      }
    }
  };

  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0a1628] mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-[#d4af37] hover:bg-[#c49d2f] text-[#0a1628]">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-gray-600 hover:bg-gray-100 mb-6 p-0"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="mb-4">
            <span className="text-[#d4af37] text-sm font-semibold uppercase tracking-wide">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight font-serif">
            {post.title}
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 border-b pb-4">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-lg leading-relaxed text-gray-800 mb-6 font-serif">
            {post.content.intro}
          </p>
        </motion.div>

        {/* Content Sections */}
        {post.content.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index + 1) * 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif border-l-4 border-[#d4af37] pl-4">
              {section.title}
            </h2>
            
            <p className="text-lg leading-relaxed text-gray-800 mb-8 font-serif">
              {section.content}
            </p>

            {section.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            )}

            {/* Areas List */}
            {section.areas && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {section.areas.map((area, areaIndex) => (
                  <Card key={areaIndex} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#d4af37]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-[#0a1628]">{area.name}</h3>
                      <Badge variant="outline" className="text-[#d4af37] border-[#d4af37]">
                        {area.price}
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </Card>
                ))}
              </div>
            )}

            {/* Stats Grid */}
            {section.stats && (
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Key Market Indicators</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                      <div>
                        <div className="font-semibold text-gray-900">{stat.label}</div>
                        {stat.description && (
                          <div className="text-sm text-gray-600">{stat.description}</div>
                        )}
                      </div>
                      <div className="text-2xl font-bold text-[#d4af37]">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            {section.highlights && (
              <div className="bg-gradient-to-r from-[#0a1628]/5 to-[#d4af37]/5 rounded-xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-[#0a1628] mb-4">Key Highlights</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {section.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Locations */}
            {section.locations && (
              <div className="space-y-6 mb-8">
                {section.locations.map((location, locationIndex) => (
                  <Card key={locationIndex} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#d4af37]">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-[#0a1628]">{location.name}</h4>
                      <div className="flex gap-3">
                        <Badge className="bg-green-100 text-green-800">ROI: {location.roi}</Badge>
                        <Badge variant="outline">{location.priceRange}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{location.description}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {location.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Growth Catalysts */}
            {section.catalysts && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {section.catalysts.map((catalyst, catalystIndex) => (
                  <Card key={catalystIndex} className="p-6 hover:shadow-lg transition-shadow">
                    <h4 className="text-lg font-semibold text-[#0a1628] mb-4">{catalyst.category}</h4>
                    <ul className="space-y-3">
                      {catalyst.projects.map((project, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <TrendingUp className="h-4 w-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            )}

            {/* Investment Strategies */}
            {section.strategies && (
              <div className="space-y-6 mb-8">
                {section.strategies.map((strategy, strategyIndex) => (
                  <Card key={strategyIndex} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-[#d4af37]">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-[#0a1628]">{strategy.name}</h4>
                      <div className="flex gap-3">
                        <Badge className="bg-green-100 text-green-800">ROI: {strategy.roi}</Badge>
                        <Badge variant="outline">Timeline: {strategy.timeline}</Badge>
                        <Badge variant="outline">Risk: {strategy.risk}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{strategy.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {strategy.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Features List */}
            {section.features && (
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {section.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-semibold text-[#0a1628] mb-2">{feature.name}</h3>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-[#d4af37]/10 rounded-full text-sm text-[#d4af37] font-medium">
                      {feature.benefit}
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Benefits List */}
            {section.benefits && (
              <div className="space-y-4 mb-8">
                {section.benefits.map((benefit, benefitIndex) => (
                  <Card key={benefitIndex} className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[#0a1628] mb-1">{benefit.feature}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#d4af37]">{benefit.saving}</div>
                      <div className="text-sm text-gray-500">Energy Savings</div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </motion.section>
        ))}

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#d4af37]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
              Ready to Invest in Kolkata Real Estate?
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-serif">
              Connect with our real estate experts to discover exclusive opportunities in Kolkata's luxury market. Get personalized advice and access to premium properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-[#d4af37] hover:bg-[#c49d2f] text-white px-6 py-2"
                onClick={() => navigate('/#contact')}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white px-6 py-2"
                onClick={() => window.open('https://wa.me/918777654651', '_blank')}
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}