import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Team />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;