import { memo, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Container, Content, Slogan, SloganDesc, getStartBtn, DownLoadDeck } from './style';

function Home() {
  useEffect(() => {}, []);

  return (
    <Container className="flex flex-col justify-center items-center w-full">
      <Content className="w-full h-264 flex flex-col justify-between items-center">
        <Slogan className="text-[72px] text-center">Be the Soul of DAO</Slogan>
        <SloganDesc className="text-[24px] text-center mb-20">a toolbox of DAO</SloganDesc>
        <Button
          className="w-190 h-68 text-center leading-[68px] text-[16px] mb-20"
          style={getStartBtn}
        >
          GET STARTED
        </Button>
        <DownLoadDeck href="" className="w-274 h-40 text-center text-[16px] leading-[40px]">
          (Download the latest PDF Pitch Deck)
        </DownLoadDeck>
      </Content>
    </Container>
  );
}
export default memo(Home);
