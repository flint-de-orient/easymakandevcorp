import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { trackContactForm, trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';

export function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const inquiry = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      timestamp: new Date().toISOString(),
      status: 'new' as const
    };
    
    // Save to localStorage
    const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    existingInquiries.unshift(inquiry);
    localStorage.setItem('inquiries', JSON.stringify(existingInquiries));
    
    // Track analytics
    trackContactForm('email');
    
    // Reset form
    (e.target as HTMLFormElement).reset();
    
    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Unit 320, PS Abacus, NH-12, Diplomatic Enclave, AA II, Newtown, Kolkata, West Bengal 700161',
      action: 'View on Map',
      link: 'https://www.google.com/maps?q=22.6189471,88.46114',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 8777654651',
      action: 'Call Now',
      link: 'tel:+918777654651',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'easymakandev@gmail.com',
      action: 'Send Email',
      link: 'mailto:easymakandev@gmail.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 8777654651',
      action: 'Chat Now',
      link: 'https://wa.me/918777654651',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37]">Contact Us</span>
          <h2 className="mt-2 text-[#0a1628]">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Have questions about our projects or services? We're here to help.
            Reach out to us and let's discuss your real estate needs.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className={`p-6 text-center hover:shadow-xl transition-shadow duration-300 ${info.title === 'Location' ? 'min-h-[200px] flex flex-col justify-center' : ''}`}>
                <div className="w-14 h-14 mx-auto mb-4 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                  <info.icon className="h-7 w-7 text-[#d4af37]" />
                </div>
                <h4 className="text-[#0a1628] mb-2">{info.title}</h4>
                <p className={`text-gray-600 mb-3 ${info.title === 'Location' ? 'text-xs leading-relaxed break-words' : ''}`}>{info.details}</p>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4af37] hover:underline"
                  onClick={() => {
                    if (info.title === 'Phone') trackPhoneCall();
                    if (info.title === 'WhatsApp') trackWhatsAppClick();
                  }}
                >
                  {info.action}
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h3 className="text-[#0a1628] mb-6">Send Us a Message</h3>
              

              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 8777654651"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                    className="mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#d4af37] hover:bg-[#c49d2f] text-[#0a1628]"
                >
                  Submit Inquiry
                </Button>
              </form>
              
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-center gap-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-green-800 mb-1">Submitted Successfully!</h4>
                      <p className="text-lg text-green-700">We will contact you soon.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-0 h-full min-h-[600px] flex flex-col">
              <h3 className="text-[#0a1628] p-4 pb-2">Our Location</h3>
              <div className="flex-1 overflow-hidden min-h-[550px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8487204474975!2d88.45895!3d22.618947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM3JzA4LjIiTiA4OMKwMjcnNDAuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '550px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Easymakan Development Corporation Location"
                ></iframe>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
