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
import {
  WalletManagerProvider,
  ChainInfoID,
  WalletType,
} from "@xiti/cosmodal"

function App() {
  const LOCAL_STORAGE_KEY = "connectedWalletId"


  return (
    <ChakraProvider >
       <WalletManagerProvider
    enabledWalletTypes={[WalletType.Keplr, WalletType.WalletConnectKeplr]}
    defaultChainId={ChainInfoID.Juno1}
    localStorageKey={LOCAL_STORAGE_KEY}
    walletConnectClientMeta={{
      name: "CosmodalExampleDAPP",
      description: "A dapp using the cosmodal library.",
      url: "https://cosmodal.example.app",
      icons: ["https://cosmodal.example.app/walletconnect.png"],
    }}
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
    </WalletManagerProvider>
    </ChakraProvider>
  );
}

export default App;
