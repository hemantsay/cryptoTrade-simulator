import React, { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';

export function TradeForm() {
  const [amount, setAmount] = useState('');
  const [symbol, setSymbol] = useState('BTC');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle trade execution here
    console.log('Trade submitted:', { symbol, amount });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <ArrowRightLeft className="w-5 h-5 mr-2 text-indigo-600" />
        <h2 className="text-xl font-semibold">New Trade</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Asset
          </label>
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="SOL">Solana (SOL)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (USD)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Buy
          </button>
          <button
            type="submit"
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Sell
          </button>
        </div>
      </form>
    </div>
  );
}