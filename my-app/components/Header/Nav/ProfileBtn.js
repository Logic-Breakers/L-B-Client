import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useState } from 'react';

export default function ProfileBtn() {
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleList = () => {
        setIsListVisible(!isListVisible);
    }

    return (
        <button type="button" onClick={toggleList} className={`ml-[4px] border-[1px] border-solid border-[#DDDDDD] pl-[14px] pr-[8px] flex justify-center items-center gap-[14px] cursor-pointer rounded-[40px] hover:shadow-md ${isListVisible ? 'active:shadow-md' : ''}`}>
            <div className='text-[16px]'>
                <FontAwesomeIcon icon={faBars} />
            </div>
                <div className='text-[32px]'>
                <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className={`border-[1px] border-solid border-black relative ${isListVisible ? 'block' : 'hidden'}`}>
                <ul className='absolute top-[100px] right-[80px]'>
                    <li>로그인</li>
                    <li>회원 가입</li>
                    <li>당신의 공간을 에어비앤비하세요</li>
                    <li>도움말 센터</li>
                </ul>
            </div>
        </button>
    )
}