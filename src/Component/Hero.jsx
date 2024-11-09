// ./src/Hero.jsx
function Hero() {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Danniel Adeleke</span>.
        </h1>
        <p className="text-2xl font-medium text-gray-700 mb-4">
          A passionate Frontend Developer.
        </p>
        <p className="text-gray-600 max-w-xl mb-8">
          I create engaging and responsive web applications using the latest web technologies. I’m dedicated to delivering
          seamless user experiences and bringing ideas to life through code.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            View My Projects
          </button>
          <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400">
            Download Resume
          </button>
        </div>
      </section>
    );
  }
  
  export default Hero;
  