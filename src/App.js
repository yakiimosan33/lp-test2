import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Introduction from './Introduction';
import Features from './Features';
import Pricing from './Pricing';
import CallToAction from './CallToAction';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Features />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;