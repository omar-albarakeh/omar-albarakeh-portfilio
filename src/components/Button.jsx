// components/Button.jsx
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`button button-${variant}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
