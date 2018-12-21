import React, { useEffect, Suspense, lazy } from 'react';
import { default as styledLogs } from 'styled-logs';
import LazyLoad from 'react-lazyload';

// Sections
import Logo from './components/Logo';
// import Brands from './components/Brands';
// import Products from './components/Products';
// import Community from './components/Community';
// import Footer from './components/Footer';

const Brands = lazy(() => import('./components/Brands'));
const Products = lazy(() => import('./components/Products'));
const CommunityMeter = lazy(() => import('./components/CommunityMeter'));
const Community = lazy(() => import('./components/Community'));
const Footer = lazy(() => import('./components/Footer'));

function LazyWrapper(props) {
  return (
    <LazyLoad offset={100}>
      <Suspense fallback={<div>Loading...</div>}>{props.children}</Suspense>
    </LazyLoad>
  );
}

function App() {
  useEffect(() => {
    document.title = 'Home | VeganWorks';
    const Log = styledLogs.log`
      background: url('https://res.cloudinary.com/gojutin/image/upload/f_auto/v1545163193/veganworks/veganworks-logo.png')
        no-repeat center center;
      background-size: contain;
      padding: 10px;
      margin: 10px auto;
      text-align: center;
      font: 700 80px 'Alice';
    `;
    Log`                                                           `;
  }, []);

  return (
    <>
      <Logo />
      <LazyWrapper>
        <Products />
      </LazyWrapper>

      <LazyWrapper>
        <Brands />
      </LazyWrapper>
      <LazyWrapper>
        <Community />
      </LazyWrapper>
      <LazyWrapper>
        <CommunityMeter />
      </LazyWrapper>
      <LazyWrapper>
        <Footer />
      </LazyWrapper>
    </>
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
