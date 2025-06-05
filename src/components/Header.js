import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-gray-800 py-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold tracking-tight">Shrutha V W</h1>
        <nav className="space-x-6 text-gray-400 hover:text-white">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#skills" className="hover:text-teal-400">Skills</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#experience" className="hover:text-teal-400">Experience</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </nav>
        <div className="flex space-x-4 text-xl text-gray-400">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:youremail@example.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </header>
  );
}
