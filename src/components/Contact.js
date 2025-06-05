import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-8 border-b-2 border-teal-400 inline-block">Contact Me</h2>
      <p className="mb-4 text-gray-300">Feel free to reach out for collaborations or just a friendly chat!</p>
      <a href="mailto:youremail@example.com" className="inline-block bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition">
        shruthav12@gmail.com
      </a>
    </section>
  );
}
