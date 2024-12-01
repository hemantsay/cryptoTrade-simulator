import React from 'react';
import { Header } from './components/Header';
import { MarketOverview } from './components/MarketOverview';
import { Portfolio } from './components/Portfolio';
import { TradeForm } from './components/TradeForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MarketOverview />
            <div className="mt-6">
              <Portfolio />
            </div>
          </div>
          <div>
            <TradeForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;