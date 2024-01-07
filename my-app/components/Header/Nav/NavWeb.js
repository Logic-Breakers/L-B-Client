import DoAirbnbBtn from './DoAirbnbBtn';
import GlobalBtn from './GlobalBtn';
import MenuBtn from './MenuBtn';

// 헤더의 오른쪽 부분
export default function NavWeb() {
    return (
        <nav className='flex flex-row justify-center items-center text-[15px]'>
            <DoAirbnbBtn />
            <GlobalBtn />
            <MenuBtn />
        </nav>
    )
}