import SeeMoreBtn from "../Buttons/SeeMoreBtn";

export default function RoomsReviewItem() {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center space-x-[14px]">
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
        <div>
          <div className="text-lg font-semibold">userName</div>
          <div className="text-gray-500">한국</div>
        </div>
      </div>
      <div className="mt-3 mb-1 space-x-1">
        <span className="text-sm">★★★★☆</span>
        <span>∙</span>
        <span className="font-semibold">2024년 1월</span>
      </div>
      <div>
        즐겁게 이용하고 갑니다. 가족들과 편하게 이용했어요. 제가 이용한
        에어비앤비 중에서 단연 최고였습니다. 다시 또 이용할 것 같아요. 호스트도
        엄청 친절하였고, ...
      </div>
      <SeeMoreBtn text={"더 보기"} mt={"2"} />
    </div>
  );
}
