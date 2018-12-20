import React, { useEffect, Suspense, lazy } from 'react';
import Logo from './components/Logo';
import Products from './components/Products';
import Brands from './components/Brands';
import Community from './components/Community';
import LazyLoad from 'react-lazyload';
// import TwitterDrawer from './components/TwitterDrawer';
import Footer from './components/Footer';
const CommunityMeter = lazy(() => import('./components/CommunityMeter'));

function App() {
  useEffect(() => {
    document.title = 'Home | VeganWorks';
  }, []);

  return (
    <div style={{ width: '100%' }}>
      {/* <TwitterDrawer /> */}
      <Logo />

      <Products />
      <Brands />
      <Community />
      <LazyLoad height={500} offset={100}>
        <Suspense fallback={<div>Loading...</div>}>
          <CommunityMeter />
        </Suspense>
      </LazyLoad>
      <Footer />
    </div>
  );
}

export default App;

//  {/* <a
//       className="twitter-timeline"
//       data-width="100"
//       data-theme="dark"
//       href="https://twitter.com/VeganWorksHQ?ref_src=twsrc%5Etfw"
//     >
//       Tweets by VeganWorksHQ
//     </a> */}
