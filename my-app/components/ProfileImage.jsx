import DeleteBtn from "./Buttons/DeleteBtn";

export default function ProfileImage({ profileImg, setProfileImg }) {
  // 프로필 이미지 핸들러
  const handleProfileImage = async (event) => {
    // 하나의 이미지만 등록
    const file = event.target.files[0];

    // 파일을 선택하지 않은 경우
    if (!file) {
      return;
    } else {
      // 파일을 선택했다면 기존 값 초기화 시키기
      setProfileImg("");

      // 이미지 화면에 보여주기
      const reader = new FileReader();
      reader.onload = (event) => {
        if (reader.readyState === 2) {
          // 파일 onload가 성공 2, 진행 중 1, 실패 0 을 반환
          const imgUrl = event.target.result;
          setProfileImg(imgUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 프로필 이미지 삭제
  const deleteImage = () => {
    // 기본 이미지인 경우
    if (profileImg === "/profile_basic_img.png") {
      return;
    }
    // 등록한 이미지가 있는 경우
    else {
      // 기본 이미지로 변경하기
      setProfileImg("/profile_basic_img.png");
    }
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
