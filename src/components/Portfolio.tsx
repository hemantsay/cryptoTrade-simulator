import React from 'react';
import { Portfolio as PortfolioType } from '../types/trading';
import { formatCurrency } from '../utils/formatters';

const mockPortfolio: PortfolioType = {
  balance: 100000,
  positions: [
    { symbol: 'BTC', amount: 0.5, entryPrice: 60000, currentPrice: 65000 },
    { symbol: 'ETH', amount: 2, entryPrice: 3600, currentPrice: 3500 },
  ],
};

export function Portfolio() {
  const calculatePnL = (position: PortfolioType['positions'][0]) => {
    return (position.currentPrice - position.entryPrice) * position.amount;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Your Portfolio</h2>
      <div className="mb-6">
        <span className="text-gray-600">Available Balance</span>
        <div className="text-2xl font-bold">{formatCurrency(mockPortfolio.balance)}</div>
      </div>
      
      <h3 className="font-medium mb-3">Positions</h3>
      <div className="space-y-4">
        {mockPortfolio.positions.map((position) => {
          const pnl = calculatePnL(position);
          return (
            <div key={position.symbol} className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{position.symbol}</span>
                <span className={pnl >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {formatCurrency(pnl)}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Amount</span>
                  <span>{position.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Entry Price</span>
                  <span>{formatCurrency(position.entryPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Current Price</span>
                  <span>{formatCurrency(position.currentPrice)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}