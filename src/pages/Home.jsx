import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedTitle from '../components/AnimatedTitle';

const Home = () => {
  return (
    <>
      <Header />
      <main className="pt-24">
        <SectionWrapper id="hero">
          <AnimatedTitle text="Hi, I'm YourName 👋" />
          <p className="text-center text-lg text-gray-600 mb-8">
            A full-stack developer crafting scalable web applications and sleek interfaces.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary">Hire Me</Button>
            <Button variant="outline">View Projects</Button>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Home;
