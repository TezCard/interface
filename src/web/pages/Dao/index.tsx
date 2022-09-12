import { memo, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { store } from '@store/jotaiStore';
import { useAtom } from 'jotai';
import ContentTabs from './Tabs';

import {
  Container,
  DaoInfo,
  LeftInfo,
  RightInfo,
  DaoLogo,
  EditBtn,
  DaoName,
  DaoDesc,
  BottomBtn,
  DaoTabs,
} from './style';
import { ReactSVG } from 'react-svg';
import Header from '@components/Header';

function Home() {
  const [obj, setObj] = useAtom(store);
  const { currentDao } = obj;
  useEffect(() => {}, []);

  const renderLeftInfo = () => {
    return (
      <LeftInfo className="w-152 h-full flex flex-col justify-between items-center">
        <DaoLogo className="w-152 h-152"></DaoLogo>
        <EditBtn className="w-50 h-32 text-center text-[14px] leading-[32px]">Edit</EditBtn>
      </LeftInfo>
    );
  };

  const renderRightInfo = () => {
    return (
      <RightInfo className="w-full pl-48">
        <DaoName className="h-44 leading-[44px] mt-40 mb-10 text-[32px] text-[#101828]">
          {currentDao.name}
        </DaoName>
        <DaoDesc className="h-24 leading-[24px] text-[16px] text-[#667085]">
          {currentDao.desc}
        </DaoDesc>
        <BottomBtn className="h-20 mt-70 leading-[20px] flex flex-row">
          <ReactSVG
            beforeInjection={svg => {
              svg.setAttribute('style', 'width: 20px; margin-right: 44px;');
            }}
            evalScripts="always"
            fallback={() => <span>Error!</span>}
            httpRequestWithCredentials={true}
            loading={() => <span>Loading</span>}
            onClick={() => {
              console.log('wrapper onClick');
            }}
            renumerateIRIElements={false}
            src="public/global.svg"
            useRequestCache={false}
            wrapper="span"
          />
          <ReactSVG
            beforeInjection={svg => {
              svg.setAttribute('style', 'width: 20px; margin-right: 44px;');
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
        </BottomBtn>
      </RightInfo>
    );
  };

  return (
    <>
      <Header />
      <Container className="w-1280 m-auto mt-80">
        <DaoInfo className="h-207 flex">
          {renderLeftInfo()}
          {renderRightInfo()}
        </DaoInfo>
        <ContentTabs />
      </Container>
    </>
  );
}
export default memo(Home);
