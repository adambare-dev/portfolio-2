import { useState } from "react";
import Port from "./Port";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaFolderOpen,
  FaPhone,
} from "react-icons/fa";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 relative">
      <nav class="sticky top-0 z-1000 bg-slate-950/20 backdrop-blur-sm border-b border-slate-800 p-5 flex justify-between items-center">
        <div class="logo">
          <p className="text-2xl font-extrabold">
            {" "}
            <span className="text-cyan-400 font-extrabold text-3xl">&lt;</span>
            Adam/&gt;{" "}
          </p>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden cursor-pointer font-bold text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
        <ul className="hidden md:flex gap-4">
          <li>
            <a href="#" className="hover:text-gray-400 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#rooms" className="hover:text-gray-400 hover:underline">
              portfolio
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-gray-400 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#rooms" className="hover:text-gray-400 hover:underline">
              portfolio
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col  gap-2 bg-slate-950 border-t border-gray-600 p-4">
            <li className="flex gap-2 items-center font-medium text-slate-500 bg-slate-900/50 rounded-lg px-3 py-1.5 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/50">
              <FaHome className="text-cyan-400 text-lg" />
              <a href="#" className="hover:text-cyan-400">
                Home
              </a>
            </li>
            <li className="flex gap-2 items-center font-medium text-slate-500 bg-slate-900/50 rounded-lg px-3 py-1.5 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/50">
              <FaUser className="text-cyan-400 text-lg" />
              <a href="#" className="hover:text-cyan-400">
                About
              </a>
            </li>
            <li className="flex gap-2 items-center font-medium text-slate-500 bg-slate-900/50 rounded-lg px-3 py-1.5 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/50">
              <FaBriefcase className="text-cyan-400 text-lg" />
              <a href="#" className="hover:text-cyan-400">
                Portfolio
              </a>
            </li>

            <li className="flex gap-2 items-center font-medium text-slate-500 bg-slate-900/50 rounded-lg px-3 py-1.5 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/50">
              <FaCode className="text-cyan-400 text-lg" />
              <a href="#" className="hover:text-cyan-400">
                projects
              </a>
            </li>

            <li className="flex gap-2 items-center font-medium text-slate-500 bg-slate-900/50 rounded-lg px-3 py-1.5 hover:bg-slate-800 hover:text-slate-200 border border-slate-800/50">
              <FaPhone className="text-cyan-400 text-lg" />
              <a href="#" className="hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>

          {/* ------------- */}
        </div>
      )}

      {/* _____________________________ */}
      <Port />
    </div>
  );
}

export default App;
