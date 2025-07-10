import SectionWrapper from '../components/SectionWrapper';
import AnimatedTitle from '../components/AnimatedTitle';
import Button from '../components/Button';

const Contact = () => {
  return (
    <main className="pt-24">
      <SectionWrapper id="contact">
        <AnimatedTitle text="Contact Me" />
        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <Button type="submit" variant="primary">Send Message</Button>
        </form>
      </SectionWrapper>
    </main>
  );
};

export default Contact;
