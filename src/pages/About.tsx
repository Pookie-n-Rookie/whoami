import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    'Python', 'TensorFlow', 'PyTorch', 'LangChain', 'Vector Databases',
    'Kubernetes', 'Docker', 'MLflow', 'Weights & Biases', 'AWS SageMaker',
    'Azure ML', 'OpenAI API', 'Hugging Face', 'CI/CD', 'Monitoring'
  ];

  const experience = [
    {
      icon: Briefcase,
      title: 'Senior LLMOps Engineer',
      period: '2023 - Present',
      description: 'Leading AI infrastructure deployment and LLM optimization'
    },
    {
      icon: GraduationCap,
      title: 'ML Engineer',
      period: '2021 - 2023',
      description: 'Built scalable machine learning pipelines and model serving infrastructure'
    },
    {
      icon: BookOpen,
      title: 'Research Assistant',
      period: '2019 - 2021',
      description: 'Conducted research in natural language processing and deep learning'
    }
  ];

  return (
    <div className="min-h-screen px-6 pt-32 pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
          <div className="h-1 w-20 bg-white" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <motion.div
            variants={itemVariants}
            className="md:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center"
            >
              <div className="text-4xl font-bold text-white/20">YOUR PHOTO</div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I'm a passionate AI/LLM Operations Engineer specializing in building
              and deploying large language models at scale. With a deep understanding
              of both machine learning theory and production systems, I bridge the
              gap between cutting-edge AI research and real-world applications.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 leading-relaxed"
            >
              My expertise spans the entire ML lifecycle, from model training and
              fine-tuning to deployment, monitoring, and optimization. I'm committed
              to building robust, scalable infrastructure that enables AI to deliver
              real value in production environments.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-5 h-5" />
                <span>5+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <exp.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium backdrop-blur-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
