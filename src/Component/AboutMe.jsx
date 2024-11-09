// ./src/components/AboutMe.jsx
import { useEffect, useState } from 'react';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('about-me').offsetTop;
      if (position > sectionPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the section is already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about-me" className="py-10 px-4 bg-gray-100">
      <div className={`max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}>
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-700">
            I'm Danniel Adeleke, a passionate frontend developer with a background in creating responsive, user-friendly web applications. I specialize in using modern technologies like React and Tailwind CSS to bring ideas to life on the web. My goal is to create digital experiences that are not only visually appealing but also highly functional and easy to use.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex justify-center md:justify-end">
          <img
            src="/src/assets/daniel wk.jpg"
            alt="Danniel Adeleke"
            className={`w-48 h-48 rounded-full object-cover shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
