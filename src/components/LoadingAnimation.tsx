import { motion } from 'motion/react';
import { Riple } from 'react-loading-indicators';

export function LoadingAnimation() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-8"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.1, 1],
          opacity: [0, 1, 1]
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut"
        }}
      >
        <img 
          src="/favicon.ico.png" 
          alt="Easymakan Logo" 
          className="w-32 h-32 object-contain"
        />
      </motion.div>
      
      <Riple color="#ccb131" size="medium" text="" textColor="" />
    </motion.div>
  );
}
