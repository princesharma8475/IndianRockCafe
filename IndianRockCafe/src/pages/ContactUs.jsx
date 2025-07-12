import React from "react";

const ContactUs = () => {
  return (
    <div className="container my-10 px-8">
      <h2 className="text-3xl font-semibold text-orange-500 text-center mb-6">
        Contact Us
      </h2>

      <p className="text-lg text-gray-700 text-center mb-8">
        Have questions, suggestions, or just want to say hello? We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </p>

      <div className="flex justify-center">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <form>
            <div className="mb-6">
              <label
                htmlFor="exampleInputName"
                className="block text-lg font-medium text-orange-500 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                id="exampleInputName"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="exampleInputEmail"
                className="block text-lg font-medium text-orange-500 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                id="exampleInputEmail"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="exampleInputMessage"
                className="block text-lg font-medium text-orange-500 mb-2"
              >
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                id="exampleInputMessage"
                rows="4"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-full text-lg font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
