// components/AnimatedTitle.jsx
import './AnimatedTitle.css';

const AnimatedTitle = ({ text }) => {
  return (
    <h2 className="animated-title text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
      {text}
    </h2>
  );
};

export default AnimatedTitle;
