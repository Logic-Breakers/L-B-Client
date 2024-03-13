import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import DeleteBtn from "./Buttons/DeleteBtn";

// 복붙만 해놓은 상태이므로 나중에 프로필 이미지 변경할 때 코드 변경할 것!!
export default function ProfileImageUpload() {
  // 초기값을 기본 이미지로 저장할 것
  const [image, setImage] = useState("/profile_basic_img.png");

  // 이미지 미리보기와 삭제 등을 하기 위해
  // 이미지만을 따로 등록하는 기능을 만들어야한다.

  // 프로필 이미지 핸들러
  const handleImage = async (event) => {
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
    // 기본 이미지로 변경하기
    setImage("");
  };

  // 이미지 길이가 0 이면 기본이미지, 아니면 등록된 이미지를 보여주기
  return (
    <div>
      {/* <img src={"/public/profile_basic_img.png"} /> */}
      {image ? (
        <img
          className="w-[200px] aspect-square rounded-full bg-gray-200"
          src={image}
        ></img>
      ) : (
        <div>dd</div>
      )}

      {/* <div className="my-6 ml-4 w-[220px] aspect-square rounded-full bg-gray-200">
        <DeleteBtn onClick={deleteImage} />
      </div>
      <input
        id="img"
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handleImage}
      /> */}
    </div>
  );
}
