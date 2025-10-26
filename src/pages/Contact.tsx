import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Contact = () => {
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

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'banerjeeswarnendu6@gmail.com', href: 'mailto:banerjeeswarnendu6@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9564027954', href: 'tel:+91 9564027954' },
    { icon: MapPin, label: 'Location', value: 'Kolkata, India', href: null }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Pookie-n-Rookie' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/swarnendu-banerjee-78aa49298/' },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <div className="h-1 w-20 bg-white" />
          <p className="text-gray-400 text-lg mt-6">
            Let's discuss how we can work together on your next AI/ML project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-gray-300 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Connect</h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
            >
              <h3 className="font-semibold mb-2">Open to Opportunities</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Currently available for consulting, contract work, and full-time
                positions in AI/ML operations and LLM infrastructure.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-3"
          >
            <div className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="bg-black/50 border-white/10 focus:border-white/30 text-white placeholder:text-gray-500"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-black/50 border-white/10 focus:border-white/30 text-white placeholder:text-gray-500"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Subject
                  </label>
                  <Input
                    placeholder="Project discussion"
                    className="bg-black/50 border-white/10 focus:border-white/30 text-white placeholder:text-gray-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-black/50 border-white/10 focus:border-white/30 text-white placeholder:text-gray-500 resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-white text-black hover:bg-gray-200 font-medium py-6 text-base"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
