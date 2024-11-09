// ./src/components/ProjectsDone.jsx
import { useEffect, useState } from 'react';

function ProjectsDone() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById('projects-done').offsetTop;
      if (position > sectionPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the section is already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects-done" className="py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Projects Done</h2>
      <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}>
        {/* Project 1 */}
        <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src="path_to_image_1.jpg"
            alt="SellMeMarket"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Project 1: SellMeMarket</h3>
          <p className="text-gray-700">An e-commerce platform to facilitate local market sales.</p>
          <a href="https://your-project-link-1.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block hover:underline">
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src="path_to_image_2.jpg"
            alt="BallotWave"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Project 2: BallotWave</h3>
          <p className="text-gray-700">An application to streamline online voting processes.</p>
          <a href="https://your-project-link-2.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block hover:underline">
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            src="path_to_image_3.jpg"
            alt="BallotWave"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Project 3: BallotWave</h3>
          <p className="text-gray-700">An application to streamline online voting processes.</p>
          <a href="https://your-project-link-3.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block hover:underline">
            View Project
          </a>
        </div>

        {/* Add more project cards as needed */}
      </div>
    </section>
  );
}

export default ProjectsDone;
