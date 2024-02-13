import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function LikedBtn() {
  const [liked, setLiked] = useState(false);

  const onClickLiked = () => {
    setLiked(!liked);
  };

  return (
    <div onClick={onClickLiked} className="text-xl cursor-pointer px-2 py-1">
      {liked ? (
        <FontAwesomeIcon icon={faHeart} style={{ color: "#FE375C" }} />
      ) : (
        <FontAwesomeIcon icon={faHeart} style={{ color: "#6E7170" }} />
      )}
    </div>
  );
}
