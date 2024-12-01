export interface CryptoAsset {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}

export interface Position {
  symbol: string;
  amount: number;
  entryPrice: number;
  currentPrice: number;
}

export interface Portfolio {
  balance: number;
  positions: Position[];
}