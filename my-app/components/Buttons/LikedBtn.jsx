import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function LikedBtn() {
  const [liked, setLiked] = useState(false);

  // 좋아요 버튼 누르면 위시리스트에 저장되도록 구현하기
  const onClickLiked = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={onClickLiked} className="text-xl cursor-pointer">
      {liked ? (
        <FontAwesomeIcon icon={faHeart} style={{ color: "#FE375C" }} />
      ) : (
        <FontAwesomeIcon icon={faHeart} style={{ color: "#6E7170" }} />
      )}
    </div>
  );
}
