import React, { useEffect } from 'react';
import Logo from './components/Logo';
// import OpeningBox from './components/OpeningBox.2';
import Products from './components/Products';
import Brands from './components/Brands';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Home | VeganWorks';
  }, []);
  return (
    <div>
      <Logo />
      <Products />
      <Brands />
      <Community />
      <Footer />
      {/* <OpeningBox items={openingBox} /> */}
    </div>
  );
}

export default App;
