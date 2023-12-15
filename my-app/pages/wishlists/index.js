import Link from "next/link";
import Title from "@/components/Title";
import HeaderAccount from "@/components/Header/HeaderAccount";

export default function Wishlists() {
    return (
        <>
            <Title text={'에어비앤비: 휴가용 임대 숙소, 통나무집, 비치 하우스, 독특한 숙소 및 체험'}/>
            <HeaderAccount />
            <section className='pt-[100px] h-[100vh] flex flex-row justify-center items-center'>
                <div>
                    <div>위시리스트</div>
                </div>
            </section>
        </>
    )
}