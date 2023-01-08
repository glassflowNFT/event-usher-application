import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Home from './components/Home'
import Connect from './components/Connect'
import Drop from './components/Drop'
import Mint from './components/Mint'
import Scan from './components/Scan'
import Fourohfour from './components/Fourohfour'
import Results from './components/Results'
import VotingCategories from "./components/VotingCategories";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Vote from "./components/Vote";
import AllImages from "./components/AllImages"
import { ChakraProvider } from '@chakra-ui/react';
import { ChainProvider, WalletProvider, useW } from '@cosmos-kit/react';
import { chains, assets, ibc } from 'chain-registry';
import { wallets as keplrWallets } from '@cosmos-kit/keplr';
import { createLocalStorageManager } from "@chakra-ui/react";



function App() {

  return (
    <ChakraProvider
      /* theme={defaultThemeWithoutCSSReset}  */
      resetCSS={true}
      colorModeManager={createLocalStorageManager('chakra-ui-color-mode')}>
      <WalletProvider
        chains={[...chains]}
        assetLists={[...assets]}
        wallets={[...keplrWallets]}
      >
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Connect' element={<Connect />}></Route>
            <Route path='/Drop' element={<Drop />}></Route>
            <Route path='/Mint' element={<Mint />}></Route>
            <Route path='/Scan' element={<Scan />}></Route>
            <Route path='/404' element={<Fourohfour />}></Route>
            <Route path='/Voting-Categories' element={<VotingCategories />}></Route>
            <Route path='/Page-1' element={<Page1 />}></Route>
            <Route path='/Page-2' element={<Page2 />}></Route>
            <Route path='/Page-3' element={<Page3 />}></Route>
            <Route path='/Vote/:category/:id/:src' element={<Vote />}></Route>
            <Route path='/Browse' element={<AllImages />}></Route>
            <Route path='/Results' element={<Results />}></Route>
          </Routes>
        </Router>
      </WalletProvider>
    </ChakraProvider>
  );
}

export default App;
