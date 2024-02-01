import axios from "axios";
import { useEffect } from "react";
import HostingNoItem from "./HostingNoItem";

// 나중에 데이터 불러오면 props로 데이터 옮기기
// 링크(id 알면 될듯?), 지역, 가격, 사진, 기간, 예약자 이름, 총 인원 등...

// item당 나타내는 ui 변경하기 (임시로 wishlist 붙여넣음)
// -> 예약자 외 몇명 (총 몇명), 기간(1월 25일 ~ 30일), 비용(₩123131/박), 지역(한국 양평군), 사진
// 가져오는 데이터가 없으면 없다고 표시해주기 (HostingNoItem 컴포넌트 사용)

// hosting 페이지에서 예약의 '호스팅 예약 중' 버튼이 활성화 된 경우, 보여주는 아이템
export default function HostingReservationItem() {
  // 호스팅 예정 데이터
  const getDataHostingReservation = async () => {
    try {
      const ReservationData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/example/api`,
        {
          headers: {
            // Authorization : "Bearer " + localStorage.getItem("Authorization"),
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );
      console.log(ReservationData);
    } catch (err) {
      console.log(err);
    }
  };

  return <HostingNoItem text={"현재 예정된 게스트가 없습니다."} />;
}

// 데이터 불러온 뒤, 그 데이터를 어떻게 보여줄지 생각해봐야할 듯
