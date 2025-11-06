import HeaderHero from "./components/HeaderHero";
import Features from "./components/Features";
import Metrics from "./components/Metrics";
import DownloadSection from "./components/DownloadSection";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen font-inter bg-black">
      <HeaderHero />
      <section className="bg-black text-white">
        <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="font-semibold">Optimized Performance</h3>
            <p className="text-white/70 mt-2 text-sm">Designed to run smoothly on all systems, even low-end PCs with minimal resources.</p>
          </div>
          <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="font-semibold">Regular Updates</h3>
            <p className="text-white/70 mt-2 text-sm">Stay ahead with frequent updates that bring new features and improvements.</p>
          </div>
          <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="font-semibold">Premium Support</h3>
            <p className="text-white/70 mt-2 text-sm">Get help when you need it with our dedicated support team and active community.</p>
          </div>
        </div>
      </section>
      <Metrics />
      <Features />
      <FAQ />
      <DownloadSection />
      <footer className="bg-black text-white/60 py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Quasar. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
