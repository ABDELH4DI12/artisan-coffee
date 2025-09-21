import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  message = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  };

  const containerClasses = {
    sm: 'gap-2 text-sm',
    md: 'gap-3 text-base',
    lg: 'gap-4 text-lg'
  };

  return (
    <div className={`flex items-center justify-center ${containerClasses[size]}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex-shrink-0"
      >
        <Coffee className={`${sizeClasses[size]} text-coffee-600`} />
      </motion.div>
      <span className="text-light-brown font-medium">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
