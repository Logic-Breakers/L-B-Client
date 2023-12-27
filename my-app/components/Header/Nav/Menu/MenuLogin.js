import Link from "next/link";
import NewsItem from "./items/NewsItem";
import BasicItem from "./items/BasicItem";
import CeilingBarItem from "./items/CeilingBarItem";

// 로그인 상태일 때 햄버거(bars) 버튼을 누르면 나타나는 메뉴 리스트
export default function MenuLogin() {
    return (
        <div className='block absolute top-[120%] right-0 shadow-xx rounded-[15px] bg-[#fff] hover:cursor-default'>
            <ul className={`my-[8px] w-[250px] h-[425px] scroll flex flex-col justify-between text-left`}>
                <NewsItem />
                
                <Link href={'/guest/inbox'}>
                    <BasicItem text={'메시지'} font_weight={500}/>
                </Link>
                <Link href={'/trips/v1'}>
                    <BasicItem text={'여행'} font_weight={500}/>
                </Link>
                <Link href={'/wishlists'}>
                    <BasicItem text={'위시리스트'} font_weight={500}/>
                </Link>
                
                <Link href={'/host/homes'}>
                    <CeilingBarItem text={'당신의 공간을 에어비앤비하세요'}/>
                </Link>
                <Link href={'/refer'}>
                    <BasicItem text={'호스트 추천하기'} font_color={'var(--menu-gray-color)'}/>
                </Link>
                <Link href={'/account-settings'}>
                    <BasicItem text={'계정'} font_color={'var(--menu-gray-color)'}/>
                </Link>

                <Link href={'/help'}>
                    <CeilingBarItem text={'도움말 센터'}/>
                </Link>
                <BasicItem text={'로그아웃'} font_color={'var(--menu-gray-color)'}/>
            </ul>
        </div>
    )
}