import { Shield, Zap, Palette, Cpu, Cloud, Bot, EyeOff, Gauge } from "lucide-react";

const FEATURES = [
  { icon: Zap, title: "Fast Execution", desc: "Lightning-fast execution times optimized for all scripts." },
  { icon: Shield, title: "Secure and Safe", desc: "Built with security in mind to protect your system." },
  { icon: Palette, title: "Customizable", desc: "Theme options and interface adjustments to fit your style.", badge: "Coming Soon" },
  { icon: Gauge, title: "User-friendly Interface", desc: "Clean, intuitive design that makes navigation simple." },
  { icon: EyeOff, title: "Bypass Byfron", desc: "Advanced compatibility with protected platforms." },
  { icon: Cloud, title: "Cloud Storage", desc: "Save scripts and settings in the cloud, access anywhere." },
  { icon: Bot, title: "AI Generator Script", desc: "Let AI help create optimized scripts for you.", badge: "Coming Soon" },
  { icon: Cpu, title: "Anti Ban Protection", desc: "Sophisticated measures to minimize detection." },
  { icon: Zap, title: "Boosted Performance", desc: "Optimized code execution that won't slow you down." },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-black to-[#0a0014] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-fuchsia-300">Our Features</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Quasar Features</h2>
          <p className="text-white/70 mt-3">Discover what makes Quasar the ultimate choice for Windows users.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, badge }) => (
            <div key={title} className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{title}</h3>
                  {badge && (
                    <span className="text-[10px] uppercase tracking-wide rounded-full bg-white/10 ring-1 ring-white/20 px-2 py-0.5 text-fuchsia-200">{badge}</span>
                  )}
                </div>
              </div>
              <p className="text-white/70 mt-3 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
