import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { LazyImage } from './LazyImage';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="relative flex items-center overflow-hidden bg-[#0a1628]" style={{ minHeight: '100vh', height: '100vh' }}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto'
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/bg_easymakan.mp4" type="video/mp4" />
        </video>
        {/* Fallback background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1a2b42] to-[#2a3b52]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-[#0a1628]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">Buy Flats in Kolkata</span>
            <span className="block text-[#d4af37]">2BHK & 3BHK Ready to Move</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Premium flats for sale in Newtown, Salt Lake, Rajarhat. Luxury apartments and affordable housing options. Your dream home awaits in Kolkata.
          </p>
          <Button
            onClick={onContactClick}
            size="lg"
            className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-semibold px-8 py-4 text-lg"
          >
            Book now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}