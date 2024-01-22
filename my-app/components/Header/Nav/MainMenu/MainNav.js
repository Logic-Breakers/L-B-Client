import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import {faSliders} from '@fortawesome/free-solid-svg-icons'

export default function MainNav() {
  const userFilter = [
    '열대지역',
    '디자인',
    'B&B',
    '세상의 꼭대기',
    '신규',
    '최고의 전망',
    '한적한 시골',
    '방',
    '캠핑장',
    '해변 바로 앞',
    '한옥',
    '멋진 수영장',
    '국립공원',
    '통나무집',
    '농장',
    '인기 급상승',
    '초소형 주택',
    '사막',
  ];
  return (
    <div className="flex">
      <div className="flex justify-around w-full">
        {userFilter.map((item) => (
          <div key={1} className="flex flex-col mt-4 cursor-pointer mb-5">
            <FontAwesomeIcon icon={faImage} size="2x" />
            {item}
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="flex items-center mx-2 cursor-pointer">
          <FontAwesomeIcon icon={faCircleRight} size="2x" />
        </div>
        <div className='flex items-center ml-4'>
          <div className="flex justify-between border-2 items-center border-gray-400 rounded-md w-[6.5rem] h-14 px-4">
          <FontAwesomeIcon icon={faSliders} size='2x' />필터</div>
        </div>
      </div>
    </div>
  );
}
