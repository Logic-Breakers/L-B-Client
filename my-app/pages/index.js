import MainItems from '@/components/items/MainItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Nav from '@/components/Header/Nav/Nav';
import MainNav from '@/components/Header/Nav/MainMenu/MainNav';

export default function Home() {
  return (
    <div className=" mx-24">
      <div className="flex justify-center items-center font-bold h-[5rem] text-xl border-[1px] border-b-gray-200 underline">
        에어비앤비에서 사랑받고 있는 &rsquo;게스트 선호숙소&lsquo;에 대해 알아보기
      </div>
      <div className="flex flex-row justify-between items-center gap-[4px] text-[var(--brand-color)] font-[600]">
        <span>
          <span className="text-[48px]">
            <FontAwesomeIcon icon={faAirbnb} />
          </span>
          <span className="text-[28px] font-[600]"> airbnb</span>
        </span>
        <div className="flex justify-between w-[16rem] text-black text-xl">
          <button>숙소</button>
          <button>체험</button>
          <button>온라인 체험</button>
        </div>
        <span className=" text-black">
          <Nav />
        </span>
      </div>
      <div className="flex justify-center items-center h-40">
        <div className="flex border-2 border-gray-400 w-[60rem] rounded-full h-20">
          <div className="flex w-[22rem] items-center">
            <button className="flex flex-col border-r-2 border-gray-400 px-12 w-full">
              <div>여행지</div>
              <div className="text-gray-400">여행지 검색</div>
            </button>
          </div>
          <div className="flex justify-between items-center w-[20rem]">
            <div className='border-r-2 border-gray-400 w-[10rem] px-6'>
              <div>체크인</div>
              <div className="text-gray-400">날짜 추가</div>
            </div>
            <div className='border-r-2 border-gray-400 w-[10rem] px-6'>
              <div>체크아웃</div>
              <div className="text-gray-400">날짜 추가</div>
            </div>
          </div>
          <div className="flex items-center w-[13rem]">
            <div className='w-[12rem] px-[1rem]'>
              <div>여행자</div>
              <div className="text-gray-400">게스트 추가</div>
            </div>
          </div>
          <div className='flex items-center w-14 px-4'>
          <FontAwesomeIcon icon={faMagnifyingGlass} size='3x' />
          </div>
        </div>
      </div>
      <MainNav />
      <MainItems />
    </div>
  );
}
