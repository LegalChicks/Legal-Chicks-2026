import React, { useState } from 'react';
import { 
  Egg, MapPin, Phone, Facebook, CheckCircle2, Menu, X, 
  TrendingDown, Sprout, Handshake, ShieldCheck, ThermometerSun, 
  Truck, Scale, Utensils, Coins, BadgeCheck, Megaphone, 
  Briefcase, TrendingUp, ChefHat, HeartPulse, Leaf, Bird
} from 'lucide-react';

import ChatWidget from './components/ChatWidget';
import RecipeGenerator from './components/RecipeGenerator';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import { PriceItem, OrderForm } from './types';

// --- Data Constants ---
const PRICE_LIST: PriceItem[] = [
  { stage: "Fertile Eggs", price: "₱25 / pc", desc: "Pure bred, high fertility rate" },
  { stage: "Chicks (Day old - 1 wk)", price: "₱100 / hd", desc: "Straight run, vaccinated (Mareks)" },
  { stage: "Growing (2 wks - 1 mo)", price: "₱150 - ₱300", desc: "Hardened off, off-heat" },
  { stage: "Juvenile (2 - 3 mos)", price: "₱350 / hd", desc: "Range ready, distinct features" },
  { stage: "Near Point of Lay (4 mos)", price: "₱850 / hd", desc: "Sexed hens, pre-production" },
  { stage: "Point of Lay (5 mos)", price: "₱1,250 / hd", desc: "Ready to lay, quick ROI" },
];

const STRATEGIC_ADVANTAGES = [
  {
    icon: <ThermometerSun className="w-8 h-8 text-orange-600" />,
    title: 'Acclimatized Genetics',
    desc: 'Bred in Solana, for Solana. Our flock is already adapted to the heat and conditions of Cagayan Valley, ensuring higher survival rates than stock shipped from Manila.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-700" />,
    title: 'Pure "Dark Mahogany"',
    desc: 'We don’t settle for generic reds. We breed the true "Dark Mahogany" RIR—prized for its genetic resilience, aesthetic prestige, and verified utility.'
  },
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: 'Zero Transport Stress',
    desc: 'Eliminate the risk of "shipping shock." Buying local means your eggs and chicks arrive fresh, vigorous, and ready to grow.'
  }
];

const RIR_BENEFITS = [
  {
    icon: <Scale className="w-6 h-6 text-red-600" />,
    title: "Dual-Purpose Powerhouse",
    desc: "The ultimate 'Sulit' breed. Females lay 250+ eggs/year, while males grow heavy for premium meat. Unlike commercial layers, you don't throw away the males."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
    title: "Disease Resilience",
    desc: "RIRs are tough. They are far less sensitive than white broilers and thrive in backyard or free-range conditions with minimal intervention."
  },
  {
    icon: <Utensils className="w-6 h-6 text-red-600" />,
    title: "Superior Taste",
    desc: "The meat quality rivals native chicken ('Tagalog')—firm and flavorful, not mushy like supermarket chicken. It fetches a higher price in the market."
  },
  {
    icon: <Coins className="w-6 h-6 text-red-600" />,
    title: "High Resale Value",
    desc: "Even as 'cull' chickens after laying, RIR hens are heavy and valuable for meat, giving you a second payday that commercial layers can't match."
  }
];

const RESELLER_PERKS = [
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    title: "Wholesale Margins",
    desc: "Get exclusive discounts when you order in bulk (10+ trays or 50+ heads). Buy low, sell at market rates."
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-blue-600" />,
    title: "Authorized Partner",
    desc: "Receive an official 'Authorized Reseller' certificate to display in your Agrivet or farm, building instant trust."
  },
  {
    icon: <Megaphone className="w-6 h-6 text-blue-600" />,
    title: "Marketing Support",
    desc: "We provide professional photos and tarpaulin designs so you don't have to create them yourself."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    title: "Priority Allocation",
    desc: "Resellers get first priority during peak seasons. Ensure your customers always have stock available."
  }
];

