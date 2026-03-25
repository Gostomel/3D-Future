import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Character Modeling',
    budget: '$1k - $5k',
    description: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="quote">
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 relative z-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Instant Quote</h2>
          <p className="text-gray-400">Tell us about your project and get a response in 24 hours.</p>
        </div>

        <div className="flex gap-2 mb-8">
          {[1, 2].map(i => (
            <div 
              key={i} 
              className={`h-1 flex-1 rounded-full transition-colors ${step >= i ? 'bg-neon-blue' : 'bg-white/10'}`} 
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue outline-none transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue outline-none transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Project Type</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue outline-none transition-colors appearance-none"
                  value={formData.projectType}
                  onChange={e => setFormData({...formData, projectType: e.target.value})}
                >
                  <option>Character Modeling</option>
                  <option>Product Visualization</option>
                  <option>Architectural Rendering</option>
                  <option>Game Assets</option>
                </select>
              </div>

              <button 
                onClick={nextStep}
                className="w-full bg-neon-blue text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                Next Step <ArrowRight size={20} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Budget Range</label>
                <div className="grid grid-cols-2 gap-4">
                  {['<$1k', '$1k - $5k', '$5k - $10k', '$10k+'].map(b => (
                    <button
                      key={b}
                      onClick={() => setFormData({...formData, budget: b})}
                      className={`py-3 rounded-xl border transition-all ${formData.budget === b ? 'bg-neon-blue border-neon-blue text-black' : 'bg-white/5 border-white/10 text-white hover:border-white/30'}`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Project Description</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-neon-blue outline-none transition-colors h-32 resize-none"
                  placeholder="Tell us more about your vision..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={prevStep}
                  className="flex-1 bg-white/5 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft size={20} /> Back
                </button>
                <button 
                  className="flex-[2] bg-neon-blue text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  Submit Quote <Send size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] -z-10 rounded-full" />
    </section>
  );
}
