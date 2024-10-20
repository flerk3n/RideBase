import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white font-jeko">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <div className="text-4xl font-bold">Ridebase</div>
        <div className="hidden md:flex space-x-8">
          <Link href="/login" legacyBehavior>
            <button className="transition duration-300 text-white hover:text-gray-400 hover:underline focus:outline-none">
              Log in
            </button>
          </Link>
          <Link href="/signup" legacyBehavior>
            <button className="bg-white text-black px-6 py-2 rounded transition duration-300 hover:bg-gray-300 focus:outline-none">
              Sign up
            </button>
          </Link>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-black p-4">
          <Link href="/login" legacyBehavior>
            <button className="block text-white transition duration-300 hover:text-gray-400 py-2 hover:underline focus:outline-none">
              Log in
            </button>
          </Link>
          <Link href="/signup" legacyBehavior>
            <button className="block bg-white text-black px-6 py-2 rounded transition duration-300 hover:bg-gray-300 focus:outline-none">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
