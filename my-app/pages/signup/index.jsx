import axios from "axios";
import Title from "@/components/Title";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NavApp from "@/components/Header/Nav/NavApp";

import { useState } from "react";
import { useRouter } from "next/router";

import HostingRegisterItemTitle from "@/components/Hosting/registerPage/HostingRegisterItemTitle";
import Warning from "@/components/Warning";
import RedBtn from "@/components/Buttons/RedBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// 회원가입이 잘 되면
// 각 부분 유효성 검사하기
export default function SignUp() {
  const router = useRouter();

  // 이름, 이메일, 비밀번호, 국가, 전화번호
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("none");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  // 유효성 검사
  const [isValid, setIsValid] = useState(false);

  // 유저 이름
  const onBlurName = (event) => {
    setName(event.target.value);
    console.log("유저 이름 : ", name);
  };

  // 이메일
  const onBlurEmail = (event) => {
    setEmail(event.target.value);
    console.log("이메일 : ", email);
  };

  // 비밀번호
  const onBlurPassword = (event) => {
    setPassword(event.target.value);
    console.log("비밀번호 : ", password);
  };

  // 국가
  const onBlurCountry = (event) => {
    setCountry(event.target.value);
    console.log("국가 : ", country);
  };

  // 전화번호
  const onBlurPhone = (event) => {
    setPhone(event.target.value);
    console.log("전화번호 : ", phone);

    // 전화번호 유효성 검사 (ex: 01012345678)
    const regex = /^010([1-9]{1}[0-9]{2}|[0-9]{1}[1-9]{1}[0-9]{1})[0-9]{4}$/;
    const isValidPhone = regex.test(phone.replace(/[\s\-]/g, ""));

    setIsValid(isValidPhone);
  };

  // 생년월일
  const onBlurBirthDate = (event) => {
    // 형식 맞추기 위해 뒤에 "T00:00:00" 추가함
    setBirthDate(event.target.value + "T00:00:00");
    console.log("생년월일 : ", birthDate);
  };

  // 서버로 회원가입 요청
  const onClickSubmitBtn = async () => {
    const request = {
      username: name,
      email,
      password,
      country,
      phone,
      birthDate,
    };

    console.log(request);
    try {
      // 서버 api 호출
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/signup`,
        request,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log(response);

      // 성공적으로 회원가입이 된다면,
      // 메인페이지로 이동하기 전에 받아온 토큰 로컬스토리지에 저장하기!

      // 회원가입 성공하면 메인페이지로 이동함
      // router.push("/");
    } catch (error) {
      console.log(error);
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <>
      <Title text={"회원가입 - Airbnb"} />
      <Header fixed />
      <main className="flex flex-row justify-center w-full min-h-screen mt-[40px]">
        <div className="w-[600px] bnb_md_xl:pt-[80px] bnb_sm:px-[24px]">
          <h1 className="text-[32px] font-[500]">회원가입</h1>
          <form onSubmit={(event) => event.preventDefault()}>
            <section className="mt-8 mb-20 space-y-8">
              {/* 이름 */}
              <section>
                <HostingRegisterItemTitle text={"이름"} require mb />
                <input
                  onBlur={onBlurName}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  className="border-solid border-[1px] border-[#cccccc] w-full h-[55px] rounded-md text-md text-gray-600 p-4"
                  placeholder="성함을 적어주세요"
                ></input>
              </section>

              {/* 이메일 */}
              <section>
                <HostingRegisterItemTitle text={"이메일"} require mb />
                <input
                  onBlur={onBlurEmail}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  className="border-solid border-[1px] border-[#cccccc] w-full h-[55px] rounded-md text-md text-gray-600 p-4"
                  placeholder="abcde@example.com"
                ></input>
              </section>

              {/* 비밀번호 */}
              <section>
                <HostingRegisterItemTitle text={"비밀번호"} require mb />
                <input
                  onBlur={onBlurPassword}
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  className="border-solid border-[1px] border-[#cccccc] w-full h-[55px] rounded-md text-md text-gray-600 p-4"
                  placeholder="∙∙∙∙∙∙∙∙"
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
                    defaultValue={"none"}
                  >
                    <option value="none">국가를 선택해주세요</option>
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

              {/* 전화번호 */}
              <section>
                <HostingRegisterItemTitle text={"전화번호"} require mb />
                <input
                  required
                  type="tel"
                  onBlur={onBlurPhone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="ex) 01012345678"
                  className="border-[1px] border-solid border-[#cccccc] w-full rounded-md h-[55px] px-4 appearance-none"
                ></input>
              </section>

              {/* 생년월일 */}
              <section>
                <HostingRegisterItemTitle text={"생년월일"} require mb />
                <input
                  onBlur={onBlurBirthDate}
                  onChange={(event) => setBirthDate(event.target.value)}
                  type="date"
                  className="border-solid border-[1px] border-[#cccccc] w-full h-[55px] rounded-md text-md text-gray-600 p-4"
                ></input>
              </section>

              {/* 버튼을 누르면 서버에 제출되도록 함수 만들기 */}
              <RedBtn
                onClick={onClickSubmitBtn}
                type={"submit"}
                text={"회원가입"}
                width={"full"}
                textSize={"md"}
              />
            </section>
          </form>
        </div>
      </main>
      <Footer />
      <NavApp />
    </>
  );
}
//
