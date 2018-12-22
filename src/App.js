import React, { useEffect, Suspense, lazy } from 'react';
import { default as styledLogs } from 'styled-logs';
import LazyLoad from 'react-lazyload';

import Logo from './components/Logo';

const SideBar = lazy(() => import('./components/SideBar'));
const Brands = lazy(() => import('./components/Brands'));
const Products = lazy(() => import('./components/Products'));
const CommunityMeter = lazy(() => import('./components/CommunityMeter'));
const Community = lazy(() => import('./components/Community'));
const Footer = lazy(() => import('./components/Footer'));
const SubscribeForm = lazy(() => import('./components/SubscribeForm'));

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
    // function chimp(c, h, i, m, p) {
    //   m = c.createElement(h);
    //   p = c.getElementsByTagName(h)[0];
    //   m.async = 1;
    //   m.src = i;
    //   p.parentNode.insertBefore(m, p);
    // }
    // chimp(
    //   document,
    //   'script',
    //   'https://chimpstatic.com/mcjs-connected/js/users/6cf9a8328459668743d132ab4/477fa833ad4737842edddfd52.js',
    // );

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
    return () => {
      document.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <LazyWrapper render={SideBar} />

      <Logo />
      <LazyWrapper render={SubscribeForm} />
      <LazyWrapper render={Products} />
      <LazyWrapper render={Brands} />
      <LazyWrapper render={Community} />
      <LazyWrapper render={CommunityMeter} />
      <LazyWrapper render={Footer} />
    </>
  );
}

export default App;
