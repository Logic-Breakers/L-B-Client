import Title from "@/components/Title";
import HeaderBasic from "@/components/Header/HeaderBasic";
import Footer from "@/components/Footer/Footer";
import AccountItemTitle from "@/components/Account/AccountItemTitle";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

// 계정 -> 개인정보
export default function PersonalInfo() {
    const [nameEdit, setNameEdit] = useState(false);
    const [emailEdit, setEmailEdit] = useState(false);

    const handleNameEdit = () => {
        setNameEdit(!nameEdit)
    }
    
    const handleEmailEdit = () => {
        setEmailEdit(!emailEdit)
    }


    // 나중에 유저의 이름과 이메일 전화번호 등을 받아서 넣기
    return (
        <>
            <Title text={'에어비앤비: 휴가용 임대 숙소, 통나무집, 비치 하우스, 독특한 숙소 및 체험'}></Title>
            <HeaderBasic />
            <main className="bnb_md_xl:mt-[80px] flex flex-row justify-center items-center w-full">
                <div className="w-[1048px] px-[24px]">
                    <AccountItemTitle title_route={'개인정보'} title_h2={'개인정보'}/>
                    <div className="flex flex-row justify-between">
                        
                        {/* 왼쪽 개인정보 변경 부분 */}
                        <article className="bnb_xl:w-[596px] bnb_md_lg:w-[58%] bnb_sm:w-full  ">
                            <section className="py-[24px] border-b-[1px] flex flex-row justify-between items-start">
                                <div className="">
                                    <div>
                                        실명
                                    </div>
                                    <div className="text-[#9a9a9a] text-[14px] mt-[4px]">
                                        {nameEdit ? '허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다.' : '이름 성'}
                                    </div>
                                </div>
                                <button onClick={handleNameEdit} className="text-[14px] font-[500] underline">
                                    {nameEdit ? '취소' : '수정'}
                                </button>
                            </section>
                            
                        </article>

                        {/* 오른쪽 상자 부분 */}
                        <article className="bnb_sm:hidden bnb_xl:w-[334px] bnb_md_lg:w-[32%] border-[1px] border-solid border-[#DDDDDD] rounded-[12px] p-[24px] mb-[40px]">
                            <section>
                                <FontAwesomeIcon icon={faUserShield} className="text-[36px] text-[#E21C5E]"/>
                                <div className="my-[16px] text-[20px] font-[700]">
                                    여기에 내 개인정보가 표시되지 않는 이유가 무엇인가요?
                                </div>
                                <div className="text-[#9a9a9a]">
                                    신분이 노출되지 않도록 일부 계정 정보가 숨김 처리되었습니다.
                                </div>
                                <div className="my-[32px] border-b-[1px]"></div>
                            </section>
                            <section>
                                <FontAwesomeIcon icon={faUserPen} className="text-[36px] text-[#E21C5E]"/>
                                <div className="my-[16px] text-[20px] font-[700]">
                                    수정할 수 있는 세부 정보는 무엇인가요?
                                </div>
                                <div className="text-[#9a9a9a]">
                                    연락처 정보와 개인정보를 수정하실 수 있습니다. 본인 인증 시 이 정보를 사용했다면 호스팅을 계속하기 위해 또는 다음번 예약 진행 시 다시 인증을 받으셔야 합니다.
                                </div>
                                <div className="my-[32px] border-b-[1px]"></div>
                            </section>
                            <section>
                                <FontAwesomeIcon icon={faEye}
                                className="text-[36px] text-[#E21C5E]"/>
                                <div className="my-[16px] text-[20px] font-[700]">
                                    다른 사람에게 어떤 정보가 공개되나요?
                                </div>
                                <div className="text-[#9a9a9a]">
                                    에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처 정보를 공개합니다.
                                </div>
                            </section>                    
                        </article>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}