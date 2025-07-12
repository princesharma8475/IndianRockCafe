import React from 'react';

const FeedbackForm = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6 py-8">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-orange-500 text-center mb-4">Feedback Form</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400"
              placeholder="Your Email"
            />
            <p className="text-sm text-gray-500 mt-1">We'll never share your email with anyone else.</p>
          </div>

          <div>
            <label htmlFor="feedback" className="block text-lg font-medium text-gray-700">Your Feedback</label>
            <textarea
              id="feedback"
              rows="3"
              placeholder="Enter your feedback here..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-gray-400"
            ></textarea>
          </div>

          <div className="flex items-center space-x-3">
            <input type="checkbox" id="whatsapp-updates" className="h-5 w-5 text-orange-500 border-gray-300 rounded" />
            <label htmlFor="whatsapp-updates" className="text-gray-700">Want updates on WhatsApp</label>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="w-full py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
