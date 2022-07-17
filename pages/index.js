import { Fragment, useState } from "react";
import Head from 'next/head';
import GlobalStyle from '../styles/globals/globalStyle.style';
import PageContainerWrapper from '../components/PageContainerWrapper/PageContainerWrapper';
import ServicingContext from "../context/context";

export default function Home() {
  const [show, setShowBackdrop] = useState(false);
  const value = { show, setShowBackdrop };
  return (
    <>
      <ServicingContext.Provider value={value}>
        <Head>
          <meta name='manifest' content='/manifest.json' />
          <meta name='application-name' content='My Digital Wallet' />
          <title>My Bookmark</title>
        </Head>
        <GlobalStyle />
        <PageContainerWrapper>
          <p>Hello World</p>
        </PageContainerWrapper>
      </ServicingContext.Provider>
    </>
  );
}