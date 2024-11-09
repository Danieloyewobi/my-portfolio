// ./src/components/ClientTestimony.jsx
function ClientTestimony() {
    return (
      <section className="py-10 px-4">
        <h2 className="text-3xl font-bold mb-6">Client Testimonies</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-700 italic">
              "Danniel was instrumental in delivering our project on time. His dedication to quality and attention to detail was fantastic."
            </p>
            <p className="text-gray-600 mt-2 font-semibold">- Client Name, Company</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <p className="text-gray-700 italic">
              "The user experience on our website improved significantly thanks to Danniel’s work. Highly recommend his services!"
            </p>
            <p className="text-gray-600 mt-2 font-semibold">- Client Name, Company</p>
          </div>
          {/* Add more testimonies as needed */}
        </div>
      </section>
    );
  }
  
  export default ClientTestimony;
  