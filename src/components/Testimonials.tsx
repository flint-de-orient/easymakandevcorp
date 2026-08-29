import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Aponjon Housing Resident',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&auto=format&q=75&fm=webp',
      rating: 5,
      text: 'We bought our 3BHK flat in Aponjon Housing project. The construction quality is excellent and they delivered on time as promised. Very satisfied with our investment.',
    },
    {
      name: 'Sunita Ghosh',
      role: 'New Town Investor',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&auto=format&q=75&fm=webp',
      rating: 5,
      text: 'Easymakan helped us with land-to-flat conversion in New Town. The 50-50 sharing was fair and transparent. Got 4 beautiful flats from our 5 cottah land.',
    },
    {
      name: 'Amit Banerjee',
      role: 'Property Investor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format&q=75&fm=webp',
      rating: 5,
      text: 'Invested in their pre-launch project and got 25% appreciation within 2 years. Their market knowledge and project selection is outstanding.',
    },
    {
      name: 'Priya Chatterjee',
      role: 'Solace Spring Buyer',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&auto=format&q=75&fm=webp',
      rating: 5,
      text: 'Booked our flat in Solace Spring project. The location in Patharghata is perfect and the amenities planned are world-class. Excited to move in!',
    },
    {
      name: 'Debashis Roy',
      role: 'Rajarhat Landowner',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&auto=format&q=75&fm=webp',
      rating: 5,
      text: 'They converted our ancestral land into a modern apartment building. Professional approach, quality construction, and fair profit sharing. Highly recommend.',
    },
    {
      name: 'Anita Das',
      role: 'First-time Home Buyer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format&q=75&fm=webp',
      rating: 5,
      text: 'As first-time buyers, Easymakan guided us through every step. From loan assistance to legal documentation, they made home buying stress-free.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37]">Testimonials</span>
          <h2 className="mt-2 text-[#0a1628]">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Don't just take our word for it. Hear from our satisfied customers who have
            made Easymakan their trusted real estate partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-[#d4af37]/20" />
                <div className="flex items-center mb-4">
                  <Avatar className="h-14 w-14 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-[#0a1628]">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-[#d4af37] fill-[#d4af37]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-[#d4af37] fill-[#d4af37]"
                />
              ))}
            </div>
            <span className="text-[#0a1628]">4.9/5</span>
            <span className="text-gray-600">from 150+ satisfied customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}