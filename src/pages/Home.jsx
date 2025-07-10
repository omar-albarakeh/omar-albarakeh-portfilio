import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import AnimatedTitle from '../components/AnimatedTitle';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleHireClick = () => {
    navigate('/contact');
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  return (
    <>
      <Header />
      <main className="home-main">
        <SectionWrapper id="hero">
          <div className="hero-container">
            <div className="hero-image">
              <img src="src/assets/logo.png" alt="Profile" />
            </div>

            <div className="hero-text">
              <AnimatedTitle text="Hi, I'm YourName 👋" />
              <p className="hero-description">
                I'm a full-stack developer crafting scalable web applications and sleek user interfaces.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" onClick={handleHireClick}>Hire Me</Button>
                <Button variant="outline" onClick={handleProjectsClick}>View Projects</Button>
                <a href="/YourName-CV.pdf" download className="download-cv-btn">Download CV</a>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <WhatsAppFloatingButton />
      </main>
      <Footer />
    </>
  );
};

export default Home;
