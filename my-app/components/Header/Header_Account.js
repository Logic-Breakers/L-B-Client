import Head from "next/head";
import Link from "next/link";
import Nav from "./Nav/Nav";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

// /account-settings 와 /wishlist 페이지에 사용되는 헤더
export default function Header_Account() {
    return (
        <Head>
            <header className="bg-[#fff] border-b-[1px] border-solid border-[#DDDDDD] h-[80px] px-[80px] flex justify-between items-center fixed w-[100%]">
                <Link href='/' className="flex justify-center items-center gap-[4px] text-[var(--brand-color)] font-[600]">
                    <span className='text-[36px]'><FontAwesomeIcon icon={faAirbnb}/></span>
                    <span className='text-[24px]'>airbnb</span>
                </Link>

                <Nav />
            </header>
        </Head>
    )
}