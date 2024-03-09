import DaumPostCode from "react-daum-postcode";
import { useState } from "react";

export default function Address() {
  const [addrNum, setAddrNum] = useState("우편번호");
  const [addr, setAddr] = useState("주소");

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    // addressType : R(도로명 주소), N(지번 주소)
    // bname : 동 이름
    // buildingName :
    // address : 주소
    // zonecode : 우편번호
    const { addressType, bname, buildingName } = data;
    console.log("data", data);
    console.log("data.address", data.address);
    console.log("data.zonecode", data.zonecode);

    if (addressType === "R") {
      if (bname !== "") {
        extraAddress += bname;
      }
      if (buildingName !== "") {
        extraAddress += `${extraAddress !== "" && ", "}${buildingName}`;
      }
      fullAddress += `${extraAddress !== "" ? ` ${extraAddress}` : ""}`;
    }
    //fullAddress -> 전체 주소반환
  };
  return (
    <div>
      <div className="flex flex-row space-x-4 mb-3">
        <div className="flex flex-row justify-center items-center border-[1px] border-solid border-[#cccccc] rounded-md w-[100px] h-[55px] text-gray-600 pointer-events-none">
          {addrNum}
        </div>
        <button
          onClick={openModal}
          type="button"
          className="bg-gray-300 rounded-md w-fit h-[55px] px-4 py-2 hover:bg-gray-400 active:bg-gray-300"
        >
          주소 찾기
        </button>
        {showModal && (
          <DaumPostCode
            onComplete={handleComplete}
            className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bnb_md_xl:max-w-[600px] bnb_sm:max-w-[85%] z-[1000]"
          />
        )}
      </div>
      <div className="flex flex-row items-center border-[1px] border-solid border-[#cccccc] rounded-md w-full h-[55px] px-4 text-gray-600">
        {addr}
      </div>

      {/* 모달 밖 (어두운 배경) */}
      {showModal && (
        <div
          onClick={closeModal}
          className="fixed top-0 left-0 w-full h-full z-[101] bg-[var(--modal-outside-bg)]"
        ></div>
      )}
    </div>
  );
}
