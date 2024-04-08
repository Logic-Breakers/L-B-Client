import axios from "axios";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavApp from "@/components/Header/Nav/NavApp";
import Address from "@/components/Address";
import HostingRegisterItemTitle from "@/components/Hosting/registerPage/HostingRegisterItemTitle";
import HouseImages from "@/components/HouseImages";
import RedBtn from "@/components/Buttons/RedBtn";
import AppBackPageBtn from "@/components/Buttons/AppBackPageBtn";

import DateRangeCalender from "@/components/DateRangeCalender";

import CountryData from "@/components/Datas/CountryData";
import PropertyTypeData from "@/components/Datas/PropertyTypeData";
import PlaceTypeData from "@/components/Datas/PlaceTypeData";
import CategoryItemData from "@/components/Datas/CategoryItemData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useRouter } from "next/router";

// 기본적인 기능이 다 구현되면 유효성 검사 설정하기!
export default function Register() {
  const router = useRouter();

  // 국가, 요금, 카테고리(category), 건물유형(propertyType), 숙소유형(placeType), 설명(info)
  const [houseName, setHouseName] = useState("");
  const [country, setCountry] = useState("none");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("none");
  const [placeType, setPlaceType] = useState("none");
  const [info, setInfo] = useState("");
  const [category, setCategory] = useState("");

  // 시작일, 마감일
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // 우편번호, 주소, 상세주소 (Address.jsx)
  const [addrNum, setAddrNum] = useState("");
  const [addr, setAddr] = useState("");
  const [detailAddr, setDetailAddr] = useState("");

  // 사진 (HouseImages.jsx)
  const [houseImages, setHouseImages] = useState([]);

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

  // 시작일
  const onBlurStartDate = (event) => {
    setStartDate(event.target.value + "T00:00:00");
    console.log("시작일 : ", startDate);
  };

  // 마감일
  const onBlurEndDate = (event) => {
    setEndDate(event.target.value + "T00:00:00");
    console.log("마감일 : ", endDate);
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

  // Base64 Data URL(imageUrl)을 Blob으로 변환하는 함수
  const convertDataURLToFile = async (dataURL, fileName) => {
    // Base64 Data URL을 Blob으로 변환
    const response = await axios.get(dataURL, {
      responseType: "blob",
    });
    const blob = response.data;

    // Blob을 File 객체로 변환
    const houseImgFile = new File([blob], fileName, { type: blob.type });

    // 변환된 File 객체 변환
    return houseImgFile;
  };

  // 등록 버튼 클릭 시 실행되는 함수
  const onClickSubmitBtn = async () => {
    console.log("숙소 등록하기 버튼 누름");
    console.log("숙소 이름 : ", houseName);
    console.log("국가 : ", country);
    console.log("우편번호 : ", addrNum);
    console.log("주소 : ", addr);
    console.log("상세주소 : ", detailAddr);
    console.log("시작일 : ", startDate);
    console.log("마감일 : ", endDate);
    console.log("요금 : ", price);
    console.log("건물 유형 : ", propertyType);
    console.log("숙소 유형 : ", placeType);
    console.log("카테고리 : ", category);
    console.log("게스트 : ", guestNum);
    console.log("침실 : ", bedroomsNum);
    console.log("침대 : ", bedsNum);
    console.log("욕실 : ", bathroomsNum);
    console.log("설명 : ", info);
    console.log("숙소 사진들 : ", houseImages);

    // API 요청을 보내기 위한 FormData 객체 생성
    const formData = new FormData();
    // stay 데이터(이미지를 제외한 나머지 데이터)를 JSON 형식으로 추가
    formData.append(
      "stay",
      new Blob(
        [
          JSON.stringify({
            houseName,
            country,
            address: addr,
            detailAddress: detailAddr,
            startDate,
            endDate,
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

    // 이미지 파일을 FormData에 추가
    // --> 현재는 houseImages의 배열의 각 요소가 Base64 데이터 URL로 구성되어 있다.
    // --> 그래서 FormData에 이미지 파일을 바로 추가할 수 없기에 에러가 발생하는 것 같다.
    // --> 해결방법 : Bases64 데이터 URL을 File 객체로 변환하고, FormData에 파일을 추가한다.
    // (--> 모든 파일을 한 번에 변환할 수 없으므로, for문을 통해 배열 요소를 하나씩 변환해준다.)

    // 이미지 파일을 FormData에 추가
    if (houseImages.length >= 1) {
      // houseImages 배열의 각 요소를 순회하며 처리
      console.log("파일 객체로 변환 전 이미지", houseImages);
      for (let i = 0; i < houseImages.length; i++) {
        // Base64 Data URL을 File 객체로 변환
        const houseImgFile = await convertDataURLToFile(
          houseImages[i],
          `house_images_${i}`
        );
        // FormData에 File을 추가
        formData.append("image", houseImgFile);
        console.log("파일 객체로 변환 후 이미지", houseImgFile);
      }
    }

    try {
      // 서버 API 호출
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/stays?categoryName=${category}`,
        formData,
        {
          headers: {
            // Authorization: "Bearer " + localStorage.getItem("acToken"),
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJBRE1JTiIsIlVTRVIiXSwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20iLCJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MTA2NjU2MjYsImV4cCI6MTcxMDY2NTc0Nn0.r-R3XgYipekgQjtBGUjryJNc5XyAh51u8fbo0jXqZW8",
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
      <AppBackPageBtn />
      <main className="flex flex-row justify-center w-full min-h-screen mt-[40px] bnb_sm:mt-[80px]">
        <div className="w-[600px] bnb_md_xl:pt-[80px] bnb_sm:px-[24px]">
          <div className="flex flex-row items-center">
            <h1 className="text-[32px] font-semibold">호스팅 시작하기</h1>
            <span className="text-red-500 font-semibold ml-4">
              (* 는 필수 입력사항입니다.)
            </span>
          </div>

          <form onSubmit={(event) => event.preventDefault()}>
            <h2 className="text-xl text-gray-600">기본정보를 알려주세요</h2>
            <section className="my-8 space-y-10">
              {/* 숙소 이름 */}
              <section>
                <HostingRegisterItemTitle text={"숙소 이름"} require mb />
                <input
                  required
                  onBlur={onBlurHouseName}
                  // onChange={(event) => setHouseName(event.target.value)}
                  type="text"
                  className="border-solid border-[1px] border-[#cccccc] w-full h-[55px] rounded-md text-md text-gray-600 p-4 placeholder:text-gray-600"
                  placeholder="숙소 이름을 적어주세요"
                ></input>
              </section>

              {/* 국가 */}
              <section>
                <HostingRegisterItemTitle text={"국가"} require mb />
                <label
                  required
                  onBlur={onBlurCountry}
                  // onChange={(event) => setCountry(event.target.value)}
                  htmlFor="country"
                  className="flex flex-row justify-between items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] relative"
                >
                  <select
                    id="country"
                    className="appearance-none w-full h-full pl-4 rounded-md text-md text-gray-600"
                    defaultValue={""}
                  >
                    <option value="">국가를 선택해주세요</option>
                    {CountryData.map((el, index) => (
                      <option key={index} value={el.value}>
                        {el.text}
                      </option>
                    ))}
                  </select>

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute right-[10px] pointer-events-none"
                  />
                </label>
              </section>

              {/* 주소 */}
              <section>
                <HostingRegisterItemTitle text={"주소"} require mb />
                <Address
                  addrNum={addrNum}
                  setAddrNum={setAddrNum}
                  addr={addr}
                  setAddr={setAddr}
                  detailAddr={detailAddr}
                  setDetailAddr={setDetailAddr}
                />
              </section>

              {/* 시작일 & 마감일 */}
              <section className="flex flex-row gap-x-8">
                <section className="w-1/2">
                  <HostingRegisterItemTitle text={"시작일"} require mb />
                  <input
                    required
                    onBlur={onBlurStartDate}
                    // onChange={(event) => setStartDate(event.target.value)}
                    type="date"
                    className="border-solid border-[1px] border-[#cccccc] w-full h-[55px] rounded-md text-md text-gray-600 p-4 placeholder:text-gray-600"
                  />
                </section>
                <section className="w-1/2">
                  <HostingRegisterItemTitle text={"마감일"} require mb />
                  <input
                    required
                    onBlur={onBlurEndDate}
                    // onChange={(event) => setEndDate(event.target.value)}
                    type="date"
                    className="border-solid border-[1px] border-[#cccccc] w-full h-[55px] rounded-md text-md text-gray-600 p-4 placeholder:text-gray-600"
                  />
                </section>
              </section>

              {/* test / rooms페이지의 달력처럼 만드는 중 */}
              {/* <section>
                <DateRangeCalender />
              </section> */}

              {/* 요금 */}
              <section>
                <HostingRegisterItemTitle text={"요금"} require mb />
                <div className="relative flex flex-row items-center">
                  <input
                    required
                    onBlur={onBlurPrice}
                    // onChange={(event) => setPrice(event.target.value)}
                    // value={price}
                    type="number"
                    className="text-center border-solid border-[1px] border-[#cccccc] px-6 placeholder:text-center w-[150px] h-[55px] rounded-md text-md text-gray-600 placeholder:text-gray-600"
                    placeholder="10000"
                  ></input>
                  <div className="absolute left-28 text-gray-600 text-sm">
                    원/박
                  </div>
                </div>
              </section>

              {/* 건물 유형 */}
              <section>
                <HostingRegisterItemTitle text={"건물 유형"} require mb />
                <label
                  required
                  onBlur={onBlurPropertyType}
                  // onChange={(event) => setPropertyType(event.target.value)}
                  htmlFor="propertyType"
                  className="flex flex-row justify-between items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] relative"
                >
                  <select
                    id="propertyType"
                    className="appearance-none w-full h-full pl-4 rounded-md text-md text-gray-600"
                    defaultValue={""}
                  >
                    <option value="">건물 유형을 선택해주세요</option>
                    {PropertyTypeData.map((el, index) => (
                      <option key={index} value={el.value}>
                        {el.text}
                      </option>
                    ))}
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
                  required
                  onBlur={onBlurPlaceType}
                  // onChange={(event) => setPlaceType(event.target.value)}
                  htmlFor="placeType"
                  className="flex flex-row justify-between items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] relative"
                >
                  <select
                    id="placeType"
                    className="appearance-none w-full h-full pl-4 rounded-md text-md text-gray-600"
                    defaultValue={""}
                  >
                    <option value="">숙소 유형을 선택해주세요</option>
                    {PlaceTypeData.map((el, index) => (
                      <option key={index} value={el.value}>
                        {el.text}
                      </option>
                    ))}
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
                  required
                  onBlur={onBlurCategory}
                  // onChange={(event) => setCategory(event.target.value)}
                  htmlFor="category"
                  className="flex flex-row justify-between items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] relative"
                >
                  <select
                    id="category"
                    className="appearance-none w-full h-full pl-4 rounded-md text-md text-gray-600"
                    defaultValue={""}
                  >
                    <option value="">카테고리를 선택해주세요</option>
                    {CategoryItemData.map((el, index) => (
                      <option key={index} value={el.value}>
                        {el.text}
                      </option>
                    ))}
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
                  required
                  onBlur={onBlurInfo}
                  // onChange={(event) => setInfo(event.target.value)}
                  className="w-full h-60 border-[#cccccc] border-solid border-[1px] rounded-md text-gray-600 text-lg p-4 placeholder:text-gray-600"
                  placeholder="숙소를 설명해주세요"
                />
              </section>

              {/* 사진 */}
              <section>
                <HostingRegisterItemTitle text={"사진"} require mb />
                <HouseImages
                  setHouseImages={setHouseImages}
                  houseImages={houseImages}
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
