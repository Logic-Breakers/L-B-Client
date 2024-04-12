import DeleteBtn from "./Buttons/DeleteBtn";
import HostingRegisterItemTitle from "./Hosting/registerPage/HostingRegisterItemTitle";

// 숙소 등록 페이지에서 사진 미리보기 및 삭제 기능
export default function HouseImages({ houseImages, setHouseImages }) {
  // const [houseImages, setHouseImages] = useState([]);

  // 이미지 선택
  const handleHouseImages = async (event) => {
    // File 전체
    const files = event.target.files;
    const imgUrls = [];

    // File을 선택하지 않은 경우
    if (files.length === 0) {
      return;
    } else {
      // File을 선택했다면 기존 값 초기화 시키기
      setHouseImages([]);

      // 여러 개의 File을 한 번에 Base64 Data URL 변환시킬 수 없기 때문에,
      // for문을 통해서 작업한다.
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        // file을 Base64 Data URL로 변환
        // 아래 작업은 console.log를 했을 때 비동기 작업이 완료되지 않아 undefined로 나타난다.
        reader.readAsDataURL(file);

        // 변환된 Base64 Data URL의 onload가 완료된 후 실행
        reader.onload = (event) => {
          // 변환된 Base64 Data URL의 onload가 완료 2, 진행 중 1, 실패 0 을 반환한다.
          if (reader.readyState === 2) {
            const imgUrl = event.target.result;
            imgUrls.push(imgUrl);

            // 모든 파일을 처리한 경우, 상태 업데이트
            if (imgUrls.length === files.length) {
              setHouseImages(imgUrls);
            }
          }
        };

        console.log("imgUrls", imgUrls);
        console.log("file", file);
      }
    }
  };

  // 이미지 삭제
  const deleteImage = (index) => {
    // = ['imageURL1', 'imageURL2', 'imageURL3', ... ]
    const newHouseImages = [...houseImages];

    // 선택한 index의 이미지부터 하나만 선택된다. (filter를 사용해도 된다.)
    newHouseImages.splice(index, 1);

    // 만약 index가 1이면 -> ['imageURL1', 'imageURL3', ... ]
    setHouseImages(newHouseImages);
  };

  return (
    <div>
      <label
        htmlFor="img"
        className="w-full py-6 cursor-pointer text-gray-600 hover:border-[var(--brand-color)] hover:text-[var(--brand-color)] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg"
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
          required
          id="img"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleHouseImages}
          multiple
        />
      </label>

      {houseImages.length !== 0 ? (
        <div className="mt-8 w-full">
          <HostingRegisterItemTitle text={"사진 미리보기"} mb />
          <div className="flex flex-row gap-x-4 overflow-x-scroll scrollbar-hide">
            {houseImages.map((el, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 border-gray-300 border-[1px] rounded-lg"
              >
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
