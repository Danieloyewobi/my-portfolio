import { useEffect, useState } from "react";

function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const sectionPosition = document.getElementById("contact-us").offsetTop;
      if (position > sectionPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case the section is already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contact-us"
      className={`py-10 px-4 bg-gray-100 text-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-1000 ease-in-out`}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-8">
        I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
      </p>
      <div className="max-w-md mx-auto">
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block text-left text-gray-600" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-left text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Your Email"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-left text-gray-600" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              placeholder="Your Message"
              rows="6"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 w-full transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
