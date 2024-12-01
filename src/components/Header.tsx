import React from 'react';
import { Wallet } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wallet className="w-8 h-8" />
          <h1 className="text-2xl font-bold">CryptoTrade Simulator</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-indigo-200 transition-colors">Dashboard</a>
          <a href="#" className="hover:text-indigo-200 transition-colors">Trade</a>
          <a href="#" className="hover:text-indigo-200 transition-colors">Portfolio</a>
        </nav>
      </div>
    </header>
  );
}