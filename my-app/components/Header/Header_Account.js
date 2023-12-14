import Link from "next/link";
import Nav from "./Nav/Nav";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

// 계정관리, 위시리스트, 메시지, 여행 페이지에 사용되는 헤더
export default function Header_Account() {
    return (
        <header className="bg-[#fff] border-b-[1px] border-solid border-[#eeeeee] h-[80px] px-[80px] flex flex-row justify-between items-center fixed top-0 left-0 w-[100%]">
            <Link href='/' className="flex flex-row justify-center items-center gap-[4px] text-[var(--brand-color)] font-[600]">
                <span className='text-[36px]'>
                    <FontAwesomeIcon icon={faAirbnb}/>
                </span>
                <span className='text-[24px] font-[600]'>
                    airbnb
                </span>
            </Link>

            <Nav />
        </header>
    )
}