import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import { useState, useEffect, useRef } from 'react';

import MenuLogin from './Menu/MenuLogin';
import MenuLogout from './Menu/MenuLogout';
import LoginSignUpModal from '../Modals/LoginSignUpModal';

// 새소식 버튼 누르면 새소식 모달창
// 로그인 버튼 누르면 로그인 모달창
// 회원가입 버튼 누르면 회원가입 모달창
// 메뉴바를 제외한 부분을 클릭하면 메뉴바가 닫히도록 구현하기

export default function ProfileBtn() {
    const [showMenu, setShowMenu] = useState(false);

    const menuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const closeMenu = (event) => {
        setShowMenu(false);
    }

    // 메뉴바 이외의 부분 클릭 시 메뉴바 닫히는 코드
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeMenu();
        }
      };
    
      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, [showMenu]);

    return (
        <div>
            <div onClick={toggleMenu} ref={menuRef} className={`border-[1px] border-solid border-[#DDDDDD] ml-[4px] pl-[14px] pr-[8px] flex flex-row justify-center items-center cursor-pointer rounded-[40px] hover:shadow-md ${showMenu ? 'shadow-md relative' : ''}`}>
                <div className='text-[16px] mr-[14px]'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                    <div className='text-[32px]'>
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
                {/* 비로그인 상태일 때 */}
                {/* 로그인 기능을 만들면 비로그인 때만 보이도록 조건 추가하기 */}
                {showMenu && <MenuLogout />}

                {/* 로그인 상태일 때 */}
                {/* 로그인 기능을 만들면 로그인일 때만 보이도록 조건 추가하기 */}
                {/* {showMenu && <MenuLogin />} */}
            </div>
        </div>
    )
}