import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import GlobalModal from '../Modals/GlobalModal';

// 헤더의 오른쪽 부분
export default function GlobalBtn() {
    const [showGlobalModal, setShowGlobalModal] = useState(false);

    const openGlobalModal = () => {
        setShowGlobalModal(true);
    }
    
    const closeGlobalModal = () => {
        setShowGlobalModal(false);
    }

    return (
        <>
            <button type="button" onClick={openGlobalModal} className='px-[12px] py-[8px] hover:bg-gray-100 hover:rounded-[50px] cursor-pointer'>
                <FontAwesomeIcon icon={faGlobe} />  
            </button>
            {showGlobalModal && <GlobalModal closeGlobalModal={closeGlobalModal} showGlobalModal={showGlobalModal}/>}
        </>
    )
}