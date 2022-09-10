import { TezosToolkit, WalletProvider } from '@taquito/taquito';
export type StoreType = {
  tezos?: TezosToolkit | null;
  wallet?: WalletProvider | null;
  address?: string;
  balance?: number;
  isConnected?: boolean;
  currentDao?: any;
};
export type ProfileInfoType = {
  name: string;
  desc: string;
  email: string;
  github: string;
  interest: string[];
  level1: string;
  level2: string;
  level3: string;
  skill1: string;
  skill2: string;
  skill3: string;
  twitter: string;
  website: string;
};
