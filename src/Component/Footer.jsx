// ./src/components/Footer.jsx
function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-200 py-6 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <a href="#about" className="hover:text-blue-400 mx-2">About</a>
            <a href="#projects" className="hover:text-blue-400 mx-2">Projects</a>
            <a href="#contact" className="hover:text-blue-400 mx-2">Contact</a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Danniel Adeleke Oyewobi. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  