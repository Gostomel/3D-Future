import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon-blue rounded-lg neon-glow" />
          <span className="text-xl font-bold tracking-tighter font-display">3D FUTURE</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-neon-blue transition-colors">Services</a>
          <a href="#" className="text-sm font-medium hover:text-neon-blue transition-colors">Showcase</a>
          <a href="#" className="text-sm font-medium hover:text-neon-blue transition-colors">Process</a>
          <button className="bg-neon-blue text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2">
            Get Quote <ArrowRight size={16} />
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 glass-card p-6 flex flex-col gap-4"
        >
          <a href="#" className="text-lg font-medium">Services</a>
          <a href="#" className="text-lg font-medium">Showcase</a>
          <a href="#" className="text-lg font-medium">Process</a>
          <button className="bg-neon-blue text-black px-5 py-3 rounded-xl text-lg font-bold">
            Get Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
}
