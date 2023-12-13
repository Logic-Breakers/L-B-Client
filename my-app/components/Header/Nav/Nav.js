import DoAirbnbBtn from './DoAirbnbBtn';
import GlobalBtn from './GlobalBtn';
import ProfileBtn from './ProfileBtn';

// 헤더의 오른쪽 부분
export default function Nav() {
    return (
        <nav className='flex justify-center items-center text-[15px]'>
            <DoAirbnbBtn />
            <GlobalBtn />
            <ProfileBtn />
        </nav>
    )
}