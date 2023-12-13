import Link from "next/link";

// 로그아웃 상태일 때 햄버거(bars) 버튼을 누르면 나타나는 메뉴 리스트
export default function MenuLogout() {
    return (
        <div className='block absolute top-[120%] right-0 shadow-lg rounded-[15px] border-[1px] border-solid border-[#DDDDDD] bg-[#fff] hover:cursor-default'>
            <ul className={`my-[8px] w-[250px] h-[235px] scroll flex-col justify-between text-left`}>
                <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100 border-b-[1px] border-solid border-[#DDDDDD] font-[500]'>
                    <span>
                        겨울 업그레이드 기능
                    </span>
                    <span className='text-[12px] bg-[#e52448] text-white px-[6px] py-[1px] ml-[8px] rounded-[4px]'>
                        새소식
                    </span>
                </li>
                <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                    <span className='font-[500]'>
                        로그인
                    </span>
                </li>
                <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                    <span className='text-[#5e5e5e]'>
                        회원 가입
                    </span>
                </li>
                <Link href='/host/homes'>
                    <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100 border-t-[1px] border-solid border-[#DDDDDD]'>
                        <span className='text-[#5e5e5e]'>
                            당신의 공간을 에어비앤비하세요
                        </span>
                    </li>
                </Link>
                <Link href='/help'>
                    <li className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                        <span className='text-[#5e5e5e]'>
                            도움말 센터
                        </span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}