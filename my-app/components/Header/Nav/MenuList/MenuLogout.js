import Link from "next/link";
import NewsMenuItem from "./items/NewsMenuItem";
import BasicMenuItem from "./items/BasicMenuItem";
import CeilingBarMenuItem from "./items/CeilingBarMenuItem";

// 로그아웃 상태일 때 햄버거(bars) 버튼을 누르면 나타나는 메뉴 리스트
export default function MenuLogout() {
    return (
        <div className='block absolute top-[120%] right-0 shadow-lg rounded-[15px] border-[1px] border-solid border-[#DDDDDD] bg-[#fff] hover:cursor-default'>
            <ul className={`my-[8px] w-[250px] h-[235px] scroll flex-col justify-between text-left`}>
                <NewsMenuItem text={'겨울 업그레이드 기능'} />

                <BasicMenuItem text={'로그인'} font_weight={500}/>
                <BasicMenuItem text={'회원 가입'} font_color={'#5e5e5e'}/>
                
                <Link href={'/host/homes'}>
                    <CeilingBarMenuItem text={'당신의 공간을 에어비앤비하세요'}/>
                </Link>
                <Link href={'/help'}>
                    <BasicMenuItem text={'도움말 센터'} font_color={'#5e5e5e'}/>
                </Link>
            </ul>
        </div>
    )
}