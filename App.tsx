
import React from 'react';
import { Phone, Mail, Construction, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from './constants';
import Badge from './components/Badge';
import ActionButton from './components/ActionButton';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 relative overflow-hidden">
      
      {/* Decorative background elements with low z-index */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-800/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Main Content Container - High z-index to be sure it's visible */}
      <main className="max-w-4xl w-full text-center z-10 relative space-y-12">
        
        {/* Header / Logo Section */}
        <header className="space-y-6">
          <div className="inline-flex items-center justify-center p-4 mb-4 rounded-3xl bg-blue-600/10 border border-blue-500/20 animate-float shadow-2xl shadow-blue-500/10 mx-auto">
             <Construction className="w-12 h-12 text-blue-400" />
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none mb-4 text-white">
              Elite <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">NW</span> Flooring
            </h1>
            <p className="flex items-center justify-center gap-2 text-blue-400/80 font-mono tracking-[0.3em] text-[10px] md:text-xs uppercase">
              <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" /> Premium Northwest Craftsmanship
            </p>
          </div>
          
          <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-xl md:text-3xl font-light text-blue-100/80 tracking-[0.2em] uppercase">
              New Website Coming Soon
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto rounded-full mt-4"></div>
          </div>
        </header>

        {/* Message Panel */}
        <section 
          className="glass-panel p-8 md:p-14 rounded-[2.5rem] max-w-2xl mx-auto space-y-10 animate-fade-in-up shine-effect"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed font-light">
            We are currently crafting a digital experience as premium as our floors. 
            <span className="block mt-6 font-bold text-white text-xl md:text-2xl">
              We remain fully open for business.
            </span>
          </p>

          <div className="h-px w-full bg-white/10"></div>

          {/* Services Section */}
          <div className="space-y-5">
            <p className="text-[10px] font-black text-blue-400/50 uppercase tracking-[0.4em]">Specializing In</p>
            <div className="flex flex-wrap justify-center gap-3">
              {SERVICES.map((service, index) => (
                <div 
                  key={service} 
                  className="animate-fade-in-up" 
                  style={{ animationDelay: `${0.7 + (index * 0.1)}s`, animationFillMode: 'backwards' }}
                >
                  <Badge>{service}</Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Buttons */}
        <section 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 animate-fade-in-up"
          style={{ animationDelay: '1s', animationFillMode: 'backwards' }}
        >
          <ActionButton 
            label="Call Us" 
            icon={<Phone className="w-5 h-5" />} 
            href={`tel:${BUSINESS_INFO.phone}`} 
            variant="primary" 
          />
          <ActionButton 
            label="Email Us" 
            icon={<Mail className="w-5 h-5" />} 
            href={`mailto:${BUSINESS_INFO.email}`} 
            variant="secondary" 
          />
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto pt-20 pb-8 text-center space-y-3 z-10 relative animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'backwards' }}>
        <div className="flex items-center justify-center gap-2 text-sm tracking-wide text-gray-400">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
          {BUSINESS_INFO.location}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            License: <span className="font-mono text-gray-400 select-all font-semibold">{BUSINESS_INFO.license}</span>
          </p>
          <p className="text-[9px] pt-6 uppercase tracking-[0.4em] text-gray-600">
            &copy; {new Date().getFullYear()} Elite Northwest Flooring
          </p>
        </div>
      </footer>

      {/* Enhanced Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
