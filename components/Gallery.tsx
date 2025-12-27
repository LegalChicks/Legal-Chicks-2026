import React from 'react';
import { Camera, MapPin } from 'lucide-react';

// In your local project, you can replace these URLs with imports to your local assets
// e.g. import roosterImg from '../assets/rooster.jpg';
const IMAGES = [
  { 
    url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1200&auto=format&fit=crop", 
    title: "Breeder Rooster",
    desc: "Our verified Dark Mahogany bloodline"
  },
  { 
    url: "https://images.unsplash.com/photo-1612170139969-5c994d13f9c5?q=80&w=800&auto=format&fit=crop", 
    title: "Brooding Stage",
    desc: "Chicks in temperature-controlled cages"
  },
  { 
    url: "https://images.unsplash.com/photo-1563404555800-4b2a64c45a72?q=80&w=800&auto=format&fit=crop", 
    title: "Hardened Growers",
    desc: "Raised on rice hulls for hygiene" 
  },
  { 
    url: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop", 
    title: "Free Range Flock",
    desc: "Healthy & Active layers" 
  },
  { 
    url: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop", 
    title: "Feeding Time",
    desc: "Quality feeds for max production"
  },
  { 
    url: "https://images.unsplash.com/photo-1598965402089-2735118d0422?q=80&w=800&auto=format&fit=crop", 
    title: "Daily Harvest",
    desc: "Fresh Premium Brown Eggs" 
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <div className="inline-block rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold text-slate-700 mb-4 border border-slate-200">
                  ACTUAL FARM PHOTOS
               </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-slate-900">Farm Gallery</h2>
              <p className="text-slate-500 text-lg">A transparent look at our operations in Solana.</p>
           </div>
           <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
             <MapPin className="w-4 h-4" />
             <span>Centro Solana, Cagayan Valley</span>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-slate-100
                ${idx === 0 ? 'sm:col-span-2 md:col-span-2 md:row-span-2' : ''} 
                ${idx === 3 ? 'sm:col-span-2 md:col-span-1' : ''}
              `}
            >
              <img 
                src={img.url} 
                alt={img.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 <p className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</p>
                 <p className="text-slate-200 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
            <a href="#" className="inline-flex items-center gap-2 text-red-700 font-semibold hover:text-red-800 transition-colors">
                <Camera className="w-5 h-5" />
                <span>See more updates on our Facebook Page</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;