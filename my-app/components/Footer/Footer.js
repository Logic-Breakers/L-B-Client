import FooterItem from "./FooterItem";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

// screen : tailwind.config.js 참고
export default function Footer(){
    return (
        <>
            <footer className="bnb_sm:hidden bg-gray-100 border-t-[1px] border-solid border-[#DDDDDD] px-[40px]">
                <section className="bnb_xl:grid bnb_xl:grid-cols-3 bnb_xl:py-[48px] text-[14px]">
                    <div className="bnb_md_lg:py-[24px]">
                        <h3 className="font-[500] mb-[10px]">
                            에어비앤비 지원
                        </h3>
                        <ul className="flex flex-col gap-[10px]">
                            <FooterItem link={'/help'} text={'도움말 센터'} />
                            <FooterItem link={'/guest/inbox'} text={'안전 문제 관련 도움받기'} />
                            <FooterItem link={'/'} text={'에어커버'} />
                            <FooterItem link={'/'} text={'차별 반대'} />
                            <FooterItem link={'/'} text={'장애인 지원'} />
                            <FooterItem link={'/'} text={'예약 취소 옵션'} />
                            <FooterItem link={'/'} text={'이웃 민원 신고'} />
                        </ul>
                    </div>
                    <div className="bnb_md_lg:py-[24px] bnb_md_lg:border-y-[1px] bnb_md_lg:border-solid bnb_md_lg:border-[#DDDDDD]">
                        <h3 className="font-[500] mb-[10px]">
                            호스팅
                        </h3>
                        <ul className="flex flex-col gap-[10px]">
                            <FooterItem link={'/host/homes'} text={'당신의 공간을 에어비앤비하세요'} />
                            <FooterItem link={'/'} text={'호스트를 위한 에어커버'} />
                            <FooterItem link={'/'} text={'호스팅 자료'} />
                            <FooterItem link={'/'} text={'커뮤니티 포럼'} />
                            <FooterItem link={'/'} text={'책임감 있는 호스팅'} />
                        </ul>
                    </div>
                    <div className="bnb_md_lg:py-[24px]">
                        <h3 className="font-[500] mb-[10px]">
                            에어비앤비
                        </h3>
                        <ul className="flex flex-col gap-[10px]">
                            <FooterItem link={'/'} text={'뉴스룸'} />
                            <FooterItem link={'/'} text={'새로운 기능'} />
                            <FooterItem link={'/'} text={'채용정보'} />
                            <FooterItem link={'/'} text={'투자자 정보'} />
                            <FooterItem link={'/'} text={'Airbnb 긴급 숙소'} />
                        </ul>
                    </div>
                </section>

                <section className="border-t-[1px] border-solid border-[#DDDDDD] py-[24px] ">
                    <section className="flex flex-row bnb_md:flex-col justify-between">
                        <div className="flex flex-row bnb_md:flex-col items-center text-[14px] text-[--menu-gray-color]">
                            <span>2023 Airbnb Clone Coding</span>
                            <div className="flex gap-[6px] bnb_md:my-[10px]">
                                <span className="bnb_md:hidden ml-[6px]">∙</span>
                                <FooterItem link={'/'} text={'개인정보 처리방침'} />
                                <span>∙</span>
                                <FooterItem link={'/'} text={'이용약관'} />
                                <span>∙</span>
                                <FooterItem link={'/'} text={'사이트맵'} />
                                <span>∙</span>
                                <FooterItem link={'/'} text={'한국의 변경된 환불 정책'} />
                                <span>∙</span>
                                <FooterItem link={'/'} text={'회사 세부정보'} />
                            </div>
                        </div>

                        {/* 개발자 깃허브 링크 */}
                        <div>
                            <ul className="flex flex-row gap-[20px] bnb_md:justify-center items-center">
                                <Link href={'https://github.com/ghvhdh333'} target="_blank" title="[FE] Developer 김우주" className="text-[30px] text-[#FF385C] hover:animate-bounce">
                                    <li>
                                        <FontAwesomeIcon icon={faSquareGithub} />
                                    </li>
                                </Link>
                                <Link href={'https://github.com/toystory23'} target="_blank" title="[FE] Developer 정회엽"  className="text-[30px] text-[#f5711f] hover:animate-bounce">
                                    <li>
                                        <FontAwesomeIcon icon={faSquareGithub} />
                                    </li>
                                </Link>
                                <Link href={'https://github.com/KSJ-0'} target="_blank" title="[BE] Developer 김수정"  className="text-[30px] text-green-700 hover:animate-bounce">
                                    <li>
                                        <FontAwesomeIcon icon={faSquareGithub} />
                                    </li>
                                </Link>
                                <Link href={'https://github.com/SalguJam'} target="_blank" title="[BE] Developer 조상아"  className="text-[30px] text-blue-600 hover:animate-bounce">
                                    <li>
                                        <FontAwesomeIcon icon={faSquareGithub} />
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </section>
                </section>
            </footer>
        </>
    )
}