import { motion } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { useState } from 'react';

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: 'How to buy 1BHK, 2BHK, 3BHK flats in Kolkata through Easymakan?',
      answer: 'Easymakan offers 1BHK, 2BHK, and 3BHK flats for sale in prime Kolkata locations like Newtown, Salt Lake, and Rajarhat. Visit our office, call +91 8777654651, or WhatsApp us to explore available properties. Our team will guide you through property selection, documentation, and payment options for buying flats in Kolkata.'
    },
    {
      question: 'What makes Easymakan the best real estate developer in Kolkata?',
      answer: 'Easymakan (Easy Makan) has 25+ years of experience in Kolkata real estate with a focus on luxury properties, timely delivery, and customer satisfaction. We offer 1BHK, 2BHK, 3BHK flats in Newtown, Salt Lake, Rajarhat with world-class amenities, prime locations, and competitive pricing for property buyers in Kolkata.'
    },
    {
      question: 'Which areas in Kolkata does Easymakan have flats for sale?',
      answer: 'Easymakan offers flats for sale in premium Kolkata locations including Newtown, Salt Lake, Rajarhat, Dum Dum, Barasat, and Baguihati. We have 1BHK, 2BHK, and 3BHK apartments in ready-to-move and under-construction projects across these prime real estate areas of Kolkata.'
    },
    {
      question: 'What are the payment options for buying flats in Kolkata with Easymakan?',
      answer: 'Easymakan offers flexible payment plans for buying 1BHK, 2BHK, 3BHK flats in Kolkata including construction-linked plans, down payment options, and EMI facilities. We assist with home loan approvals from leading banks with competitive interest rates for property purchase in Kolkata.'
    },
    {
      question: 'Does Easymakan have ready to move flats in Kolkata?',
      answer: 'Yes, Easymakan has ready to move 1BHK, 2BHK, and 3BHK flats available in Kolkata locations like Newtown, Salt Lake, and Rajarhat. These ready possession apartments come with complete amenities and are perfect for immediate occupancy. Contact +91 8777654651 for ready to move flat options.'
    },
    {
      question: 'What is the price range for 1BHK, 2BHK, 3BHK flats in Kolkata by Easymakan?',
      answer: 'Easymakan offers flats in Kolkata ranging from ₹20 lakhs to ₹2 crores. 1BHK flats start from ₹20-40 lakhs, 2BHK flats from ₹40-80 lakhs, and 3BHK luxury apartments from ₹80 lakhs to ₹2 crores. Prices vary based on location, size, and amenities in Newtown, Salt Lake, Rajarhat areas.'
    },
    {
      question: 'Can I sell my flat through Easymakan in Kolkata?',
      answer: 'Yes, Easymakan provides property resale services in Kolkata. If you want to sell your flat in Kolkata, our real estate experts will help you find genuine buyers, handle documentation, and ensure smooth property transactions. Contact us for flat resale services in Newtown, Salt Lake, Rajarhat, and other Kolkata areas.'
    },
    {
      question: 'What amenities are included in Easymakan flats in Kolkata?',
      answer: 'Easymakan luxury flats in Kolkata include swimming pools, fitness centers, landscaped gardens, 24/7 security, power backup, parking facilities, and smart home features. Our 1BHK, 2BHK, 3BHK apartments in Newtown, Salt Lake, and Rajarhat offer premium amenities for modern living.'
    },
    {
      question: 'Is Kolkata real estate a good investment with Easymakan?',
      answer: 'Yes, investing in Kolkata real estate through Easymakan is safe and profitable. Kolkata property market shows consistent growth with excellent connectivity, IT development, and infrastructure improvements. Our flats in Newtown, Salt Lake, and Rajarhat are in prime areas with high appreciation potential for real estate investment.'
    },
    {
      question: 'How to contact Easymakan for buying flats in Kolkata?',
      answer: 'Contact Easymakan for buying 1BHK, 2BHK, 3BHK flats in Kolkata by calling +91 8777654651, WhatsApp us, or visit our office in Newtown, Kolkata. Our real estate experts are available to help you find the perfect property in Salt Lake, Rajarhat, and other prime Kolkata locations.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37]">Got Questions About Easymakan Flats?</span>
          <h2 className="mt-2 text-[#0a1628]">
            Frequently Asked Questions - Buy 1BHK 2BHK 3BHK Flats in Kolkata
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Find answers about buying flats in Kolkata with Easymakan. Learn about our 1BHK, 2BHK, 3BHK properties in Newtown, Salt Lake, Rajarhat, and real estate investment opportunities.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Collapsible
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <Card className="overflow-hidden">
                  <CollapsibleTrigger className="w-full p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <HelpCircle className="h-4 w-4 text-[#d4af37]" />
                        </div>
                        <h3 className="font-semibold text-[#0a1628] text-left">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-[#d4af37] transition-transform flex-shrink-0 ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 pb-6 pl-18">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-[#0a1628] to-[#1a2a3f] rounded-2xl text-white"
        >
          <h3 className="mb-4">Still have questions about buying flats in Kolkata?</h3>
          <p className="text-gray-300 mb-6">
            Our Easymakan expert team is here to help you find the perfect 1BHK, 2BHK, or 3BHK flat in Kolkata. Contact us for real estate solutions in Newtown, Salt Lake, Rajarhat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918777654651"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#d4af37] text-[#0a1628] rounded-lg font-semibold hover:bg-[#c49d2f] transition-colors"
            >
              Call +91 8777654651
            </a>
            <a
              href="https://wa.me/918777654651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#d4af37] text-[#d4af37] rounded-lg font-semibold hover:bg-[#d4af37] hover:text-[#0a1628] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}