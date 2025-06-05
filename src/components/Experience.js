import React from 'react';

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Ford Pro Charging (Electriphi)",
    duration: "Jan 2024 – Jun 2024",
    details: [
      "Developed and maintained React.js frontend components and Django REST APIs.",
      "Worked with SQL databases to design data models and optimize queries.",
      "Implemented JWT-based authentication and enhanced security protocols.",
      "Collaborated with cross-functional teams using Agile and Git workflows."
    ]
  },
  {
    role: "Web Development Intern",
    company: "PaceWisdom Solutions",
    duration: "Jul 2023 – Dec 2023",
    details: [
      "Built REST APIs in Django to support LMS backend functionality.",
      "Designed React.js UI components for better user experience.",
      "Maintained SQL database schemas and optimized queries.",
      "Participated in code reviews and sprint planning sessions."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 border-b-2 border-teal-400 inline-block">Experience</h2>
      <div className="space-y-8">
        {experience.map(({ role, company, duration, details }) => (
          <div key={role + company} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{role}</h3>
            <p className="text-teal-400 mb-1">{company}</p>
            <p className="italic text-gray-400 mb-4">{duration}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
