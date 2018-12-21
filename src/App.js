import React, { useEffect, Suspense, lazy } from 'react';
import { default as styledLogs } from 'styled-logs';
import LazyLoad from 'react-lazyload';

import Logo from './components/Logo';
import SideBar from './components/SideBar';

const Brands = lazy(() => import('./components/Brands'));
const Products = lazy(() => import('./components/Products'));
const CommunityMeter = lazy(() => import('./components/CommunityMeter'));
const Community = lazy(() => import('./components/Community'));
const Footer = lazy(() => import('./components/Footer'));

function LazyWrapper({ render: Render }) {
  return (
    <LazyLoad offset={100}>
      <Suspense fallback={<div>Loading...</div>}>
        <Render />
      </Suspense>
    </LazyLoad>
  );
}

function App() {
  useEffect(() => {
    function chimp(c, h, i, m, p) {
      m = c.createElement(h);
      p = c.getElementsByTagName(h)[0];
      m.async = 1;
      m.src = i;
      p.parentNode.insertBefore(m, p);
    }
    chimp(
      document,
      'script',
      'https://chimpstatic.com/mcjs-connected/js/users/6cf9a8328459668743d132ab4/477fa833ad4737842edddfd52.js',
    );
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
    <div>
      <SideBar />
      <div id="overlay">
        <Logo />
        <LazyWrapper render={Products} />
        <LazyWrapper render={Brands} />
        <LazyWrapper render={Community} />
        <LazyWrapper render={CommunityMeter} />
        <LazyWrapper render={Footer} />
      </div>
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
