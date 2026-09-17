import { useState } from "react";
import Port from "./Port";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 relative">
      <nav class="sticky top-0 z-1000 bg-slate-950/20 backdrop-blur-sm border-b border-slate-800 p-5 flex justify-between items-center">
        <div class="logo">🏨 MyHotel</div>
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
              Rooms
            </a>
          </li>
          <li>
            <a
              href="#amenities"
              className="hover:text-gray-400 hover:underline"
            >
              Amenities
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col  gap-2 bg-slate-950 border-t border-gray-600 p-4">
            <li>
              <a href="#" className="hover:text-blue-400">
                🏠 Home
              </a>
            </li>
            <li>
              <a href="#rooms" className="hover:text-blue-400">
                🛣 Rooms
              </a>
            </li>
            <li>
              <a href="#amenities" className="hover:text-blue-400">
                🌎 Amenities
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                👥 About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                📞 Contact
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
