import Link from "next/link";
import Title from "@/components/Title";
import HeaderBasic from "@/components/Header/HeaderBasic";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";
import AccountWepItem from "@/components/Account/AccountWepItem";
import AccountAppItem from "@/components/Account/AccountAppItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFile, faEye } from '@fortawesome/free-regular-svg-icons';
import { faShieldHalved, faMoneyBill, faVolumeLow, faToggleOff, faBriefcase, faChartSimple, faGift, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
                        <AccountWepItem link={'/account-settings/personal-info'} icon={<FontAwesomeIcon icon={faAddressCard} />} itemName={'개인정보'} itemDetail={'개인정보 및 연락처를 알려주세요'}/>

                        <AccountWepItem link={'/account-settings/login-and-security'} icon={<FontAwesomeIcon icon={faShieldHalved} />} itemName={'로그인 및 보안'} itemDetail={'비밀번호를 변경하고 계정을 안정하게 보호하세요'}/>

                        <AccountWepItem link={'/account-settings/payments/payment-methods'} icon={<FontAwesomeIcon icon={faMoneyBill} />} itemName={'결제 및 대금 수령'} itemDetail={'결제, 대금 수령, 쿠폰, 기프트카드를 검토해주세요'}/>

                        <AccountWepItem link={'/account-settings/taxes/taxpayers'} icon={<FontAwesomeIcon icon={faFile} />} itemName={'세금'} itemDetail={'납세자 정보 및 세금 서류 관리'}/>

                        <AccountWepItem link={'/account-settings/notifications'} icon={<FontAwesomeIcon icon={faVolumeLow} />} itemName={'알림'} itemDetail={'알림 환경설정 및 연락 방식을 선택하세요'}/>

                        <AccountWepItem link={'/account-settings/privacy-and-sharing'} icon={<FontAwesomeIcon icon={faEye} />} itemName={'개인정보 및 공개 설정'} itemDetail={'개인정보, 연결된 서비스 및 데이터 공유 설정 관리'}/>

                        <AccountWepItem link={'/account-settings/preferences'} icon={<FontAwesomeIcon icon={faToggleOff} />} itemName={'글로벌 환경 설정'} itemDetail={'기본 언어, 통화, 시간대 설정하기'}/>

                        <AccountWepItem link={'/account-settings/airbnb-for-work'} icon={<FontAwesomeIcon icon={faBriefcase} />} itemName={'출장'} itemDetail={'회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다'}/>

                        <AccountWepItem link={'/account-settings/professional-hosting'} icon={<FontAwesomeIcon icon={faChartSimple} />} itemName={'전문 호스팅 도구'} itemDetail={'에어비앤비에서 여러 숙소를 관리하신다면 전문 도구를 이용해보세요'}/>

                        <AccountWepItem link={'/invite'} icon={<FontAwesomeIcon icon={faGift} />} itemName={'추천 크레딧 및 쿠폰'} itemDetail={'₩0의 추천 크레딧과 쿠폰이 있습니다. 자세히 알아보기'}/>
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
            <main className="bnb_sm:block bnb_md_xl:hidden m-[24px]">
                <div className="h-[64px]">
                    <Link href={'/account-settings'} className="p-[12px] ml-[-12px]">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </div>
                <h2 className="text-[20px] font-[700] mt-[12px] mb-[16px]">
                    계정
                </h2>
                <section className="mb-[60px]">
                    <AccountAppItem link={'/account-settings/payments/payment-methods'} itemName={'결제 및 대금 수령'} itemDetail={'신용카드, 쿠폰 등'}/>

                    <AccountAppItem link={'/account-settings/taxes/taxpayers'} itemName={'세금'} itemDetail={'납세자 정보 및 세금 서류 관리'}/>

                    <AccountAppItem link={'/account-settings/notifications'} itemName={'알림'} itemDetail={'연락 방법'}/>

                    <AccountAppItem link={'/account-settings/login-and-security'} itemName={'로그인 및 보안'} itemDetail={'비밀번호 및 로그인 기록'}/>

                    <AccountAppItem link={'/account-settings/preferences'} itemName={'글로벌 환경 설정'} itemDetail={'기본 언어, 통화, 시간대'}/>

                    <AccountAppItem link={'/account-settings/privacy-and-sharing'} itemName={'개인정보 및 공개 설정'} itemDetail={'연결된 앱 및 공유 설정'}/>

                    <AccountAppItem link={'/account-settings/airbnb-for-work'} itemName={'출장'} itemDetail={'회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다.'}/>

                    <AccountAppItem link={'/account-settings/professional-hosting'} itemName={'프로 호스팅 도구'} itemDetail={'에어비앤비에서 여러 숙소를 관리하신다면 프로 호스팅 도구를 이용해보세요.'}/>
                </section>
            </main>
            <Footer />
            <NavApp />
        </>
    )
}


