export default function Metrics() {
  const metrics = [
    { label: "Execution Speed", value: "95%" },
    { label: "Average Load Time", value: "230ms" },
    { label: "Detection Rate", value: "80%" },
    { label: "Daily Users", value: "100+" },
  ];

  return (
    <section className="bg-[#0a0014] text-white py-16">
      <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              {m.value}
            </div>
            <div className="mt-2 text-sm text-white/70">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
