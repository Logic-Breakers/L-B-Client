import Link from "next/link";
import { useState } from 'react';
import LoginSignUpModal from "../../Modals/LoginSignUpModal";
import NewsItem from "./items/NewsItem";
import BasicItem from "./items/BasicItem";
import CeilingBarItem from "./items/CeilingBarItem";

// 로그아웃 상태일 때 햄버거(bars) 버튼을 누르면 나타나는 메뉴 리스트
export default function MenuLogout() {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const openLoginModal = (event) => {
        event.stopPropagation();
        setShowLoginModal(true);
    }
    
    const closeLoginModal = () => {
        
        setShowLoginModal(false)
    }


    return (
        <>
            <div className='block absolute top-[120%] right-0 shadow-xx rounded-[15px] bg-[#fff] hover:cursor-default'>
                <ul  className={`flex flex-col justify-between text-left my-[8px] w-[250px] h-[235px]`}>
                    <NewsItem />

                    <li onClick={openLoginModal} className='px-[20px] py-[12px] hover:cursor-pointer hover:bg-gray-100'>
                        <span className={`font-[500]`}>
                            로그인
                        </span>
                    </li>

                    <li onClick={openLoginModal} className='px-[20px] py-[12px] text-[var(--menu-gray-color)] hover:cursor-pointer hover:bg-gray-100'>
                        <span className={`font-[500]`}>
                            회원 가입
                        </span>
                    </li>
                    
                    <Link href={'/host/homes'}>
                        <CeilingBarItem text={'당신의 공간을 에어비앤비하세요'}/>
                    </Link>
                    <Link href={'/help'}>
                        <BasicItem text={'도움말 센터'} font_color={'var(--menu-gray-color)'}/>
                    </Link>
                </ul>
            </div>
            {showLoginModal && <LoginSignUpModal closeLoginModal={closeLoginModal} />}
        </>
    )
}