import HeaderBasic from '@/components/Header/HeaderBasic';
import MainHeader from '@/components/Header/MainHeader';
import MainItems from '@/components/items/MainItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import Nav from '@/components/Header/Nav/Nav';
import MainNav from '@/components/Header/Nav/MainMenu/MainNav';

export default function Home() {
  return (
    <div className=' mx-24'>
      {/* <MainHeader /> */}
      {/* <HeaderBasic/> */}
      <div className="flex justify-center items-center font-bold h-[5rem] text-xl border-[1px] border-b-gray-200 underline">
        에어비앤비에서 사랑받고 있는 &rsquo;게스트 선호숙소&lsquo;에 대해 알아보기
      </div>
      <div className="flex flex-row justify-between items-center gap-[4px] text-[var(--brand-color)] font-[600]">
        <span>
          <span className="text-[36px]">
            <FontAwesomeIcon icon={faAirbnb} />
          </span>
          <span className="text-[24px] font-[600]">airbnb</span>
        </span>
        <span className=" text-black">
          <Nav />
        </span>
      </div>
      <MainNav/>
      <MainItems />
    </div>
  );
}
