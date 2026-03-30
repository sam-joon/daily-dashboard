import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  CheckCircle2, 
  Circle, 
  Camera, 
  CloudSun, 
  Utensils, 
  BookOpen, 
  Sparkles, 
  Dumbbell,
  Play,
  Heart
} from 'lucide-react';

const App = () => {
  // Task state with your specific categories
  const [tasks, setTasks] = useState([
    { id: 1, text: "Exercise of the day", completed: false, category: "Exercise", icon: Dumbbell },
    { id: 2, text: "Daily Cleaning", completed: false, category: "Cleaning", icon: Sparkles },
    { id: 3, text: "Learning session", completed: false, category: "Learning", icon: BookOpen },
    { id: 4, text: "Cooking a healthy meal", completed: false, category: "Cooking", icon: Utensils },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // Weather and Date logic
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  
  return (
    <div className="flex justify-center bg-slate-100 min-h-screen sm:py-8 font-sans">
      {/* Mobile Frame Container */}
      <div className="relative w-full max-w-[430px] h-[900px] bg-white shadow-2xl overflow-hidden sm:rounded-[3.5rem] border-[12px] border-slate-900 flex flex-col">
        
        {/* Status Bar */}
        <div className="h-12 bg-white flex justify-between items-center px-10 pt-4 shrink-0">
          <span className="text-sm font-bold text-slate-900">9:41</span>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-2.5 bg-slate-900 rounded-sm"></div>
          </div>
        </div>

        {/* Header / Camera Placeholder */}
        <section className="px-6 py-2">
          <div className="relative w-full h-48 bg-slate-200 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-inner group">
            {/* This is where the baby's photo or camera stream would go */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/40 to-transparent">
              <Camera size={40} className="text-white/70 mb-2" />
              <p className="text-white text-xs font-medium uppercase tracking-widest">Baby's Daily Photo</p>
            </div>
            {/* Overlay Gradient for contrast */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
              <Heart size={14} className="text-pink-400 fill-pink-400" />
              <span className="text-white text-[10px] font-bold">LIVE CAMERA</span>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto px-6 pt-4 pb-24 space-y-6">
          
          {/* Weather & Date Section */}
          <div className="flex items-center justify-between bg-blue-50 p-5 rounded-3xl border border-blue-100">
            <div>
              <p className="text-blue-600 text-xs font-bold uppercase tracking-wide">{today}</p>
              <h2 className="text-2xl font-black text-slate-800">22°C & Sunny</h2>
              <p className="text-slate-500 text-sm">Notre-Dame-de-l'Île-Perrot</p>
            </div>
            <CloudSun size={48} className="text-amber-400" />
          </div>

          {/* Task List */}
          <div className="space-y-3">
            <div className="flex justify-between items-end px-1">
              <h3 className="text-lg font-bold text-slate-800">Today's Goals</h3>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {tasks.filter(t => t.completed).length}/{tasks.length} Done
              </span>
            </div>
            
            <div className="space-y-3">
              {tasks.map(task => (
                <div 
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    task.completed 
                    ? 'bg-emerald-50 border-emerald-100' 
                    : 'bg-white border-slate-100 hover:border-indigo-100 shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    task.completed ? 'bg-emerald-200 text-emerald-700' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <task.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className={`font-bold text-sm ${task.completed ? 'text-emerald-800 line-through' : 'text-slate-700'}`}>
                      {task.text}
                    </p>
                    <p className="text-[10px] uppercase font-bold text-slate-400">{task.category}</p>
                  </div>
                  {task.completed ? (
                    <CheckCircle2 size={24} className="text-emerald-500" />
                  ) : (
                    <Circle size={24} className="text-slate-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Exercise Video Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Play size={18} className="text-red-500 fill-red-500" />
              Workout of the Day
            </h3>
            <div className="aspect-video w-full bg-slate-900 rounded-3xl overflow-hidden shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/c0VxUFHdYzs" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-[11px] text-slate-500 text-center italic">
              "5 Min Full Body Warm Up" • Part of your daily series
            </p>
          </div>
        </main>

        {/* Navigation Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default App;