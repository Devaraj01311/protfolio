import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="py-20 -mt-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-teal-700">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Have a project in mind or want to discuss potential opportunities?
          </p>
        </div>

        {/* Email */}
        <div className="text-center">
          <h1 className="text-lg lg:text-xl font-medium mb-4 text-zinc-700">
            devarajldev01@gmail.com
          </h1>

          <p className="text-lg font-medium text-gray-800 bg-teal-100 px-4 py-2 inline-block rounded-lg">
            Send a message to the above email 
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
