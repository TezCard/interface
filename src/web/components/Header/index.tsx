import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuRouteConfig, MenuRouteConfigType } from '@constants/MenuRouteConfig';
import Button from '@mui/material/Button';
import { TopHeader, Slogan, RightBtn, walletButtonStyle, Content } from './style';
import { ReactSVG } from 'react-svg';
import { NetworkType, BeaconEvent, defaultEventCallbacks } from '@airgap/beacon-sdk';
import ConnectWallet from '@components/ConnectWallet';
import { TezosToolkit, WalletProvider } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { useAtom } from 'jotai';
import { store } from '@store/jotaiStore';

import { StoreType } from '@type/index';

const Header = () => {
  const [obj, setObj] = useAtom<StoreType>(store);

  useEffect(() => {
    (async () => {
      const options = {
        name: 'MyAwesomeDapp',
        iconUrl: 'https://tezostaquito.io/img/favicon.svg',
        preferredNetwork: 'mainnet',
        disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
        eventHandlers: {
          [BeaconEvent.PAIR_INIT]: {
            handler: defaultEventCallbacks.PAIR_INIT,
          },
          PERMISSION_REQUEST_SUCCESS: {
            handler: async data => {
              console.log('permission data:', data);
            },
          },
        },
      };
      // create a new wallet instance
      const wallet = new BeaconWallet(options);
      // create a new TezosToolkit instance
      const tezos = new TezosToolkit('https://api.tez.ie/rpc/mainnet');
      setObj((draft: StoreType) => {
        draft.wallet = wallet;
        draft.tezos = tezos;
      });
      // check if the user has already paired their wallet
      const activeAccount = await wallet.client.getActiveAccount();
      if (activeAccount) {
        setObj((draft: StoreType) => {
          draft.address = activeAccount.address;
          draft.isConnected = true;
        });
      }
    })();
  }, []);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(MenuRouteConfig['0'].route);
  };
  const handleConnectWallet = async () => {
    const { wallet, tezos, isConnected, address } = obj;
    if (isConnected) {
      alert('Already connected');
      // console.log(
      //   'wallet',
      //   tezos.rpc
      //     .getBalance(address)
      //     .then(balance => console.log(`${balance.toNumber() / 1000000} ꜩ`))
      //     .catch(error => console.log(JSON.stringify(error)))
      // );
      return;
    }
    // connects the wallet to the Tezos network
    await wallet.requestPermissions({
      network: {
        type: 'mainnet',
      },
    });
    const userAddress = await wallet.getPKH();
    setObj((draft: StoreType) => {
      draft.address = userAddress;
      draft.isConnected = true;
    });
    console.log('wallet', wallet);
    // set zhe wallet and tezos instance to the TezosToolkit instance
    tezos.setWalletProvider(wallet);
    tezos.setProvider({ wallet });
    tezos.rpc
      .getBalance(userAddress)
      .then(balance => console.log(`${balance.toNumber() / 1000000} ꜩ`))
      .catch(error => console.log(JSON.stringify(error)));
  };
  return (
    <TopHeader>
      <Content>
        <Slogan onClick={handleHome}></Slogan>
        <RightBtn>
          <ReactSVG
            beforeInjection={svg => {
              svg.setAttribute('style', 'width: 20px');
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            httpRequestWithCredentials={true}
            loading={() => <span>Loading</span>}
            onClick={() => {
              console.log('wrapper onClick');
            }}
            renumerateIRIElements={false}
            src="public/twitter.svg"
            useRequestCache={false}
            wrapper="span"
          />
          <ReactSVG
            beforeInjection={svg => {
              svg.setAttribute('style', 'width: 20px');
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            httpRequestWithCredentials={true}
            loading={() => <span>Loading</span>}
            onClick={() => {
              console.log('wrapper onClick');
            }}
            renumerateIRIElements={false}
            src="public/discord.svg"
            useRequestCache={false}
            wrapper="span"
          />
          <ConnectWallet onConnect={handleConnectWallet} />
        </RightBtn>
      </Content>
    </TopHeader>
  );
};
export default Header;
