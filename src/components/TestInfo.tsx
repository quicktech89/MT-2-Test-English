import React from 'react';
import { AlertCircle, Calendar, Clock } from 'lucide-react';

export default function TestInfo() {
  return (
    <section id="test-info" className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
              MT-2 Test Tomorrow
            </h1>
            
            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Important Notice</h2>
                  <p className="text-gray-600">
                    This test is for <span className="font-bold text-red-500">ENGLISH</span>, not Hindi.
                    Please prepare accordingly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Date</h2>
                  <p className="text-gray-600">Tomorrow</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Duration</h2>
                  <p className="text-gray-600">Standard test duration applies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}