import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
class ConnectWallet {
  public wallet;

  public tezos;

  constructor() {
    this.wallet = new BeaconWallet({
      name: 'My dApp',
      preferredNetwork: 'mainnet',
    });
    this.tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');
    this.tezos.setWalletProvider(this.wallet);
  }
}
