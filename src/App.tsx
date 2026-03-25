import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Box, Zap, Shield, Globe, Users, Trophy } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroScene from './components/HeroScene';
import QuoteForm from './components/QuoteForm';

const features = [
  {
    icon: <Box className="text-neon-blue" />,
    title: "High-Fidelity Modeling",
    description: "Sub-millimeter precision for product visualization and industrial design."
  },
  {
    icon: <Zap className="text-neon-purple" />,
    title: "Real-time Rendering",
    description: "Interactive 3D experiences that run smoothly on any device."
  },
  {
    icon: <Shield className="text-neon-pink" />,
    title: "Production Ready",
    description: "Optimized assets ready for game engines, AR/VR, and web integration."
  }
];

const stats = [
  { label: "Models Created", value: "2,500+" },
  { label: "Happy Clients", value: "450+" },
  { label: "Industry Awards", value: "12" }
];

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-6 overflow-hidden">
        <HeroScene />
        
        <div className="max-w-7xl mx-auto w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
              </span>
              Leading 3D Agency 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8">
              CRAFTING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
                3D FUTURE
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg">
              We bridge the gap between imagination and reality with immersive 3D modeling and interactive experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                View Showcase <ArrowRight size={20} />
              </button>
              <button className="glass-card px-8 py-4 font-bold hover:bg-white/10 transition-colors">
                Our Process
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-neon-blue rounded-full" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl font-bold font-display mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-16 px-6 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12 items-center justify-center opacity-30 hover:opacity-100 transition-opacity">
          {['NVIDIA', 'AUTODESK', 'EPIC GAMES', 'UNITY', 'ADOBE'].map((logo, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.1, color: '#00f2ff' }}
              className="text-xl font-bold font-display cursor-default"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unmatched Precision</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our workflow combines AI-driven optimization with human artistic vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:neon-glow transition-all">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase Section (Placeholder for 3D Carousel) */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Works</h2>
            <p className="text-gray-400">Explore our latest high-fidelity projects.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-neon-blue font-bold">
            View All Projects <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex gap-8 px-6 overflow-x-auto pb-12 no-scrollbar">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="min-w-[300px] md:min-w-[450px] aspect-video glass-card overflow-hidden group cursor-pointer">
              <img 
                src={`https://picsum.photos/seed/3d-${i}/800/600`} 
                alt="Project" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold">Project Alpha {i}</h4>
                <p className="text-sm text-gray-300">Character Design & Animation</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Form Section */}
      <QuoteForm />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-neon-blue rounded neon-glow" />
            <span className="text-lg font-bold tracking-tighter font-display">3D FUTURE</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          </div>

          <div className="text-sm text-gray-500">
            © 2026 3D Future Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
