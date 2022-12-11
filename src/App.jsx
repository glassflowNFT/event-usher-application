import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Home from './components/Home'
import Connect from './components/Connect'
import Mothership from './components/Mothership'
import Mint from './components/Mint'
import Scan from './components/Scan'
import Fourohfour from './components/Fourohfour'
import VotingCategories from "./components/VotingCategories";
import VotingEntriesWater from "./components/VotingEntriesWater";
import VotingEntriesRosin from "./components/VotingEntriesRosin";
import VotingEntriesDry from "./components/VotingEntriesDry";
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
        <Route path='/Mothership' element={<Mothership />}></Route>
        <Route path='/Mint' element={<Mint />}></Route>
        <Route path='/Scan' element={<Scan />}></Route>
        <Route path='/404' element={<Fourohfour />}></Route>
        <Route path='/Voting-Categories' element={<VotingCategories />}></Route>
        <Route path='/Voting-Entries-Melt' element={<VotingEntriesWater />}></Route>
        <Route path='/Voting-Entries-Rosin' element={<VotingEntriesRosin />}></Route>
        <Route path='/Voting-Entries-Sift' element={<VotingEntriesDry />}></Route>
        <Route path='/Vote/:category/:id' element={<Vote />}></Route>
        <Route path='/Browse' element={<AllImages />}></Route>
      </Routes>
    </Router>
    </WalletProvider>
    </ChakraProvider>
  );
}

export default App;
