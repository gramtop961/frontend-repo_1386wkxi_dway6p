import { Download, Rocket, Shield, Zap, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/40 via-purple-900/40 to-black" />

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-20">
        {/* Top nav */}
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-purple-500/20 border border-purple-400/30 grid place-items-center">
              <Rocket className="h-5 w-5 text-purple-300" />
            </div>
            <span className="text-white font-semibold tracking-wide">Quasar</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#about" className="text-gray-300 hover:text-white">About</a>
            <a href="#download" className="text-gray-300 hover:text-white">Download</a>
            <a href="#faq" className="text-gray-300 hover:text-white">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#download" className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
              <Download className="h-4 w-4" />
              <span>Download on PC</span>
            </a>
            <a href="#community" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition">
              <MessageCircle className="h-4 w-4" />
              <span>Join Discord</span>
            </a>
          </div>
        </div>

        {/* Headline */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-purple-200/80 bg-white/10 px-3 py-1 rounded-full mb-4">
              <Shield className="h-3.5 w-3.5" />
              Next Generation Powerful Roblox Executor
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Download Quasar for Windows
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-xl">
              Introducing the ultimate executor built for stability on low‑end PCs and high performance when you need it most. Smooth scripting, frequent updates, and dedicated support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-white/10 text-purple-100 px-3 py-1 rounded-full text-sm">
                <Zap className="h-4 w-4" /> Maximum Performance
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 text-purple-100 px-3 py-1 rounded-full text-sm">
                <Shield className="h-4 w-4" /> Ultimate Security
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 text-purple-100 px-3 py-1 rounded-full text-sm">
                <Rocket className="h-4 w-4" /> Advanced Scripting
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#download" className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-5 py-3 rounded-xl font-medium transition">
                <Download className="h-5 w-5" /> Download on PC
              </a>
              <a href="#community" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-medium transition">
                <MessageCircle className="h-5 w-5" /> Join Discord
              </a>
            </div>
          </div>

          {/* Metrics card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-white font-semibold mb-4">Key Performance Metrics</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-black/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-xs text-gray-400">Execution Speed</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">230ms</div>
                <div className="text-xs text-gray-400">Average Load Time</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">80%</div>
                <div className="text-xs text-gray-400">Detection Rate</div>
              </div>
              <div className="bg-black/30 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-xs text-gray-400">Daily Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
