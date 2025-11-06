import { Download, List, FileText, HardDrive } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="relative bg-gradient-to-b from-[#0a0014] to-black text-white py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-fuchsia-300">Download Quasar</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Choose your version</h2>
            <p className="text-white/70 mt-3 max-w-2xl">We recommend using the latest release for the best performance and security updates.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 font-semibold shadow-lg hover:shadow-xl transition">
            <Download className="h-5 w-5" /> Download V0.1.0
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
          <div className="grid grid-cols-12 text-xs uppercase tracking-wider text-white/60 px-4 py-3">
            <div className="col-span-3 sm:col-span-2">Version</div>
            <div className="col-span-4 sm:col-span-3">Date</div>
            <div className="col-span-2 sm:col-span-2">Status</div>
            <div className="col-span-1 sm:col-span-1">Size</div>
            <div className="col-span-2 sm:col-span-4">Action</div>
          </div>
          <div className="divide-y divide-white/10">
            <div className="grid grid-cols-12 items-center px-4 py-4">
              <div className="col-span-3 sm:col-span-2 font-medium flex items-center gap-2">
                <HardDrive className="h-4 w-4 text-fuchsia-300" /> V0.1.0
              </div>
              <div className="col-span-4 sm:col-span-3">May 3, 2025</div>
              <div className="col-span-2 sm:col-span-2"><span className="rounded-full bg-emerald-500/15 text-emerald-300 text-xs px-2 py-1">Available</span></div>
              <div className="col-span-1 sm:col-span-1">42.1 MB</div>
              <div className="col-span-2 sm:col-span-4 flex items-center gap-2">
                <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white/10 ring-1 ring-white/20 px-3 py-2 text-sm hover:bg-white/15">
                  <FileText className="h-4 w-4" /> View changelog
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-3 py-2 text-sm font-semibold shadow">
                  <Download className="h-4 w-4" /> Download
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 hover:bg-white/10 transition">
            <List className="h-4 w-4" /> Version History
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 hover:bg-white/10 transition">
            System Requirements
          </a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/5 ring-1 ring-white/10 px-4 py-3 hover:bg-white/10 transition">
            Discord Community Support
          </a>
        </div>

        <p className="text-xs text-white/60 mt-6">By downloading Quasar, you agree to our Terms of Service and Privacy Policy.</p>
      </div>
    </section>
  );
}
