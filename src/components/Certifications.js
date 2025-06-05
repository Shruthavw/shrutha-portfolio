import React from 'react';

const certifications = [
  { name: "AWS Cloud Practitioner", status: "In Progress" },
  { name: "Google Cloud Skills Boost (Generative AI)", status: "Completed" },
  { name: "Deloitte Australia Data Analytics Simulation", status: "Completed" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 border-b-2 border-teal-400 inline-block">Certifications</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {certifications.map(({ name, status }) => (
          <li key={name}>
            <span className="font-semibold">{name}</span> - <span className="italic">{status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
