import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p
                className="text-gray-400 text-sm tracking-widest uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                AIOPS & LLMOPS ENTHUSIAST
              </motion.p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block"
                >
                  Building
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block text-gray-400"
                >
                  Intelligent
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="block"
                >
                  Systems
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-relaxed max-w-xl"
            >
              Specializing in AI operations, LLM deployment, and building scalable
              machine learning infrastructure that powers the next generation of
              intelligent applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-black font-medium rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors"
                >
                  View Projects
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { icon: Brain, label: 'AI/ML' },
                { icon: Code, label: 'LLMOps' },
                { icon: Zap, label: 'MLOps' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
                >
                  <item.icon className="w-6 h-6 mb-2" />
                  <p className="text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 border border-white/20 rounded-full"
              />
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                className="absolute inset-9 border border-white/10 rounded-full"
              />
              <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
              className="absolute inset-9 bg-gradient-to-br  from-white/10 to-transparent rounded-full flex items-center justify-center overflow-hidden"
            >
              <img
                src="src\pages\TOPSECRET\WhatsApp Image 2025-10-26 at 12.58.59 PM.jpeg"
                alt="My Photo"
                className="w-full h-full object-cover rounded-full"
              />
</motion.div>



              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    top: `${30 + i * 20}%`,
                    right: `${10 + i * 15}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
