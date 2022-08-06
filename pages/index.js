import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import GlobalStyle from '../styles/globals/globalStyle.style';
import PageContainerWrapper from '../components/PageContainerWrapper/PageContainerWrapper';
import ServicingContext from "../context/context";
import DashBoard from "./Dashboard";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

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
  setMobileDevice(isMobile() /*&& isInStandaloneMode()*/)
},[])
      
  return (
    <>
      <ServicingContext.Provider value={value}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name='application-name' content='My Digital Wallet' />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/> 
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Titillium+Web:wght@200&display=swap" rel="stylesheet"/> 
          <title>Tap Wallet</title>
        </Head>
        {
          checkMobileDevice ? (
            <>
            <GlobalStyle />
            <PageContainerWrapper>
             <DashBoard />
              <div style={{display: 'flex',
               justifyContent: 'center',
                boxShadow: 'rgb(128 128 128 / 21%) 2px -6px 4px 0px',
                position: 'absolute',
                width:' 100%',
                }}>
               <img src="images/add-text.png" style={{ width: '14%',marginTop: '-22px'}}/>
              </div>
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