import Link from "next/link";
import NewsMenuItem from "./items/NewsMenuItem";
import BasicMenuItem from "./items/BasicMenuItem";
import CeilingBarMenuItem from "./items/CeilingBarMenuItem";

// 로그인 상태일 때 햄버거(bars) 버튼을 누르면 나타나는 메뉴 리스트
export default function MenuLogin() {
    return (
        <div className='block absolute top-[120%] right-0 shadow-lg rounded-[15px] border-[1px] border-solid border-[#DDDDDD] bg-[#fff] hover:cursor-default'>
            <ul className={`my-[8px] w-[250px] h-[425px] scroll flex-col justify-between text-left`}>
                <NewsMenuItem text={'겨울 업그레이드 기능'}/>
                
                <Link href={'/guest/inbox'}>
                    <BasicMenuItem text={'메시지'} font_weight={500}/>
                </Link>
                <Link href={'/trips/v1'}>
                    <BasicMenuItem text={'여행'} font_weight={500}/>
                </Link>
                <Link href={'/wishlists'}>
                    <BasicMenuItem text={'위시리스트'} font_weight={500}/>
                </Link>
                
                <Link href={'/host/homes'}>
                    <CeilingBarMenuItem text={'당신의 공간을 에어비앤비하세요'}/>
                </Link>
                <Link href={'/refer'}>
                    <BasicMenuItem text={'호스트 추천하기'} font_color={'#5e5e5e'}/>
                </Link>
                <Link href={'/account-settings'}>
                    <BasicMenuItem text={'계정'} font_color={'#5e5e5e'}/>
                </Link>

                <Link href={'/help'}>
                    <CeilingBarMenuItem text={'도움말 센터'}/>
                </Link>
                <BasicMenuItem text={'로그아웃'} font_color={'#5e5e5e'}/>
            </ul>
        </div>
    )
}