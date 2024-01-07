import Link from "next/link";
import Title from "@/components/Title";
import HeaderBasic from "@/components/Header/HeaderBasic";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";
import AccountWebItem from "@/components/Account/AccountWebItem";
import AccountAppItem from "@/components/Account/AccountAppItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faMoneyBill, faVolumeLow, faToggleOff, faBriefcase, faChartSimple, faGift, faCircleUser, faChevronRight, faHouseUser, faGear, faToggleOn, faCircleQuestion, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard, faFile, faEye } from '@fortawesome/free-regular-svg-icons';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

export default function AccountSettings() {
    return (
        <>
            <Title text={'계정 관리 - 에어비앤비'}/>
            <HeaderBasic />

            {/* 나중에 userName, email 받기 */}
            <main className='bnb_sm:hidden flex flex-row justify-center items-center w-full bnb_md_lg:px-[24px]'>
                <div className="bnb_lx:w-[1048px] bnb_md_lg:[696px] px-[8px] mt-[135px]">
                    <div className="mb-[65px]">
                        <h1 className="font-[500] text-[32px]">
                            계정
                        </h1>
                        <div className="text-[18px]">
                            <span className="font-[400] mr-[4px]">
                                이름 성, 
                            </span>
                            <span className="font-[300]">
                                example@gmail.com∙
                            </span>
                            <Link href={'/users/show'}>
                                <span className="font-[400] underline decoration-solid decoration-[1.5px]">
                                    프로필로 이동
                                </span>
                            </Link>
                        </div>
                    </div>
                        
                    {/* 각각의 페이지 만들고 라우터 시키기 */}
                    <div className="grid bnb_xl:grid-cols-3 bnb_md_lg:grid-cols-2 grid-rows-auto gap-[16px] ">
                        <AccountWebItem link={'/account-settings/personal-info'} icon={<FontAwesomeIcon icon={faAddressCard} />} itemName={'개인정보'} itemDetail={'개인정보 및 연락처를 알려주세요'}/>

                        <AccountWebItem link={'/account-settings/login-and-security'} icon={<FontAwesomeIcon icon={faShieldHalved} />} itemName={'로그인 및 보안'} itemDetail={'비밀번호를 변경하고 계정을 안정하게 보호하세요'}/>

                        <AccountWebItem link={'/account-settings/payments/payment-methods'} icon={<FontAwesomeIcon icon={faMoneyBill} />} itemName={'결제 및 대금 수령'} itemDetail={'결제, 대금 수령, 쿠폰, 기프트카드를 검토해주세요'}/>

                        <AccountWebItem link={'/account-settings/taxes/taxpayers'} icon={<FontAwesomeIcon icon={faFile} />} itemName={'세금'} itemDetail={'납세자 정보 및 세금 서류 관리'}/>

                        <AccountWebItem link={'/account-settings/notifications'} icon={<FontAwesomeIcon icon={faVolumeLow} />} itemName={'알림'} itemDetail={'알림 환경설정 및 연락 방식을 선택하세요'}/>

                        <AccountWebItem link={'/account-settings/privacy-and-sharing'} icon={<FontAwesomeIcon icon={faEye} />} itemName={'개인정보 및 공개 설정'} itemDetail={'개인정보, 연결된 서비스 및 데이터 공유 설정 관리'}/>

                        <AccountWebItem link={'/account-settings/preferences'} icon={<FontAwesomeIcon icon={faToggleOff} />} itemName={'글로벌 환경 설정'} itemDetail={'기본 언어, 통화, 시간대 설정하기'}/>

                        <AccountWebItem link={'/account-settings/airbnb-for-work'} icon={<FontAwesomeIcon icon={faBriefcase} />} itemName={'출장'} itemDetail={'회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다'}/>

                        <AccountWebItem link={'/account-settings/professional-hosting'} icon={<FontAwesomeIcon icon={faChartSimple} />} itemName={'전문 호스팅 도구'} itemDetail={'에어비앤비에서 여러 숙소를 관리하신다면 전문 도구를 이용해보세요'}/>

                        <AccountWebItem link={'/invite'} icon={<FontAwesomeIcon icon={faGift} />} itemName={'추천 크레딧 및 쿠폰'} itemDetail={'₩0의 추천 크레딧과 쿠폰이 있습니다. 자세히 알아보기'}/>
                    </div>

                    <div className="my-[50px] text-center">
                        <div className="text-[14px]">
                            계정을 비활성화하셔야 하나요?
                        </div>
                        <Link href={'/account-delete/reasons'}>
                            <div className="text-[12px] font-[500] mt-[8px] underline decoration-solid ">
                                지금 처리하기
                            </div>
                        </Link>
                    </div>
                </div>
            </main>

            {/* sm 사이즈 일 때 */}
            <main className="bnb_sm:block bnb_md_xl:hidden mx-[24px] mb-[64px]">
                <h2 className="text-[30px] font-[500] mt-[48px] mb-[32px]">
                    프로필
                </h2>
                <Link href={'/users/show'}>
                    <section className="flex flex-row items-center gap-[16px] border-b-[1px] pb-[16px]">
                        <FontAwesomeIcon icon={faCircleUser} className="text-[56px]" />
                        <div className="flex flex-row justify-between items-center w-full">
                            <div>
                                <div className="font-[400]">
                                    이름
                                </div>
                                <div className="text-[14px] text-[#888888]">
                                    프로필 보기
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </section>
                </Link>
                <section className="pb-[16px] border-b-[1px]">
                    <Link href={'/host/homes'}>
                        <section className="my-[24px] p-[24px] border-[1px] border-solid border-[#DDDDDD] shadow-cc rounded-[12px] h-[138px] w-full flex flex-row justify-between items-center">
                            <div className="flex flex-col gap-[6px]">
                                <div className="text-[18px] font-[500]">
                                    당신의 공간을 에어비앤비하세요
                                </div>
                                <div className="text-[14px] text-[#888888]">
                                    간단히 숙소를 등록하고 수입을 올릴 수 있어요.
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faHouseUser} className="text-[88px] text-gray-500"/>
                        </section>
                    </Link>
                    <AccountAppItem link={'/account-settings/personal-info'} icon={<FontAwesomeIcon icon={faCircleUser} />} itemName={'개인정보'}/>
                    
                    <AccountAppItem link={'/account-settings/detail'} icon={<FontAwesomeIcon icon={faGear} />} itemName={'계정'}/>
                </section>
                <section className="border-b-[1px] pb-[16px]">
                    <h3 className="text-[22px] mt-[40px] pb-[24px]">
                        호스팅
                    </h3>
                    <AccountAppItem link={'/host/homes'} icon={<FontAwesomeIcon icon={faToggleOn} />} itemName={'숙소 호스팅'}/>
                </section>
                <section className="border-b-[1px] pb-[16px]">
                    <h3 className="text-[22px] mt-[40px] pb-[24px]">
                        지원 서비스
                    </h3>
                    <AccountAppItem link={'/help'} icon={<FontAwesomeIcon icon={faCircleQuestion} />} itemName={'도움말 센터 방문하기'}/>
                    <AccountAppItem link={'/guest/inbox'} icon={<FontAwesomeIcon icon={faShieldHalved} />} itemName={'안전 문제 관련 도움받기'}/>
                    <AccountAppItem link={'/help/article'} icon={<FontAwesomeIcon icon={faHeadphones} />} itemName={'이웃 민원 신고'}/>
                    <AccountAppItem link={'/'} icon={<FontAwesomeIcon icon={faAirbnb} />} itemName={'에어비앤비 이용 방법'}/>
                </section>
                <section className="mt-[40px]">
                    <button type="button" className="border-black border-solid border-[1px] w-full h-[48px] rounded-[10px] hover:bg-[#F7F7F7]">
                        로그아웃
                    </button>
                    <div className="flex flex-row justify-center text-[12px] text-[#888888] mt-[20px] pb-[40px]">
                        2023 Airbnb Clone Coding
                    </div>
                </section>
            </main>
            <Footer />
            <NavApp />
        </>
    )
}


