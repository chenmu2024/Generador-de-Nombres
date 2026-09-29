'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

export default function FeedbackWidget() {
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  return (
    <div className="bg-[#121212] rounded-3xl p-6 border border-white/5 shadow-xl text-center space-y-3">
      <div className="flex items-center justify-center gap-1 text-amber-400">
        <Star className="w-4 h-4 fill-amber-400" />
        <Star className="w-4 h-4 fill-amber-400" />
        <Star className="w-4 h-4 fill-amber-400" />
        <Star className="w-4 h-4 fill-amber-400" />
        <Star className="w-4 h-4 fill-amber-400" />
        <span className="text-xs font-bold text-zinc-300 ml-1">Tu opinión nos ayuda a mejorar</span>
      </div>
      <p className="text-sm text-zinc-200 font-medium">¿Te sirvieron las ideas de este generador?</p>
      {feedbackGiven ? (
        <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl text-xs font-semibold border border-emerald-500/20">
          ¡Gracias por tu valoración! ❤️
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setFeedbackGiven(true)}
            className="px-4 py-2 bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 rounded-xl text-xs font-bold border border-violet-500/30 transition-all flex items-center gap-1"
          >
            👍 ¡Sí, me sirvió!
          </button>
          <button
            onClick={() => setFeedbackGiven(true)}
            className="px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 rounded-xl text-xs font-medium border border-white/5 transition-all"
          >
            👎 Regular
          </button>
        </div>
      )}
    </div>
  );
}
