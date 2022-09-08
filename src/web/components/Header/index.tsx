import { useNavigate } from 'react-router-dom';
import { MenuRouteConfig, MenuRouteConfigType } from '@constants/MenuRouteConfig';
import Button from '@mui/material/Button';
import { TopHeader, Slogan, RightBtn, walletButtonStyle, Content } from './style';
import { ReactSVG } from 'react-svg';

const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(MenuRouteConfig['0'].route);
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
          <Button className="w-146 h-36" variant="contained" style={walletButtonStyle}>
            Collect Wallet
          </Button>
        </RightBtn>
      </Content>
    </TopHeader>
  );
};
export default Header;
