import SectionWrapper from '../components/SectionWrapper';
import AnimatedTitle from '../components/AnimatedTitle';

const About = () => {
  return (
    <main className="pt-24">
      <SectionWrapper id="about">
        <AnimatedTitle text="About Me" />
        <p className="text-lg text-gray-700 leading-relaxed fade-in">
          I'm a full-stack developer with a passion for clean code and elegant UI/UX design.
          I specialize in React, Node.js, MongoDB, and modern web tools. With experience in both frontend
          and backend development, I build complete web apps from scratch.
        </p>
        <p className="mt-4 text-lg text-gray-700 fade-in delay-1">
          In addition to development, I enjoy learning new technologies, contributing to open source, and helping others grow.
        </p>
      </SectionWrapper>
    </main>
  );
};

export default About;
