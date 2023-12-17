import Link from "next/link";
import Image from "next/image";
import Title from "@/components/Title";
import HeaderBasic from "@/components/Header/HeaderBasic";
import Footer from "@/components/Footer/Footer";
import XmarkBtn from "@/components/Buttons/wishlistsPage/XmarkBtn";

import wishlistsDummy from "./wishlistsDummy";

export default function Wishlists() {
    return (
        <>
            <Title text={'에어비앤비: 휴가용 임대 숙소, 통나무집, 비치 하우스, 독특한 숙소 및 체험'}/>
            <HeaderBasic />
            <main className='flex flex-row justify-center items-center w-full'>
                <div className="w-[1440px] pt-[80px] px-[80px]">
                    <h1 className="text-[32px] font-[500] mt-[36px]">위시리스트</h1>
                    <section>
                        <ul className="grid grid-cols-4 gap-[24px] my-[24px]">
                            {wishlistsDummy.map(el =>
                                <li key={el.id} className="rounded-[16px]">
                                    <Link href='/'>
                                        <div>
                                            <Image src={el.picture} width="100" height="100" className="w-[100%] rounded-[12px] p-[4px] shadow-cc"/>
                                            <div className="pt-[8px]">
                                                <div className="flex flex-row justify-between">
                                                    <span className="font-[500]">
                                                        {el.location}
                                                    </span>
                                                    <span>
                                                        <span>
                                                        ★
                                                        </span>
                                                        <span className="ml-[4px] text-[#5e5e5e]">
                                                            {el.star}
                                                        </span>
                                                    </span>
                                                
                                                </div>
                                                <div>
                                                    <span className="font-[500]">
                                                        {`₩${el.price.toLocaleString()} `}
                                                    </span>
                                                    <span className="text-[#5e5e5e]">
                                                        /박
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <XmarkBtn />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}


// {
//     id: 1,
//     location: "일본 나가노",
//     feature: "통나무집",
//     picture: '',
//     star: 4.92,
//     price: 851243,
//   },