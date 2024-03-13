import DeleteBtn from "./Buttons/DeleteBtn";
import HostingRegisterItemTitle from "./Hosting/registerPage/HostingRegisterItemTitle";

// 숙소 등록 페이지에서 사진 미리보기 및 삭제 기능
export default function ImagesPreview({ images, setImages }) {
  // const [images, setImages] = useState([]);

  // 이미지 선택
  const handleImage = async (event) => {
    const files = event.target.files;
    const imgUrls = [];
    console.log("files 1", files);
    console.log("images", images);

    // 파일을 선택하지 않은 경우
    if (files.length === 0) {
      return;
    } else {
      // 파일을 선택했다면 기존 값 초기화 시키기
      setImages([]);

      // 반복문을 통해 선택한 file 하나씩 Blob 객체로 변환하기
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (event) => {
          // 파일 onload가 성공 2, 진행 중 1, 실패 0 을 반환
          if (reader.readyState === 2) {
            const imgUrl = event.target.result;
            imgUrls.push(imgUrl);

            // 모든 파일을 처리한 경우
            if (imgUrls.length === files.length) {
              setImages(imgUrls);
            }
          }
        };
        // Blob 객체로 변환하여 읽기
        reader.readAsDataURL(file);
        console.log("imgUrls", imgUrls);
      }
    }
  };

  // 이미지 삭제
  const deleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    console.log("삭제된 후 images", images);
  };

  return (
    <div>
      <label
        htmlFor="img"
        className="w-full cursor-pointer text-gray-600 hover:border-[var(--brand-color)] hover:text-[var(--brand-color)] flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md"
      >
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
          id="img"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleImage}
          multiple
        />
      </label>

      {images.length !== 0 ? (
        <div className="mt-4 w-full">
          <HostingRegisterItemTitle text={"사진 미리보기"} mb />
          <div className="flex flex-row gap-x-4 overflow-x-scroll scrollbar-hide">
            {images.map((el, index) => (
              <div key={index} className="relative flex-shrink-0 ">
                <img src={el} className="w-[100px] aspect-square rounded-lg" />

                <div className="absolute top-1 left-1">
                  <DeleteBtn onClick={() => deleteImage(index)} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
