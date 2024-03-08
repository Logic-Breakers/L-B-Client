import axios from "axios";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavApp from "@/components/Header/Nav/NavApp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import HostingRegisterItemTitle from "@/components/Hosting/registerPage/HostingRegisterItemTitle";
import PictureUpload from "@/components/PictureUpload";
import RedBtn from "@/components/Buttons/RedBtn";

import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  // 국가, 요금, 카테고리(category), 건물유형(propertyType), 숙소유형(placeType), 설명
  const [houseName, setHouseName] = useState("");
  const [country, setCountry] = useState("none");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("none");
  const [placeType, setPlaceType] = useState("none");
  const [info, setInfo] = useState("");
  const [picture, setPicture] = useState("");
  const [category, setCategory] = useState("");

  // 게스트, 침실, 침대, 욕실 수
  const [guestNum, setGuestNum] = useState(1);
  const [bedroomsNum, setBedroomsNum] = useState(0);
  const [bedsNum, setBedsNum] = useState(1);
  const [bathroomsNum, setBathroomsNum] = useState(1);

  // 숙소 이름
  const onBlurHouseName = (event) => {
    setHouseName(event.target.value);
    console.log("숙소 이름 : ", houseName);
  };

  // 국가
  const onBlurCountry = (event) => {
    setCountry(event.target.value);
    console.log("국가 : ", country);
  };

  // 요금
  const onBlurPrice = (event) => {
    setPrice(event.target.value);
    console.log("요금 : ", price);
  };

  // 건물 유형
  const onBlurPropertyType = (event) => {
    setPropertyType(event.target.value);
    console.log("건물 유형 : ", propertyType);
  };

  // 숙소 유형
  const onBlurPlaceType = (event) => {
    setPlaceType(event.target.value);
    console.log("숙소 유형 : ", placeType);
  };

  // 카테고리
  const onBlurCategory = (event) => {
    setCategory(event.target.value);
    console.log("카테고리 : ", category);
  };

  // 게스트 수 Up & Down
  const onClickGuestNumUp = () => {
    setGuestNum(guestNum + 1);
  };
  const onClickGuestNumDown = () => {
    if (guestNum > 1) {
      setGuestNum(guestNum - 1);
    }
  };

  // 침실 수 Up & Down
  const onClickBedroomsNumUp = () => {
    setBedroomsNum(bedroomsNum + 1);
  };
  const onClickBedroomsNumDown = () => {
    if (bedroomsNum > 0) {
      setBedroomsNum(bedroomsNum - 1);
    }
  };

  // 침실 수 Up & Down
  const onClickBedsNumUp = () => {
    setBedsNum(bedsNum + 1);
  };
  const onClickBedsNumDown = () => {
    if (bedsNum > 1) {
      setBedsNum(bedsNum - 1);
    }
  };

  // 욕실 수 Up & Down
  const onClickBathroomsNumUp = () => {
    setBathroomsNum(bathroomsNum + 1);
  };
  const onClickBathroomsNumDown = () => {
    if (bathroomsNum > 1) {
      setBathroomsNum(bathroomsNum - 1);
    }
  };

  // 설명
  const onBlurInfo = (event) => {
    setInfo(event.target.value);
    console.log("설명 : ", info);
  };

  // 사진
  const onChangePicture = (event) => {
    setPicture(event.target.value);
    console.log("사진 : ", picture);
  };

  // 도로명 주소 찾기 팝업
  // 행정안전부 도로명 주소 api 사용법을 잘 모르겠음... (현재 에러 발생 중)
  const searchAddress = async (keyword) => {
    const request = {
      confmKey: process.env.ADDRESS_SEARCH_KEY,
      returnUrl: "http://localhost:3000/hosting/register",
      keyword: keyword,
      resultType: "json",
    };

    try {
      const addressResponse = await axios.get(process.env.ADDRESS_SEARCH_KEY, {
        request,
      });
      return addressResponse;
    } catch (error) {
      console.error(error);
    }
  };

  // 등록하기 버튼 눌렸을 때
  const onClickSubmitBtn = async () => {
    console.log("숙소 등록함");
    console.log("숙소 이름 : ", houseName);
    console.log("국가 : ", country);
    console.log("요금 : ", price);
    console.log("건물 유형 : ", propertyType);
    console.log("숙소 유형 : ", placeType);
    console.log("카테고리 : ", category);
    console.log("게스트 : ", guestNum);
    console.log("침실 : ", bedroomsNum);
    console.log("침대 : ", bedsNum);
    console.log("욕실 : ", bathroomsNum);
    console.log("설명 : ", info);
    console.log("사진 : ", picture);

    // API 요청을 보내기 위한 데이터 준비
    const requestData = new FormData();
    requestData.append(
      "stay",
      new Blob(
        [
          JSON.stringify({
            houseName,
            country,
            address: "제주특별자치도 제주시 중앙로 3062",
            price,
            propertyType,
            placeType,
            guest: guestNum,
            bedrooms: bedroomsNum,
            beds: bedsNum,
            bathrooms: bathroomsNum,
            info,
          }),
        ],
        { type: "application/json" }
      )
    );
    requestData.append("image", new File([picture], picture));

    try {
      // 서버 API 호출
      // 사진도 같이 보내야하기에 multipart/form-data로 보낸다.
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/stays?categoryName=${category}`,
        requestData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("acToken"),
            "Content-Type": "multipart/form-data",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log(response);
      alert(response.data);

      // 숙소 등록 한 뒤, hosting 페이지로 이동한다.
      // 나중에 id값으로 변경하기!
      router.push("/hosting/1");
    } catch (error) {
      alert("숙소 등록을 실패했습니다.");
      console.log("에러", error);
    }
  };

  return (
    <>
      <Title text={"호스팅 시작하기 - Airbnb"} />
      <Header fixed />
      <main className="flex flex-row justify-center w-full min-h-screen mt-[40px]">
        <div className="w-[600px] bnb_md_xl:pt-[80px] bnb_sm:px-[24px]">
          <h1 className="text-[32px] font-[500]">호스팅 시작하기</h1>
          <form onSubmit={(event) => event.preventDefault()}>
            <h2 className="text-xl text-gray-500">기본정보를 알려주세요</h2>
            <section className="my-8 space-y-10">
              {/* 숙소 이름 */}
              <section>
                <HostingRegisterItemTitle text={"숙소 이름"} require mb />
                <input
                  onBlur={onBlurHouseName}
                  onChange={(event) => setHouseName(event.target.value)}
                  type="text"
                  className="border-solid border-[1px] border-[#cccccc] w-full h-[55px] rounded-md text-md text-gray-600 p-4"
                  placeholder="숙소 이름을 적어주세요"
                ></input>
              </section>

              {/* 국가 */}
              <section>
                <HostingRegisterItemTitle text={"국가"} require mb />
                <label
                  onBlur={onBlurCountry}
                  onChange={(event) => setCountry(event.target.value)}
                  htmlFor="country"
                  className="flex flex-row justify-between items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] relative"
                >
                  <select
                    id="country"
                    className="appearance-none w-full h-full pl-4 rounded-md text-md text-gray-600"
                    defaultValue={""}
                  >
                    <option value="">국가를 선택해주세요</option>
                    <option value="미국">미국 (United States)</option>
                    <option value="영국">영국 (United Kingdom)</option>
                    <option value="일본">일본 (Japan)</option>
                    <option value="대한민국">한국 (Korea)</option>
                    <option value="중국">중국 (China)</option>
                  </select>

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute right-[10px] pointer-events-none"
                  />
                </label>
              </section>

              {/* 주소 */}
              {/* 주소찾기로 가져온 값 각각의 칸에 넣어주기! */}
              <section>
                <HostingRegisterItemTitle text={"주소"} require mb />
                <div className="space-y-2">
                  <div className="flex flex-row space-x-4">
                    <div className="flex flex-row justify-center items-center border-[1px] border-solid border-[#cccccc] rounded-md w-[100px] h-[55px] text-gray-600 pointer-events-none">
                      11111
                    </div>
                    <button
                      onClick={searchAddress}
                      type="button"
                      className="bg-gray-300 rounded-md w-[100px] h-[55px] px-4 py-2 hover:bg-gray-400 active:bg-gray-300"
                    >
                      주소 찾기
                    </button>
                  </div>
                  <div className="flex flex-row items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] px-4 text-gray-600">
                    서울 ㅁㅁㅁ ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                  </div>
                  <div className="flex flex-row items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] px-4 text-gray-600">
                    (상세주소) ㄹㅇㄴㅁㄹㄴㅁㄹㄴㅁ
                  </div>
                </div>
              </section>

              {/* 요금 */}
              <section>
                <HostingRegisterItemTitle text={"요금"} require mb />
                <div className="relative flex flex-row items-center">
                  <input
                    onBlur={onBlurPrice}
                    onChange={(event) => setPrice(event.target.value)}
                    value={price}
                    type="number"
                    className="text-center border-solid border-[1px] border-[#cccccc] placeholder:text-center w-[210px] h-[55px] rounded-md text-md text-gray-600"
                    placeholder="ex) 123456"
                  ></input>
                  <div className="absolute left-40 text-gray-400 text-sm">
                    원/박
                  </div>
                </div>
              </section>

              {/* 건물 유형 */}
              <section>
                <HostingRegisterItemTitle text={"건물 유형"} require mb />
                <label
                  onBlur={onBlurPropertyType}
                  onChange={(event) => setPropertyType(event.target.value)}
                  htmlFor="propertyType"
                  className="flex flex-row justify-between items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] relative"
                >
                  <select
                    id="propertyType"
                    className="appearance-none w-full h-full pl-4 rounded-md text-md text-gray-600"
                    defaultValue={""}
                  >
                    <option value="">건물 유형을 선택해주세요</option>
                    <option value="단독_또는_다세대_주택">
                      단독 또는 다세대 주택
                    </option>
                    <option value="아파트">아파트</option>
                    <option value="게스트용_별채">게스트용 별채</option>
                    <option value="호텔">호텔</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute right-[10px] pointer-events-none"
                  />
                </label>
              </section>

              {/* 숙소 유형 */}
              <section>
                <HostingRegisterItemTitle text={"숙소 유형"} require mb />
                <label
                  onBlur={onBlurPlaceType}
                  onChange={(event) => setPlaceType(event.target.value)}
                  htmlFor="placeType"
                  className="flex flex-row justify-between items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] relative"
                >
                  <select
                    id="placeType"
                    className="appearance-none w-full h-full pl-4 rounded-md text-md text-gray-600"
                    defaultValue={""}
                  >
                    <option value="">숙소 유형을 선택해주세요</option>
                    <option value="공간_전체">공간 전체</option>
                    <option value="방">방</option>
                    <option value="다인실">다인실</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute right-[10px] pointer-events-none"
                  />
                </label>
              </section>

              {/* 카테고리 */}
              <section>
                <HostingRegisterItemTitle text={"카테고리"} require mb />
                <label
                  onBlur={onBlurCategory}
                  onChange={(event) => setCategory(event.target.value)}
                  htmlFor="category"
                  className="flex flex-row justify-between items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] relative"
                >
                  <select
                    id="category"
                    className="appearance-none w-full h-full pl-4 rounded-md text-md text-gray-600"
                    defaultValue={""}
                  >
                    <option value="">카테고리를 선택해주세요</option>
                    <option value="캠핑장">캠핑장</option>
                    <option value="인기_급상승">인기 급상승</option>
                    <option value="국립공원">국립공원</option>
                    <option value="골프장">골프장</option>
                    <option value="복토_주택">복토 주택</option>
                    <option value="방">방</option>
                    <option value="한적한_시골">한적한 시골</option>
                    <option value="해변_근처">해변 근처</option>
                    <option value="멋진_수영장">멋진 수영장</option>
                    <option value="최고의_전망">최고의 전망</option>
                    <option value="한옥">한옥</option>
                    <option value="캐슬">캐슬</option>
                    <option value="농장">농장</option>
                    <option value="스키">스키</option>
                    <option value="창작_공간">창작 공간</option>
                    <option value="해변_바로_앞">해변 바로 앞</option>
                    <option value="초소형_주택">초소형 주택</option>
                    <option value="디자인">디자인</option>
                    <option value="속세를_벗어난_숙소">
                      속세를 벗어난 숙소
                    </option>
                    <option value="기상천외한_숙소">기상천외한 숙소</option>
                    <option value="열대_지역">열대 지역</option>
                    <option value="호수_근처">호수 근처</option>
                    <option value="동굴">동굴</option>
                    <option value="료칸">료칸</option>
                    <option value="통나무집">통나무집</option>
                    <option value="Luxe">Luxe</option>
                    <option value="트리하우스">트리하우스</option>
                    <option value="풍차">풍차</option>
                    <option value="B&B">B&B</option>
                    <option value="와인_농장">와인 농장</option>
                    <option value="신규">신규</option>
                    <option value="돔하우스">돔하우스</option>
                    <option value="보트">보트</option>
                    <option value="키즈">키즈</option>
                    <option value="호숫가">호숫가</option>
                    <option value="키클라데스_주택">키클라데스 주택</option>
                    <option value="세상의_꼭대기">세상의 꼭대기</option>
                    <option value="상징적_도시">상징적 도시</option>
                    <option value="유서_깊은_주택">유서 깊은 주택</option>
                    <option value="저택">저택</option>
                    <option value="A자형_주택">A자형 주택</option>
                    <option value="북극">북극</option>
                    <option value="섬">섬</option>
                    <option value="서핑">서핑</option>
                    <option value="캠핑카">캠핑카</option>
                    <option value="전문가급_주방">전문가급 주방</option>
                    <option value="유르트">유르트</option>
                    <option value="민수">민수</option>
                    <option value="마차">마차</option>
                    <option value="스키_타고_출입">스키 타고 출입</option>
                    <option value="카사_파르티쿨라르">카사 파르티쿨라르</option>
                    <option value="컨테이너하우스">컨테이너하우스</option>
                    <option value="그랜드_피아노">그랜드 피아노</option>
                    <option value="헛간">헛간</option>
                    <option value="타워">타워</option>
                    <option value="사막">사막</option>
                    <option value="하우스보트">하우스보트</option>
                    <option value="무장애">무장애</option>
                    <option value="리아드">리아드</option>
                    <option value="담무소">담무소</option>
                    <option value="트룰로">트룰로</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute right-[10px] pointer-events-none"
                  />
                </label>
              </section>
              {/* 게스트 */}
              <section className="flex flex-row justify-between items-center">
                <HostingRegisterItemTitle text={"게스트"} require />
                <div className="flex flex-row justify-center items-center space-x-4 text-gray-600">
                  <button
                    onClick={onClickGuestNumDown}
                    type="button"
                    className={`border-[#cccccc] border-solid border-[1px] aspect-square w-10 rounded-full text-3xl font-light flex flex-row justify-center items-center hover:bg-gray-100 active:bg-white ${
                      guestNum === 1 ? "pointer-events-none" : ""
                    }`}
                  >
                    -
                  </button>
                  <div className="w-8 flex flex-row justify-center">
                    {guestNum}
                  </div>
                  <button
                    onClick={onClickGuestNumUp}
                    type="button"
                    className="border-[#cccccc] border-solid border-[1px] aspect-square w-10 rounded-full text-2xl font-light flex flex-row justify-center items-center hover:bg-gray-100 active:bg-white"
                  >
                    +
                  </button>
                </div>
              </section>

              {/* 침실 */}
              <section className="flex flex-row justify-between items-center">
                <HostingRegisterItemTitle text={"침실"} require />
                <div className="flex flex-row items-center space-x-4 text-gray-600">
                  <button
                    onClick={onClickBedroomsNumDown}
                    type="button"
                    className={`border-[#cccccc] border-solid border-[1px] aspect-square w-10 rounded-full text-3xl font-light flex flex-row justify-center items-center hover:bg-gray-100 active:bg-white ${
                      bedroomsNum === 0 ? "pointer-events-none" : ""
                    }`}
                  >
                    -
                  </button>
                  <div className="w-8 flex flex-row justify-center">
                    {bedroomsNum}
                  </div>
                  <button
                    onClick={onClickBedroomsNumUp}
                    type="button"
                    className="border-[#cccccc] border-solid border-[1px] aspect-square w-10 rounded-full text-2xl font-light flex flex-row justify-center items-center hover:bg-gray-100 active:bg-white"
                  >
                    +
                  </button>
                </div>
              </section>

              {/* 침대 */}
              <section className="flex flex-row justify-between items-center">
                <HostingRegisterItemTitle text={"침대"} require />
                <div className="flex flex-row items-center space-x-4 text-gray-600">
                  <button
                    onClick={onClickBedsNumDown}
                    type="button"
                    className={`border-[#cccccc] border-solid border-[1px] aspect-square w-10 rounded-full text-3xl font-light flex flex-row justify-center items-center hover:bg-gray-100 active:bg-white ${
                      bedsNum === 1 ? "pointer-events-none" : ""
                    }`}
                  >
                    -
                  </button>
                  <div className="w-8 flex flex-row justify-center">
                    {bedsNum}
                  </div>
                  <button
                    onClick={onClickBedsNumUp}
                    type="button"
                    className="border-[#cccccc] border-solid border-[1px] aspect-square w-10 rounded-full text-2xl font-light flex flex-row justify-center items-center hover:bg-gray-100 active:bg-white"
                  >
                    +
                  </button>
                </div>
              </section>

              {/* 욕실 */}
              <section className="flex flex-row justify-between items-center">
                <HostingRegisterItemTitle text={"욕실"} require />
                <div className="flex flex-row items-center space-x-4 text-gray-600">
                  <button
                    onClick={onClickBathroomsNumDown}
                    type="button"
                    className={`border-[#cccccc] border-solid border-[1px] aspect-square w-10 rounded-full text-3xl font-light flex flex-row justify-center items-center hover:bg-gray-100 active:bg-white ${
                      bathroomsNum === 1 ? "pointer-events-none" : ""
                    }`}
                  >
                    -
                  </button>
                  <div className="w-8 flex flex-row justify-center">
                    {bathroomsNum}
                  </div>
                  <button
                    onClick={onClickBathroomsNumUp}
                    type="button"
                    className="border-[#cccccc] border-solid border-[1px] aspect-square w-10 rounded-full text-2xl font-light flex flex-row justify-center items-center hover:bg-gray-100 active:bg-white"
                  >
                    +
                  </button>
                </div>
              </section>

              {/* 설명 */}
              <section>
                <HostingRegisterItemTitle text={"설명"} require mb />
                <textarea
                  onBlur={onBlurInfo}
                  onChange={(event) => setInfo(event.target.value)}
                  className="w-full h-60 border-[#cccccc] border-solid border-[1px] rounded-md text-gray-600 text-lg p-4"
                  placeholder="숙소를 설명해주세요"
                />
              </section>

              {/* 사진 등록 */}
              <section>
                <HostingRegisterItemTitle text={"사진"} require mb />
                <PictureUpload
                  picture={picture}
                  onChangePicture={onChangePicture}
                />
              </section>
            </section>

            {/* 버튼을 누르면 서버에 제출되도록 함수 만들기 */}
            <div className="mb-20">
              <RedBtn
                onClick={onClickSubmitBtn}
                type={"submit"}
                text={"등록하기"}
                width={"full"}
                textSize={"md"}
              />
            </div>
          </form>
        </div>
      </main>
      <Footer />
      <NavApp />
    </>
  );
}

// 추가하면 좋은 것
// 숙소 편의시설 (와이파이, 소화기, 구급상자, ...)

// 평점, 게스트 선호는 필요없는 듯?
