import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const projects = [
    {
      title: 'Enterprise LLM Platform',
      description: 'Built a scalable platform for deploying and managing multiple LLM models with automatic scaling, monitoring, and cost optimization.',
      tech: ['Python', 'Kubernetes', 'Ray', 'FastAPI', 'PostgreSQL'],
      category: 'LLMOps'
    },
    {
      title: 'Real-time ML Pipeline',
      description: 'Developed an end-to-end ML pipeline with real-time feature engineering, model serving, and monitoring for fraud detection.',
      tech: ['Apache Kafka', 'MLflow', 'TensorFlow', 'Docker', 'Prometheus'],
      category: 'MLOps'
    },
    {
      title: 'AI Model Optimization Framework',
      description: 'Created a framework for quantization and optimization of large language models, reducing inference costs by 70%.',
      tech: ['PyTorch', 'ONNX', 'TensorRT', 'Triton', 'AWS'],
      category: 'Optimization'
    },
    {
      title: 'Vector Database Solution',
      description: 'Implemented a high-performance vector search system for semantic similarity matching in production RAG applications.',
      tech: ['Pinecone', 'LangChain', 'OpenAI', 'Redis', 'FastAPI'],
      category: 'AI Infrastructure'
    },
    {
      title: 'Multi-Agent System',
      description: 'Architected a multi-agent AI system with autonomous task delegation and collaborative problem-solving capabilities.',
      tech: ['LangGraph', 'AutoGen', 'GPT-4', 'Anthropic', 'MongoDB'],
      category: 'AI Agents'
    },
    {
      title: 'ML Monitoring Dashboard',
      description: 'Built comprehensive monitoring and observability stack for ML models with drift detection and automated alerting.',
      tech: ['Grafana', 'Prometheus', 'Evidently', 'Airflow', 'BigQuery'],
      category: 'Monitoring'
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
          <div className="h-1 w-20 bg-white" />
          <p className="text-gray-400 text-lg mt-6">
            A selection of my work in AI operations, LLM deployment, and ML infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm h-full flex flex-col transition-all duration-300 hover:border-white/30 hover:bg-white/10">
                <div className="mb-4">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
