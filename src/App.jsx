import HeaderHero from './components/HeaderHero';
import Features from './components/Features';
import Metrics from './components/Metrics';
import FAQ from './components/FAQ';
import DownloadSection from './components/DownloadSection';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <HeaderHero />
      <Metrics />
      <Features />
      <FAQ />
      <DownloadSection />
      <footer className="bg-black text-white/60 text-sm py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Quasar</span>
          <nav className="flex items-center gap-4">
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#faq">About</a>
            <a className="hover:text-white" href="#download">Download</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
