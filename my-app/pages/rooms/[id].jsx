import Link from "next/link";
import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";
import NavApp from "@/components/Header/Nav/NavApp";

import { useState, useEffect, useRef } from "react";

import LikedBtn from "@/components/Buttons/LikedBtn";
import SeeMoreBtn from "@/components/Buttons/SeeMoreBtn";
import WhiteBtn from "@/components/Buttons/WhiteBtn";
import RedBtn from "@/components/Buttons/RedBtn";

import RoomsHighlightItem from "@/components/Rooms/RoomsHighlightItem";
import RoomsAccommodationPlaceItem from "@/components/Rooms/RoomsAccommodationPlaceItem";
import RoomsFacilitiesItem from "@/components/Rooms/RoomsFacilitiesItem";
import RoomsReviewItem from "@/components/Rooms/RoomsReviewItem";
import RoomsNoticeItem from "@/components/Rooms/RoomsNoticeItem";
import KakaoMap from "@/components/KakaoMap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faSoap,
  faCalendarDays,
  faGem,
  faFlag,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import RoomsHeader from "@/components/Header/RoomsHeader";

// 숙소 상세내용
export default function Rooms() {
  // 위치를 참고하기 위해 useRef를 사용한다.
  // 여러개를 참고하기 위해 빈배열('[]')을 사용한다.
  const scrollRef = useRef([]);
  const [isRoomsHeaderShow, setIsRoomsHeaderShow] = useState(false);

  // 의존성 배열(Dependency Array)에 빈 배열('[]')을 전달하여,
  // useEffect가 렌더링 시 한 번만 실행됩니다.
  useEffect(() => {
    const handleScroll = () => {
      // RoomsHeader y축 600px 초과일 때만 보여준다.
      if (window.scrollY > 600) {
        setIsRoomsHeaderShow(true);
      } else {
        setIsRoomsHeaderShow(false);
      }
    };
    // 마운트(= 컴포넌트가 화면에 있으면)된 경우, 이벤트 리스너를 등록한다.
    // 마운트된 경우, 스크롤을 하면 handleScroll 함수가 호출되어 isRoomsHeaderShow의 상태를 업데이트 한다.

    window.addEventListener("scroll", handleScroll);

    // 언마운트(= 컴포넌트가 화면에서 사라지면)된 경우, 이벤트 리스너를 제거한다.
    // 언마운트될 때, 이벤트 리스너를 제거하여 메모리 누수를 방지한다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showFacilitiesModal = () => {
    console.log("편의시설 모두 보기 버튼 눌림");
  };

  return (
    // 숙소 사진 스크롤 위치
    <div ref={(el) => (scrollRef.current[0] = el)}>
      <Title text={"에어비앤비 | 휴가지 숙소, 통나무집, 해변가 주택 등"} />
      <Header />
      <RoomsHeader
        scrollRef={scrollRef}
        isRoomsHeaderShow={isRoomsHeaderShow}
      />
      <AppBackPageBtn />
      <main className="w-full max-w-[1280px] bnb_xl:px-[80px] bnb_md_lg:px-[40px] bnb_sm:px-[24px] bnb_sm:mt-[80px] bnb_sm:mb-[60px] mx-auto">
        <section>
          {/* 숙소 제목, 좋아요 버튼 */}
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-[28px] font-semibold py-4">숙소 이름</h1>
            <LikedBtn />
          </div>

          {/* 숙소 사진들 */}
          <div className="flex flex-row justify-center space-x-2 mb-8 w-full max-h-[560px] bnb_sm:hidden">
            <div className="bg-black w-1/2 aspect-square min-h-[324px] rounded-l-xl" />

            <div className="flex flex-col space-y-2 w-1/2 min-h-[324px] aspect-square">
              <div className="flex flex-row space-x-2 w-full min-h-[162px] aspect-square">
                <div className="bg-red-200 w-1/2" />
                <div className="bg-blue-200 w-1/2 rounded-tr-xl" />
              </div>

              <div className="flex flex-row space-x-2 w-full min-h-[162px] aspect-square">
                <div className="bg-green-200 w-1/2" />
                <div className="bg-gray-200 w-1/2 rounded-br-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* 왼쪽 상자 */}
        <section className="flex flex-row justify-between border-b-[1px]">
          <section className="bnb_sm:w-full w-[58.34%] ">
            {/* 위치, 국가, 건물유형, 숙소유형, 인원, 침실, 침대, 욕실, 별점, 후기 */}
            <section className="pb-6 border-b">
              <h2 className="text-[22px] font-semibold">
                위치, 국가 + 건물유형 + 숙소유형 (ex 수영구, 한국의 게스트용
                별채 전체)
              </h2>
              <div className="space-x-1 mb-2">
                <span>최대 인원 6명</span>
                <span>∙</span>
                <span className="mr-1">침실 2개</span>
                <span>∙</span>
                <span className="mr-1">침대 2개</span>
                <span>∙</span>
                <span className="mr-1">욕실 2개</span>
              </div>

              <div className="text-lg font-semibold">
                <span>★ 4.0</span>
                <span className="mx-1">∙</span>
                <button type="button" className="cursor-pointer underline">
                  후기 19개
                </button>
              </div>
            </section>

            {/* 호스트 */}
            <section className="py-6 border-b">
              <div className="flex flex-row items-center space-x-6">
                <div className="bg-gray-200 w-[40px] h-[40px] rounded-full" />
                <div>
                  <div className="font-semibold">호스트: userName 님</div>
                  <div className="text-gray-500">호스팅 경력 2년</div>
                </div>
              </div>
            </section>

            {/* 숙소 Highlight */}
            {/* 숙소 등록 당시 입력한 내용을 가져와서 보여주기? (아직은 등록 시 입력하는 공간 없음) */}
            <section className="py-6 border-b">
              <RoomsHighlightItem
                icon={<FontAwesomeIcon icon={faDoorOpen} />}
                title={"셀프 체크인"}
                detail={"건물 직원의 도움을 받아 체크인하실 수 있습니다."}
              />
              <RoomsHighlightItem
                icon={<FontAwesomeIcon icon={faSoap} />}
                title={"반신욕을 즐기며 힐링하세요"}
                detail={
                  "해당 지역에서 이 편의시설을 갖춘 몇 안 되는 숙소 중 하나입니다."
                }
              />
              <RoomsHighlightItem
                icon={<FontAwesomeIcon icon={faCalendarDays} />}
                title={"12월 31일 전까지 무료취소 가능"}
                detail={""}
              />
            </section>

            {/* 숙소 설명 */}
            {/* 100자? 까지만 보여주고 나머지는 ... 으로 보여주기 */}
            {/* 더 보기를 눌리면 모달창이 나타나도록 하기 */}
            <section className="py-10 text-lg border-b">
              <div className="">
                1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라
                만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 2.
                남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리
                기상일세 3. 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리
                가슴 일편단심일세 4. 이 기상과 이 맘으로 충성을 다하여 괴로우나
                즐거우나 나라 사랑하세 ...
              </div>
              <SeeMoreBtn text={"더 보기"} mt={"4"} />
            </section>

            {/* 숙박 장소 */}
            <section className="py-12 border-b">
              <h2 className="text-2xl font-semibold pb-6">숙박 장소</h2>
              <div className="grid bnb_sm:grid-cols-2 grid-cols-3 gap-4">
                <RoomsAccommodationPlaceItem
                  title={"침실 1"}
                  detail={"퀸사이즈 침대 1개"}
                />
                <RoomsAccommodationPlaceItem
                  title={"침실 2"}
                  detail={"싱글 침대 1개"}
                />
              </div>

              {/* 숙소 편의시설 스크롤 위치 */}
              <div ref={(el) => (scrollRef.current[1] = el)} />
            </section>

            {/* 숙소 편의시설 */}
            <section className="py-12">
              <h2 className="text-2xl font-semibold pb-6">숙소 편의시설</h2>
              <ul className="grid grid-cols-2 gap-4">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                  <li key={index}>
                    <RoomsFacilitiesItem
                      icon={<FontAwesomeIcon icon={faGem} />}
                      text={"해변과 인접"}
                    />
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhiteBtn
                  onClick={showFacilitiesModal}
                  text={"편의시설 모두 보기"}
                />

                {/* 숙소 후기 스크롤 위치 */}
                <div ref={(el) => (scrollRef.current[2] = el)} />
              </div>
            </section>
          </section>

          {/* 오른쪽 상자 */}
          <section className="bnb_sm:hidden w-[33.33%] pb-12">
            {/* 오른쪽 윗 상자 */}
            <section className="border rounded-lg shadow-cc p-6">
              <section>
                <div className="mb-6 flex flex-wrap">
                  <span className="mr-1 text-2xl font-semibold text-gray-500 line-through">
                    ₩404,148
                  </span>
                  <span>
                    <span className="text-2xl font-semibold">₩88,000</span>
                    <span className="text-xl"> /박</span>
                  </span>
                </div>
                <div className="mb-4">
                  <div>
                    <button
                      type="button"
                      className="flex flex-row  w-full border-[1px] border-[#ccc] rounded-t-lg "
                    >
                      <div className="flex flex-col justify-center items-start px-3 py-[10px] w-1/2 border-r-[1px] border-[#ccc]">
                        <div className="text-sm font-semibold">체크인</div>
                        <div className="text-gray-500">2024.2.28</div>
                      </div>
                      <div className="flex flex-col justify-center items-start px-3 py-[10px] w-1/2">
                        <div className="text-sm font-semibold">체크아웃</div>
                        <div className="text-gray-500">2024.12.31</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      className="flex flex-row  w-full border-[1px] border-[#ccc] rounded-b-lg mt-[-1px] "
                    >
                      <div className="flex flex-col justify-center items-start px-3 py-[10px]">
                        <div className="text-sm font-semibold">인원</div>
                        <div className="text-gray-500">
                          게스트 2명, 유아 1명
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <RedBtn
                  type={"button"}
                  text={"예약하기"}
                  width={"full"}
                  textSize={"lg"}
                />
                <div className="text-gray-500 mt-2 text-center text-sm">
                  예약 확정 전에는 요금이 청구되지 않습니다.
                </div>
              </section>
              <section className="mt-6 flex flex-col">
                <div className="flex flex-row justify-between">
                  <button type="button" className="underline text-left">
                    ₩88,000 ✕ 5박
                  </button>
                  <div>₩440,000</div>
                </div>
                <div className="flex flex-row justify-between pt-4">
                  <button type="button" className="underline text-left">
                    청소비
                  </button>
                  <div>₩20,000</div>
                </div>
                <div className="flex flex-row justify-between pt-4">
                  <button type="button" className="underline text-left">
                    에어비앤비 서비스 수수료
                  </button>
                  <div>₩71,435</div>
                </div>
                <div className="flex flex-row justify-between font-bold border-t-[1px] mt-6 pt-6">
                  <div>총 합계</div>
                  <div>₩531,435</div>
                </div>
              </section>
            </section>

            {/* 오른쪽 아랫 상자 */}
            <section className="w-full p-6 mt-6 border rounded-lg flex flex-row space-x-4">
              <div className="text-[#F12954] text-3xl">
                <FontAwesomeIcon icon={faGem} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">흔치 않은 기회</h3>
                <div className="text-gray-500 text-sm">
                  userName 님의 숙소는 보통 예약이 가득 차 있습니다.
                </div>
              </div>
            </section>

            {/* 숙소 신고하기 */}
            <div className="text-gray-500 flex flex-row items-center justify-center space-x-4 mt-6 hover:text-gray-600 active:text-black cursor-pointer">
              <FontAwesomeIcon icon={faFlag} />
              <span className="underline font-semibold">숙소 신고하기</span>
            </div>
          </section>
        </section>

        {/* 후기 */}
        <section className="py-12 border-b-[1px]">
          <div className="space-x-1 text-2xl font-semibold">
            <span>★ 4.0</span>
            <span>∙</span>
            <span>후기 19개</span>
          </div>
          <div className="pt-10 grid bnb_sm:grid-cols-1 grid-cols-2 gap-x-10 gap-y-6">
            <RoomsReviewItem />
            <RoomsReviewItem />
            <RoomsReviewItem />
            <RoomsReviewItem />
            <RoomsReviewItem />
            <RoomsReviewItem />
          </div>
          <div className="mt-8">
            <WhiteBtn text={"후기 모두 보기"} />

            {/* 숙소 위치 스크롤 위치 */}
            <div ref={(el) => (scrollRef.current[3] = el)} />
          </div>
        </section>

        {/* 숙소 위치 */}
        <section className="py-12 border-b-[1px]">
          <h2 className="text-2xl font-semibold pb-6">숙소 위치</h2>
          <KakaoMap
            address={"제주특별자치도 제주시 첨단로 242"}
            houseName={"숙소 이름"}
          />
          <div className="my-4 font-semibold">address</div>
        </section>

        {/* 호스트 정보 */}
        <section className="py-12 border-b-[1px] grid grid-cols-2 bnb_sm:grid-cols-1 gap-x-10 gap-y-6">
          {/* 호스트 정보의 왼쪽 */}
          <section>
            <div className="flex flex-row items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
              <div>
                <div className="text-2xl font-semibold">호스트: userName님</div>
                <div className="text-gray-500">회원 가입일: 2021년 8월</div>
              </div>
            </div>

            <ul className="flex flex-row space-x-6 mb-6">
              <li>
                <span className="mr-2">★</span>
                <span>후기 166개</span>
              </li>
              <li>
                <span className="mr-2">✅</span>
                <span>본인 인증 완료</span>
              </li>
              <li>
                <span className="mr-2">🏅</span>
                <span>슈퍼호스트</span>
              </li>
            </ul>

            <div>
              <div className="mb-6">
                <div className="font-semibold text-lg mb-2">
                  숙박 중 게스트와의 교류
                </div>
                <div>
                  이곳에 머무르며 행복한 시간과 여행이 되시기를 바랍니다.
                  <br />
                  가나다라마바사아자차카타파하 ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  1234567890 ...
                </div>
                <SeeMoreBtn text={"자세히 읽어보기"} />
              </div>
              <div>
                <div className="font-semibold text-lg mb-2">
                  userName님은 슈퍼호스트입니다.
                </div>
                <div>
                  슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                  숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
                </div>
              </div>
            </div>
          </section>

          {/* 호스트 정보의 오른쪽 */}
          <section>
            <div>
              <div>언어: 한국어</div>
              <div>응답률: 100%</div>
              <div>응답시간: 1시간 이내</div>
            </div>
            <div className="mt-8 mb-6">
              <WhiteBtn text={"호스트에게 연락하기"} />
            </div>
            <div className="flex flex-row items-center space-x-4">
              <div className="text-2xl text-[#E31C5F]">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="text-gray-500 text-sm">
                안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서 송금하거나
                대화를 나누지 마세요.
              </div>
            </div>
          </section>
        </section>

        {/* 알아두어야 할 사항 */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold">알아두어야 할 사항</h2>
          <div className="grid grid-cols-3 bnb_sm:grid-cols-1">
            <RoomsNoticeItem
              title={"숙소 이용규칙"}
              info_1={"체크인 시간: 15:00~22:00"}
              info_2={"체크아웃 시간: 11:00 전까지"}
              info_3={"게스트 정원 2명"}
            />
            <RoomsNoticeItem
              title={"안전 및 숙소"}
              info_1={"보안 카메라 / 녹화장치"}
              info_2={"출입이 제한되지 않는 수영장 / 온수 욕조"}
              info_3={"근처에 호수, 강, 바다 등이 있음"}
            />
            <RoomsNoticeItem
              title={"환불 정책"}
              info_1={
                "12월 31일 23:59 전에 취소하면 부분 환불을 받으실 수 있습니다."
              }
            />
          </div>
        </section>
      </main>
      <NavApp />
      <Footer />
    </div>
  );
}
