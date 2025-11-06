import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  { q: "What is Quasar?", a: "Quasar is a Level 3 Roblox executor designed for smooth, stable script execution. Whether you're testing scripts or enhancing your gameplay, Quasar provides a lightweight and reliable solution." },
  { q: "Is Quasar free?", a: "Yes! Quasar is currently 100% free for everyone, with no key system required. Premium features will be introduced soon—but for now, all features are unlocked and accessible to everyone." },
  { q: "What executor level is Quasar?", a: "Quasar runs at Level 3, offering solid support for many popular scripts with quick and efficient execution." },
  { q: "Does Quasar support loadingstrings?", a: "Yes, loadingstrings are fully supported and ready to use." },
  { q: "Is Luamor supported?", a: "Yes, Quasar supports Luamor." },
  { q: "What platforms does Quasar support?", a: "Quasar is available only for Windows PC and laptops." },
  { q: "Is there a key system?", a: "No key system right now. Premium options may arrive in the future, but currently everything is open to all." },
  { q: "Can I run custom scripts?", a: "Yes. Quasar supports most custom Lua scripts. Suspicious or harmful scripts may be blocked to protect users." },
  { q: "Is there a script hub included?", a: "Not yet, but we're actively considering it. Share ideas on Discord." },
  { q: "Will Quasar get updates?", a: "Absolutely. Quasar is updated regularly to improve performance, fix bugs, and introduce new features." },
  { q: "Is Quasar safe?", a: "Yes. We actively block risky scripts and ensure a clean execution environment." },
  { q: "Where can I get support or report bugs?", a: "Join our official Discord server to get help, report bugs, or share feedback directly with the team." },
];

function QA({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg bg-white/5 ring-1 ring-white/10">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between px-4 py-3">
        <span className="text-left font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-white/70 text-sm leading-relaxed">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-8">
          <p className="text-sm uppercase tracking-widest text-fuchsia-300">Questions & Answers</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
          <p className="text-white/70 mt-3">Find answers to common questions about Quasar and its features.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((it) => (
            <QA key={it.q} q={it.q} a={it.a} />
          ))}
        </div>
        <div className="mt-8">
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition">
            Join Our Discord Community
          </a>
        </div>
      </div>
    </section>
  );
}
