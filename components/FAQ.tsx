import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Do you deliver chicks and eggs?",
    a: "We primarily recommend pickup at our farm in Centro Solana to ensure the safety and health of the chicks. However, for bulk orders (300+ heads), we can arrange special transport within Cagayan Valley."
  },
  {
    q: "What is the survival rate of your chicks?",
    a: "With proper brooding management (heat, electrolytes, and clean water), our 'Hardened' chicks typically see a 95-98% survival rate because they are already acclimatized to the local climate, unlike stress-prone imported stock."
  },
  {
    q: "What feeds do you recommend for RIRs?",
    a: "For day-old to 1 month, use Chick Booster. From 1 to 3 months, switch to Chick Grower. For 4 months and up (layers), use Layer Mash mixed with crushed corn and ad-libitum greens like Madre de Agua or Kangkong."
  },
  {
    q: "How many eggs can I expect per day?",
    a: "A healthy Dark Mahogany RIR hen can lay between 250 to 280 eggs per year. In a flock of 100 hens, you can expect around 70-80 eggs daily during peak production."
  },
  {
    q: "Do you offer warranties on chicks?",
    a: "We guarantee live release upon pickup. We also provide a free 'Mortality Allowance' (extra chicks) for orders of 100 heads and above."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <div className="md:w-1/3">
               <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold text-blue-700 mb-6 border border-blue-200">
                  SUPPORT
               </div>
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">
                 Frequently Asked Questions
               </h2>
               <p className="text-slate-600 text-lg mb-8">
                 Starting a poultry farm brings up a lot of questions. Here are the answers to the most common ones we get from partners.
               </p>
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                        <HelpCircle className="w-6 h-6" />
                     </div>
                     <h4 className="font-bold text-slate-900">Still have questions?</h4>
                  </div>
                  <p className="text-sm text-slate-500 mb-4">Our AI Expert is available 24/7 to answer specific queries about breeds and pricing.</p>
                  <button 
                    onClick={() => {
                        const btn = document.getElementById('chat-trigger');
                        if (btn) btn.click();
                    }} 
                    className="text-sm font-semibold text-blue-700 hover:underline"
                  >
                    Chat with AI Expert &rarr;
                  </button>
               </div>
            </div>

            <div className="md:w-2/3 space-y-4">
              {FAQS.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${activeIndex === idx ? 'border-blue-500 shadow-md' : 'border-slate-200 hover:border-blue-300'}`}
                >
                  <button 
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`font-bold text-lg ${activeIndex === idx ? 'text-blue-700' : 'text-slate-800'}`}>
                      {item.q}
                    </span>
                    {activeIndex === idx ? <Minus className="w-5 h-5 text-blue-500 shrink-0" /> : <Plus className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>
                  <div 
                    className={`px-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default FAQ;