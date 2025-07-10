import SectionWrapper from '../components/SectionWrapper';
import AnimatedTitle from '../components/AnimatedTitle';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek portfolio website using React, Framer Motion, and Tailwind CSS.",
    link: "#",
  },
  {
    title: "E-Commerce App",
    description: "Full-stack app with product search, cart, and payments (React + Node.js).",
    link: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app using Socket.io and MongoDB.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <main className="pt-24">
      <SectionWrapper id="projects">
        <AnimatedTitle text="Projects" />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Projects;
