import { motion } from "framer-motion";

function PageSection({ children, bg }) {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center text-white text-4xl"
      style={{ backgroundColor: bg }}
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} 
      viewport={{ once: true, amount: 0.3 }} 
    >
      {children}
    </motion.section>
  );
}

export default PageSection;