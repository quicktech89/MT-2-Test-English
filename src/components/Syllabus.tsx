import React from 'react';
import { BookOpen, FileText, PenTool, BookMarked } from 'lucide-react';

export default function Syllabus() {
  const topics = [
    { icon: <BookOpen className="w-6 h-6" />, title: 'Prose', items: ['Last Leaf', 'Reach for the Top (Part 1 & 2)'] },
    { icon: <BookMarked className="w-6 h-6" />, title: 'Poetry', items: ['No Men Are Foreign'] },
    { icon: <PenTool className="w-6 h-6" />, title: 'Writing', items: ['Story Writing'] },
    { icon: <FileText className="w-6 h-6" />, title: 'Grammar & Comprehension', items: ['Modals', 'Unseen Passage'] },
  ];

  return (
    <section id="syllabus" className="min-h-screen py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-12">
            Test Syllabus
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
                </div>
                <ul className="space-y-3 ml-12">
                  {topic.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-600 before:content-['•'] before:mr-2 before:text-indigo-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}