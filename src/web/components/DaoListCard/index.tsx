import { MenuRouteConfig } from '@constants/MenuRouteConfig';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { store } from '@store/jotaiStore';
import { Card, TopArea, BottomArea, Avatar, DaoName } from './style';

const topAreaBgColorStyleConfig = [
  { background: '-webkit-linear-gradient(left, #FDF5F5, #FDE6EC)' },
  { background: '-webkit-linear-gradient(left, #4AE5DE, #637DF3)' },
  { background: '-webkit-linear-gradient(left, #BDF3CD, #BDF3CD)' },
];
const avatarStyle = {
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
};

const DaoListsCard = props => {
  const { index } = props;
  const navigate = useNavigate();

  const topAreaBgColorStyle = topAreaBgColorStyleConfig[index % 3];
  const handleGoDaoDetail = () => {
    navigate(MenuRouteConfig?.dao?.route);
  };
  return (
    <Card
      className="w-404 h-450 mb-30 bg-[#fff] rounded-[14px] relative cursor-pointer"
      onClick={handleGoDaoDetail}
    >
      <TopArea
        className="h-136 rounded-tl-[14px] rounded-tr-[14px]"
        style={topAreaBgColorStyle}
      ></TopArea>
      <BottomArea className="h-314 rounded-bl-[14px] rounded-br-[14px]">
        <DaoName className="w-350 h-24 leading-[24px] text-[18px] text-[#101828] text-center m-auto bg-[#f87] mt-60">
          Dao 1
        </DaoName>
      </BottomArea>
      <Avatar
        className="w-86 h-86 bg-[#f80] rounded-[43px] absolute top-95 left-159"
        style={avatarStyle}
      ></Avatar>
    </Card>
  );
};
export default DaoListsCard;
