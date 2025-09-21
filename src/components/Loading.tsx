import { Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative"
      >
        <Coffee className="h-16 w-16 text-coffee-600" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="ml-4 text-xl text-coffee-600 font-medium"
      >
        Brewing...
      </motion.p>
    </div>
  );
};

export default Loading;
