import DeleteBtn from "./Buttons/DeleteBtn";

export default function ProfileImageUpload({ image, setImage }) {
  // 프로필 이미지 핸들러
  const handleProfileImage = async (event) => {
    // 하나의 이미지만 등록
    const file = event.target.files[0];

    // 파일을 선택하지 않은 경우
    if (!file) {
      return;
    } else {
      // 파일을 선택했다면 기존 값 초기화 시키기
      setImage("");

      // 이미지 화면에 보여주기
      const reader = new FileReader();
      reader.onload = (event) => {
        if (reader.readyState === 2) {
          // 파일 onload가 성공 2, 진행 중 1, 실패 0 을 반환
          const imgUrl = event.target.result;
          setImage(imgUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 프로필 이미지 삭제
  const deleteImage = () => {
    // 기본 이미지인 경우
    if (image === "/profile_basic_img.png") {
      return;
    }
    // 등록한 이미지가 있는 경우
    else {
      // 기본 이미지로 변경하기
      setImage("/profile_basic_img.png");
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 left-[180px]">
          <DeleteBtn onClick={deleteImage} />
        </div>
        <img
          className="w-[200px] aspect-square rounded-full border-[1px] cursor-pointer"
          src={image}
          alt="프로필 이미지"
          onClick={() => {
            document.querySelector("#img").click();
          }}
        ></img>
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
