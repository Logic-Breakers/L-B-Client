import axios from "axios";
import { useState } from "react";

import DeleteBtn from "./Buttons/DeleteBtn";

// 복붙만 해놓은 상태이므로 나중에 프로필 이미지 변경할 때 코드 변경할 것!!
export default function ProfileImageUpload() {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  // 이미지 미리보기와 삭제 등을 하기 위해
  // 이미지만을 따로 등록하는 기능을 만들어야한다.

  // 이미지 등록
  const handleImage = async (event) => {
    const file = event.target.files;
    console.log("event", event);
    console.log("file", file);
    if (!file) {
      return;
    } else {
      // 이미지 화면에 보여주기
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        console.log("reader.readyState", reader.readyState);
        if (reader.readyState === 2) {
          // 파일 onload가 성공 2, 진행 중 1, 실패 0 을 반환
          setImages(event.target.result);
          console.log("event.target.result", event.target.result);
        }
      };

      // API 요청을 보내기 위한 데이터 준비
      const formData = new FormData();
      formData.append("image", file);

      try {
        // 서버 API 호출
        // multipart/form-data로 보낸다.
        // -> 이미지 파일은 크기가 크기 때문에 부분으로 나눠서 보낸다.
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/example/image`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        // 정상적을 이미지가 등록된 경우
        // 반환되는 데이터 확인
        console.log(response);

        // 반환되는 데이터를 images와 previews에 저장한다.
        setImages(response);
        setPreviews(response);
      } catch (error) {
        alert("이미지 등록을 실패했습니다.");
        console.log("이미지 등록 에러", error);
      }
    }
  };

  const deleteImage = (index) => {
    console.log("이미지 삭제 버튼 누름");
    console.log(index);

    // 서버에 이미지 저장 요청을 보낸 후
    // 해당 이미지 목록에서 삭제 버튼을 누른 이미지만 삭제 시킨다.

    const newImages = [...images];
    const newPreviews = [...previews];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setImages(newImages);
    setPreviews(newPreviews);
  };

  return (
    <div>
      <label className="w-full cursor-pointer text-gray-600 hover:border-[var(--brand-color)] hover:text-[var(--brand-color)] flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
        <svg
          className="h-12 w-12"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleImage}
        />
      </label>
      {/* 나중에 조건 변경해야 됌 / 현재는 등록한 내용을 볼 수 없어서 등록한 이미지가 없는 경우로 조건을 해두었음 */}
      {/* images.length !== 0 */}
      {/* 이미지를 불러와서 보여주면 됌 */}
      {images.length === 0 ? (
        <div className="mt-4 w-full flex flex-row gap-x-4 overflow-x-scroll scrollbar-hide">
          {[1, 1, 1, 1, 1, 1, 1, 1].map((el, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[100px] aspect-square bg-gray-200 rounded-lg "
            >
              <div className="absolute top-1 left-1">
                <DeleteBtn onClick={() => deleteImage(index)} />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

// 추가해야 할 기능
// 사진 미리보기
// 새로 이미지 등록 시 기존의 이미지 삭제하고, 새로 등록한 이미지만 등록되도록 하기
// 여러장 등록하기
