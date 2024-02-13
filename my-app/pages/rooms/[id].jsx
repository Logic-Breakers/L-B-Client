import Link from "next/link";
import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavApp from "@/components/Header/Nav/NavApp";
import LikedBtn from "@/components/Buttons/LikedBtn";
import RoomsHighlightItem from "@/components/Rooms/RoomsHighlightItem";
import RoomsAccommodationPlaceItem from "@/components/Rooms/RoomsAccommodationPlaceItem";
import RoomsFacilitiesItem from "@/components/Rooms/RoomsFacilitiesItem";
import WhiteBtn from "@/components/Buttons/WhiteBtn";
import RedBtn from "@/components/Buttons/RedBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faSoap,
  faCalendarDays,
  faAngleRight,
  faGem,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

export default function Rooms() {
  const showFacilitiesModal = () => {
    console.log("편의시설 모두 보기 버튼 눌림");
  };

  return (
    <>
      <Title text={"에어비앤비 | 휴가지 숙소, 통나무집, 해변가 주택 등"} />
      <Header />
      <main className="mt-[80px] w-full max-w-[1280px] bnb_xl:px-[80px] bnb_md_lg:px-[40px] bnb_sm:px-[24px] mx-auto">
        <section>
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-3xl font-semibold py-4">숙소 이름</h1>
            <LikedBtn />
          </div>

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
        <section className="flex flex-row justify-between border-b-[1px] mb-10">
          <section className="w-[58.34%] divide-y-[1px]">
            {/* 위치, 국가, 건물유형, 숙소유형, 인원, 침실, 침대, 욕실, 별점, 후기 */}
            <section className="pb-6">
              <h2 className="text-2xl font-semibold">
                위치, 국가 + 건물유형 + 숙소유형 (ex 수영구, 한국의 게스트용
                별채 전체)
              </h2>
              <div className="space-x-1 text-lg mb-2">
                <span>
                  <span className="mr-1">최대 인원</span>
                  <span>6</span>
                  <span>명</span>
                </span>
                <span>∙</span>
                <span>
                  <span className="mr-1">침실</span>
                  <span>2</span>
                  <span>개</span>
                </span>
                <span>∙</span>
                <span>
                  <span className="mr-1">침대</span>
                  <span>2</span>
                  <span>개</span>
                </span>
                <span>∙</span>
                <span>
                  <span className="mr-1">욕실</span>
                  <span>2</span>
                  <span>개</span>
                </span>
              </div>

              <div className="space-x-1 text-lg font-medium">
                <span>★</span>
                <span>5.0</span>
                <span>∙</span>
                <span className="cursor-pointer underline">
                  <span>후기 </span>
                  <span>19</span>
                  <span>개</span>
                </span>
              </div>
            </section>

            {/* 호스트 */}
            <section className="py-6">
              <div className="flex flex-row items-center space-x-6">
                <div className="bg-gray-200 w-[40px] h-[40px] rounded-full" />
                <div>
                  <div className="font-semibold">
                    <span>호스트: </span>
                    <span>○○</span>
                    <span> 님</span>
                  </div>
                  <div className="text-gray-400">
                    <span>슈퍼호스트</span>
                    <span>∙</span>
                    <span>호스팅 경력 </span>
                    <span>2</span>
                    <span>년</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 숙소 Highlight */}
            {/* 숙소 등록 당시 입력한 내용을 가져와서 보여주기? (아직은 등록 시 입력하는 공간  없음) */}
            <section className="py-6">
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
            <section className="py-10 text-lg">
              <div className="mb-5 max-h-[144px]">
                1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라
                만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 2.
                남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리
                기상일세 3. 가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리
                가슴 일편단심일세 4. 이 기상과 이 맘으로 충성을 다하여 괴로우나
                즐거우나 나라 사랑하세 ...
              </div>
              <span className="cursor-pointer">
                <span className="underline mr-1 font-bold">더 보기</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </section>

            {/* 숙박 장소 */}
            <section className="py-12">
              <h2 className="text-2xl font-semibold pb-6">숙박 장소</h2>
              <div className="grid grid-cols-3 gap-4">
                <RoomsAccommodationPlaceItem
                  title={"침실 1"}
                  detail={"퀸사이즈 침대 1개"}
                />
                <RoomsAccommodationPlaceItem
                  title={"침실 2"}
                  detail={"싱글 침대 1개"}
                />
              </div>
            </section>

            <section className="py-12">
              <h2 className="text-2xl font-semibold pb-6">숙소 편의시설</h2>
              <div className="grid grid-cols-2 gap-4">
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
                <RoomsFacilitiesItem
                  icon={<FontAwesomeIcon icon={faGem} />}
                  text={"해변과 인접"}
                />
              </div>
              <div className="mt-6">
                <WhiteBtn
                  onClick={showFacilitiesModal}
                  text={"편의시설 모두 보기"}
                  width={"fit"}
                  px={"[23px]"}
                  py={"[13px]"}
                />
              </div>
            </section>
          </section>

          {/* 오른쪽 상자 */}
          <section className="w-[33.33%] pb-12">
            {/* 오른쪽 윗 상자 */}
            <section className="border rounded-lg shadow-cc p-6">
              <section>
                <div className="mb-6">
                  <span className="mr-1 text-2xl font-semibold text-gray-500 line-through">
                    <span className="">₩</span>
                    <span className="">404,148</span>
                  </span>
                  <span>
                    <span className="text-2xl font-semibold">₩</span>
                    <span className="text-2xl font-semibold">88,000</span>
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
                  hight={"12"}
                  size={"lg"}
                />
                <div className="text-gray-500 mt-2 text-center">
                  예약 확정 전에는 요금이 청구되지 않습니다.
                </div>
              </section>
              <section className="mt-6 flex flex-col">
                <div className="flex flex-row justify-between">
                  <button type="button" className="underline">
                    ₩88,000 ✕ 5박
                  </button>
                  <div>₩440,000</div>
                </div>
                <div className="flex flex-row justify-between pt-4">
                  <button type="button" className="underline">
                    청소비
                  </button>
                  <div>₩20,000</div>
                </div>
                <div className="flex flex-row justify-between pt-4">
                  <button type="button" className="underline">
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
                <div className="text-gray-500">
                  ○○ 님의 숙소는 보통 예약이 가득 차 있습니다.
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
      </main>
      <NavApp />
      <Footer />
    </>
  );
}
