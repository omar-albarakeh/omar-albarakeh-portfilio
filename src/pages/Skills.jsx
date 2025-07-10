import SectionWrapper from '../components/SectionWrapper';
import AnimatedTitle from '../components/AnimatedTitle';

const skills = {
  frontend: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'MongoDB', 'JWT'],
  tools: ['Git', 'Figma', 'Postman', 'Firebase'],
};

const Skills = () => {
  return (
    <main className="pt-24">
      <SectionWrapper id="skills">
        <AnimatedTitle text="Skills" />
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold capitalize mb-4 text-blue-600">{category}</h3>
              <ul className="space-y-2 text-gray-700">
                {items.map((skill, i) => (
                  <li key={i} className="border-b pb-1">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Skills;
