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

  //   fetch('https://www.veganworks.com/.netlify/functions/airtable-products')
  //     .then(function(response) {
  //       if (response.status !== 200) {
  //         console.log(
  //           'Looks like there was a problem. Status Code: ' + response.status,
  //         );
  //         return;
  //       }

  //       // Examine the text in the response
  //       response.json().then(function(data) {
  //         console.log('HERE IT IS', data);
  //       });
  //     })
  //     .catch(function(err) {
  //       console.log('Fetch Error :-S', err);
  //     });
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
