import DeleteBtn from "./Buttons/DeleteBtn";

export default function ProfileImage({ profileImg, setProfileImg }) {
  // 프로필 이미지 핸들러
  const handleProfileImage = async (event) => {
    // 하나의 이미지만 선택
    const file = event.target.files[0];

    // File을 선택하지 않은 경우
    if (!file) {
      return;
    } else {
      // File을 선택했다면 기존 값 초기화 시키기
      setProfileImg("");

      const reader = new FileReader();

      // file을 Base64 Data URL로 변환
      // 아래 작업은 console.log를 했을 때 비동기 작업이 완료되지 않아 undefined로 나타난다.
      reader.readAsDataURL(file);

      // 이미지 화면에 보여주기
      // 변환된 Base64 Data URL의 onload가 완료된 후 실행
      reader.onload = (event) => {
        // 변환된 Base64 Data URL의 onload가 완료 2, 진행 중 1, 실패 0 을 반환한다.
        if (reader.readyState === 2) {
          const imgUrl = event.target.result;
          // 상태 업데이트
          setProfileImg(imgUrl);
        }
      };
    }
  };

  // 프로필 이미지 삭제 (= 기본 이미지로 변경)
  const deleteImage = () => {
    setProfileImg("/profile_basic_img.png");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative">
        <img
          className="relative w-[200px] aspect-square rounded-full border-[1px] cursor-pointer"
          src={profileImg}
          alt="프로필 이미지"
          onClick={() => {
            document.querySelector("#img").click();
          }}
        />
        <div className="absolute top-0 right-0">
          <DeleteBtn onClick={deleteImage} />
        </div>
      </div>

      <input
        id="img"
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handleProfileImage}
      />
    </div>
  );
}
