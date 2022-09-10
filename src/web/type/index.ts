import { TezosToolkit, WalletProvider } from '@taquito/taquito';
export type StoreType = {
  tezos?: TezosToolkit | null;
  wallet?: WalletProvider | null;
  address?: string;
  balance?: number;
  isConnected?: boolean;
};
