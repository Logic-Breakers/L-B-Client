import Link from "next/link";

// 로그인 상태일 때 햄버거(bars) 버튼을 누르면 나타나는 메뉴 리스트
export default function MenuLogin() {
    return (
        <div className='block absolute top-[120%] right-0 shadow-lg rounded-[15px] border-[1px] border-solid border-[#DDDDDD] bg-[#fff] hover:cursor-default'>
            <ul className={`my-[8px] w-[250px] h-[425px] scroll flex-col justify-between text-left`}>
                <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100 border-b-[1px] border-solid border-[#DDDDDD] font-[500]'>
                    <span>
                        겨울 업그레이드 기능
                    </span>
                    <span className='text-[12px] bg-[#e52448] text-white px-[6px] py-[1px] ml-[8px] rounded-[4px]'>
                        새소식
                    </span>
                </li>
                <Link href='/guest/inbox'>
                    <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                        <span className='font-[500]'>
                            메시지
                        </span>
                    </li>
                </Link>
                <Link href='/trips/v1'>
                    <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                        <span className='font-[500]'>
                            여행
                        </span>
                    </li>
                </Link>
                <Link href='/wishlists'>
                    <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                        <span className='font-500'>
                            위시리스트
                        </span>
                    </li>
                </Link>
                <Link href='/host/homes'>
                    <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100 border-t-[1px] border-solid border-[#DDDDDD]'>
                        <span className='text-[#5e5e5e]'>
                            당신의 공간을 에어비앤비하세요
                        </span>
                    </li>
                </Link>
                <Link href='/refer'>
                    <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                        <span className='text-[#5e5e5e]'>
                            호스트 추천하기
                        </span>
                    </li>
                </Link>
                <Link href='/account-settings'>
                    <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                        <span className='text-[#5e5e5e]'>
                            계정
                        </span>
                    </li>
                </Link>
                <Link href='/help'>
                    <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100 border-t-[1px] border-solid border-[#DDDDDD]'>
                        <span className='text-[#5e5e5e]'>
                            도움말 센터
                        </span>
                    </li>
                </Link>
                <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                    <span className='text-[#5e5e5e]'>
                        로그아웃
                    </span>
                </li>
            </ul>
        </div>
    )
}