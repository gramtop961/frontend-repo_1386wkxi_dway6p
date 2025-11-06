import { Download, Rocket, Shield } from "lucide-react";

export default function HeaderHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0725] via-[#0a0014] to-black text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Quasar</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#faq" className="hover:text-white">About</a>
          <a href="#download" className="hover:text-white">Download</a>
          <a href="#download" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-medium shadow hover:shadow-lg transition">
            <Download className="h-4 w-4" /> Download on PC
          </a>
        </nav>
      </header>

      <div className="container mx-auto px-6 pt-6 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-fuchsia-300/90 bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1 mb-4">
            <Shield className="h-3.5 w-3.5" /> Next Generation Powerful Roblox Executor
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Download Quasar for Windows
          </h1>
          <p className="mt-5 text-white/80 leading-relaxed max-w-xl">
            Introducing the Ultimate Roblox Executor for Windows. Built for low-end PCs with smooth, stable performance. Advanced scripting support, regular updates, and a dedicated support team make Quasar a reliable choice to elevate your gameplay.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["Ultimate Security", "Maximum Performance", "Advanced Scripting"].map((item) => (
              <li key={item} className="rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 text-sm text-white/90">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#download" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition">
              <Download className="h-5 w-5" /> Download on PC
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/10 ring-1 ring-white/20 px-6 py-3 font-semibold hover:bg-white/15 transition">
              Join Discord
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 ring-1 ring-white/10 p-2">
            <div className="h-full w-full rounded-lg bg-black/50 grid place-items-center">
              <span className="text-white/70">Quasar Interface</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
