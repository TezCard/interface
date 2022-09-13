import DaoListsCard from '@components/DaoListCard';
import Header from '@components/Header';
import { useImmer } from '@hooks/useImmer';
import TextField from '@mui/material/TextField';
import { Container, Search, DaoListsContainer } from './style';

const DaoLists = () => {
  const [list, setList] = useImmer({
    data: [
      { name: 'dao1' },
      { name: 'dao2' },
      { name: 'dao3' },
      { name: 'dao4' },
      { name: 'dao5' },
      { name: 'dao6' },
    ],
  });
  return (
    <>
      <Header />
      <Container className="w-1274 m-auto">
        <Search className="mt-70 w-685 h-54 mb-70 m-auto">
          <TextField
            className="w-full"
            // required
            id="outlined-required"
            label="Search"
            // defaultValue="Hello World"
            placeholder="Search"
          />
        </Search>
        <DaoListsContainer className="flex flex-wrap justify-between">
          {list.data.map((item, index) => (
            <DaoListsCard key={item.name} index={index} item={item} />
          ))}
        </DaoListsContainer>
      </Container>
    </>
  );
};

export default DaoLists;
