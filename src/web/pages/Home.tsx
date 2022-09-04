import { ModelsHost } from '@constants/ModelsConfig';
import { memo, useEffect } from 'react';
import { Container, Slogan } from './style';

function Home() {
  useEffect(() => {}, []);

  return (
    <Container className="flex flex-col justify-center items-center">
      <img src={`${ModelsHost}tezCard.png`} className="w-1/2" />
      <Slogan className="text-[30px] pt-20"> Be the Soul of DAO</Slogan>
    </Container>
  );
}
export default memo(Home);
