import React from 'react';
import Logo from './components/Logo';
// import OpeningBox from './components/OpeningBox.2';
import Products from './components/Products';
import Brands from './components/Brands';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  // useEffect(() => {
  //   window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
  //     L.start({
  //       baseUrl: 'mc.us19.list-manage.com',
  //       uuid: '6cf9a8328459668743d132ab4',
  //       lid: '4ac3305432',
  //       uniqueMethods: true,
  //     });
  //   });
  // }, []);
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
