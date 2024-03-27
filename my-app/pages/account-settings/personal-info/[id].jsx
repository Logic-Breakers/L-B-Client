import axios from "axios";
import Title from "@/components/Title";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import BlackBtn from "@/components/Buttons/BlackBtn";
import AccountItemTitle from "@/components/Account/AccountItemTitle";
import ProfileImage from "@/components/ProfileImage";

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

// 계정 -> 개인정보
export default function PersonalInfo() {
  // 프로필 사진, 이름, 이메일, 비밀번호, 전화번호
  const [profileImgEdit, setProfileImgEdit] = useState(false);
  const [userNameEdit, setUserNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);

  // 프로필 사진, 이름, 이메일, 비밀번호, 전화번호
  // 데이터 가져온 값 넣어주기
  const [profileImg, setProfileImg] = useState("");
  const [userName, setUserName] = useState("홍길동");
  const [email, setEmail] = useState("abcde@example.com");
  const [password, setPassword] = useState("12341234");
  const [phone, setPhone] = useState("01012345678");

  // 프로필 사진
  const handleProfileImgEdit = () => {
    setProfileImgEdit(!profileImgEdit);
    setUserNameEdit(false);
    setEmailEdit(false);
    setPasswordEdit(false);
    setPhoneEdit(false);
  };

  // 이름
  const handleUserNameEdit = () => {
    setProfileImgEdit(false);
    setUserNameEdit(!userNameEdit);
    setEmailEdit(false);
    setPasswordEdit(false);
    setPhoneEdit(false);
  };

  // 이메일
  const handleEmailEdit = () => {
    setProfileImgEdit(false);
    setUserNameEdit(false);
    setEmailEdit(!emailEdit);
    setPasswordEdit(false);
    setPhoneEdit(false);
  };

  // 비밀번호
  const handlePasswordEdit = () => {
    setProfileImgEdit(false);
    setUserNameEdit(false);
    setEmailEdit(false);
    setPasswordEdit(!passwordEdit);
    setPhoneEdit(false);
  };

  // 전화번호
  const handlePhoneEdit = () => {
    setProfileImgEdit(false);
    setUserNameEdit(false);
    setEmailEdit(false);
    setPasswordEdit(false);
    setPhoneEdit(!phoneEdit);
  };

  const onBlurUserName = () => {
    setUserName(userName);
    console.log("userName : ", userName);
  };

  const onBlurEmail = () => {
    setEmail(email);
    console.log("email : ", email);
  };

  const onBlurPassword = () => {
    setPassword(password);
    console.log("password : ", password);
  };

  const onBlurPhone = () => {
    setPhone(phone);
    console.log("phone : ", phone);
  };

  // Base64 데이터 URL을 Blob으로 변환
  const convertDataURLToFile = async (dataURL, fileName) => {
    const response = await axios.get(dataURL, {
      responseType: "blob",
    });
    const blob = response.data;

    // Blob을 File 객체로 변환
    const profileImgFile = new File([blob], fileName, { type: blob.type });

    return profileImgFile;
  };

  // 저장 버튼을 눌렸을 때
  const onClickEditSubmit = async () => {
    console.log("개인정보 수정 버튼 누름");

    // 페이지가 클라이언트에 마운트 될 때까지 기다림
    // window 객체가 참조되지 않을 경우, undefined를 반환함
    if (typeof window !== "undefined") {
      const acToken = localStorage.getItem("acToken");
      const reToken = localStorage.getItem("reToken");

      // if (acToken && reToken) {
      // API 요청을 보내기 위한 데이터 준비
      const formData = new FormData();
      formData.append(
        // 서버측과 정한 FormData 객체에 데이터를 추가하는 데 사용되는 키(key) : stay
        "stay",
        new Blob(
          [
            JSON.stringify({
              userName,
              email,
              password,
              phone,
            }),
          ],
          { type: "application/json" }
        )
      );

      if (profileImg) {
        console.log("파일 객체로 변환 전 이미지", profileImg);
        const profileImgFile = await convertDataURLToFile(
          profileImg,
          `profileImg`
        );
        formData.append("image", profileImgFile);
        console.log("파일 객체로 변환 후 이미지", profileImgFile);
      }

      console.log("저장 버튼 누름");
      console.log("profileImg : ", profileImg);
      console.log("userName : ", userName);
      console.log("email : ", email);
      console.log("password : ", password);
      console.log("phone : ", phone);

      try {
        // 서버 api 호출
        const response = await axios.patch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("acToken"),
              "Content-Type": "multipart/form-data",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );

        console.log("edit response", response);

        // 열린 칸 전부 닫기
        setProfileImgEdit(false);
        setUserNameEdit(false);
        setEmailEdit(false);
        setPasswordEdit(false);
        setPhoneEdit(false);

        // 저장 한 후 다시 유저데이터 불러와야함!
        getUserData();
      } catch (error) {
        console.log(error);
        alert("회원정보 변경을 실패하였습니다.");
      }
      // }
      // else {
      //   alert("로그인 상태가 아닙니다.");
      // }
    }
  };

  // 특정 유저 데이터 가져오기
  const getUserData = async () => {
    if (typeof window !== "undefined") {
      const acToken = localStorage.getItem("acToken");
      const reToken = localStorage.getItem("reToken");

      if (acToken && reToken) {
        try {
          const userResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
            null,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("acToken"),
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "69420",
              },
            }
          );
          // 만약 authToken이 만료된 경우
          // refreshToken으로 갱신하고, 다시 api 호출한다.
          // 401번으로 거절 되는 것 같다.

          // 토큰이 만료되지 않고, 정상적으로 응답을 받아온 경우
          // '프로필 사진, 성함, 이메일, 전화번호' 데이터를
          // 각 useState의 초기값으로 입력한다.
          console.log("userResponse", userResponse);
        } catch (err) {
          console.log(err);
          alert("유저 정보를 가져오는데 실패했습니다.");
        }
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // 나중에 유저의 이름과 이메일 전화번호 등을 받아서 넣기
  return (
    <>
      <Title
        text={
          "에어비앤비: 휴가용 임대 숙소, 통나무집, 비치 하우스, 독특한 숙소 및 체험"
        }
      />
      <Header fixed />
      <main className="bnb_md_xl:mt-[80px] flex flex-row w-full min-h-screen">
        <div className="w-[1048px] px-[24px] mx-auto bnb_sm:mt-[100px]">
          <AccountItemTitle title_route={"개인정보"} title_h2={"개인정보"} />
          <div className="flex flex-row justify-between">
            {/* 왼쪽 개인정보 변경 부분 */}
            <article className="bnb_xl:w-[596px] bnb_md_lg:w-[58%] bnb_sm:w-full">
              {/* 프로필 사진 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>
                    <div className="mb-3">프로필 사진</div>
                  </div>
                  <button
                    type="button"
                    onClick={handleProfileImgEdit}
                    className="text-[14px] font-semibold underline"
                  >
                    {profileImgEdit ? "취소" : "수정"}
                  </button>
                </div>

                {profileImgEdit && (
                  <form onSubmit={(event) => event.preventDefault()}>
                    <ProfileImage
                      profileImg={profileImg}
                      setProfileImg={setProfileImg}
                    />
                    <div className="mt-3">
                      <BlackBtn
                        type={"submit"}
                        onClick={onClickEditSubmit}
                        text={"저장"}
                      />
                    </div>
                  </form>
                )}
              </section>

              {/* 이름 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>이름</div>
                  <button
                    type="button"
                    onClick={handleUserNameEdit}
                    className="text-[14px] font-semibold underline"
                  >
                    {userNameEdit ? "취소" : "수정"}
                  </button>
                </div>
                <div className="text-gray-600 text-[14px] mt-[4px]">
                  {userNameEdit
                    ? "허가증이나 여권 등 여행 서류에 기재되어 있는 이름을 말합니다."
                    : userName.slice(0, 1) + "﹡" + userName.slice(2)}
                </div>

                {userNameEdit && (
                  <form onSubmit={(event) => event.preventDefault()}>
                    <div className="flex flex-row justify-between gap-[20px] my-[20px]">
                      <input
                        required
                        type="text"
                        onBlur={onBlurUserName}
                        onChange={(event) => setUserName(event.target.value)}
                        placeholder="Name"
                        className="border-[1px] border-solid border-[#cccccc] w-full rounded-md px-4 py-3 placeholder:text-gray-600"
                      ></input>
                    </div>
                    <BlackBtn
                      type={"submit"}
                      onClick={onClickEditSubmit}
                      text={"저장"}
                    />
                  </form>
                )}
              </section>

              {/* 이메일 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>이메일</div>

                  <button
                    type="button"
                    onClick={handleEmailEdit}
                    className="text-[14px] font-semibold underline"
                  >
                    {emailEdit ? "취소" : "수정"}
                  </button>
                </div>
                <div className="text-gray-600 text-[14px] mt-[4px]">
                  {emailEdit
                    ? "언제든지 확인하실 수 있는 주소를 사용하세요"
                    : email}
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
                        className="border-[1px] border-solid border-[#cccccc] w-full rounded-md px-4 py-3 placeholder:text-gray-600"
                      ></input>
                    </div>
                    <BlackBtn
                      type={"submit"}
                      onClick={onClickEditSubmit}
                      text={"저장"}
                    />
                  </form>
                )}
              </section>

              {/* 비밀번호 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>비밀번호</div>
                  <button
                    type="button"
                    onClick={handlePasswordEdit}
                    className="text-[14px] font-semibold underline"
                  >
                    {passwordEdit ? "취소" : "수정"}
                  </button>
                </div>
                <div className="text-gray-600 text-[14px] mt-[4px]">
                  {passwordEdit
                    ? "변경하실 비밀번호를 입력해주세요"
                    : "﹡".repeat(password.length)}
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
                        className="border-[1px] border-solid border-[#cccccc] w-full rounded-md px-4 py-3 placeholder:text-gray-600"
                      ></input>
                    </div>
                    <BlackBtn
                      type={"submit"}
                      onClick={onClickEditSubmit}
                      text={"저장"}
                    />
                  </form>
                )}
              </section>

              {/* 전화번호 */}
              <section className="py-[24px] border-b-[1px]">
                <div className="flex flex-row justify-between items-start ">
                  <div>전화번호</div>
                  <button
                    type="button"
                    onClick={handlePhoneEdit}
                    className="text-[14px] font-semibold underline"
                  >
                    {phoneEdit ? "취소" : "수정"}
                  </button>
                </div>
                <div className="text-gray-600 text-[14px] mt-[4px]">
                  {phoneEdit
                    ? "자주 사용하시는 전화번호를 입력해주세요"
                    : phone.length === 11
                    ? phone.slice(0, 3) + "﹡".repeat(4) + phone.slice(7)
                    : phone.slice(0, 3) + "﹡".repeat(3) + phone.slice(6)}
                </div>

                {phoneEdit && (
                  <form onSubmit={(event) => event.preventDefault()}>
                    <div className="flex flex-row justify-between gap-[20px] my-[20px]">
                      <input
                        required
                        type="tel"
                        onBlur={onBlurPhone}
                        // onChange={(event) => setPhone(event.target.value)}
                        placeholder="01012345678"
                        className="border-[1px] border-solid border-[#cccccc] w-full rounded-md px-4 py-3 placeholder:text-gray-600"
                      ></input>
                    </div>
                    <BlackBtn
                      type={"submit"}
                      onClick={onClickEditSubmit}
                      text={"저장"}
                    />
                  </form>
                )}
              </section>
            </article>

            {/* 오른쪽 상자 부분 */}
            <article className="bnb_sm:hidden bnb_xl:w-[334px] bnb_md_lg:w-[32%] border-[1px] border-solid border-[#DDDDDD] rounded-lg p-[24px] mb-[40px] h-fit">
              <section>
                <FontAwesomeIcon
                  icon={faUserShield}
                  className="text-[36px] text-[#E21C5E]"
                />
                <div className="my-[16px] text-[20px] font-bold">
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
                <div className="my-[16px] text-[20px] font-bold">
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
                <div className="my-[16px] text-[20px] font-bold">
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
