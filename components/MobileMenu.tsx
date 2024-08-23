import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="sm:hidden fixed inset-0 bg-white z-50 flex flex-col">
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <Link href="#" className="flex items-center">
          <span className="text-xl font-bold text-secondary">OrbiFusion</span>
        </Link>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </header>
      <nav className="flex-grow flex flex-col space-y-4 p-4">
        <Link href="#services" className="text-lg font-medium text-secondary hover:text-primary transition-colors" onClick={onClose}>Services</Link>
        <Link href="#features" className="text-lg font-medium text-secondary hover:text-primary transition-colors" onClick={onClose}>Features</Link>
        <Link href="#process" className="text-lg font-medium text-secondary hover:text-primary transition-colors" onClick={onClose}>Process</Link>
        <Link href="#contact" className="text-lg font-medium text-secondary hover:text-primary transition-colors" onClick={onClose}>Contact</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;