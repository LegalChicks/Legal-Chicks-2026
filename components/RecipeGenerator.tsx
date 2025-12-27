import React, { useState } from 'react';
import { ChefHat, Sparkles, Loader2 } from 'lucide-react';
import { generateRecipe } from '../services/geminiService';

const RecipeGenerator: React.FC = () => {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!ingredients.trim()) return;
    setLoading(true);
    setRecipe(null);

    const result = await generateRecipe(ingredients);
    setRecipe(result);
    setLoading(false);
  };

  return (
    <div className="mt-8 bg-white rounded-xl p-6 border border-orange-200 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <ChefHat className="w-24 h-24 text-orange-500" />
      </div>
      
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
           <ChefHat className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-lg text-slate-800">Chef's Corner: AI Recipe Generator</h3>
        <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1 border border-purple-200">
          <Sparkles className="w-3 h-3" /> AI Powered
        </span>
      </div>
      
      <p className="text-sm text-slate-600 mb-6 relative z-10">
        Got some ingredients in the fridge? Tell us what you have, and our AI Chef will create a custom recipe using our premium brown eggs.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-6 relative z-10">
        <input 
          type="text" 
          placeholder="e.g. spinach, cheese, leftover rice, tomatoes..." 
          className="flex-1 border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
        />
        <button 
          onClick={handleGenerate}
          disabled={loading || !ingredients.trim()}
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium hover:from-orange-600 hover:to-red-700 h-12 px-6 rounded-lg shadow-md border border-orange-400/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-4 h-4" /> Generate Recipe</>}
        </button>
      </div>

      {recipe && (
        <div className="bg-orange-50/80 rounded-lg p-6 border border-orange-200 animate-[fadeIn_0.5s_ease-out] relative z-10">
          <div className="prose prose-sm prose-orange max-w-none text-slate-700">
             {/* Simple rendering of markdown-like text */}
             {recipe.split('\n').map((line, i) => (
               <p key={i} className={`mb-2 ${line.startsWith('#') || line.includes('**') ? 'font-bold text-slate-900' : ''}`}>
                 {line.replace(/\*\*/g, '')}
               </p>
             ))}
          </div>
          <div className="mt-6 pt-6 border-t border-orange-200 text-center">
            <button 
              className="text-xs font-semibold text-orange-700 hover:text-orange-800 underline decoration-dotted underline-offset-4"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Order Eggs for this Recipe &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;