import Title from "@/components/Title";
import HeaderBasic from "@/components/Header/HeaderBasic";
import Footer from "@/components/Footer/Footer";
import AccountItemTitle from "@/components/Account/AccountItemTitle";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faUserPen,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

// 계정 -> 개인정보
export default function PersonalInfo() {
  // 이름, 이메일, 비밀번호, 국가, 전화번호
  const [nameEdit, setNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [countryEdit, setCountryEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);

  const [name, setName] = useState("○○○");
  const [email, setEmail] = useState("abcde@example.com");
  const [password, setPassword] = useState("∙∙∙∙∙∙∙∙");
  const [country, setCountry] = useState("대한민국");
  const [phone, setPhone] = useState("01012345678");

  const handleNameEdit = () => {
    setNameEdit(!nameEdit);
    setEmailEdit(false);
    setPasswordEdit(false);
    setCountryEdit(false);
    setPhoneEdit(false);
  };

  const handleEmailEdit = () => {
    setNameEdit(false);
    setEmailEdit(!emailEdit);
    setPasswordEdit(false);
    setCountryEdit(false);
    setPhoneEdit(false);
  };

  const handlePasswordEdit = () => {
    setNameEdit(false);
    setEmailEdit(false);
    setPasswordEdit(!passwordEdit);
    setCountryEdit(false);
    setPhoneEdit(false);
  };

  const handleCountryEdit = () => {
    setNameEdit(false);
    setEmailEdit(false);
    setPasswordEdit(false);
    setCountryEdit(!countryEdit);
    setPhoneEdit(false);
  };
  const handlePhoneEdit = () => {
    setNameEdit(false);
    setEmailEdit(false);
    setPasswordEdit(false);
    setCountryEdit(false);
    setPhoneEdit(!phoneEdit);
    setBirthDateEdit(false);
  };

  const onBlurName = () => {
    setName(name);
    console.log("name : ", name);
  };

  const onBlurEmail = () => {
    setEmail(email);
    console.log("email : ", email);
  };

  const onBlurPassword = () => {
    setPassword(password);
    console.log("password : ", password);
  };

  const onBlurCountry = () => {
    setCountry(country);
    console.log("country : ", country);
  };

  const onBlurPhone = () => {
    setPhone(phone);
    console.log("phone : ", phone);
  };

  const handleNameSubmit = () => {
    console.log("Name submit");
  };

  const handleEmailSubmit = () => {
    console.log("Email submit");
  };

  const handlePasswordSubmit = () => {
    console.log("Password submit");
  };

  const handleCountrySubmit = () => {
    console.log("Country submit");
  };

  const handlePhoneSubmit = () => {
    console.log("Phone submit");
  };

  // 나중에 유저의 이름과 이메일 전화번호 등을 받아서 넣기
  return (
    <>
      <Title
        text={
          "에어비앤비: 휴가용 임대 숙소, 통나무집, 비치 하우스, 독특한 숙소 및 체험"
        }
      />
      <HeaderBasic />
      <main className="bnb_md_xl:mt-[80px] flex flex-row w-full min-h-screen">
        <div className="w-[1048px] px-[24px] mx-auto bnb_sm:mt-[100px]">
          <AccountItemTitle title_route={"개인정보"} title_h2={"개인정보"} />
          <div className="flex flex-row justify-between">
            {/* 왼쪽 개인정보 변경 부분 */}
            <article className="bnb_xl:w-[596px] bnb_md_lg:w-[58%] bnb_sm:w-full  ">
              {/* 이름 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>
                    <div>이름</div>
                    <div className="text-[#9a9a9a] text-[14px] mt-[4px]">
                      {nameEdit
                        ? "허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다."
                        : name +
                          "  <-- 서버로부터 받아온 데이터에서 유저 정보 넣기"}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleNameEdit}
                    className="text-[14px] font-[500] underline"
                  >
                    {nameEdit ? "취소" : "수정"}
                  </button>
                </div>
                {nameEdit && (
                  <form onSubmit={(event) => event.preventDefault()}>
                    <div className="flex flex-row justify-between gap-[20px] my-[20px]">
                      <input
                        required
                        type="text"
                        onBlur={onBlurName}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Name"
                        className="border-[1px] border-solid border-[#cccccc] w-full rounded-md px-4 py-3"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      onClick={handleNameSubmit}
                      className="bg-black text-white w-[76px] h-[48px] px-[24px] py-[14px] rounded-[10px] flex flex-row justify-center items-center active:scale-95 duration-[0.1s]"
                    >
                      저장
                    </button>
                  </form>
                )}
              </section>

              {/* 이메일 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>
                    <div>이메일</div>
                    <div className="text-[#9a9a9a] text-[14px] mt-[4px]">
                      {emailEdit
                        ? "언제든지 확인하실 수 있는 주소를 사용하세요"
                        : email +
                          "  <-- 서버로부터 받아온 데이터에서 유저 정보 넣기"}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleEmailEdit}
                    className="text-[14px] font-[500] underline"
                  >
                    {emailEdit ? "취소" : "수정"}
                  </button>
                </div>

                {emailEdit && (
                  <form onSubmit={(event) => event.preventDefault()}>
                    <div className="flex flex-row justify-between gap-[20px] my-[20px]">
                      <input
                        required
                        type="email"
                        onBlur={onBlurEmail}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                        className="border-[1px] border-solid border-[#cccccc] w-full rounded-md px-4 py-3"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      onClick={handleEmailSubmit}
                      className="bg-black text-white w-[76px] h-[48px] px-[24px] py-[14px] rounded-[10px] flex flex-row justify-center items-center active:scale-95 duration-[0.1s]"
                    >
                      저장
                    </button>
                  </form>
                )}
              </section>

              {/* 비밀번호 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>
                    <div>비밀번호</div>
                    <div className="text-[#9a9a9a] text-[14px] mt-[4px]">
                      {passwordEdit
                        ? "변경하실 비밀번호를 입력해주세요"
                        : password +
                          "  <-- 서버로부터 받아온 데이터에서 유저 정보 넣기"}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handlePasswordEdit}
                    className="text-[14px] font-[500] underline"
                  >
                    {passwordEdit ? "취소" : "수정"}
                  </button>
                </div>

                {passwordEdit && (
                  <form onSubmit={(event) => event.preventDefault()}>
                    <div className="flex flex-row justify-between gap-[20px] my-[20px]">
                      <input
                        required
                        type="password"
                        onBlur={onBlurPassword}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="∙∙∙∙∙∙∙∙"
                        className="border-[1px] border-solid border-[#cccccc] w-full rounded-md px-4 py-3"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      onClick={handlePasswordSubmit}
                      className="bg-black text-white w-[76px] h-[48px] px-[24px] py-[14px] rounded-[10px] flex flex-row justify-center items-center active:scale-95 duration-[0.1s]"
                    >
                      저장
                    </button>
                  </form>
                )}
              </section>

              {/* 국가 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>
                    <div>국적</div>
                    <div className="text-[#9a9a9a] text-[14px] mt-[4px]">
                      {countryEdit
                        ? "바뀌신 국적을 선택해주세요"
                        : country +
                          "  <-- 서버로부터 받아온 데이터에서 유저 정보 넣기"}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCountryEdit}
                    className="text-[14px] font-[500] underline"
                  >
                    {countryEdit ? "취소" : "수정"}
                  </button>
                </div>

                {countryEdit && (
                  <form onSubmit={(event) => event.preventDefault()}>
                    <label
                      onBlur={onBlurCountry}
                      onChange={(event) => setCountry(event.target.value)}
                      htmlFor="country"
                      className="flex flex-row justify-between items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[50px] relative my-[20px]"
                    >
                      <select
                        id="country"
                        className="appearance-none w-full h-full pl-4 rounded-md text-md text-gray-600"
                        defaultValue={""}
                      >
                        <option value="">국적을 선택해주세요</option>
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
                    <button
                      type="submit"
                      onClick={handleCountrySubmit}
                      className="bg-black text-white w-[76px] h-[48px] px-[24px] py-[14px] rounded-[10px] flex flex-row justify-center items-center active:scale-95 duration-[0.1s]"
                    >
                      저장
                    </button>
                  </form>
                )}
              </section>

              {/* 전화번호 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>
                    <div>전화번호</div>
                    <div className="text-[#9a9a9a] text-[14px] mt-[4px]">
                      {phoneEdit
                        ? "자주 사용하시는 전화번호를 입력해주세요"
                        : phone +
                          "  <-- 서버로부터 받아온 데이터에서 유저 정보 넣기"}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handlePhoneEdit}
                    className="text-[14px] font-[500] underline"
                  >
                    {phoneEdit ? "취소" : "수정"}
                  </button>
                </div>

                {phoneEdit && (
                  <form onSubmit={(event) => event.preventDefault()}>
                    <div className="flex flex-row justify-between gap-[20px] my-[20px]">
                      <input
                        required
                        type="tel"
                        onBlur={onBlurPhone}
                        onChange={(event) => setPhone(event.target.value)}
                        placeholder="01012345678"
                        className="border-[1px] border-solid border-[#cccccc] w-full rounded-md px-4 py-3"
                      ></input>
                    </div>
                    <button
                      type="submit"
                      onClick={handlePhoneSubmit}
                      className="bg-black text-white w-[76px] h-[48px] px-[24px] py-[14px] rounded-[10px] flex flex-row justify-center items-center active:scale-95 duration-[0.1s]"
                    >
                      저장
                    </button>
                  </form>
                )}
              </section>
            </article>

            {/* 오른쪽 상자 부분 */}
            <article className="bnb_sm:hidden bnb_xl:w-[334px] bnb_md_lg:w-[32%] border-[1px] border-solid border-[#DDDDDD] rounded-[12px] p-[24px] mb-[40px] h-fit">
              <section>
                <FontAwesomeIcon
                  icon={faUserShield}
                  className="text-[36px] text-[#E21C5E]"
                />
                <div className="my-[16px] text-[20px] font-[700]">
                  여기에 내 개인정보가 표시되지 않는 이유가 무엇인가요?
                </div>
                <div className="text-[#9a9a9a]">
                  신분이 노출되지 않도록 일부 계정 정보가 숨김 처리되었습니다.
                </div>
                <div className="my-[32px] border-b-[1px]"></div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon={faUserPen}
                  className="text-[36px] text-[#E21C5E]"
                />
                <div className="my-[16px] text-[20px] font-[700]">
                  수정할 수 있는 세부 정보는 무엇인가요?
                </div>
                <div className="text-[#9a9a9a]">
                  연락처 정보와 개인정보를 수정하실 수 있습니다. 본인 인증 시 이
                  정보를 사용했다면 호스팅을 계속하기 위해 또는 다음번 예약 진행
                  시 다시 인증을 받으셔야 합니다.
                </div>
                <div className="my-[32px] border-b-[1px]"></div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-[36px] text-[#E21C5E]"
                />
                <div className="my-[16px] text-[20px] font-[700]">
                  다른 사람에게 어떤 정보가 공개되나요?
                </div>
                <div className="text-[#9a9a9a]">
                  에어비앤비는 예약이 확정된 후에만 호스트 및 게스트의 연락처
                  정보를 공개합니다.
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
