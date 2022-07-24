import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import GlobalStyle from '../styles/globals/globalStyle.style';
import PageContainerWrapper from '../components/PageContainerWrapper/PageContainerWrapper';
import ServicingContext from "../context/context";
import DashBoard from "./Dashboard";

const Home = () => {
  const [show, setShowBackdrop] = useState(false);
  const value = { show, setShowBackdrop };
  const isMobile = () => {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
 }
 const [checkMobileDevice,setMobileDevice] = useState(isMobile());
 const isInStandaloneMode = () =>
      (window.matchMedia('(display-mode: standalone)').matches) ||
      (window.navigator.standalone) || document.referrer.includes('android-app://');

useEffect(()=>{
  setMobileDevice(isMobile() && isInStandaloneMode())
},[])
      
  return (
    <>
      <ServicingContext.Provider value={value}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name='application-name' content='My Digital Wallet' />
          <title>My Bookmark</title>
        </Head>
        {
          checkMobileDevice ? (
            <>
            <GlobalStyle />
            <PageContainerWrapper>
             <DashBoard />
            </PageContainerWrapper>
            </>
          ) : 
          <p>It's Support Mobile</p>
        }
      </ServicingContext.Provider>
    </>
  );
}

export default Home