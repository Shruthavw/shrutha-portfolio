import React from 'react';

const projects = [
  {
    title: "EV Charger Locator",
    description: "A web app to locate EV charging stations with real-time status using React.js, Django REST APIs, and JWT for authentication.",
    tech: "React.js, Django REST, JWT, PostgreSQL",
    github: "https://github.com/yourgithub/ev-charger-locator",
    demo: "https://ev-charger-demo.example.com",
    image: "/images/ev-charger.png"
  },
  {
    title: "Learning Management System Backend",
    description: "Backend for an LMS platform enabling course management, user authentication, and content delivery using Django and SQL.",
    tech: "Django, REST APIs, MySQL",
    github: "https://github.com/yourgithub/lms-backend",
    demo: null,
    image: "/images/lms-backend.png"
  },
  {
    title: "Reddit Clone",
    description: "A full-stack Reddit-like forum built with React, Django REST, MySQL, and JWT authentication.",
    tech: "React.js, Django REST, MySQL, JWT",
    github: "https://github.com/yourgithub/reddit-clone",
    demo: "https://reddit-clone-demo.example.com",
    image: "/images/reddit-clone.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-semibold mb-8 border-b-2 border-teal-400 inline-block">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map(({ title, description, tech, github, demo, image }) => (
          <div key={title} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            {image && <img src={image} alt={`${title} screenshot`} className="rounded-md mb-4 object-cover h-48 w-full" />}
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 mb-3">{description}</p>
            <p className="text-sm text-teal-400 mb-3">Tech: {tech}</p>
            <div className="flex space-x-4">
              {github && (
                <a href={github} target="_blank" rel="noreferrer" className="underline hover:text-teal-500">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
