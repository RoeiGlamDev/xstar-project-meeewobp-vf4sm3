import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Add any side effects if needed when the component is in view
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={`transition-opacity duration-700 ${className`}}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;