const EGG_BENEFITS = [
  {
    icon: <ChefHat className="w-6 h-6 text-orange-600" />,
    title: "Richer Flavor & Texture",
    desc: "Chefs and bakers prefer heritage brown eggs for their deeper, creamier taste. Our yolks are rich orange and flavorful, not pale and watery like commercial white eggs."
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-orange-600" />,
    title: "Nutrient Dense",
    desc: "Laid by hens fed a balanced diet and allowed to forage. Our brown eggs are packed with protein and essential vitamins for your family's health."
  },
  {
    icon: <Leaf className="w-6 h-6 text-orange-600" />,
    title: "Thicker Shells, Fresher Eggs",
    desc: "Our heritage breeds produce eggs with thicker shells, keeping them fresh longer. Plus, they are harvested right here in Solana—no long-distance shipping."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<OrderForm>({
    name: '',
    contactNumber: '',
    location: '',
    inquiryType: 'Dark Mahogany RIR Eggs',
    quantity: '',
    message: ''
  });

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert("Thank you! Your order/inquiry has been successfully sent to Legal Chicks.");
    setFormData({
      name: '',
      contactNumber: '',
      location: '',
      inquiryType: 'Dark Mahogany RIR Eggs',
      quantity: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-red-700 cursor-pointer" onClick={() => handleScroll('home')}>
            <Egg className="h-6 w-6" />
            <span>Legal Chicks</span>
          </div>

          <div className="hidden md:flex gap-6">
            <button onClick={() => handleScroll('home')} className="text-sm font-medium hover:text-red-600 transition-colors">Home</button>
            <button onClick={() => handleScroll('advantage')} className="text-sm font-medium hover:text-red-600 transition-colors">Why Us</button>
            <button onClick={() => handleScroll('breed-info')} className="text-sm font-medium hover:text-red-600 transition-colors text-red-700 font-bold">Breed Info</button>
            <button onClick={() => handleScroll('network')} className="text-sm font-medium hover:text-red-600 transition-colors text-blue-700 font-bold">The Network</button>
            <button onClick={() => handleScroll('resellers')} className="text-sm font-medium hover:text-red-600 transition-colors">Resellers</button>
            <button onClick={() => handleScroll('products')} className="text-sm font-medium hover:text-red-600 transition-colors">Pricing</button>
          </div>

          <div className="hidden md:flex">
            <button onClick={() => handleScroll('contact')} className="bg-red-700 text-white hover:bg-red-800 h-10 py-2 px-6 rounded-md font-medium shadow-sm transition-colors">
              Order Now
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-white p-4 space-y-4 shadow-lg animate-[slideInDown_0.2s_ease-out]">
             <button onClick={() => handleScroll('home')} className="block w-full text-left font-medium py-2 text-slate-600">Home</button>
             <button onClick={() => handleScroll('advantage')} className="block w-full text-left font-medium py-2 text-slate-600">Northern Advantage</button>
             <button onClick={() => handleScroll('breed-info')} className="block w-full text-left font-medium py-2 text-red-700">Why RIR?</button>
             <button onClick={() => handleScroll('network')} className="block w-full text-left font-medium py-2 text-blue-700">The Network</button>
             <button onClick={() => handleScroll('resellers')} className="block w-full text-left font-medium py-2 text-slate-600">Resellers</button>
             <button onClick={() => handleScroll('products')} className="block w-full text-left font-medium py-2 text-slate-600">Price List</button>
            <button className="w-full bg-red-700 text-white py-3 rounded-md font-medium" onClick={() => handleScroll('contact')}>Inquire Now</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2000&auto=format&fit=crop" 
            alt="Rhode Island Red Rooster" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="inline-block rounded-full bg-red-600/20 px-4 py-1.5 text-sm font-semibold text-red-300 border border-red-500/30 mb-6 backdrop-blur-sm animate-[fadeInDown_1s_ease-out]">
            Based in Centro Solana, Cagayan Valley
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            <span className="text-red-500">Dark Mahogany</span> Genetics <br/>
            <span className="text-white">For The Serious Farmer</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-slate-300 mb-8 font-light leading-relaxed">
            Stop risking your investment on stressed stock from the South. 
            We provide verified, acclimatized heritage breeds right here in the North.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-12 px-8 text-lg bg-red-700 hover:bg-red-800 rounded-md font-bold transition-transform hover:-translate-y-0.5 shadow-lg shadow-red-900/20" onClick={() => handleScroll('products')}>
              See Price List
            </button>
            <button className="h-12 px-8 text-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-md font-medium backdrop-blur-sm transition-colors" onClick={() => handleScroll('network')}>
              Join The Network
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-slate-900 border-t border-slate-800 text-white py-10 relative z-10 shadow-xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">300+</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Dark Mahogany Layers</div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">50+</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Australorp Layers</div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-1">Hybrid</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Social Enterprise</div>
            </div>
            <div className="p-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-1">Local</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Solana Bred</div>
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGIC ADVANTAGE SECTION */}
      <section id="advantage" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
              The Northern Advantage
            </h2>
            <div className="h-1 w-20 bg-red-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg leading-relaxed">
              For too long, Cagayan farmers have relied on stock shipped from Batangas or Cavite. 
              The stress of travel weakens the birds. We changed that.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STRATEGIC_ADVANTAGES.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BREED SPOTLIGHT SECTION */}
      <section id="breed-info" className="py-20 bg-gradient-to-br from-red-900 to-red-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-800/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-900/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="md:w-1/2">
              <div className="inline-block rounded-full bg-red-800/80 px-4 py-1.5 text-xs font-bold text-red-200 mb-6 border border-red-700 shadow-lg">
                  BREED SPOTLIGHT
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Why Choose <br/>
                <span className="text-red-300 text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">Rhode Island Reds?</span>
              </h2>
              <p className="text-red-100 text-lg mb-8 leading-relaxed opacity-90">
                The "Dark Mahogany" RIR is the gold standard for sustainable farming. 
                It is a <strong>Dual-Purpose</strong> breed, meaning it was engineered to feed families with both eggs and meat.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {RIR_BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-3 font-bold text-red-100">
                      <div className="bg-red-900/50 p-1.5 rounded-lg">{benefit.icon}</div>
                      {benefit.title}
                    </div>
                    <p className="text-sm text-red-100/70 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                 <button className="bg-transparent border-2 border-red-200 text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-red-900 transition-all duration-300" onClick={() => handleScroll('products')}>
                    Check RIR Pricing
                 </button>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
               <div className="relative rounded-2xl overflow-hidden border-4 border-red-800/50 shadow-2xl group">
                 <img 
                    src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=1000&auto=format&fit=crop"
                    alt="RIR Hen Closeup" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 mb-2">
                        <BadgeCheck className="w-5 h-5 text-blue-400" />
                        <p className="font-bold text-lg text-white">Verified Genetics</p>
                    </div>
                    <p className="text-sm text-slate-300">Healthy, acclimatized layers raised in Solana.</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <Gallery />

      {/* THE NETWORK SECTION */}
      <section id="network" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold text-blue-700 mb-6 tracking-wide">
                  SOCIAL ENTERPRISE
               </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-tight">
                The Empowerment Network
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Legal Chicks is more than a farm; it's a movement. We are building a "Hybrid Social Enterprise" that partners with local farmers to secure food sovereignty.
              </p>
              <div className="space-y-6">
                <div className="flex gap-5">
                   <div className="bg-green-100 p-3 rounded-full h-fit"><Sprout className="w-6 h-6 text-green-600 shrink-0" /></div>
                   <div>
                     <h4 className="font-bold text-lg text-slate-800 mb-1">Opportunity Packages</h4>
                     <p className="text-slate-500 leading-relaxed">Access to quality chicks, feed support, and training to start your farm correctly.</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="bg-blue-100 p-3 rounded-full h-fit"><Handshake className="w-6 h-6 text-blue-600 shrink-0" /></div>
                   <div>
                     <h4 className="font-bold text-lg text-slate-800 mb-1">Community Clusters</h4>
                     <p className="text-slate-500 leading-relaxed">Join a network of growers in your barangay for shared resources and market access.</p>
                   </div>
                </div>
              </div>
              <div className="mt-10">
                <button 
                  className="bg-slate-900 text-white px-8 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                  onClick={() => {
                    setFormData(prev => ({...prev, inquiryType: 'Network Membership Inquiry'}));
                    handleScroll('contact');
                  }}
                >
                  Join the Network
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-slate-50 rounded-3xl p-10 border border-slate-200 shadow-xl relative">
               <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-yellow-400 text-yellow-900 font-bold px-4 py-2 rounded-lg shadow-md transform rotate-3">
                  Farmer First!
               </div>
               <h3 className="font-bold text-2xl mb-6 text-slate-800">Why Join Us?</h3>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                   <span className="text-slate-700">Access to purebred "Dark Mahogany" stock not found elsewhere.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                   <span className="text-slate-700">Mentorship on the "Legal Chicks System" for low mortality.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                   <span className="text-slate-700">Support from incubation to harvest.</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                   <span className="text-slate-700">Be part of a legal, recognized entity for government grants.</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BROWN EGG BENEFITS SECTION (Culinary Excellence) */}
      <section className="py-24 bg-orange-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-100 rounded-full blur-3xl opacity-30"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1598965402089-2735118d0422?q=80&w=1000&auto=format&fit=crop" 
                  alt="Basket of Brown Eggs" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] transform hover:scale-[1.01] transition-transform duration-500"
                />
                
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur p-5 rounded-xl shadow-xl max-w-xs border border-orange-100 animate-[fadeInUp_1s_ease-out_0.5s]">
                   <div className="flex gap-1 text-orange-500 mb-2">
                      <HeartPulse className="w-4 h-4 fill-current" />
                      <HeartPulse className="w-4 h-4 fill-current" />
                      <HeartPulse className="w-4 h-4 fill-current" />
                      <HeartPulse className="w-4 h-4 fill-current" />
                      <HeartPulse className="w-4 h-4 fill-current" />
                   </div>
                   <p className="font-bold text-orange-950 text-lg italic">"The yolk is so orange and rich!"</p>
                   <p className="text-slate-500 text-sm mt-2 font-medium">- Happy Customer from Solana</p>
                </div>
             </div>
             
             <div className="lg:w-1/2">
               <div className="inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-700 mb-6 border border-orange-200">
                  CULINARY EXCELLENCE
               </div>
               <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                 Heritage Brown vs. Commercial White
               </h2>
               <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                 Not all eggs are created equal. Our Dark Mahogany RIRs lay premium brown eggs that are superior in taste, texture, and nutrition compared to factory-farmed white eggs.
               </p>

               <div className="space-y-8">
                 {EGG_BENEFITS.map((item, idx) => (
                   <div key={idx} className="flex gap-5 items-start">
                      <div className="p-4 bg-white rounded-xl shadow-sm text-orange-600 border border-orange-100 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-800 mb-1">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
               
               {/* --- AI Recipe Generator Integration --- */}
               <RecipeGenerator />

             </div>
          </div>
        </div>
      </section>

      {/* RESELLERS SECTION */}
      <section id="resellers" className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-bold text-purple-700 mb-4 border border-purple-200">
                BUSINESS OPPORTUNITY
             </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
              Distributors Program
            </h2>
            <p className="text-slate-600 text-lg">
              Turn your network into net worth. Partner with Legal Chicks and become the go-to supplier for premium quality genetics in your municipality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESELLER_PERKS.map((perk, idx) => (
               <div key={idx} className="p-8 bg-white hover:bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="mb-6 bg-purple-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {perk.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-slate-800">{perk.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{perk.desc}</p>
               </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <button 
                className="bg-purple-700 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-purple-800 shadow-xl shadow-purple-900/20 transition-all hover:-translate-y-1" 
                onClick={() => {
                  setFormData(prev => ({...prev, inquiryType: 'Reseller Application'}));
                  handleScroll('contact');
                }}
             >
                Apply to be a Reseller
             </button>
             <p className="mt-4 text-sm text-slate-400">Limited slots per municipality.</p>
          </div>
        </div>
      </section>

      {/* Products & Pricing Section */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold text-red-700 mb-4">
                  OFFICIAL PRICE LIST
               </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-slate-900">Catalog & Pricing</h2>
              <p className="text-slate-500 text-lg">Invest in quality genetics at the stage that suits your budget.</p>
            </div>
            <div className="flex items-center gap-2 text-sm bg-orange-100 text-orange-800 px-5 py-3 rounded-full border border-orange-200 font-medium">
              <TrendingDown className="w-4 h-4" />
              <span>Bulk Pricing Available for 10+ orders</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Visual Cards */}
            <div className="space-y-8">
               <div className="rounded-2xl border bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                 <div className="aspect-video bg-slate-200 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1598965402089-2735118d0422?q=80&w=500&auto=format&fit=crop" 
                      alt="Fertile Eggs" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                       <h3 className="text-white font-bold text-xl">Fertile Eggs</h3>
                       <p className="text-slate-200 text-sm">Start from scratch</p>
                    </div>
                 </div>
                 <div className="p-6 flex justify-between items-center">
                    <div>
                      <span className="text-3xl font-bold text-red-700">₱25</span>
                      <span className="text-slate-500 text-sm font-medium"> / pc</span>
                    </div>
                    <button className="border border-red-200 text-red-700 hover:bg-red-50 px-4 py-2 rounded-md font-medium transition-colors" onClick={() => {
                        setFormData(prev => ({...prev, inquiryType: 'Fertile Eggs'}));
                        handleScroll('contact');
                    }}>Order</button>
                 </div>
               </div>

               <div className="rounded-2xl border bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                 <div className="aspect-video bg-slate-200 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=500&auto=format&fit=crop" 
                      alt="Live Stock" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                       <h3 className="text-white font-bold text-xl">Live Stock</h3>
                       <p className="text-slate-200 text-sm">Chicks to Layers</p>
                    </div>
                 </div>
                 <div className="p-6 flex justify-between items-center">
                    <div>
                      <span className="text-slate-500 text-xs uppercase font-bold tracking-wider">Starts at</span>
                      <div className="text-3xl font-bold text-red-700">₱100</div>
                    </div>
                    <button className="border border-red-200 text-red-700 hover:bg-red-50 px-4 py-2 rounded-md font-medium transition-colors" onClick={() => {
                        setFormData(prev => ({...prev, inquiryType: 'Day Old Chicks'}));
                        handleScroll('contact');
                    }}>Order</button>
                 </div>
               </div>
            </div>

            {/* Price Table */}
            <div className="lg:col-span-2 rounded-2xl border bg-white shadow-lg overflow-hidden border-slate-200">
               <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
                     <Bird className="w-5 h-5 text-red-600"/>
                     Current Farm Gate Prices
                  </h3>
               </div>
               <div className="divide-y divide-slate-100">
                  {PRICE_LIST.map((item, idx) => (
                     <div key={idx} className="p-6 flex flex-col md:flex-row justify-between items-center hover:bg-red-50/30 transition-colors gap-4 group">
                        <div className="text-center md:text-left flex-1">
                           <h4 className="font-bold text-lg text-slate-900 group-hover:text-red-700 transition-colors">{item.stage}</h4>
                           <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                           <div className="text-xl font-bold text-slate-700 whitespace-nowrap">{item.price}</div>
                           <button className="bg-slate-900 text-white hover:bg-slate-800 h-9 px-4 rounded text-sm font-medium transition-colors" onClick={() => {
                              setFormData(prev => ({...prev, inquiryType: item.stage}));
                              handleScroll('contact');
                           }}>
                              Select
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="bg-slate-50/50 p-4 text-xs text-center text-slate-400 border-t border-slate-100">
                  * Prices are subject to change without prior notice. 
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQ />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="pt-8">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-slate-900">Order / Inquiry</h2>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                Fill out the form to reserve your stock. We will contact you to confirm availability and schedule pickup at Centro Solana.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-red-50 rounded-xl text-red-600 shadow-sm border border-red-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">HQ Location</h3>
                    <p className="text-slate-600">Centro Solana, Cagayan Valley, Philippines</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-red-50 rounded-xl text-red-600 shadow-sm border border-red-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Contact</h3>
                    <p className="text-slate-600">+63 9XX XXX XXXX</p>
                    <p className="text-sm text-slate-400 mt-1">Available Mon-Sat, 8am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-red-50 rounded-xl text-red-600 shadow-sm border border-red-100">
                    <Facebook className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Social Media</h3>
                    <a 
                      href="#" 
                      className="text-slate-600 hover:text-blue-600 hover:underline transition-colors"
                    >
                      Legal Chicks Poultry Farm
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Inquiry Form */}
            <div className="rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 bg-white relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-50 rounded-full -z-10"></div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Reservation Form</h3>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all"
                      placeholder="Mr. Lingan"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contactNumber" className="text-sm font-semibold text-slate-700">Contact Number</label>
                    <input
                      id="contactNumber"
                      name="contactNumber"
                      required
                      className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all"
                      placeholder="0917..."
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-semibold text-slate-700">Location</label>
                  <input
                    id="location"
                    name="location"
                    required
                    className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all"
                    placeholder="Barangay / Town"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiryType" className="text-sm font-semibold text-slate-700">I am interested in:</label>
                  <div className="relative">
                    <select
                        id="inquiryType"
                        name="inquiryType"
                        className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all appearance-none"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Select an Item</option>
                        <optgroup label="Partnership">
                        <option value="Reseller Application">Reseller Application (Business)</option>
                        <option value="Network Membership Inquiry">Joining the Empowerment Network (Farmer)</option>
                        </optgroup>
                        <optgroup label="Live Stock">
                        <option value="Chicks (Day old - 1 wk)">Chicks (Day old - 1 wk) @ ₱100</option>
                        <option value="Growing (2 wks - 1 mo)">Growing (2 wks - 1 mo) @ ₱150-300</option>
                        <option value="Juvenile (2 - 3 mos)">Juvenile (2 - 3 mos) @ ₱350</option>
                        <option value="Near Point of Lay (4 mos)">Near Point of Lay (4 mos) @ ₱850</option>
                        <option value="Point of Lay (5 mos)">Point of Lay (5 mos) @ ₱1,250</option>
                        </optgroup>
                        <optgroup label="Eggs">
                        <option value="Fertile Eggs">Fertile Eggs @ ₱25/pc</option>
                        <option value="Bulk Order (Eggs)">Bulk Order (Eggs)</option>
                        </optgroup>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <TrendingDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                   <div className="flex justify-between">
                     <label htmlFor="quantity" className="text-sm font-semibold text-slate-700">Quantity</label>
                     <span className="text-xs text-slate-400">Min 1</span>
                   </div>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      placeholder="e.g. 50"
                      className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all"
                      value={formData.quantity}
                      onChange={handleInputChange}
                    />
                  </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message / Notes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full p-4 rounded-lg border border-slate-300 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all resize-none"
                    placeholder="Tell us more about your needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full h-12 text-lg font-bold bg-red-700 text-white rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>Submit Reservation</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-xl text-white mb-6">
                <Egg className="h-6 w-6 text-red-600" />
                <span>Legal Chicks</span>
              </div>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                <strong>Legal Chicks Poultry Farm</strong><br/>
                Prosperity Through Poultry.
              </p>
              <p className="text-sm text-slate-500">
                A social enterprise dedicated to quality genetics and community empowerment in Cagayan Valley.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-6">Explore</h3>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleScroll('home')} className="hover:text-red-500 transition-colors">Home</button></li>
                <li><button onClick={() => handleScroll('advantage')} className="hover:text-red-500 transition-colors">Why Us</button></li>
                <li><button onClick={() => handleScroll('resellers')} className="hover:text-red-500 transition-colors">Resellers</button></li>
                <li><button onClick={() => handleScroll('products')} className="hover:text-red-500 transition-colors">Price List</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6">Business Hours</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-slate-800 pb-2"><span>Mon - Fri</span> <span className="text-white">8:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between border-b border-slate-800 pb-2"><span>Saturday</span> <span className="text-white">8:00 AM - 12:00 PM</span></li>
                <li className="flex justify-between border-b border-slate-800 pb-2"><span>Sunday</span> <span className="text-red-500">Closed</span></li>
              </ul>
            </div>

            <div>
               <h3 className="font-bold text-white mb-6">Contact</h3>
               <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-red-600"/> Centro Solana, Cagayan</li>
                  <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-red-600"/> +63 9XX XXX XXXX</li>
               </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Legal Chicks Poultry Farm. All rights reserved.</p>
            <p className="mt-4 md:mt-0 flex items-center gap-1 opacity-70">
              Made with <span className="text-red-500 text-xs">♥</span> in Solana
            </p>
          </div>
        </div>
      </footer>
      
      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
}