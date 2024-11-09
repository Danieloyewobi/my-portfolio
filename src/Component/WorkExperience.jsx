// ./src/components/WorkExperience.jsx
import { useEffect, useState } from 'react';
import { FaBriefcase, FaUserGraduate } from 'react-icons/fa';

function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('work-experience').offsetTop;
      if (position > sectionPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the section is already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="work-experience" className="py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Work Experience</h2>
      <div className={`space-y-8 max-w-4xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}>
        {/* Job 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <FaBriefcase className="text-blue-500 text-2xl mr-3" />
            <div>
              <h3 className="text-xl font-semibold">Frontend Developer at XYZ Company</h3>
              <p className="text-gray-600">May 2024 - Present</p>
            </div>
          </div>
          <p className="text-gray-700">
            Developed responsive web applications and collaborated with designers and backend developers to deliver high-quality software.
          </p>
        </div>

        {/* Job 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="flex items-center mb-4">
            <FaUserGraduate className="text-green-500 text-2xl mr-3" />
            <div>
              <h3 className="text-xl font-semibold">Intern at Devnija Academy</h3>
              <p className="text-gray-600">May 2024 - July 2024</p>
            </div>
          </div>
          <p className="text-gray-700">
            Assisted in building and maintaining web applications and gained experience with frontend technologies and project collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
