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
import ProfileImage from "@/components/ProfileImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// 회원가입이 잘 되면
// 각 부분 유효성 검사하기
export default function SignUp() {
  const router = useRouter();

  // 프로필 사진
  const [profileImg, setProfileImg] = useState("/profile_basic_img.png");

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
  };

  // 이메일
  const onBlurEmail = (event) => {
    setEmail(event.target.value);
  };

  // 비밀번호
  const onBlurPassword = (event) => {
    setPassword(event.target.value);
  };

  // 국가
  const onBlurCountry = (event) => {
    setCountry(event.target.value);
  };

  // 전화번호
  const onBlurPhone = (event) => {
    setPhone(event.target.value);

    // 전화번호 유효성 검사 (ex: 01012345678)
    const regex = /^010([1-9]{1}[0-9]{2}|[0-9]{1}[1-9]{1}[0-9]{1})[0-9]{4}$/;
    const isValidPhone = regex.test(phone.replace(/[\s\-]/g, ""));

    setIsValid(isValidPhone);
  };

  // 생년월일
  const onBlurBirthDate = (event) => {
    // 형식 맞추기 위해 뒤에 "T00:00:00" 추가함
    setBirthDate(event.target.value + "T00:00:00");
  };

  // 서버로 회원가입 요청
  // const onClickSubmitBtn = async () => {
  //   const request = {
  //     username: name,
  //     email,
  //     password,
  //     country,
  //     phone,
  //     birthDate,
  //   };

  //   console.log(request);
  //   try {
  //     // 서버 api 호출
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_SERVER_URL}/user/signup`,
  //       request,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "ngrok-skip-browser-warning": "69420",
  //         },
  //       }
  //     );
  //     console.log(response);

  //     // 회원가입 성공하면 메인페이지로 이동함
  //     router.push("/");
  //   } catch (error) {
  //     console.log(error);
  //     alert("회원가입에 실패했습니다.");
  //   }
  // };

  const onClickSubmitBtn = async () => {
    // API 요청을 보내기 위한 데이터 준비
    const formData = new FormData();
    formData.append(
      // 서버측과 정한 FormData 객체에 데이터를 추가하는 데 사용되는 키(key) : stay
      "stay",
      JSON.stringify({
        username: name,
        email,
        password,
        country,
        phone,
        birthDate,
      })
    );

    formData.append("profileImg", profileImg);

    console.log("회원가입 버튼 누름");
    console.log("username : ", name);
    console.log("email : ", email);
    console.log("password : ", password);
    console.log("country : ", country);
    console.log("phone : ", phone);
    console.log("birthDate : ", birthDate);
    try {
      // 서버 API 호출
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/user/signup`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log(response);

      // 회원가입 성공 시 메인 페이지로 이동한다.
      router.push("/");
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
        <form
          onSubmit={(event) => event.preventDefault()}
          className="bnb_md_xl:pt-[80px] bnb_sm_md:px-[24px] bnb_sm_md:w-screen"
        >
          <div className="flex flex-row items-center">
            <h1 className="text-[32px] font-[500]">회원가입</h1>
            <span className="text-red-500 ml-4">
              (* 는 필수 입력사항입니다.)
            </span>
          </div>
          <div className="flex bnb_sm_md:flex-col bnb_lg_xl:flex-row mt-8 mb-24">
            <section className="bnb_lg_xl:w-[300px] mb-4">
              <HostingRegisterItemTitle text={"프로필 사진"} mb />
              <ProfileImage
                profileImg={profileImg}
                setProfileImg={setProfileImg}
              />
            </section>
            <section className="bnb_lg_xl:w-[600px]">
              <div>
                <section className="space-y-8">
                  {/* 성함 */}
                  <section>
                    <HostingRegisterItemTitle text={"성함"} require mb />
                    <input
                      onBlur={onBlurName}
                      // onChange={(event) => setName(event.target.value)}
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
                      // onChange={(event) => setEmail(event.target.value)}
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
                      // onChange={(event) => setPassword(event.target.value)}
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
                      // onChange={(event) => setCountry(event.target.value)}
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
                      // onChange={(event) => setPhone(event.target.value)}
                      placeholder="01012345678"
                      className="border-[1px] border-solid border-[#cccccc] w-full rounded-md h-[55px] px-4 appearance-none"
                    ></input>
                  </section>

                  {/* 생년월일 */}
                  <section>
                    <HostingRegisterItemTitle text={"생년월일"} require mb />
                    <input
                      onBlur={onBlurBirthDate}
                      // onChange={(event) => setBirthDate(event.target.value)}
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
              </div>
            </section>
          </div>
        </form>
      </main>
      <Footer />
      <NavApp />
    </>
  );
}
//
