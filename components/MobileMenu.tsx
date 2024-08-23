import React from 'react';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <div className="sm:hidden fixed inset-0 bg-white z-50 p-4">
      <nav className="flex flex-col space-y-4">
        <Link href="#services" className="text-lg font-medium">Services</Link>
        <Link href="#features" className="text-lg font-medium">Features</Link>
        <Link href="#process" className="text-lg font-medium">Process</Link>
        <Link href="#contact" className="text-lg font-medium">Contact</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;