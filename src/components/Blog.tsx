import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, TrendingUp, Home, MapPin, Star, Filter } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [adminBlogs, setAdminBlogs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('admin_blogs');
    if (stored) {
      try {
        const blogs = JSON.parse(stored);
        const publishedBlogs = blogs.filter((blog: any) => blog.published);
        setAdminBlogs(publishedBlogs);
      } catch (e) {
        console.error('Error loading admin blogs:', e);
        setAdminBlogs([]);
      }
    }
  }, []);

  const blogPosts = [
    {
      id: 10,
      title: 'HIDCO Project: Premium Living in New Town Action Area III',
      excerpt: 'Discover our latest HIDCO project offering 3 BHK apartments starting from ₹69 lakhs with freehold property assurance and modern amenities.',
      image: '/hidco.png',
      category: 'Projects',
      author: 'Easymakan Team',
      date: '2024-12-20',
      readTime: '6 min read',
      tags: ['HIDCO', 'New Town', 'Premium Living', 'Freehold'],
      slug: 'hidco-project-premium-living-new-town',
      featured: true
    },
    {
      id: 1,
      title: 'Top 10 Luxury Residential Areas in Kolkata 2024',
      excerpt: 'Discover the most prestigious neighborhoods in Kolkata offering world-class amenities and excellent connectivity.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=entropy&auto=format&q=75&fm=webp',
      category: 'Market Insights',
      author: 'Easymakan Team',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['Luxury', 'Kolkata', 'Investment'],
      slug: 'top-10-luxury-areas-kolkata-2024',
      featured: true
    },
    {
      id: 2,
      title: 'Real Estate Investment Guide: Kolkata Property Market Trends',
      excerpt: 'Complete analysis of Kolkata real estate market with investment opportunities and future growth prospects.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=entropy&auto=format&q=75&fm=webp',
      category: 'Investment',
      author: 'Market Analyst',
      date: '2024-01-10',
      readTime: '8 min read',
      tags: ['Investment', 'Market Analysis', 'ROI'],
      slug: 'kolkata-real-estate-investment-guide-2024',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Home Features Every Modern Apartment Should Have',
      excerpt: 'Essential smart home technologies that enhance comfort, security, and energy efficiency in luxury apartments.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=entropy&auto=format&q=75&fm=webp',
      category: 'Technology',
      author: 'Tech Expert',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['Smart Home', 'Technology', 'Luxury'],
      slug: 'smart-home-features-luxury-apartments'
    },
    {
      id: 4,
      title: 'Sustainable Architecture: Green Building Trends in Luxury Real Estate',
      excerpt: 'How eco-friendly design and sustainable materials are reshaping luxury property development in India.',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop&crop=entropy&auto=format&q=75&fm=webp',
      category: 'Sustainability',
      author: 'Green Building Expert',
      date: '2024-01-20',
      readTime: '7 min read',
      tags: ['Sustainability', 'Green Building', 'Architecture'],
      slug: 'sustainable-architecture-green-building-trends'
    },
    {
      id: 5,
      title: 'Interior Design Trends 2024: Luxury Home Aesthetics',
      excerpt: 'Latest interior design trends that are defining luxury homes and apartments in the current market.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=entropy&auto=format',
      category: 'Design',
      author: 'Interior Designer',
      date: '2024-01-18',
      readTime: '5 min read',
      tags: ['Interior Design', 'Luxury', 'Trends'],
      slug: 'interior-design-trends-2024-luxury-homes'
    },
    {
      id: 6,
      title: 'Property Legal Guide: Essential Documents for Home Buyers',
      excerpt: 'Complete checklist of legal documents and verification process for safe property transactions.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop&crop=entropy&auto=format',
      category: 'Legal',
      author: 'Legal Advisor',
      date: '2024-01-12',
      readTime: '10 min read',
      tags: ['Legal', 'Documentation', 'Home Buying'],
      slug: 'property-legal-guide-essential-documents'
    },
    {
      id: 7,
      title: 'Luxury Amenities That Add Value to Your Property',
      excerpt: 'Premium facilities and amenities that significantly increase property value and buyer appeal.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&crop=entropy&auto=format',
      category: 'Amenities',
      author: 'Property Consultant',
      date: '2024-01-08',
      readTime: '6 min read',
      tags: ['Amenities', 'Luxury', 'Property Value'],
      slug: 'luxury-amenities-property-value'
    },
    {
      id: 8,
      title: 'Home Loan Guide: Best Financing Options for Property Purchase',
      excerpt: 'Comprehensive guide to home loans, interest rates, and financing strategies for property buyers.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=entropy&auto=format',
      category: 'Finance',
      author: 'Finance Expert',
      date: '2024-01-03',
      readTime: '9 min read',
      tags: ['Home Loan', 'Finance', 'Property Purchase'],
      slug: 'home-loan-guide-financing-options'
    },
    {
      id: 9,
      title: 'Future of Real Estate: PropTech Innovations Transforming the Industry',
      excerpt: 'How technology is revolutionizing property search, transactions, and management in the digital age.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=entropy&auto=format',
      category: 'PropTech',
      author: 'Tech Analyst',
      date: '2024-01-01',
      readTime: '7 min read',
      tags: ['PropTech', 'Innovation', 'Digital'],
      slug: 'future-real-estate-proptech-innovations'
    }
  ];

  const categories = ['All', 'Projects', 'Market Insights', 'Investment', 'Technology', 'Sustainability', 'Design', 'Legal', 'Amenities', 'Finance', 'PropTech'];

  // Combine hardcoded and admin blogs
  const allPosts = [
    ...blogPosts,
    ...adminBlogs.map((blog: any) => ({
      id: `admin-${blog.id}`,
      title: blog.title,
      excerpt: blog.excerpt,
      image: blog.image,
      category: blog.category,
      author: blog.author,
      date: blog.createdAt.split('T')[0],
      readTime: '5 min read',
      tags: blog.tags || [],
      slug: blog.slug,
      featured: false
    }))
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = allPosts.filter(post => post.featured);
  const regularPosts = allPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 rounded-full mb-4">
            <TrendingUp className="h-4 w-4 text-[#d4af37]" />
            <span className="text-[#d4af37] font-medium">Insights & Updates</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0a1628] mb-4">
            Latest News & Insights
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
            Real Estate Blog
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Stay updated with the latest trends, market insights, and expert advice 
            on Kolkata's luxury real estate market.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16 px-4"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 sm:px-6 sm:py-3 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-[#d4af37] text-white hover:bg-[#c49d2f]'
                  : 'border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white'
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-8">
              <Star className="h-5 w-5 text-[#d4af37]" />
              <h3 className="text-2xl font-bold text-[#0a1628]">Featured Articles</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full bg-white border-0 shadow-lg">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#d4af37] text-white border-0 shadow-lg">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-white/90 text-[#0a1628]">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm text-gray-500 font-medium">{post.readTime}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#d4af37] hover:text-[#c49d2f] hover:bg-[#d4af37]/10 p-0 h-auto font-semibold"
                          onClick={() => navigate(`/blog/${post.slug}`)}
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {selectedCategory === 'All' && (
            <div className="flex items-center gap-2 mb-8">
              <Home className="h-5 w-5 text-[#d4af37]" />
              <h3 className="text-2xl font-bold text-[#0a1628]">Latest Articles</h3>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'All' ? regularPosts : filteredPosts).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 h-full bg-white border-0 shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#d4af37]/90 text-white border-0">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#0a1628] mb-3 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t mt-auto">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#d4af37] hover:text-[#c49d2f] hover:bg-[#d4af37]/10 p-0 h-auto"
                        onClick={() => navigate(`/blog/${post.slug}`)}
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white transition-all duration-300 px-8 py-3"
          >
            View All Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}