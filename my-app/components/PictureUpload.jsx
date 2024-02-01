export default function PictureUpload({ picture, onChangePicture }) {
  return (
    <label
      onChange={onChangePicture}
      className="w-full cursor-pointer text-gray-600 hover:border-[var(--brand-color)] hover:text-[var(--brand-color)] flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md mt-2"
    >
      {picture ? (
        <img src={picture}></img>
      ) : (
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
      )}
      <input className="hidden" type="file" accept="image/*" />
    </label>
  );
}

// 추가해야 할 기능
// 사진 미리보기
// 새로 이미지 등록 시 기존의 이미지 삭제하고, 새로 등록한 이미지만 등록되도록 하기
// 여러장 등록하기
