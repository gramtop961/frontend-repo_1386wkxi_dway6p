import { useState } from "react";

const QA = [
  {
    q: "What is Quasar?",
    a: "Quasar is a Level 3 Roblox executor designed for smooth, stable script execution. Whether you're testing scripts or enhancing your gameplay, Quasar provides a lightweight and reliable solution.",
  },
  {
    q: "Is Quasar free?",
    a: "Yes! Quasar is currently 100% free for everyone, with no key system required. Premium features will be introduced soon—but for now, all features are unlocked and accessible to everyone.",
  },
  {
    q: "What executor level is Quasar?",
    a: "Quasar runs at Level 3, offering solid support for many popular scripts with quick and efficient execution.",
  },
  { q: "Does Quasar support loadingstrings?", a: "Yes, loadingstrings are fully supported and ready to use." },
  { q: "Is Luamor supported?", a: "Yes, Quasar supports Luamor." },
  {
    q: "What platforms does Quasar support?",
    a: "Quasar is available only for Windows PC and laptops. Support for other platforms is not available at this time.",
  },
  {
    q: "Is there a key system?",
    a: "Nope! There is no key system right now. We want users to experience Quasar freely—premium options will arrive in the future, but currently, everything is open to all.",
  },
  {
    q: "Can I run custom scripts?",
    a: "Yes. Quasar supports most custom Lua scripts. Note: Suspicious or harmful scripts may be blocked to protect users.",
  },
  {
    q: "Is there a script hub included?",
    a: "Not yet, but it's something we're actively considering. Feel free to submit ideas through our Suggestions channel on Discord.",
  },
  {
    q: "Will Quasar get updates?",
    a: "Absolutely. Quasar is updated regularly to improve performance, fix bugs, and introduce new features.",
  },
  {
    q: "Is Quasar safe?",
    a: "Yes. Quasar is built with user safety in mind. We actively block risky scripts and ensure a clean execution environment.",
  },
  {
    q: "Where can I get support or report bugs?",
    a: "Join our official Discord server to get help, report bugs, or share feedback directly with the team.",
  },
];

function Item({ i, q, a, open, onToggle }) {
  return (
    <div className="rounded-lg bg-white/5 ring-1 ring-white/10">
      <button
        className="w-full text-left px-4 py-3 font-medium flex items-center justify-between"
        onClick={() => onToggle(i)}
      >
        <span>{q}</span>
        <span className="text-sm text-white/50">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="px-4 pb-4 text-white/70 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-fuchsia-300">Questions & Answers</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
          <p className="text-white/70 mt-3">Find answers to common questions about Quasar and its features.</p>
        </div>
        <div className="mt-8 grid gap-3">
          {QA.map((row, idx) => (
            <Item
              key={row.q}
              i={idx}
              q={row.q}
              a={row.a}
              open={openIndex === idx}
              onToggle={(i) => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
