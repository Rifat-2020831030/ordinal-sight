import FAQ from "./components/FAQ";
import FeatureSections from "./components/FeatureSections";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import ScrollToTop from "./components/ScrollToTop";
import SignUpCTA from "./components/SignUpCTA";
import SmartFeaturesHeader from "./components/SmartFeaturesHeader";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Smart Features Heading */}
      <SmartFeaturesHeader />

      {/* Feature Sections (Global Reach, Fee-Free, Custom Profile) */}
      <FeatureSections />

      {/* Sign Up CTA Banner */}
      <SignUpCTA />

      {/* Common Questions / FAQ */}
      <FAQ />

      {/* Pricing Section */}
      <PricingSection />

      {/* Footer */}
      <Footer />

      {/* Scroll-to-Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
