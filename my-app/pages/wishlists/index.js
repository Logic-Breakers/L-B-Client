import Link from "next/link";
import Header_Account from "@/components/Header/Header_Account";

export default function Wishlist() {
    return (
        <>
            <Header_Account />
            <section className='pt-[100px] h-[100vh] flex justify-center items-center'>
                <div>
                    <div>위시리스트</div>
                </div>
            </section>        
        </>
    )
}