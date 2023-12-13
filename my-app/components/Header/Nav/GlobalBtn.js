import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// 헤더의 오른쪽 부분
export default function GlobalBtn() {
    return (
        <button type="button" className='px-[12px] py-[8px] hover:bg-gray-100 hover:rounded-[50px] cursor-pointer'>
            <FontAwesomeIcon icon={faGlobe} />  
        </button>
    )
}