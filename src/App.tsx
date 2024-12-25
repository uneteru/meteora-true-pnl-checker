import React from 'react';
import './App.css';
import { SolanaWalletProvider } from './components/Wallet';
import { SolanaConnect } from './components/WalletButton';

function App() {
  return (
    <SolanaWalletProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meteora True PNL Checker</h1>
          <SolanaConnect />
          <p className="App-description">
            Welcome to the Meteora True PNL Checker for Solana. 
            Monitor and analyze your liquidity pool positions with precision.
          </p>
        </header>
        <div className="creator-credit">
          Created by <a href="https://x.com/uneteru7788" target="_blank" rel="noopener noreferrer">uneteru</a>
        </div>
      </div>
    </SolanaWalletProvider>
  );
}

export default App;
