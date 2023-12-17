import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function XmarkBtn () {
    return (
        <button type="button" className="text-[20px] px-[8px] rounded-[20px] border-[1px] border-gray-400 bg-gray-100 shadow-xx hover:shadow-xxx hover:bg-[#fff] hover:scale-105 transition duration-200 ease-in-out">
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}