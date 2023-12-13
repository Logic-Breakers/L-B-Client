import Link from "next/link";

export default function DoAirbnbBtn() {
    return (
            <Link href='/host/homes' className='px-[12px] py-[8px] hover:bg-gray-100 hover:rounded-[30px] cursor-pointer'>
                당신의 공간을 에어비앤비하세요
            </Link>
    )
}