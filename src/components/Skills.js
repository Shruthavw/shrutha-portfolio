import React from 'react';
import { FaReact, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';

const skills = [
  { category: "Frontend", items: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"], icon: <FaReact className="text-teal-400" /> },
  { category: "Backend", items: ["Django", "REST APIs", "Python"], icon: <FaPython className="text-teal-400" /> },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "SQLite"], icon: <FaDatabase className="text-teal-400" /> },
  { category: "Tools", items: ["Git", "Docker", "JWT", "Agile", "CI/CD"], icon: <FaGitAlt className="text-teal-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 border-b-2 border-teal-400 inline-block">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {skills.map(({ category, items, icon }) => (
          <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              {icon}
              <h3 className="text-xl font-semibold">{category}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300">
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
