import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// 헤더 오른쪽에 '지구본' 버튼
export default function GlobalBtn() {
    return (
        <button type="button" className='px-[12px] py-[8px] hover:bg-gray-100 hover:rounded-[50px]'>
            <FontAwesomeIcon icon={faGlobe} />  
        </button>
    )
}