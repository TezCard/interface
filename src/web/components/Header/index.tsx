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
// import { TempleWallet } from '@temple-wallet/dapp';
import { getCurretnRoute } from '@utils/getCurrentRoute';
import * as IPFS from 'ipfs-core';
// import { create } from 'ipfs-http-client';
import { useAtom } from 'jotai';
import { store } from '@store/jotaiStore';
import { StoreType } from '@type/index';
import { useImmer } from '@hooks/useImmer';
const Header = () => {
  const [obj, setObj] = useAtom<StoreType>(store);
  const [currRoute] = useImmer<string>(getCurretnRoute());
  useEffect(() => {
    const { wallet, tezos } = obj;
    (async () => {
      const options = {
        name: 'MyAwesomeDapp',
        iconUrl: 'https://tezostaquito.io/img/favicon.svg',
        preferredNetwork: NetworkType.MAINNET, //'mainnet',
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
      // check if the user has already paired their wallet
      // This code should be called every time the page is loaded or refreshed to see if the user has already connected to a wallet.
      const activeAccount = await wallet?.client?.getActiveAccount();
      console.log('activeAccount', activeAccount, wallet);
      if (activeAccount) {
        if (activeAccount.address !== obj.address) {
          setObj((draft: StoreType) => {
            draft.address = activeAccount.address;
            draft.isConnected = true;
          });
        }
        return;
      } else {
        // create a new wallet instance
        const walletInstance: BeaconWallet = wallet ? wallet : new BeaconWallet(options);
        // create a new TezosToolkit instance
        // const tezos = new TezosToolkit('https://api.tez.ie/rpc/mainnet');
        const newTezos: TezosToolkit = tezos
          ? tezos
          : new TezosToolkit('https://mainnet-tezos.giganode.io');

        const acAccount = await walletInstance?.client?.getActiveAccount();
        if (acAccount) {
          setObj((draft: StoreType) => {
            draft.wallet = walletInstance;
            draft.tezos = newTezos;
            draft.address = acAccount.address;
            draft.isConnected = true;
          });
        } else {
          setObj((draft: StoreType) => {
            draft.wallet = walletInstance;
            draft.tezos = newTezos;
          });
        }
      }
    })();
  }, []);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(MenuRouteConfig['0'].route);
  };
  const handleConnectWallet = async () => {
    const { wallet, tezos, isConnected } = obj;
    if (wallet === undefined && tezos === undefined) {
      return;
    }
    if (isConnected) {
      if (getCurretnRoute() === MenuRouteConfig.profile.route) {
        return;
      } else {
        // route to profile page
        navigate(MenuRouteConfig.profile.route);
        return;
      }
    }
    // connects the wallet to the Tezos network
    await wallet?.requestPermissions();
    const userAddress = await wallet?.getPKH();
    setObj((draft: StoreType) => {
      draft.address = userAddress;
      draft.isConnected = true;
    });
    // set zhe wallet and tezos instance to the TezosToolkit instance
    tezos?.setWalletProvider(wallet);
    tezos?.setProvider({ wallet });
    tezos?.rpc
      .getBalance(userAddress as string)
      .then(balance => console.log(`${balance.toNumber() / 1000000} ꜩ`))
      .catch(error => console.log(JSON.stringify(error)));
  };

  // const handleDisconnect = async () => {
  //   const { wallet, tezos } = obj;
  //   await wallet.clearActiveAccount();
  //   setObj((draft: StoreType) => {
  //     draft.address = '';
  //     draft.isConnected = false;
  //   });
  //   tezos.setWalletProvider({} as WalletProvider);
  //   console.log('disconnect ing');
  //   if (wallet) {
  //     await wallet.client.removeAllAccounts();
  //     await wallet.client.removeAllPeers();
  //     await wallet.client.destroy();
  //   }
  // };
  return (
    <TopHeader>
      <Content>
        <Slogan onClick={handleHome} className="cursor-pointer"></Slogan>
        <RightBtn>
          {currRoute === MenuRouteConfig['0'].route && <div className="w-146 h-36"></div>}
          <ReactSVG
            beforeInjection={svg => {
              svg.setAttribute('style', 'width: 20px');
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            httpRequestWithCredentials={true}
            loading={() => <span></span>}
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
            loading={() => <span></span>}
            onClick={() => {
              console.log('wrapper onClick');
            }}
            renumerateIRIElements={false}
            src="public/discord.svg"
            useRequestCache={false}
            wrapper="span"
          />

          {currRoute !== MenuRouteConfig['0'].route && (
            <ConnectWallet onConnect={handleConnectWallet} />
          )}
          {/* <div onClick={handleDisconnect}>disconnect</div> */}
        </RightBtn>
      </Content>
    </TopHeader>
  );
};
export default Header;
