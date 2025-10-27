import { motion } from 'framer-motion';
import {  BookOpen } from 'lucide-react';

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
  // Programming Languages
  'C', 'C++', 'Python', 'Java', 'SQL',

  // Databases & Vector Stores
  'MySQL', 'PostgreSQL', 'FAISS', 'ChromaDB', 'Vector Databases',

  // Machine Learning & AI Frameworks
  'TensorFlow', 'PyTorch', 'LangChain', 'LangGraph', 'Crew AI', 'FastAPI', 'Streamlit',

  // Tools & MLOps
  'Kubernetes', 'Docker', 'Git',

  // APIs & Libraries
  'OpenAI API', 'Hugging Face', 'Pandas', 'NumPy', 'Scikit-learn', 'NLTK', 'Transformers', 'Matplotlib', 'Seaborn',

  // CI/CD & Monitoring
  'Jenkins', 'SonarQube', 'CI/CD', 'Monitoring'
];


 const experience = [
  {
    icon: BookOpen,
    title: 'Research Intern | Jadavpur University | Kolkata, India',
    period: 'Jan 2025 – May 2025',
    location: 'On-site',
    description: `
  Co-authored and contributed to a collaborative multi-agent AI research project, engineering a modular orchestration
  pipeline using CrewAI for context-aware question answering with LLM-driven synthesis, applying machine-learning
  principles for adaptive response generation.

  Integrated the Tavily Search API for real-time, AI-assisted query-aware web retrieval and leveraged Trafilatura for
  content extraction and sanitization in machine-learning pipelines.

  Co-developed specialized agents for query reformulation, URL scoring, context summarization, and answer
  generation using a tool-agent architecture to enhance AI-driven information retrieval.

  Co-authored a comprehensive RAG evaluation framework quantifying response accuracy, recency, groundedness,
  and latency, incorporating machine-learning-based metrics to optimize time-sensitive query performance.
`
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
              className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center relative"
            >
              <img
                src="src/pages/TOPSECRET/start.jpeg"
                alt="My Photo"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-white/30 text-4xl font-bold">
          
              </div>
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
              I'm a passionate AI & LLM Operations Engineer specializing in LLMOps, AI Ops, and Generative AI. I excel at building, optimizing, and deploying large language models at scale, bridging the gap between advanced AI research and real-world applications. With expertise in machine learning pipelines, model orchestration, and AI-driven automation, I design systems that are efficient, scalable, and intelligent, enabling organizations to harness the full potential of next-generation AI technologies.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 leading-relaxed"
            >
              My expertise spans the entire machine learning and LLM lifecycle, from model training and fine-tuning to deployment, monitoring, and optimization. I am dedicated to building robust, scalable AI infrastructure that ensures models operate efficiently and reliably in production, enabling organizations to extract real-world value from advanced AI systems.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
            
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
