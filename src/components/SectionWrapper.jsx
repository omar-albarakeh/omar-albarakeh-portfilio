// components/SectionWrapper.jsx
import { motion } from 'framer-motion';
import './SectionWrapper.css';

const SectionWrapper = ({ children, id }) => {
  return (
    <section id={id} className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-content"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
