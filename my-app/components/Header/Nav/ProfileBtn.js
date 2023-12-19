import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import { useState, useEffect, useRef } from 'react';

import MenuLogin from './Menu/MenuLogin';
import MenuLogout from './Menu/MenuLogout';
import LoginModal from '../Modals/LoginModal';

// 지구본 버튼 누르면 언어, 통화 변경할 수 있는 모달창

// 새소식 버튼 누르면 새소식 모달창
// 로그인 버튼 누르면 로그인 모달창
// 회원가입 버튼 누르면 회원가입 모달창
// 메뉴바를 제외한 부분을 클릭하면 메뉴바가 닫히도록 구현하기

export default function ProfileBtn() {
    const [isListVisible, setIsListVisible] = useState(false);

    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsListVisible(!isListVisible);
    }

    const closeMenu = () => {
        if(isListVisible) {
            setIsListVisible(false);
        }
    }

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
        closeMenu();
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeMenu();
        }
      };
    
      // 
      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, [isListVisible]);

    return (
        <div onClick={closeMenu}>
            <button type="button" onClick={toggleMenu} ref={menuRef} className={`border-[1px] border-solid border-[#DDDDDD] ml-[4px] pl-[14px] pr-[8px] flex flex-row justify-center items-center cursor-pointer rounded-[40px] hover:shadow-md ${isListVisible ? 'shadow-md relative' : ''}`}>
                <div className='text-[16px] mr-[14px]'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                    <div className='text-[32px]'>
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
                {/* 비로그인 상태일 때 */}
                {/* 로그인 기능을 만들면 비로그인 때만 보이도록 조건 추가하기 */}
                {/* {isListVisible && <MenuLogout />} */}

                {/* 로그인 상태일 때 */}
                {/* 로그인 기능을 만들면 로그인일 때만 보이도록 조건 추가하기 */}
                {isListVisible && <MenuLogin />}
            </button>
        </div>
    )
}