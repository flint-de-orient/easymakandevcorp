import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl lg:text-9xl font-bold text-[#d4af37] mb-4">404</h1>
          <h2 className="text-3xl lg:text-4xl text-white mb-4">Page Not Found</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-[#d4af37] hover:bg-[#c49d2f] text-[#0a1628]"
            >
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="border-[#d4af37] text-white hover:bg-[#d4af37] hover:text-[#0a1628]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}