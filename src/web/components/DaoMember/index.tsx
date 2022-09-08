import { useNavigate } from 'react-router-dom';
import { MenuRouteConfig, MenuRouteConfigType } from '@constants/MenuRouteConfig';
import Button from '@mui/material/Button';
import {
  Container,
  MemberInfo,
  Skills,
  BottomBtn,
  LeftAvatar,
  RightInfo,
  Name,
  Tags,
  TagItem,
  SkillItem,
} from './style';
import { ReactSVG } from 'react-svg';
import NormalTag from '@components/NormalTag';
export type ItemTypt = 'Builder' | 'Core' | 'Inversor' | 'Project Manager';
const tags: ItemTypt[] = ['Builder', 'Core', 'Inversor', 'Project Manager'];
const skills = ['UI Design', 'PM', 'Frontend'];
const members = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const DaoMember = () => {
  const renderSkills = (item, index: number) => {
    const bgColor = index % 2 === 0 ? 'bg-[#55A3FF]' : 'bg-[#13D6E2]';
    return (
      <SkillItem
        key={item}
        className={`h-25 px-12 leading-[25px] rounded-[2px] mb-4 mr-6 text-[14px] text-[#EFF4FB] ${bgColor}`}
      >
        {item}
      </SkillItem>
    );
  };
  return (
    <div className="w-full flex flex-wrap justify-between">
      {members.map((item, index) => {
        return (
          <Container key={`member-${index}`} className="w-411 h-290 px-32 mb-20 py-26 pr-0">
            <MemberInfo className="w-full h-96 flex flex-row justify-between">
              <LeftAvatar className="w-80 h-80 bg-[#f60]"></LeftAvatar>
              <RightInfo className="w-250">
                <Name className="h-44 leading-[44px] text-[20px] text-[#101828] font-bold">
                  Wang Teng
                </Name>
                <Tags>
                  {tags.map(i => (
                    <NormalTag item={i} />
                  ))}
                </Tags>
              </RightInfo>
            </MemberInfo>
            <Skills className="h-50 mt-30 mb-24">
              <div className="h25 leading-[25px] text-[16px] text-[#101828] font-bold">Skills</div>
              {skills.map((item, index) => renderSkills(item, index))}
            </Skills>
            <BottomBtn className="flex">
              <ReactSVG
                beforeInjection={svg => {
                  svg.setAttribute('style', 'width: 20px; margin-right: 10px;');
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
                  svg.setAttribute('style', 'width: 20px; margin-right: 10px;');
                }}
                evalScripts="always"
                fallback={() => <span>Error!</span>}
                httpRequestWithCredentials={true}
                loading={() => <span>Loading</span>}
                onClick={() => {
                  console.log('wrapper onClick');
                }}
                renumerateIRIElements={false}
                src="public/email.svg"
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
                src="public/weChat.svg"
                useRequestCache={false}
                wrapper="span"
              />
            </BottomBtn>
          </Container>
        );
      })}
    </div>
  );
};
export default DaoMember;
