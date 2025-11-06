import { Download, FileText, CheckCircle2 } from "lucide-react";

const rows = [
  {
    version: "V0.1.0",
    date: "May 3, 2025",
    status: "Available",
    size: "42.1 MB",
    notes: ["Initial release", "Core functionality", "Basic user interface", "Released on May 3, 2025"],
  },
];

export default function Download() {
  return (
    <section id="download" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-black to-black pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-purple-300/80 uppercase tracking-widest text-xs">Download Quasar</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Version History</h2>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-purple-200 hover:text-white">
                <FileText className="h-5 w-5" /> Compare Versions
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="grid grid-cols-12 px-4 py-3 text-xs text-gray-300 bg-white/5">
                <div className="col-span-3">Version</div>
                <div className="col-span-3">Date</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Size</div>
                <div className="col-span-2">Action</div>
              </div>
              {rows.map((r) => (
                <div key={r.version} className="grid grid-cols-12 items-center px-4 py-4 border-t border-white/10">
                  <div className="col-span-3">
                    <div className="text-white font-semibold">{r.version}</div>
                    <a href="#" className="text-xs text-purple-200 inline-flex items-center gap-1">View changelog</a>
                  </div>
                  <div className="col-span-3 text-gray-300">{r.date}</div>
                  <div className="col-span-2 inline-flex items-center gap-2 text-green-300">
                    <CheckCircle2 className="h-4 w-4" /> {r.status}
                  </div>
                  <div className="col-span-2 text-gray-300">{r.size}</div>
                  <div className="col-span-2">
                    <a href="#" className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition">
                      <Download className="h-4 w-4" /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold mb-2">Selected Version</h3>
              <div className="text-gray-300 text-sm">
                <p className="text-white font-medium">V0.1.0</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  {rows[0].notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
                <a href="#" className="mt-3 inline-flex items-center gap-2 text-purple-200 hover:text-white">Show Details</a>
              </div>
            </div>
          </div>

          {/* Side card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sticky top-6">
              <h3 className="text-white font-semibold">System Requirements</h3>
              <p className="text-gray-300 text-sm mt-2">Windows 10/11, 4GB RAM, 200MB free disk space.</p>
              <a href="#" className="mt-3 inline-flex items-center gap-2 text-purple-200 hover:text-white text-sm">View Requirements</a>
              <div className="mt-5">
                <h4 className="text-white font-semibold">Discord Community Support</h4>
                <a href="#community" className="mt-2 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition">Join Discord</a>
              </div>
              <p className="text-xs text-gray-400 mt-5">By downloading Quasar, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
