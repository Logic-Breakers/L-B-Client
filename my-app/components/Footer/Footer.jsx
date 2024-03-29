import FooterItem from "./FooterItem";
import Developer from "../Developer/Developer";

// screen : tailwind.config.js 참고
// 밑에 링크에 나중에 유저 id값 입력해야함
export default function Footer() {
  return (
    <>
      <footer className="bnb_sm:hidden bg-gray-100 border-t-[1px] border-solid border-[#DDDDDD] px-[40px]">
        <section className="bnb_xl:grid bnb_xl:grid-cols-3 bnb_xl:py-[48px] text-[14px]">
          <div className="bnb_md_lg:py-[24px]">
            <div className="font-semibold mb-[10px]">에어비앤비 지원</div>
            <ul className="flex flex-col gap-[10px]">
              <FooterItem link={"/help/1"} text={"도움말 센터"} />
              <FooterItem
                link={"/guest/inbox/1"}
                text={"안전 문제 관련 도움받기"}
              />
              <FooterItem link={"/"} text={"에어커버"} />
              <FooterItem link={"/"} text={"차별 반대"} />
              <FooterItem link={"/"} text={"장애인 지원"} />
              <FooterItem link={"/"} text={"예약 취소 옵션"} />
              <FooterItem link={"/"} text={"이웃 민원 신고"} />
            </ul>
          </div>
          <div className="bnb_md_lg:py-[24px] bnb_md_lg:border-y-[1px] bnb_md_lg:border-solid bnb_md_lg:border-[#DDDDDD]">
            <div className="font-semibold mb-[10px]">호스팅</div>
            <ul className="flex flex-col gap-[10px]">
              <FooterItem
                link={"/host/homes"}
                text={"당신의 공간을 에어비앤비하세요"}
              />
              <FooterItem link={"/"} text={"호스트를 위한 에어커버"} />
              <FooterItem link={"/"} text={"호스팅 자료"} />
              <FooterItem link={"/"} text={"커뮤니티 포럼"} />
              <FooterItem link={"/"} text={"책임감 있는 호스팅"} />
            </ul>
          </div>
          <div className="bnb_md_lg:py-[24px]">
            <div className="font-semibold mb-[10px]">에어비앤비</div>
            <ul className="flex flex-col gap-[10px]">
              <FooterItem link={"/"} text={"뉴스룸"} />
              <FooterItem link={"/"} text={"새로운 기능"} />
              <FooterItem link={"/"} text={"채용정보"} />
              <FooterItem link={"/"} text={"투자자 정보"} />
              <FooterItem link={"/"} text={"Airbnb 긴급 숙소"} />
            </ul>
          </div>
        </section>

        <section className="border-t-[1px] border-solid border-[#DDDDDD] py-[24px] ">
          <section className="flex flex-row bnb_md:flex-col justify-between">
            <div className="flex flex-row bnb_md:flex-col items-center text-[14px] text-gray-700">
              <span>2024 Airbnb Clone Coding</span>
              <div className="flex gap-[6px] bnb_md:my-[10px]">
                <span className="bnb_md:hidden ml-[6px]">∙</span>
                <FooterItem link={"/"} text={"개인정보 처리방침"} />
                <span>∙</span>
                <FooterItem link={"/"} text={"이용약관"} />
                <span>∙</span>
                <FooterItem link={"/"} text={"사이트맵"} />
                <span>∙</span>
                <FooterItem link={"/"} text={"한국의 변경된 환불 정책"} />
                <span>∙</span>
                <FooterItem link={"/"} text={"회사 세부정보"} />
              </div>
            </div>

            {/* 개발자 깃허브 링크 */}
            <Developer />
          </section>
        </section>
      </footer>
    </>
  );
}
