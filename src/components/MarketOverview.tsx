import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoAsset } from '../types/trading';
import { formatCurrency, formatPercentage } from '../utils/formatters';

const mockAssets: CryptoAsset[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 65000, change24h: 2.5 },
  { symbol: 'ETH', name: 'Ethereum', price: 3500, change24h: -1.2 },
  { symbol: 'SOL', name: 'Solana', price: 120, change24h: 5.8 },
];

export function MarketOverview() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
      <div className="space-y-4">
        {mockAssets.map((asset) => (
          <div key={asset.symbol} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div>
              <h3 className="font-medium">{asset.name}</h3>
              <span className="text-sm text-gray-500">{asset.symbol}</span>
            </div>
            <div className="text-right">
              <div className="font-medium">{formatCurrency(asset.price)}</div>
              <div className={`flex items-center ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {asset.change24h >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                {formatPercentage(asset.change24h)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}