import { ModelsHost } from '@constants/ModelsConfig';
import { memo, useEffect } from 'react';
import { Container } from './style';

function Home() {
  useEffect(() => {}, []);

  return (
    <Container className="flex flex-col">
      <img
        src={`${ModelsHost}tezCard.png`}
        className="w-1/2 m-auto justify-items-center justify-center"
      />
    </Container>
  );
}
export default memo(Home);
