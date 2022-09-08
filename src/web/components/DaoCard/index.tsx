import { Card } from './style';
const DaoCard = () => {
  return (
    <Card className="w-540 h-158 mb-20 flex justify-between rounded-[14px] bg-[#fff]">
      <div className="w-140 h-full rounded-tl-[14px] rounded-bl-[14px] bg-[#f69]"></div>
      <div className="grow h-full pt-24 rounded-tr-[14px] rounded-br-[14px]">
        <div className="flex justify-between ml-30 mr-30">
          <div className="w-160 h-24 leading-[24px] text-[20px] font-bold">Dex</div>
          <div className="w-120 h-24 leading-[24px] text-[14px] text-[#667085] text-right">001</div>
        </div>
        <div className="flex mt-30 ml-30">
          <div className="w-110 h-58 mr-10 flex flex-col justify-between">
            <div className="h-24 text-[16px] text-[#101828] font-bold">Dao Role</div>
            <div className="h-28 text-[14px] text-[#667085]">DAO Manager</div>
          </div>
          <div className="w-110 h-58 mr-10 flex flex-col justify-between">
            <div className="h-24 text-[16px] text-[#101828] font-bold">Started at</div>
            <div className="h-28 text-[14px] text-[#667085]">2022.07.01</div>
          </div>
          <div className="w-110 h-58 flex flex-col justify-between">
            <div className="h-24 text-[16px] text-[#101828] font-bold">Members</div>
            <div className="h-28 text-[14px] text-[#667085]">230</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default DaoCard;
