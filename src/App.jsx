import React from "react";
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {
  WalletManagerProvider,
  ChainInfoID,
  WalletType,
} from "@xiti/cosmodal"
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

 

function App() {
  return (
    <ChakraProvider>
    <WalletManagerProvider defaultChainId={ChainInfoID.Juno1}
    enabledWalletTypes={[WalletType.Keplr, WalletType.WalletConnectKeplr]}
    walletConnectClientMeta={{
      name: "CosmodalExampleDAPP",
      description: "A dapp using the cosmodal library.",
      url: "https://cosmodal.example.app",
      icons: ["https://cosmodal.example.app/walletconnect.png"],
    }}>
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
        <Route path='/Voting-Entries-Water-Hashish' element={<VotingEntriesWater />}></Route>
        <Route path='/Voting-Entries-Rosin' element={<VotingEntriesRosin />}></Route>
        <Route path='/Voting-Entries-Dry-Sift' element={<VotingEntriesDry />}></Route>
        <Route path='/Vote' element={<Vote />}></Route>
      </Routes>
    </Router>
    </WalletManagerProvider>
    </ChakraProvider>
  );
}

export default App;
